import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaSchool, FaUser } from 'react-icons/fa';
import { AuthContext } from '../AuthContext';

const roles = {
  alumnilist: { name: 'Alumni', icon: <FaUserGraduate /> },
  colleges: { name: 'College', icon: <FaSchool /> },
  students: { name: 'Student', icon: <FaUser /> },
};

const Login = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
    role: 'alumnilist', // Default role
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRoleChange = (role) => {
    setFormData({ ...formData, role });
    setError(''); // Clear error on role change
  };

  // Simple validation for email or phone
  const validateForm = () => {
    if (!formData.emailOrPhone.match(/^\S+@\S+\.\S+$/) && !formData.emailOrPhone.match(/^[0-9]+$/)) {
      setError('Please enter a valid email or phone number.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
    const API_URL = process.env.REACT_APP_API_URL;
  
    try {
      const response = await fetch(`https://alumniback-np0b.onrender.com/login-${formData.role}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailOrPhone: formData.emailOrPhone,
          password: formData.password,
        }),
      });
  
      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          alert('Login successful!');
  
          // Extract userId based on role
          let userId;
          if (formData.role === 'alumnilist') {
            userId = data.alumni._id;
          } else if (formData.role === 'colleges') {
            userId = data.college._id;
          } else if (formData.role === 'students') {
            userId = data.student._id;
          }
  
          if (userId) {
            // Call the login function from AuthContext with role and userId
            login(formData.role, userId);
            localStorage.setItem('userData', JSON.stringify(data));
            navigate('/');
          } else {
            setError('Invalid user data received from server.');
          }
        } else {
          const errorText = await response.text();
          console.error('Non-JSON response:', errorText);
          setError(`Unexpected response: ${errorText}`);
        }
      } else {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        setError(`Error: ${errorText}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };
  

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 border border-[#8c8c8c] rounded-lg shadow-lg">
        <h2 className="text-[#326C85] text-2xl font-bold text-center mb-6">Login</h2>

        {/* Role Toggle */}
        <div className="flex justify-around mb-6">
          {Object.keys(roles).map((key) => (
            <button
              key={key}
              onClick={() => handleRoleChange(key)}
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
                formData.role === key ? 'bg-[#326C85] text-white shadow-lg transform scale-105' : 'bg-[#f0f4f8] text-[#326C85]'
              } hover:scale-105`}
            >
              {roles[key].icon}
              <span className="ml-2">{roles[key].name}</span>
            </button>
          ))}
        </div>

        {/* Error message */}
        {error && <div className="text-red-500 mb-4">{error}</div>}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email or Phone</label>
            <input
              type="text"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-[#8c8c8c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#326C85] transition duration-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-[#8c8c8c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#326C85] transition duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#326C85] text-white py-2 px-4 rounded-lg hover:bg-[#1e5f74] focus:outline-none focus:ring-2 focus:ring-[#1e5f74] transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Forgot Password Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={handleForgotPassword}
            className="text-[#326C85] hover:underline focus:outline-none transition duration-300"
          >
            Forgot Password?
          </button>
        </div>

        {/* Register Link */}
        <div className="mt-4 text-center">
          <span className="text-gray-600">Don't have an account?</span>
          <button
            onClick={handleRegister}
            className="ml-2 text-[#326C85] hover:underline focus:outline-none transition duration-300"
          >
            Register Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

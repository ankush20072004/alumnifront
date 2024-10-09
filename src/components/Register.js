import React, { useState } from 'react';
import { FaUserGraduate, FaSchool, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const roles = {
  alumnilist: { name: 'Alumni', icon: <FaUserGraduate /> },
  colleges: { name: 'College', icon: <FaSchool /> },
  students: { name: 'Student', icon: <FaUser /> },
};

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'alumnilist', // Default role
  });

  const navigate = useNavigate(); // Create navigate function

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    //const API_URL = process.env.REACT_APP_API_URL;
    const endpoint = `https://alumniback-np0b.onrender.com/register/${formData.role}`;
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      alert('Registration successful!'); // Alert on successful registration
      console.log('Registration successful:', result);
      // Reset the form
      setFormData({
        name: '',
        email: '',
        password: '',
        role: 'alumnilist', // Reset to default role
      });

      // Redirect to the login page after successful registration
      navigate('/signin');
    } catch (error) {
      alert('Registration failed. Please try again.'); // Alert on registration failure
      console.error('Registration error:', error);
    }
  };

  // Handle role change
  const handleRoleChange = (role) => {
    setFormData({ ...formData, role });
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 border border-[#8c8c8c] rounded-lg shadow-lg">
        <h2 className="text-[#326C85] text-2xl font-bold text-center mb-6">Register</h2>

        {/* Role Toggle */}
        <div className="flex justify-around mb-6">
          {Object.keys(roles).map((key) => (
            <button
              key={key}
              onClick={() => handleRoleChange(key)}
              className={`flex items-center px-4 py-2 rounded-lg transition duration-300 ease-in-out ${
                formData.role === key ? 'bg-[#326C85] text-white' : 'bg-[#f0f4f8] text-[#326C85]'
              }`}
            >
              {roles[key].icon}
              <span className="ml-2">{roles[key].name}</span>
            </button>
          ))}
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-[#8c8c8c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#326C85] transition duration-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

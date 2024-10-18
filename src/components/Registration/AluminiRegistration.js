import React, { useState, useContext } from "react";
import { AuthContext } from "../../AuthContext"; // Import AuthContext
import bg from "../../assets/Image6.png";
import img from "../../assets/Image7.png";

const AluminiRegistration = () => {
  const { userId } = useContext(AuthContext); // Use userId from AuthContext

  const currentYear = new Date().getFullYear();
  const startYear = 1990;
  const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    collegeName: '',
    branch: '',
    batch: '',
    currentCompany: '',
    position: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    collegeName: '',
    branch: '',
    batch: '',
    currentCompany: '',
    position: '',
    termsAccepted: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = { firstName: '', lastName: '', collegeName: '', branch: '', batch: '', currentCompany: '', position: '', termsAccepted: '' };

    if (!formData.firstName) {
      formIsValid = false;
      newErrors.firstName = 'First Name is required';
    }
    if (!formData.lastName) {
      formIsValid = false;
      newErrors.lastName = 'Last Name is required';
    }
    if (!formData.collegeName) {
      formIsValid = false;
      newErrors.collegeName = 'College Name is required';
    }
    if (!formData.branch) {
      formIsValid = false;
      newErrors.branch = 'Branch is required';
    }
    if (!formData.batch) {
      formIsValid = false;
      newErrors.batch = 'Batch is required';
    }
    if (!formData.currentCompany) {
      formIsValid = false;
      newErrors.currentCompany = 'Current Company is required';
    }
    if (!formData.position) {
      formIsValid = false;
      newErrors.position = 'Position is required';
    }
    if (!formData.termsAccepted) {
      formIsValid = false;
      newErrors.termsAccepted = 'You must accept the Terms & Conditions';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('User ID:', userId); // Debugging step
  
      if (!userId) {
        console.error('User ID is null. Redirecting to login.');
        // Handle the error, redirect to login, or show an error message
        return;
      }
  
      try {
        const response = await fetch(`https://alumniback-np0b.onrender.com/update/alumni/${userId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Something went wrong');
        }
  
        const data = await response.json();
        console.log('Profile updated successfully:', data);
        // Handle successful profile update here (e.g., navigate to another page or show success message)
      } catch (error) {
        console.error('Error updating profile:', error.message);
      }
    }
  };
  
  return (
    <div
      className="min-h-screen min-w-screen bg-cover bg-no-repeat bg-center flex flex-row"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-1/2">
        <div className="h-full">
          <h1 className="text-4xl p-5 ml-1 font-bold text-black">
            Alumni Registration
          </h1>
          <img
            className="ml-6 mt-8 rounded-lg"
            src={img}
            alt="Alumni Registration Image"
          />
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center p-10">
        <div className="w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-start"> Fill Your Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1" htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-1 bg-[#f3f4f6] border rounded"
                />
                {errors.firstName && <div className="text-red-500 text-sm">{errors.firstName}</div>}
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1" htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-1 bg-[#f3f4f6] border rounded"
                />
                {errors.lastName && <div className="text-red-500 text-sm">{errors.lastName}</div>}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="collegeName">College Name</label>
              <select
                id="collegeName"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                className="w-full p-1 bg-[#f3f4f6] border rounded"
              >
                <option value="">Select College</option>
                <option value="College A">College A</option>
                <option value="College B">College B</option>
              </select>
              {errors.collegeName && <div className="text-red-500 text-sm">{errors.collegeName}</div>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="branch">Branch</label>
              <select
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="w-full p-1 bg-[#f3f4f6] border rounded"
              >
                <option value="">Select Branch</option>
                <option value="Branch A">Branch A</option>
                <option value="Branch B">Branch B</option>
              </select>
              {errors.branch && <div className="text-red-500 text-sm">{errors.branch}</div>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="batch">Batch</label>
              <select
                id="batch"
                name="batch"
                value={formData.batch}
                onChange={handleChange}
                className="w-full p-1 bg-[#f3f4f6] border rounded"
              >
                <option value="">Select Batch</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              {errors.batch && <div className="text-red-500 text-sm">{errors.batch}</div>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="currentCompany">Current Company</label>
              <input
                type="text"
                id="currentCompany"
                name="currentCompany"
                value={formData.currentCompany}
                onChange={handleChange}
                className="w-full p-1 bg-[#f3f4f6] border rounded"
              />
              {errors.currentCompany && <div className="text-red-500 text-sm">{errors.currentCompany}</div>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="position">Position</label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full p-1 bg-[#f3f4f6] border rounded"
              />
              {errors.position && <div className="text-red-500 text-sm">{errors.position}</div>}
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="termsAccepted" className="text-sm">
                I have read and accept the <a href="/terms" className="text-blue-500 underline">Terms & Conditions</a>
              </label>
              {errors.termsAccepted && <div className="text-red-500 text-sm">{errors.termsAccepted}</div>}
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AluminiRegistration;

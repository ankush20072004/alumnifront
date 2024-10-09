import React, { useState, useContext } from "react";
import { AuthContext } from "../../AuthContext"; // Import AuthContext

const StudentRegistration = () => {
  const { userId } = useContext(AuthContext); // Use userId from AuthContext

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    currentYear: "",
    branch: "",
    batch: "",
    collegeName: "",
    position: "",
    termsAccepted: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields (example: check if terms are accepted)
    if (!formData.termsAccepted) {
      setError("You must accept the terms and conditions");
      return;
    }

    console.log('User ID:', userId); // Debugging step

    if (!userId) {
      console.error('User ID is null. Redirecting to login.');
      // Handle the error, redirect to login, or show an error message
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/update/student/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      const result = await response.json();
      console.log("Registration successful:", result);

      // Optionally, reset form or navigate to another page
      setFormData({
        firstName: "",
        lastName: "",
        currentYear: "",
        branch: "",
        batch: "",
        collegeName: "",
        position: "",
        termsAccepted: false,
      });
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className="min-h-screen min-w-screen bg-cover bg-no-repeat bg-center flex flex-row"
      style={{ backgroundImage: `url('/RC1.png')` }}
    >
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-start items-start p-10">
        <h1 className="text-4xl font-bold mb-2">Student Registration</h1>
        <p className="text-xl mb-4">Fill in the form to get in touch</p>
        <div className="relative">
          <img
            src="/RC2.png"
            alt="Student Registration Image 1"
            className="rounded-lg mt-8 w-[350px] h-[500px]"
          />
          <img
            src="/RC3.png"
            alt="Student Registration Image 2"
            className="absolute top-1/2 left-[calc(100%+30px)] w-[250px] h-[200px]"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <div className="w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-start">Fill Details</h2>
          <p className="text-md mb-4">Sub-titles goes here</p>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className="w-full p-2 bg-[#f3f4f6] border rounded"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className="w-full p-2 bg-[#f3f4f6] border rounded"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="currentYear">
                Current Year
              </label>
              <input
                type="text"
                id="currentYear"
                value={formData.currentYear}
                onChange={handleChange}
                placeholder="Enter Current Year"
                className="w-full p-2 bg-[#f3f4f6] border rounded"
              />
              <p className="text-xs text-gray-500 mt-1">Caption goes here</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="branch">
                Branch
              </label>
              <input
                type="text"
                id="branch"
                value={formData.branch}
                onChange={handleChange}
                placeholder="Enter Branch"
                className="w-full p-2 bg-[#f3f4f6] border rounded"
              />
            </div>
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1" htmlFor="batch">
                  Batch
                </label>
                <input
                  type="text"
                  id="batch"
                  value={formData.batch}
                  onChange={handleChange}
                  placeholder="Enter Batch"
                  className="w-full p-2 bg-[#f3f4f6] border rounded"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1" htmlFor="collegeName">
                  College Name
                </label>
                <input
                  type="text"
                  id="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  placeholder="Enter College Name"
                  className="w-full p-2 bg-[#f3f4f6] border rounded"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="position">
                Position
              </label>
              <input
                type="text"
                id="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Enter Position"
                className="w-full p-2 bg-[#f3f4f6] border rounded"
              />
            </div>
            <div className="flex items-center mt-4">
              <input
                id="termsAccepted"
                type="checkbox"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="termsAccepted"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                I've read and accept the Terms and Conditions
              </label>
            </div>
            <div className="flex justify-end pt-6 space-x-4">
              <button
                type="button"
                className="w-[90px] py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-[90px] py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;

import React, { useState, useContext } from "react";
import { AuthContext } from "../../AuthContext"; // Import AuthContext

const CollegeRegistration = () => {
  const { userId } = useContext(AuthContext); // Use userId from AuthContext

  const [formData, setFormData] = useState({
    collegeName: '',
    collegeCode: '',
    establishingYear: '',
    collegeDirector: '',
    coursesAvailable: '',
    numOfAlumni: '',
  });

  const [errors, setErrors] = useState({
    collegeName: '',
    collegeCode: '',
    establishingYear: '',
    collegeDirector: '',
    coursesAvailable: '',
    numOfAlumni: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {
      collegeName: '',
      collegeCode: '',
      establishingYear: '',
      collegeDirector: '',
      coursesAvailable: '',
      numOfAlumni: '',
    };

    if (!formData.collegeName) {
      formIsValid = false;
      newErrors.collegeName = 'College Name is required';
    }
    if (!formData.collegeCode) {
      formIsValid = false;
      newErrors.collegeCode = 'College Code is required';
    }
    if (!formData.establishingYear) {
      formIsValid = false;
      newErrors.establishingYear = 'Establishing Year is required';
    }
    if (!formData.collegeDirector) {
      formIsValid = false;
      newErrors.collegeDirector = 'College Director is required';
    }
    if (!formData.coursesAvailable) {
      formIsValid = false;
      newErrors.coursesAvailable = 'Courses Available is required';
    }
    if (!formData.numOfAlumni) {
      formIsValid = false;
      newErrors.numOfAlumni = 'Number of Alumni is required';
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
        const response = await fetch(`http://localhost:5000/update/college/${userId}`, {
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
        console.log('College profile updated successfully:', data);
        // Handle successful profile update here (e.g., navigate to another page or show success message)
      } catch (error) {
        console.error('Error updating college profile:', error.message);
      }
    }
  };

  return (
    <div
      className="min-h-screen min-w-screen bg-cover bg-no-repeat bg-center flex flex-row"
      style={{ backgroundImage: `url('/S1.png')` }}
    >
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-start items-start p-10">
        <h1 className="text-4xl font-bold mb-2">College Registration</h1>
        <p className="text-xl mb-4">Fill in the form to get in touch</p>
        <img
          src="/S2.png"
          alt="College Registration Image"
          className="rounded-lg mt-8 w-[350px] h-[500px]"
        />
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <div className="w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-start">Fill Your Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1" htmlFor="collegeName">
                  College Name
                </label>
                <input
                  type="text"
                  id="collegeName"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  className="w-full p-2 bg-[#f3f4f6] border rounded"
                />
                {errors.collegeName && <div className="text-red-500 text-sm">{errors.collegeName}</div>}
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1" htmlFor="collegeCode">
                  College Code
                </label>
                <input
                  type="text"
                  id="collegeCode"
                  name="collegeCode"
                  value={formData.collegeCode}
                  onChange={handleChange}
                  className="w-full p-2 bg-[#f3f4f6] border rounded"
                />
                {errors.collegeCode && <div className="text-red-500 text-sm">{errors.collegeCode}</div>}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="establishingYear">
                College Establishing Year
              </label>
              <input
                type="text"
                id="establishingYear"
                name="establishingYear"
                value={formData.establishingYear}
                onChange={handleChange}
                className="w-full p-2 bg-[#f3f4f6] border rounded"
              />
              {errors.establishingYear && <div className="text-red-500 text-sm">{errors.establishingYear}</div>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="collegeDirector">
                College Director
              </label>
              <input
                type="text"
                id="collegeDirector"
                name="collegeDirector"
                value={formData.collegeDirector}
                onChange={handleChange}
                className="w-full p-2 bg-[#f3f4f6] border rounded"
              />
              {errors.collegeDirector && <div className="text-red-500 text-sm">{errors.collegeDirector}</div>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="coursesAvailable">
                Courses Available in College
              </label>
              <input
                type="text"
                id="coursesAvailable"
                name="coursesAvailable"
                value={formData.coursesAvailable}
                onChange={handleChange}
                className="w-full p-2 bg-[#f3f4f6] border rounded"
              />
              {errors.coursesAvailable && <div className="text-red-500 text-sm">{errors.coursesAvailable}</div>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="numOfAlumni">
                No. of Alumni
              </label>
              <input
                type="text"
                id="numOfAlumni"
                name="numOfAlumni"
                value={formData.numOfAlumni}
                onChange={handleChange}
                className="w-full p-2 bg-[#f3f4f6] border rounded"
              />
              {errors.numOfAlumni && <div className="text-red-500 text-sm">{errors.numOfAlumni}</div>}
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CollegeRegistration;

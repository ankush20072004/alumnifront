import React, { useState } from 'react';

const AlumniProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-center mt-12 bg-gray-900 text-gray-200 min-h-screen">
      <div className="mb-8">
        <input
          type="file"
          accept="image/*"
          id="profile-picture-upload"
          className="hidden"
          onChange={handlePictureUpload}
        />
        <label htmlFor="profile-picture-upload" className="cursor-pointer">
          {profilePicture ? (
            <img
              src={profilePicture}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover"
            />
          ) : (
            <div className="w-40 h-40 bg-gray-700 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5v-9m4.5 4.5h-9"
                />
              </svg>
              <span className="text-gray-400">Upload</span>
            </div>
          )}
        </label>
      </div>

      <div className="w-full max-w-xs text-left">
        <h2 className="font-semibold mb-4">Personal Information</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Current Position"
            className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Current Company"
            className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Gender"
            className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <button
            type="button"
            className="w-full flex justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25a.75.75 0 00-1.5 0V9H9.75a.75.75 0 000 1.5h4.5V13.5a.75.75 0 001.5 0V10.5h3.75a.75.75 0 000-1.5h-3.75z"
              />
            </svg>
            Upload Profile Picture
          </button>
        </div>
        <div>
          <button
            type="button"
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlumniProfile;

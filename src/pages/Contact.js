import React, { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    profession: '',
    college: '',
    zip: '',
    phone: '',
    email: '',
    message: '', // Added for message input
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.acceptedTerms) {
      alert("Please accept the terms and conditions.");
      return;
    }

    // Prepare the data to match the EmailJS template fields
    const emailParams = {
      to_name: "Support Team", // You can change this as needed
      from_name: `${formData.firstName} ${formData.lastName}`,
      message: formData.message,  // User's message
    };

    emailjs.send('service_4xh10zc', 'template_fkk3au7', emailParams, '_Br2yHLxvgEryxJbi')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.log('FAILED...', error);
        alert("Failed to send message.");
      });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="relative flex-grow">
        <img
          src="./C1.png"
          className="absolute h-[800px] w-full object-cover opacity-30"
          alt="Background"
        />
        <div className="relative flex pt-[80px] pl-[80px]">
          <div className="bg-gray-800 bg-opacity-80 w-[530px] h-[530px] ml-[20px] rounded-lg shadow-lg">
            <div className="h-[340px] pl-[30px] pt-[100px]">
              <div className="font-extrabold mb-[20px] text-2xl font-serif">
                Contact Us
              </div>
              <div className="text-xl font-sans">
                Learn more about My AlumniConnect Website and how we're
                <br />
                connecting alumni, facilitating collaboration, and
                <br />
                building a strong community for our
                <br />
                members.
              </div>
            </div>
            <div className="pl-[30px] mb-[30px] text-xl font-serif">
              Ready to get started? Let's Talk.
            </div>
            <div className="pl-[30px] font-extrabold mb-[30px] font-serif">
              Office Location
            </div>
            <div className="pl-[30px] text-sm font-serif text-gray-300">
              My AlumniConnect Website | Kulgaon Road <br />
              Rooma | Kanpur - 208001, India
            </div>
          </div>

          {/* INPUT BOX */}
          <div className="bg-gray-800 bg-opacity-80 w-[580px] h-[530px] ml-[20px] mr-[80px] rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="pt-[30px] pl-[20px] font-extrabold text-2xl font-serif">
                Contact Us
              </div>

              <div className="flex items-center gap-2 pt-[30px] pl-[20px]">
                <label className="w-[80px] font-sans font-bold">Name</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="pl-[10px] w-[130px] border border-gray-500 rounded-md bg-gray-700 text-white"
                />
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="pl-[10px] w-[130px] border border-gray-500 rounded-md bg-gray-700 text-white"
                />
              </div>

              <div className="flex items-center gap-2 pt-[20px] pl-[20px]">
                <label className="w-[80px] font-sans font-bold">Profession</label>
                <input
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  placeholder="Status"
                  className="pl-[10px] w-[450px] border border-gray-500 rounded-md bg-gray-700 text-white"
                />
              </div>

              <div className="flex items-center gap-2 pt-[20px] pl-[20px]">
                <label className="w-[80px] font-sans font-bold">College</label>
                <input
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Name"
                  className="pl-[10px] w-[180px] border border-gray-500 rounded-md bg-gray-700 text-white"
                />
                <input
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="Zip"
                  className="pl-[10px] w-[80px] border border-gray-500 rounded-md bg-gray-700 text-white"
                />
              </div>

              <div className="flex items-center gap-2 pt-[20px] pl-[20px]">
                <label className="w-[80px] font-sans font-bold">Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="123-456-7890"
                  className="pl-[10px] w-[437px] border border-gray-500 rounded-md bg-gray-700 text-white"
                />
              </div>

              <div className="flex items-center gap-2 pt-[20px] pl-[20px]">
                <label className="w-[80px] font-sans font-bold">Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="pl-[10px] w-[437px] border border-gray-500 rounded-md bg-gray-700 text-white"
                />
              </div>

              {/* Message Input */}
              <div className="flex items-center gap-2 pt-[20px] pl-[20px]">
                <label className="w-[80px] font-sans font-bold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here"
                  className="pl-[10px] w-[437px] h-[80px] border border-gray-500 rounded-md bg-gray-700 text-white"
                />
              </div>

              <div className="flex items-center pt-[20px] pl-[20px]">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  name="acceptedTerms"
                  checked={formData.acceptedTerms}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-500 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-300"
                >
                  Terms and Conditions
                </label>
              </div>

              <div className="flex justify-center pt-[30px]">
                <div className="w-[90px] h-[36px] m-[6px] bg-slate-700 text-sm font-serif rounded-lg">
                  <button type="button" className="ml-[15px] mt-[10px] text-gray-300">
                    Go Back
                  </button>
                </div>
                <div className="w-[90px] h-[36px] m-[6px] bg-green-600 text-sm font-serif rounded-lg">
                  <button type="submit" className="ml-[20px] mt-[10px] text-white">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="h-28"></div>
    </div>
  );
};

export default Contact;

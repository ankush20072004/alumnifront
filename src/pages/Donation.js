import React, { useState } from 'react';
import imbg2 from '../assets/donation/paymethod.png'; // Second image path

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donorName, setDonorName] = useState('');

  const handleDonateNow = () => {
    if (donationAmount && donorName) {
      alert(`Donation Confirmed!\nName: ${donorName}\nAmount: $${donationAmount}`);
    } else {
      alert('Please enter your name and donation amount.');
    }
  };

  const handleAmountClick = (amount) => {
    setDonationAmount(amount);
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setDonationAmount(value);
    }
  };

  const handleNameChange = (event) => {
    setDonorName(event.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
      
      {/* Main Donation Section */}
      <div className="w-full max-w-lg p-6 bg-gray-800 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Make a Donation</h1>
        
        {/* Donation Amount Input */}
        <input 
          type="text" 
          className="w-full p-3 mb-4 bg-gray-700 text-white border border-gray-600 rounded placeholder-gray-400"
          placeholder="Enter donation amount"  
          value={donationAmount}
          onChange={handleAmountChange}
        />
        
        {/* Quick Amount Buttons */}
        <div className="flex justify-around mb-4">
          {[50, 100, 150, 200].map((amount, index) => (
            <button 
              key={index} 
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={() => handleAmountClick(amount)}
            >
              ${amount}
            </button>
          ))}
        </div>
        
        {/* Donor Name Input */}
        <input
          type="text"
          placeholder="Enter your name"
          value={donorName}
          onChange={handleNameChange}
          className="w-full p-3 mb-4 bg-gray-700 text-white border border-gray-600 rounded placeholder-gray-400"
        />
        
        {/* Display Donation Amount (Read-Only) */}
        <input
          type="text"
          placeholder="Donation Amount"
          value={donationAmount}
          readOnly
          className="w-full p-3 mb-4 bg-gray-600 text-white border border-gray-500 rounded"
        />
        
        {/* Thank You Message */}
        <p className="text-center mb-4 text-lg font-medium text-gray-300">Thank you for your donation!</p>
        
        {/* Donate Now Button */}
        <button 
          className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
          onClick={handleDonateNow}
        >
          Donate Now
        </button>
        
        {/* Payment Methods Image */}
        <div className="mt-8">
          <img
            src={imbg2}
            alt="Payment Methods"
            className="w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Donation;

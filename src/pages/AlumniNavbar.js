import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const AlumniNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-[12vh] border-b border-gray-200 shadow-md flex items-center justify-between px-4 md:px-10 bg-white z-50">
      <div className="flex items-center">
        <img src="/logo.png" className="w-[6vh] h-[6vh] md:w-[8vh] md:h-[8vh] mr-2" alt="Logo" />
        <div className="font-bold text-xl md:text-2xl text-black">AlumniConnect</div>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl focus:outline-none">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <div className={`hidden md:flex space-x-6 text-gray-600 font-semibold text-lg`}>
        <Link to="/connections" className="relative group">
          Connections
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/jobs" className="relative group">
          Jobs
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/settings" className="relative group">
          Settings
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/profile" className="relative group text-black">
          Profile
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500"></span>
        </Link>
        <Link to="/feed" className="relative group">
          Feed
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/logout" className="relative group">
          Log Out
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>

      <div className="hidden md:flex">
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
          Welcome
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-[12vh] left-0 w-full bg-white shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4 p-4 text-lg text-gray-600">
          <Link to="/connections" onClick={toggleMenu}>Connections</Link>
          <Link to="/jobs" onClick={toggleMenu}>Jobs</Link>
          <Link to="/settings" onClick={toggleMenu}>Settings</Link>
          <Link to="/profile" onClick={toggleMenu}>Profile</Link>
          <Link to="/feed" onClick={toggleMenu}>Feed</Link>
          <Link to="/logout" onClick={toggleMenu}>Log Out</Link>
        </div>
      </div>
    </div>
  );
};

export default AlumniNavbar;

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { AuthContext } from "../AuthContext"; // Import AuthContext

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();

  const { isAuthenticated, userRole, logout } = useContext(AuthContext); // Use AuthContext

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDrop = () => {
    setDropDown(!dropDown);
  };

  const closeDropdown = () => {
    setDropDown(false);
  };

  const handleLogout = () => {
    logout();
    // Optionally navigate to the homepage or login page
    navigate('/');
  };

  const handleProfileUpdate = (role) => {
    if (role === "alumnilist") {
      navigate("/register-alumni");
    } else if (role === "students") {
      navigate("/register-student");
    } else if (role === "colleges") {
      navigate("/register-college");
    } else {
      console.error("Unknown user role:", role);
    }
  };

  return (
    <div className=" sticky top-0 w-full h-[12vh]  bg-blue-950  shadow-lg flex items-center justify-between px-4 md:px-10 z-50">
      <div className="flex items-center">
        <img
          src="/logo.png"
          className="w-[20vh] h-[10vh] md:w-[30vh] md:h-[12vh]"
          alt="Logo"
        />
        <div className="font-bold text-2xl text-white md:text-xl ml-0 md:ml-0">
          AlumniConnect
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl focus:outline-none">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4 font-normal text-white bg-transparent text-lg">
        <Link to="/" className="relative px-1 py-2 group">
          Home
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/connections" className="relative px-1 py-2 group">
          Alumni Directory
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/jobportal" className="relative px-1 py-2 group">
          Job Portal
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/events" className="relative px-1 py-2 group">
          Events
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/donation" className="relative px-1 py-2 group">
          Donation
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/contact" className="relative px-1 py-2 group">
          Contact
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-[12vh] left-0 w-full bg-white shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 p-4 text-lg font-normal text-[#8A8A8A]">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/connections" onClick={toggleMenu}>
            Alumni Directory
          </Link>
          <Link to="/jobportal" onClick={toggleMenu}>
            Job Portal
          </Link>
          <Link to="/events" onClick={toggleMenu}>
            Events
          </Link>
          <Link to="/donation" onClick={toggleMenu}>
            Donation
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      </div>

      {/* Register and Signin Buttons */}
      <div className="hidden md:flex space-x-4 relative z-50">
        <button
          className="border border-green-600 px-4 py-2 rounded text-green-600 hover:shadow-2xl shadow-green-800"
          onClick={() => handleProfileUpdate(userRole)}
        >
          Update Profile
        </button>
        {dropDown && (
          <div className="absolute left-1/2 top-full transform -translate-x-1/2 mt-2 bg-[#333] shadow-lg border border-[#555] rounded-lg w-64 z-50">
            <Link
              to="/register-college"
              className="dropdown-item block px-4 py-2 font-medium text-white hover:bg-[#444] transition-transform duration-300 ease-in-out rounded-lg"
              onClick={closeDropdown}
            >
              Register As College
            </Link>
            <Link
              to="/register-alumni"
              className="dropdown-item block px-4 py-2 font-medium text-white hover:bg-[#444] transition-transform duration-300 ease-in-out rounded-lg"
              onClick={closeDropdown}
            >
              Register As an Alumni
            </Link>
            <Link
              to="/register-student"
              className="dropdown-item block px-4 py-2 font-medium text-white hover:bg-[#444] transition-transform duration-300 ease-in-out rounded-lg"
              onClick={closeDropdown}
            >
              Register As a Student
            </Link>
          </div>
        )}
        {isAuthenticated ? (
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            <Link to="/signin">Signin</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

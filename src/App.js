import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AlumniDirectory from './pages/AlumniDirectory';
import JobPortal from './pages/JobPortal';
import Events from './pages/Event';
import Donation from './pages/Donation';
import Contact from './pages/Contact';
import SidebarLayout from './pages/SidebarLayOut'; // Import the new layout component
import AlumniProfile from './pages/AlumniProfile'; // Import AlumniProfile
import './App.css';
import AluminiRegistration from "./components/Registration/AluminiRegistration";
import StudentRegistration from "./components/Registration/StudentRegistration";
import CollegeRegistration from "./components/Registration/CollegeRegistration";
import Login from "./components/Login"
import Register from './components/Register'
import Connections from './pages/Connections'

function App() {
  const location = useLocation(); // useLocation is now inside the Router context

  const shouldHideNavbarAndFooter = 
    location.pathname === '/alumnidirectory' || 
    location.pathname === '/alumprofile';

  return (
    <>
      {!shouldHideNavbarAndFooter && <Navbar />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alumnidirectory" element={<AlumniDirectory />} />
          <Route path="/jobportal" element={<JobPortal />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register-alumni" element={<AluminiRegistration />} />
          <Route path="/register-college" element={<CollegeRegistration />} />
          <Route path="/register-student" element={<StudentRegistration/>} />
          <Route path="/connections" element={<Connections/>} />


          <Route element={<SidebarLayout />}>
            <Route path="/alumprofile" element={<AlumniProfile />} /> 
          </Route>
          <Route path="/signin" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
        </Routes>
      </div>
      {!shouldHideNavbarAndFooter && <Footer />}
    </>
  );
}

export default App;

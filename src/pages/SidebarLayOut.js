import React from 'react';
import { Outlet } from 'react-router-dom';
import SideAlumNavbar from '../pages/SideAlumNavbar'; 

const SidebarLayout = () => {
  return (
    <div className="flex">
      <SideAlumNavbar />
      <div className="flex-grow ml-[250px] p-6"> 
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarLayout;

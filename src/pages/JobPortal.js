import React from "react";
// import img from "../assets/model.png";
import img2 from "../assets/bgjob.png";
import img3 from "../assets/postjob2.png"
import JobSection from "./JobSection";
const JobPortal = () => {
  return (
    <div>
      <div className="flex bg-cover "
       style={{
        backgroundImage: `url(${img2})`,
        height:"90vh",
        width:"",
        backgroundRepeat: "no-repeat",
      }}
      >
        {/* Text Div */}
        <div className="flex-1 flex flex-col pt-[20vh] p-8 pl-[4vw] space-y-4">
          <h1 className="text-gradient font-extrabold mb-1 text-[60px] leading-tight">
            Get Your <span className="text-blue-400">Job</span>
          </h1>
          <h1 className="text-blue-500 font-semibold text-[60px] leading-tight mb-2">
            Here
          </h1>
          <p className="text-white text-lg md:text-xl leading-relaxed max-w-2xl">
            Explore a world of exciting career options and connect with top-tier
            companies that match your ambitions!
          </p>

          <div className="flex space-x-4">
            <button className="bg-blue-400 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-500 transition duration-300">
              Find Jobs
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
              Post Jobs
            </button>
          </div>
        </div>

        
      </div>
      <div>
        <JobSection />
      </div>
      <div className="flex  bg-cover"
      style={{
        backgroundImage: `url(${img3})`,
        height:"70vh",
        width:"",
        backgroundRepeat: "no-repeat",
      }}
      >
        {/* Text Div */}
        <div className="w-1/3 flex-1 flex flex-col pt-[20vh] p-8 pl-[4vw] space-y-4">
          <h1 className="text-gradient font-extrabold mb-1 text-[60px] leading-tight">
            Post Your Jobs <span className="text-blue-400">&</span>
          </h1>
          <h1 className="text-blue-500 font-semibold text-[60px] leading-tight mb-2">
            Internships
          </h1>
          <p className="text-white text-lg md:text-xl leading-relaxed max-w-2xl">
          Select from a diverse talent pool to find the perfect candidate for your role.


          </p>

          <div className="flex space-x-4">
            <button className="bg-blue-400 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-500 transition duration-300">
              Find Jobs
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
              Post Jobs
            </button>
          </div>
        </div>

      </div>
      <div>
        <JobSection />
      </div>
    </div>
  );
};

export default JobPortal;

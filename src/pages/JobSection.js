import React from 'react';
import { motion } from 'framer-motion';

const JobCard = ({ title, company, location, openings, type }) => (
    <motion.div
        className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white shadow-lg rounded-lg p-6 m-2 border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-xl h-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
    >
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-lg font-semibold mb-2">{company}</p>
        <p className="text-sm mb-2"><strong>Location:</strong> {location}</p>
        <p className="text-sm mb-2"><strong>Openings:</strong> {openings}</p>
        <p className="text-sm"><strong>Type:</strong> {type}</p>
    </motion.div>
);

const JobSection = () => {
    const jobOpenings = [
        { title: 'Software Engineer', company: 'Tech Corp', location: 'Bengaluru, Karnataka', openings: '5', type: 'In Office' },
        { title: 'Product Manager', company: 'Innovate Ltd', location: 'Mumbai, Maharashtra', openings: '3', type: 'Remote' },
        { title: 'UI/UX Designer', company: 'Design Studio', location: 'Delhi, Delhi', openings: '2', type: 'Remote' },
        { title: 'Data Scientist', company: 'Data Insights', location: 'Hyderabad, Telangana', openings: '4', type: 'In Office' },
        { title: 'Marketing Specialist', company: 'AdWorks', location: 'Chennai, Tamil Nadu', openings: '1', type: 'In Office' },
        { title: 'HR Manager', company: 'People First', location: 'Pune, Maharashtra', openings: '3', type: 'Remote' },
        { title: 'Web Developer', company: 'CodeLab', location: 'Kolkata, West Bengal', openings: '6', type: 'In Office' },
        { title: 'Sales Executive', company: 'SalesPro', location: 'Gurgaon, Haryana', openings: '2', type: 'Remote' },
    ];

    return (
      <div className="p-6 h-[100vh] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
    <h2 className="text-4xl font-bold m-8 ml-2">Uncover Popular Job Roles</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {jobOpenings.map((job, index) => (
            <JobCard
                key={index}
                title={job.title}
                company={job.company}
                location={job.location}
                openings={job.openings}
                type={job.type}
            />
        ))}
    </div>
</div>

    );
};

export default JobSection;

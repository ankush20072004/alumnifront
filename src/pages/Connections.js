import React, { useEffect, useState } from 'react';

const Connections = () => {
  const [alumniData, setAlumniData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlumniData = async () => {
      try {
        // Use API URL from environment variables
       // const API_URL = process.env.REACT_APP_API_URL;
        const response = await fetch(`https://alumniback-np0b.onrender.com/api/alumni`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        setAlumniData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchAlumniData();
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">Alumni Connections</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="py-3 px-4 border-b text-left">ID</th>
            <th className="py-3 px-4 border-b text-left">Name</th>
            <th className="py-3 px-4 border-b text-left">Email</th>
            <th className="py-3 px-4 border-b text-left">Phone</th>
            <th className="py-3 px-4 border-b text-left">Company</th>
            <th className="py-3 px-4 border-b text-left">Position</th>
          </tr>
        </thead>
        <tbody>
          {alumniData.map((alumni) => (
            <tr key={alumni._id} className="hover:bg-gray-100 transition-colors duration-200">
              <td className="py-2 px-4 border-b">{alumni._id}</td>
              <td className="py-2 px-4 border-b">{alumni.name}</td>
              <td className="py-2 px-4 border-b text-blue-600 hover:underline">{alumni.email}</td>
              <td className="py-2 px-4 border-b">{alumni.addInfo?.phone || 'N/A'}</td>
              <td className="py-2 px-4 border-b">{alumni.addInfo?.currentCompany || 'N/A'}</td>
              <td className="py-2 px-4 border-b">{alumni.addInfo?.position || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Connections;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileAlt, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="h-screen bg-gray-100">
      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="bg-blue-900 text-white w-64 py-6 px-4">
          <div className="text-center mb-6">
            <FaUserCircle className="text-6xl mx-auto mb-2" />
            <h2 className="text-xl font-bold">Welcome, User</h2>
          </div>

          <nav>
            <ul className="space-y-4">
              <li>
                <Link to="/documents" className="flex items-center text-white hover:bg-blue-700 py-2 px-3 rounded">
                  <FaFileAlt className="mr-2" /> My Documents
                </Link>
              </li>
              <li>
                <Link to="/profile" className="flex items-center text-white hover:bg-blue-700 py-2 px-3 rounded">
                  <FaUserCircle className="mr-2" /> Profile
                </Link>
              </li>
              <li>
                <Link to="/logout" className="flex items-center text-white hover:bg-red-700 py-2 px-3 rounded">
                  <FaSignOutAlt className="mr-2" /> Logout
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white py-10 px-6">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Dashboard</h1>

          {/* Display quick stats or recent documents */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded shadow">
              <h2 className="text-lg font-bold text-blue-900">Total Documents</h2>
              <p className="text-4xl mt-2">25</p>
            </div>
            <div className="bg-blue-50 p-4 rounded shadow">
              <h2 className="text-lg font-bold text-blue-900">Verified Documents</h2>
              <p className="text-4xl mt-2">20</p>
            </div>
            <div className="bg-blue-50 p-4 rounded shadow">
              <h2 className="text-lg font-bold text-blue-900">Pending Verification</h2>
              <p className="text-4xl mt-2">5</p>
            </div>
          </div>

          {/* Show document actions */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Manage Your Documents</h2>
            <div className="flex justify-start">
              <Link to="/documents" className="bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-800">
                View Documents
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

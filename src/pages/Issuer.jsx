import React from 'react';
import { FaRegFileAlt, FaUsers, FaClipboardList, FaChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const IssuingAuthorityDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container py-10 px-6 max-w-7xl mx-auto">
        {/* Dashboard Title */}
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Issuing Authority Dashboard</h1>

        {/* Dashboard Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Documents Issued */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex items-center">
              <FaRegFileAlt className="text-4xl text-blue-900" />
              <div className="ml-4">
                <h2 className="text-2xl font-semibold">3,245</h2>
                <p className="text-gray-700">Documents Issued</p>
              </div>
            </div>
          </div>

          {/* Pending Requests */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex items-center">
              <FaClipboardList className="text-4xl text-yellow-500" />
              <div className="ml-4">
                <h2 className="text-2xl font-semibold">124</h2>
                <p className="text-gray-700">Pending Document Requests</p>
              </div>
            </div>
          </div>

          {/* Total Certified Documents */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex items-center">
              <FaUsers className="text-4xl text-green-500" />
              <div className="ml-4">
                <h2 className="text-2xl font-semibold">2,900</h2>
                <p className="text-gray-700">Certified Documents</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Create New Document */}
          <Link to="/create-document" className="block bg-blue-900 text-white text-center p-6 rounded-lg shadow-lg hover:bg-blue-800">
            <FaRegFileAlt className="mx-auto text-5xl mb-4" />
            <h2 className="text-2xl font-semibold">Issue New Document</h2>
            <p className="text-gray-300">Create and issue documents quickly and securely.</p>
          </Link>

          {/* View Document Requests */}
          <Link to="/document-requests" className="block bg-yellow-500 text-white text-center p-6 rounded-lg shadow-lg hover:bg-yellow-600">
            <FaClipboardList className="mx-auto text-5xl mb-4" />
            <h2 className="text-2xl font-semibold">Manage Document Requests</h2>
            <p className="text-gray-300">Review and process incoming document requests.</p>
          </Link>

          {/* Bulk Issuance */}
          <Link to="/bulk-issuance" className="block bg-green-500 text-white text-center p-6 rounded-lg shadow-lg hover:bg-green-600">
            <FaUsers className="mx-auto text-5xl mb-4" />
            <h2 className="text-2xl font-semibold">Bulk Document Issuance</h2>
            <p className="text-gray-300">Issue multiple documents in a single action.</p>
          </Link>

          {/* Analytics & Reports */}
          <Link to="/analytics" className="block bg-indigo-500 text-white text-center p-6 rounded-lg shadow-lg hover:bg-indigo-600">
            <FaChartBar className="mx-auto text-5xl mb-4" />
            <h2 className="text-2xl font-semibold">Analytics & Reports</h2>
            <p className="text-gray-300">Access insights and statistics on document issuance.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IssuingAuthorityDashboard;

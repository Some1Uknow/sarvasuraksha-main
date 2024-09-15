import React from 'react';
import { FaClipboardCheck, FaSearch, FaBell, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const VerifierDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-10 px-6">
        {/* Dashboard Title */}
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Verifier Dashboard</h1>

        {/* Dashboard Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Total Pending Verifications */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex items-center">
              <FaClipboardCheck className="text-4xl text-yellow-500" />
              <div className="ml-4">
                <h2 className="text-2xl font-semibold">245</h2>
                <p className="text-gray-700">Pending Verifications</p>
              </div>
            </div>
          </div>

          {/* Total Verified Documents */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex items-center">
              <FaClipboardCheck className="text-4xl text-green-500" />
              <div className="ml-4">
                <h2 className="text-2xl font-semibold">1,024</h2>
                <p className="text-gray-700">Verified Documents</p>
              </div>
            </div>
          </div>

          {/* Search Documents */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex items-center">
              <FaSearch className="text-4xl text-blue-900" />
              <div className="ml-4">
                <h2 className="text-2xl font-semibold">Search Documents</h2>
                <p className="text-gray-700">Find documents easily</p>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex items-center">
              <FaBell className="text-4xl text-red-500" />
              <div className="ml-4">
                <h2 className="text-2xl font-semibold">5</h2>
                <p className="text-gray-700">New Alerts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* View Pending Verifications */}
          <Link
            to="/pending-verifications"
            className="block bg-yellow-500 text-white text-center p-6 rounded-lg shadow-lg hover:bg-yellow-600"
          >
            <FaClipboardCheck className="mx-auto text-5xl mb-4" />
            <h2 className="text-2xl font-semibold">View Pending Verifications</h2>
          </Link>

          {/* Reports & Analytics */}
          <Link
            to="/analytics"
            className="block bg-indigo-500 text-white text-center p-6 rounded-lg shadow-lg hover:bg-indigo-600"
          >
            <FaChartLine className="mx-auto text-5xl mb-4" />
            <h2 className="text-2xl font-semibold">Reports & Analytics</h2>
          </Link>
        </div>

        {/* Recent Verifications Table */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Recent Verifications</h2>
          <table className="min-w-full bg-gray-50">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Document Type</th>
                <th className="py-3 px-6 text-left">User</th>
                <th className="py-3 px-6 text-left">Date Submitted</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-6">Academic Transcript</td>
                <td className="py-3 px-6">John Doe</td>
                <td className="py-3 px-6">12/08/2023</td>
                <td className="py-3 px-6">
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded">Pending</span>
                </td>
                <td className="py-3 px-6">
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Verify
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-6">Birth Certificate</td>
                <td className="py-3 px-6">Jane Smith</td>
                <td className="py-3 px-6">11/08/2023</td>
                <td className="py-3 px-6">
                  <span className="bg-green-500 text-white px-3 py-1 rounded">Verified</span>
                </td>
                <td className="py-3 px-6">
                  <button className="bg-gray-500 text-white px-4 py-2 rounded" disabled>
                    Verified
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VerifierDashboard;

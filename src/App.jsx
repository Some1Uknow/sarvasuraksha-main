import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          {/* Government of India Emblem */}
          <div className="flex items-center">
            <img
              src="https://uxdt.nic.in/wp-content/uploads/2020/01/NE_Preview1.png?x69772"
              alt="Indian Emblem"
              className="h-12 mr-4 rounded-full ml-10"
            />
            <div>
              <h1 className="font-bold text-lg">Government of India</h1>
              <h2 className="text-sm">Document Verification System</h2>
            </div>
          </div>

          {/* Sign in/Sign up */}
          <div className="flex items-center space-x-4 mr-10">
            <Link
              to="/login"
              className="text-white hover:bg-white hover:text-blue-900 px-4 py-2 border border-white rounded transition-all"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-yellow-500 text-blue-900 font-bold px-4 py-2 rounded transition-all hover:bg-yellow-600"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Main Banner */}
      <section className="relative bg-white p-16">
        <div className="container mx-auto flex justify-between items-center">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold text-blue-900 mb-6 leading-tight">
              Simplify Official Document Verification
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              No more waiting in long lines! Use our secure and automated platform to verify birth certificates,
              academic records, and more.
            </p>
            <Link
              to="/signup"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Banner Image */}
          <div className="hidden lg:block">
            <img
              src="https://www.digilocker.gov.in/assets/img/drive_hasslefree.svg"
              alt="Document Verification"
              className="h-72"
            />
          </div>
        </div>
      </section>

      {/* New in Our System */}
      <section className="p-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-10">New in Our System</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
              <img
                src="https://www.digilocker.gov.in/assets/img/documents/certificate.svg"
                alt="Service 1"
                className="h-24 mx-auto mb-6"
              />
              <h4 className="text-lg font-bold mb-2">Academic Certificates</h4>
              <p className="text-gray-600">
                Get your academic certificates verified easily with our automated service.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
              <img
                src="https://www.digilocker.gov.in/assets/img/documents/id-card.svg"
                alt="Service 2"
                className="h-24 mx-auto mb-6"
              />
              <h4 className="text-lg font-bold mb-2">Identification Cards</h4>
              <p className="text-gray-600">
                Verify official identification documents in just a few clicks.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
              <img
                src="https://www.digilocker.gov.in/assets/img/documents/license.svg"
                alt="Service 3"
                className="h-24 mx-auto mb-6"
              />
              <h4 className="text-lg font-bold mb-2">Professional Licenses</h4>
              <p className="text-gray-600">
                Verify professional licenses such as medical and engineering certifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Government of India | Document Verification System | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

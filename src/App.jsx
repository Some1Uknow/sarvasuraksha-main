import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaLock, FaUserShield } from 'react-icons/fa';

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
              <h2 className="text-sm">Savasuraksha Verification System</h2>
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
              to="/login"
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
              Simplifying Government Document Verification for Everyone
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Secure and fast document verification for birth certificates, academic records, and more—helping you avoid the hassle of manual verification processes.
            </p>
            <Link
              to="/login"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Banner Image */}
          <div className="hidden lg:block">
            <img
              src="/main.webp"
              alt="Document Verification"
              className="h-80"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 p-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-8">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <FaUserShield className="text-blue-900 text-5xl mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">Step 1: Upload Document</h4>
              <p className="text-gray-600">
                Easily upload your official documents for verification through our secure platform.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8">
              <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">Step 2: Automatic Review</h4>
              <p className="text-gray-600">
                Our system connects with the relevant authority to validate the document's authenticity.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8">
              <FaLock className="text-blue-900 text-5xl mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">Step 3: Secure Verification</h4>
              <p className="text-gray-600">
                Receive verified documents and share them securely with any organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white p-16">
        <div className="container max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-8">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-center">
            
              <div>
                <h4 className="text-lg font-bold">100% Secure and Private</h4>
                <p className="text-gray-600">
                  We use state-of-the-art encryption to ensure your documents are safe.
                </p>
              </div>
            </div>

            <div className="flex items-center">
          
              <div>
                <h4 className="text-lg font-bold">Fast & Reliable</h4>
                <p className="text-gray-600">
                  Get your documents verified within minutes, saving you time and effort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="bg-gray-100 p-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-8">What Our Users Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <p className="text-gray-700 italic mb-4">
                "This platform made my life so much easier! I was able to verify my academic certificates in no time, and the process was incredibly simple."
              </p>
              <h4 className="text-lg font-bold">- Priya K.</h4>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8">
              <p className="text-gray-700 italic mb-4">
                "I highly recommend this service to anyone needing document verification. It's secure, fast, and completely reliable."
              </p>
              <h4 className="text-lg font-bold">- Arjun S.</h4>
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

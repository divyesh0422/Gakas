import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaDownload, FaTelegram } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-red-800">All Rummy Apps</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#privacy" className="text-white hover:text-blue-600 transition">
              Privacy Policy
            </a>
            <a href="#apps" className="text-white hover:text-blue-600 transition">
              All Rummy Apps
            </a>
            <a href="#contact" className="text-white hover:text-blue-600 transition">
              Contact
            </a>
            <a href="#about" className="text-white hover:text-blue-600 transition">
              About
            </a>
            <a 
              href="#download" 
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              <FaDownload className="mr-2" />
              Download Rummy
            </a>
            <a href="#disclaimer" className="text-white hover:text-blue-600 transition">
              Disclaimer
            </a>
          </div>

          {/* Social Media Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4 ml-6">
            <a href="https://www.facebook.com/solankimahesh.solanki.77?rdid=JZQcowRaQ3ggf5gG&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F12FTtFV5ZLh%2F#" className="text-white hover:text-blue-500 transition">
              <FaFacebook size={20} />
            </a>
            <a href="https://t.me/+sHPQ06NufJ84MjJl" className="text-white hover:text-blue-400 transition">
              <FaTelegram size={20} />
            </a>
            <a href="#" className="text-white hover:text-pink-600 transition">
              <FaInstagram size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <GiHamburgerMenu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
          <a
            href="#privacy"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100"
          >
            Privacy Policy
          </a>
          <a
            href="#apps"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100"
          >
            All Rummy Apps
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100"
          >
            Contact
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="#download"
            className="flex items-center px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <FaDownload className="mr-2" />
            Download Rummy
          </a>
          <a
            href="#disclaimer"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100"
          >
            Disclaimer
          </a>
          
          {/* Social Media Icons - Mobile */}
          <div className="flex justify-center space-x-6 py-3">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-600">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
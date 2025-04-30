import React from 'react';
import { FaFacebook, FaTelegram, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-300">
            We provide the best Games to our customers with 100% satisfaction guarantee.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
            <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            <li><a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/share/12FTtFV5ZLh/" className="text-gray-300 hover:text-white"><FaFacebook size={24} /></a>
            <a href="https://t.me/+sHPQ06NufJ84MjJl" className="text-gray-300 hover:text-white"><FaTelegram size={24} /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
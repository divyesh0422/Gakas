import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaDownload, FaTelegram, FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scroll when mobile menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navLinks = [
    { href: "#privacy", label: "Privacy Policy" },
    { href: "#apps", label: "All Rummy Apps" },
    { href: "#contact", label: "Contact" },
    { href: "#about", label: "About" },
    { href: "#disclaimer", label: "Disclaimer" }
  ];

  const socialLinks = [
    { 
      href: "https://www.facebook.com/solankimahesh.solanki.77?rdid=JZQcowRaQ3ggf5gG&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F12FTtFV5ZLh%2F#", 
      icon: FaFacebook, 
      color: "hover:text-blue-500" 
    },
    { 
      href: "https://t.me/+sHPQ06NufJ84MjJl", 
      icon: FaTelegram, 
      color: "hover:text-blue-400" 
    },
    { 
      href: "#", 
      icon: FaInstagram, 
      color: "hover:text-pink-600" 
    }
  ];

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              <span className="text-red-600">Rummy</span>
              <span className="text-yellow-400">Hub</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA & Social */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 mr-4 border-r border-gray-600 pr-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            
            {/* Download Button */}
            <a 
              href="#download" 
              className="flex items-center bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-2 rounded-lg hover:from-red-700 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaDownload className="mr-2" />
              Download Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Social Icons on mobile header */}
            <div className="flex items-center space-x-2">
              {socialLinks.slice(0, 2).map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
            
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={20} /> : <GiHamburgerMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={closeMenu}
        ></div>
        
        {/* Menu Panel */}
        <div className="absolute right-0 top-0 w-80 h-full bg-gray-900 shadow-xl overflow-y-auto">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <button
                onClick={closeMenu}
                className="text-gray-400 hover:text-white p-2 rounded-md"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 p-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-300 text-lg font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Download Button */}
            <div className="p-4 border-t border-gray-700">
              <a 
                href="#download" 
                onClick={closeMenu}
                className="flex items-center justify-center bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-3 rounded-lg hover:from-red-700 hover:to-yellow-600 transition-all duration-300 text-lg font-semibold shadow-lg"
              >
                <FaDownload className="mr-2" />
                Download Rummy
              </a>
            </div>

            {/* Social Media Links */}
            <div className="p-4 border-t border-gray-700">
              <h3 className="text-gray-400 text-sm font-semibold mb-3 uppercase tracking-wide">
                Follow Us
              </h3>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-300 p-2 rounded-full bg-gray-800 hover:bg-gray-700`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
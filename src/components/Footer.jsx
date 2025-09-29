import React from 'react';
import { FaFacebook, FaTelegram, FaInstagram, FaTwitter, FaYoutube, FaGamepad, FaShieldAlt, FaHeadset, FaDownload, FaStar } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <FaGamepad className="text-red-500 text-3xl mr-3" />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                RummyHub
              </span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your ultimate destination for premium card gaming experience. Discover the best rummy and teen patti games with exclusive bonuses and secure gameplay.
            </p>
            <div className="flex items-center text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="fill-current" size={16} />
              ))}
              <span className="ml-2 text-white text-sm">4.8/5 Rating</span>
            </div>
            <p className="text-green-400 text-sm font-semibold">
              🟢 50,000+ Happy Players
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b-2 border-red-500 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "#apps", label: "All Games", icon: "🎮" },
                { href: "#download", label: "Download App", icon: "📥" },
                { href: "#bonuses", label: "Daily Bonuses", icon: "🎁" },
                { href: "#tournaments", label: "Tournaments", icon: "🏆" },
                { href: "#leaderboard", label: "Leaderboard", icon: "📊" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 group-hover:scale-110 transition-transform">{link.icon}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b-2 border-blue-500 inline-block">Support & Legal</h3>
            <ul className="space-y-3">
              {[
                { href: "/privacy", label: "Privacy Policy", icon: <FaShieldAlt size={14} /> },
                { href: "/terms", label: "Terms of Service", icon: "📄" },
                { href: "/responsible", label: "Responsible Gaming", icon: "🎯" },
                { href: "/help", label: "24/7 Support", icon: <FaHeadset size={14} /> },
                { href: "/faq", label: "FAQ", icon: "❓" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 group-hover:scale-110 transition-transform">{link.icon}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b-2 border-green-500 inline-block">Connect With Us</h3>
            
            {/* Social Media */}
            <div className="mb-6">
              <p className="text-gray-300 mb-4">Follow us for updates and exclusive offers</p>
              <div className="flex space-x-4">
                {[
                  { 
                    href: "https://www.facebook.com/share/12FTtFV5ZLh/", 
                    icon: FaFacebook, 
                    color: "hover:text-blue-500",
                    bg: "hover:bg-blue-500"
                  },
                  { 
                    href: "https://t.me/+sHPQ06NufJ84MjJl", 
                    icon: FaTelegram, 
                    color: "hover:text-blue-400",
                    bg: "hover:bg-blue-400"
                  },
                  { 
                    href: "#", 
                    icon: FaInstagram, 
                    color: "hover:text-pink-500",
                    bg: "hover:bg-pink-500"
                  },
                  { 
                    href: "#", 
                    icon: FaTwitter, 
                    color: "hover:text-blue-400",
                    bg: "hover:bg-blue-400"
                  },
                  { 
                    href: "#", 
                    icon: FaYoutube, 
                    color: "hover:text-red-500",
                    bg: "hover:bg-red-500"
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 transition-all duration-300 ${social.color} ${social.bg} hover:scale-110 hover:shadow-lg`}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* App Download CTA */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-4 border border-gray-600">
              <div className="flex items-center mb-2">
                <FaDownload className="text-green-400 mr-2" />
                <span className="font-semibold">Get Our App</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Download now for better gaming experience
              </p>
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm font-semibold">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm">100% Secure</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm">Instant Withdrawal</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-sm">Fair Play</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-6 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
              <p>&copy; {currentYear} RummyHub. All rights reserved. | Play Responsibly</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
              <span>18+ Only</span>
              <span>•</span>
              <span>Play Responsibly</span>
              <span>•</span>
              <span>Terms Apply</span>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs max-w-4xl mx-auto">
              This is a promotional website for entertainment purposes only. We do not host any real money gambling games. 
              All games are for entertainment and practice. Please check your local laws regarding online gaming.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// Footer.jsx
import React from "react";
import { Link } from "react-router";
import { TbBrain } from "react-icons/tb"; // আপনার লোগো
import { FaFacebookF, FaInstagram } from "react-icons/fa";
// নতুন X‑logo (Twitter পরিবর্তে) – ধরুন import করা হয়েছে:
import { FaXTwitter } from "react-icons/fa6"; // অথবা যেখানে থাকে তাই থেকে

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#162447] text-gray-800 dark:text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Logo & Website Name */}
        <div className="flex items-center gap-2">
          <TbBrain className="text-3xl text-indigo-600 dark:text-indigo-400" />
          <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
            Habituo
          </span>
        </div>

        {/* Contact Info */}
        <div className="space-y-1 text-sm">
          <p>📧 Email: contact@habituo.com</p>
          <p>📞 Phone: +880 1234 567890</p>
          <p>🏠 Address: Dhaka, Bangladesh</p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Privacy Policy
          </Link>
        </div>

        {/* Social Media */}
        <div className="flex gap-4 text-lg">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <FaFacebookF />
          </a>
          <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaXTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Habituo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

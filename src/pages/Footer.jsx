import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Copyright Section */}
        <p className="text-sm">© 2025 Kaabe Tech, All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-200 transition"
            aria-label="Facebook"
          >
            <FaFacebookF className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-200 transition"
            aria-label="Instagram"
          >
            <FaInstagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-200 transition"
            aria-label="Twitter"
          >
            <FaTwitter className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-200 transition"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-200 transition"
            aria-label="YouTube"
          >
            <FaYoutube className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 Kings. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/david-igboanusi-757a66270/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-500">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/david-igboanusi-757a66270/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-500">
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com/DavidIgboa5379" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-gray-500">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

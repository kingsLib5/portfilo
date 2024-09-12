import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-8">
          I’m always open to discussing new opportunities or collaborations. Feel free to reach out to me through any of the following platforms:
        </p>
        <div className="flex justify-center space-x-8 text-3xl">
          <a 
            href="https://github.com/kingsLib5" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-500 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/david-igboanusi-757a66270/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-500 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://x.com/DavidIgboa5379" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-500 transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

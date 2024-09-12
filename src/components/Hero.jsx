import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/link.jpg'; // Add your image here

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-black text-center px-4">
      <div className="relative max-w-3xl mx-auto">
        {/* Animated Name */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Kings <span className="text-gray-400">Full Stack Developer</span>
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Creating elegant web solutions with simplicity and purpose
        </motion.p>

        {/* Picture */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <img
            src={heroImage}
            alt="Kings"
            className="rounded-full w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 mx-auto border-4 border-gray-500 shadow-lg"
          />
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <a
            href="#contact"
            className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-8 rounded-full text-lg font-medium transition-all duration-300 ease-in-out"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

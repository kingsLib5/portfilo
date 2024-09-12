import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-black px-4">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I'm a passionate Full Stack Developer with experience in creating scalable web applications.
          My tech stack includes <strong>MongoDB</strong>, <strong>React</strong>, <strong>Node.js</strong>, and <strong>Tailwind CSS</strong>. I love crafting elegant solutions to complex problems and thrive in collaborative environments. 
        </motion.p>

        {/* Skills Highlight */}
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Tech Skills</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>MongoDB, Express, React, Node.js (MERN)</li>
              <li>Microsoft SQL Server</li>
              <li>RESTful APIs and GraphQL</li>
              <li>Responsive Design (Tailwind CSS)</li>
              <li>Git, Docker, CI/CD</li>
            </ul>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Personal Qualities</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Strong problem-solving skills</li>
              <li>Adaptable to new technologies</li>
              <li>Excellent team collaboration</li>
              <li>Highly motivated and self-driven</li>
              <li>Keen attention to detail</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;

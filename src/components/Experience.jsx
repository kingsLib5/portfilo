import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'Network Adminstration',
      company: 'New Age',
      description: 'Wireshark, Nagios.',
      years: '2022 - 2024',
    },
    {
      role: 'Full stack developer',
      company: 'Nathconcept',
      description: 'Developed web applications using Javascript, Express, Tailwind css, MircoSoft SQL, React, Node.js, and MongoDB.',
      years: '2022 - present',
    },
    // Add more experiences here...
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 text-black">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Experience
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
            >
              <h3 className="text-2xl font-semibold">{experience.role}</h3>
              <p className="text-lg text-gray-700">{experience.company}</p>
              <p className="text-gray-500 italic">{experience.years}</p>
              <p className="mt-2 text-gray-600">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

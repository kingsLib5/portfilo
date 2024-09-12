import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'JavaScript', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Microsoft SQL Server', 'API Development', 'Docker', 'Git', 'CI/CD', 'Mongo DB', 'Python'
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-4 bg-gray-800 rounded-lg shadow-md text-lg font-semibold"
              whileHover={{ scale: 1.1, rotate: 5 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ProjectsSlider from './components/ProjectsSlider';
import Experience from './components/Experience';
import Contact from './components/Contact'; // New Contact Section
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
      <ProjectsSlider />
      <Contact /> {/* New Contact Section */}
      <Footer />
    </div>
  );
}

export default App;

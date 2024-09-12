import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  // Handle scrolling background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 top-0 left-0 transition-all duration-300 ${scroll ? 'bg-gray-900' : 'bg-black'}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wider text-white">Kings</h1>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <button className="text-white focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Links for larger screens */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><a href="#about" className="hover:text-gray-500 text-white">About</a></li>
          <li><a href="#skills" className="hover:text-gray-500 text-white">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-500 text-white">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-500 text-white">Contact</a></li>
        </ul>

        {/* Dropdown menu for mobile */}
        {isOpen && (
          <ul className="md:hidden flex flex-col space-y-4 mt-4 text-lg bg-gray-800 text-white p-4">
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

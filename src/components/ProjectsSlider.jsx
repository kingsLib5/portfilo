import React from 'react';
import Slider from 'react-slick';
import project1 from '../assets/zoo.jpeg'; // Replace with actual project images
import project2 from '../assets/task.jpeg';
import project3 from '../assets/ecommerce.jpeg';
import project4 from '../assets/blog.jpeg';
import project5 from '../assets/social.jpg';

const ProjectsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets and smaller devices
        settings: {
          slidesToShow: 1, // Show 1 project at a time on smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projects = [
    { image: project1, title: 'Zoo Simulator' },
    { image: project2, title: 'Task Manager' },
    { image: project3, title: 'E-Commerce Platform' },
    { image: project4, title: 'Blog Application' },
    { image: project5, title: 'Social Network' },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <Slider {...settings} className="max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="p-4">
              <div className="relative group">
                <img
                  src={project.image}
                  alt={`${project.title}`}
                  className="rounded-lg object-cover h-60 w-full transition-transform duration-300 transform group-hover:scale-105"
                />
                <p className="mt-4 text-lg font-semibold">{project.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectsSlider;

import React, { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Work = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: "Fast Food Website",
      description: "A modern food delivery website with responsive menu interface, smooth animations, and ordering system using React and Tailwind CSS.",
      technologies: ["React", "Context API", "tailwind css", "API"],
      github: "https://github.com/TheAsadCoder/tomato",
      live: "https://fast-tomato.vercel.app/",
      image: "/project_1.png"
    },
    {
      title: "Password Generator",
      description: "A secure password generator tool that creates strong, customizable passwords with options for length, character types, and complexity. Features a modern UI and copy-to-clipboard functionality.",
      technologies: ["React", "Context", "Tailwind css"],
      github: "https://github.com/TheAsadCoder/generatepassword",
      live: "https://generatepassword-inky.vercel.app/",
      image: "/project_2.jpg"
    },
    {
      title: "Todo List",
      description: "A feature-rich todo list application with task categorization, due dates, and progress tracking. Includes data persistence, drag-and-drop reordering, and dark mode support.",
      technologies: ["React", "tailwind css"],
      github: "https://github.com/TheAsadCoder/todo", 
      live: "https://todo-sigma-rose-90.vercel.app/",
      image: "/project_3.jpg"
    },
    {
      title: "Animated website",
      description: "An engaging website with smooth animations and interactive elements, built using React and GSAP.",
      technologies: ["React", "tailwind css", "GSAP"],
      github: "https://github.com/TheAsadCoder/textanimation", 
      live: "https://animation-text-gsap.netlify.app/",
      image: "/project_4.jpg"
    },
    {
      title: "E-Commerce Website",
      description: "A comprehensive e-commerce platform with product listings, shopping cart, and secure checkout. Built with JavaScript, CSS, and HTML.",
      technologies: ["JavaScript", "CSS", "HTML"],
      github: "https://github.com/learnwithasad/Ecommerce", 
      live: "https://learnwithasad.github.io/Ecommerce/",
      image: "/project_5.png"
    },
    {
      title: "QR Code Generator",
      description: "A user-friendly QR code generator that allows you to create custom QR codes for URLs, text, and other data. Features include various customization options and the ability to download the generated QR codes.",
      technologies: ["JavaScript", "CSS", "HTML", "API"],
      github: "https://github.com/learnwithasad/qrcodegenerator", 
      live: "https://learnwithasad.github.io/qrcodegenerator/",
      image: "/project_6.jpg"
    },
  ]

  return (
    <div id='project' className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-dark-900 dark:to-dark-800 py-20">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-pink dark:from-primary-orange dark:to-primary-pink">
            My Projects
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and experience in web development.
            Each project represents unique challenges and solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-primary-purple/10 to-primary-pink/10 dark:from-primary-orange/10 dark:to-primary-pink/10 text-primary-purple dark:text-primary-orange rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href={project.github}
                    target='_blank'
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-purple dark:hover:text-primary-orange transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live}
                    target='_blank'
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-purple dark:hover:text-primary-orange transition-colors"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com/TheAsadCoder?tab=repositories" target='_blank'>
          <button className="px-6 py-3 bg-gradient-to-r from-primary-purple to-primary-pink text-white rounded-full hover:from-primary-pink hover:to-primary-purple transition-colors">
            See All Projects
          </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Work
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='border-b border-neutral-900 pb-4'
    >
      <motion.h1 
        className='my-20 text-center text-4xl'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
  <motion.div 
    key={index} 
    className='mb-8 flex flex-wrap lg:justify-center items-center'
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <div className='w-full lg:w-1/4 flex justify-center items-center'>
      <div className='w-[150px] h-[150px] overflow-hidden rounded'>
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className='w-full h-full object-cover object-center'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
    <div className='w-full max-w-xl lg:w-3/4'>
      <h6 className='mb-2 font-semibold'>{project.title}</h6>
      <p className='mb-4 text-neutral-400'>{project.description}</p>
      <div className='mb-4'>
        {project.technologies.map((tech, index) => (
          <motion.span 
            key={index} 
            className='mr-2 mt-4 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
      <a 
        href={project.demoLink} 
        target='_blank' 
        rel='noopener noreferrer' 
        className='bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 
             transition-all duration-300 ease-in-out transform 
             hover:scale-105 hover:bg-purple-800 hover:text-white 
             hover:shadow-lg hover:shadow-purple-500/50
             hover:translate-x-2'
      >
        View Demo
      </a>
    </div>
  </motion.div>
))}

      </div>
      <div className='mt-8 text-center'>
        <a 
          href='https://github.com/JR-26' 
          target='_blank' 
          rel='noopener noreferrer' 
          className='bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 
             transition-all duration-300 ease-in-out transform 
             hover:scale-105 hover:bg-purple-800 hover:text-white 
             hover:shadow-lg hover:shadow-purple-500/50
             hover:translate-x-2'
        >
          For more projects, click here
        </a>
      </div>
    </motion.div>
  );
};

export default Projects;
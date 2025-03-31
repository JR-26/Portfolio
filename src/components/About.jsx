import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import aboutimage from "../assets/about_photo.png";
import { ABOUT_TEXT } from '../constants';

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>
        About <span className='text-neutral-500'>Me</span>
      </h2>
      <div className='flex flex-wrap'>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className='w-full lg:w-1/2 lg:p-8 flex items-center justify-center'
        >
          <img className="rounded-3xl shadow-lg" style={{ width: "400px", height: "auto" }} src={aboutimage} alt="About Me" />

        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1 }}
          className='w-full lg:w-1/2 flex justify-center lg:justify-start'
        >
          <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
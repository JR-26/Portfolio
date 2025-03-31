import React from 'react';
import { motion } from 'framer-motion';

const ContactMe = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='border-b border-neutral-900 pb-4 text-center'
    >
      <motion.h1 
        className='my-10 text-center text-4xl'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h1>
      <motion.p 
        className='text-lg text-neutral-400 mb-4'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Email: joelebenezer2004@gmail.com
      </motion.p>
    </motion.div>
  );
};

export default ContactMe;

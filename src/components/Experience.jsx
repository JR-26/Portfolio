import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EXPERIENCES } from '../constants';

const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>Experience</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className='mb-8 flex flex-wrap lg:justify-center'
          >
            <div className='w-full lg:w-1/4'>
              <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>
                {experience.role} -{' '}
                <span className='text-sm text-purple-300'>{experience.company}</span>
              </h6>
              <p className='mb-4 text-neutral-400'>{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span key={index} className='mr-2 mt-4 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

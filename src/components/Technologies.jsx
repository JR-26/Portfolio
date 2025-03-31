import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

const technologies = [
  { id: 1, icon: <RiReactjsLine className='text-7xl text-cyan-400' />, floatDuration: 2 },
  { id: 2, img: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg", alt: "PyTorch Logo", floatDuration: 2.5 },
  { id: 3, img: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", alt: "Hugging Face Logo", floatDuration: 3 },
  { id: 4, icon: <SiMongodb className='text-7xl text-green-500' />, floatDuration: 2.2 },
  { id: 5, icon: <FaNodeJs className='text-7xl text-green-300' />, floatDuration: 2.8 },
];

const Technologies = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  return (
    <div ref={ref} className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
            className='rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center shadow-lg'
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: tech.floatDuration, ease: "easeInOut" }}
            >
              {tech.icon ? tech.icon : <img className='w-[70px] h-[70px]' src={tech.img} alt={tech.alt} />}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;

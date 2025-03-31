import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile_photo.png";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Ensure resume.pdf is placed inside the public folder
    link.download = "Joel_Ebenezer_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="border-b border-neutral-900 pb-4 lg:mb-35"
    >
      <div className="flex flex-wrap flex-col lg:flex-row items-center lg:items-start">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start order-2 lg:order-1"
        >
          <h1 className="pb-8 text-5xl font-thin tracking-tight lg:mt-16 lg:text-6xl text-center lg:text-left">
            Joel Ebenezer
          </h1>

          {/* Typing Animation */}
          <TypeAnimation
            sequence={[
              "AI & Data Science Undergraduate",
              1000,
              "Deep Learning & Machine Learning Enthusiast",
              1000,
              "Aspiring Full Stack Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent text-center lg:text-left"
          />
          <p className="my-6 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left">
            {HERO_CONTENT}
          </p>

          {/* Download Resume Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 flex justify-center lg:justify-start w-full"
          >
            <button
              onClick={handleDownload}
              className="bg-neutral-900 px-6 py-4 text-sm font-medium text-purple-800 
             transition-all duration-300 ease-in-out transform 
             hover:scale-105 hover:bg-purple-800 hover:text-white 
             hover:shadow-lg hover:shadow-purple-500/50
             hover:translate-x-2"
            >
              Download Resume
            </button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 lg:p-8 flex justify-center mt-6 lg:mt-0 order-1 lg:order-2"
        >
          <img
            src={profilePic}
            alt="Profile"
            className="max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] rounded-full shadow-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
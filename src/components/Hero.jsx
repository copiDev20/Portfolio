import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { me } from '../assets'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const typingText = "I specialize in developing sophisticated web and mobile applications, with a keen focus on user interface design and 3D modeling enhancements.";
  
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/30 rounded-full blur-3xl" />
      </div>

      {/* Main content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 flex flex-col lg:flex-row items-center justify-between">
        {/* Left side content */}
        <motion.div 
          className="flex-1 text-center lg:text-left space-y-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* Decorative element */}
          <motion.div 
            className="inline-flex items-center space-x-2"
            variants={fadeIn}
          >
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-transparent" />
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
          >
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Amine
            </span>
          </motion.h1>

          {/* Typing animation for subtext */}
          <motion.p 
            variants={fadeIn}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
          >
            {typingText.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.02 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeIn}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-all transform hover:scale-105">
              View Projects
            </button>
            <button className="px-8 py-3 border-2 border-purple-500 text-white rounded-full font-medium hover:bg-purple-500/10 transition-all transform hover:scale-105">
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex-1 mt-12 lg:mt-0 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-2xl animate-pulse" />
            <motion.div 
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/30"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={me}
                alt="Amine's Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {/* <a 
          href="#about"
          className="flex flex-col items-center text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div 
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </div>
        </a> */}
      </motion.div>
    </section>
  );
};

export default Hero;
import React from "react";
import { motion } from "framer-motion";
import { services } from "../constants";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="w-full sm:w-[245px]"
    >
      <motion.div
        whileHover={{ y: -8 }}
        className="relative group"
      >
        {/* Glowing background effect */}
        <div className="absolute -inset-[2px] bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-xl opacity-70 group-hover:opacity-100 blur-sm group-hover:blur transition duration-500" />
        
        {/* Main card content */}
        <div className="relative bg-black/90 backdrop-blur-xl rounded-xl p-6 h-full">
          {/* Floating circles background decoration */}
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <div className="absolute w-20 h-20 -top-10 -right-10 bg-purple-500/10 rounded-full blur-xl" />
            <div className="absolute w-20 h-20 -bottom-10 -left-10 bg-pink-500/10 rounded-full blur-xl" />
          </div>
          
          <div className="relative z-10">
            {/* Icon with gradient background */}
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="w-16 h-16 mx-auto mb-4 relative group"
            >
              {/* Gradient circle background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-pink-600 rounded-full opacity-25 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
              <div className="relative w-full h-full bg-black/50 backdrop-blur-sm rounded-full p-3 flex items-center justify-center border border-white/10">
                <img
                  src={icon}
                  alt={title}
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Title with gradient text */}
            <h3 className="text-lg font-bold text-center mb-3 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              {title}
            </h3>

            {/* Animated line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"
            />
          </div>

          {/* Interactive hover effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/0 to-pink-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div id="about" className="relative w-full min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute w-[500px] h-[500px] -bottom-48 -right-48 bg-pink-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-purple-500 mb-4 font-medium">
            Introduction
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Overview
          </h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto text-center leading-relaxed mb-20"
        >
          As a proficient software developer, I bring a wealth of experience in PHP, TypeScript and JavaScript,
          complemented by a deep understanding of frameworks such as React, Node.js, Vue.js, Laravel, and Symfony.
          My expertise extends to crafting efficient, scalable, and user-centric solutions that address complex
          challenges. With a commitment to excellence and a collaborative approach, I am dedicated to transforming
          your visions into reality. Let's collaborate to achieve exceptional results.
        </motion.p>

        {/* Services grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              index={index} 
              {...service} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { experiences } from "../constants";
const ExperienceCard = ({ experience }) => (
  <motion.div 
    className="w-[400px] flex-shrink-0 h-[600px] relative group"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
    
    <div className="h-full relative bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-white/10 p-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
      
      <div className="relative z-10">
      <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-purple-500/30 bg-white mb-6 flex items-center justify-center">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="object-contain w-full h-full"
        />
      </div>




        <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-purple-300 mb-4 inline-block">
          {experience.date}
        </span>

        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white mt-4">
          {experience.title}
        </h3>
        
        <p className="text-lg text-purple-400 font-medium mt-2 mb-6">
          {experience.company_name}
        </p>

        <div className="space-y-4 custom-scrollbar overflow-y-auto h-[320px] pr-4">
          {experience.points.map((point, index) => (
            <div 
              key={index}
              className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:w-2 before:h-2 before:bg-purple-500 before:rounded-full"
            >
              <p className="text-white/80">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-[1000px] h-[1000px] -top-[400px] -left-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute w-[1000px] h-[1000px] -bottom-[400px] -right-[400px] bg-pink-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" />
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm uppercase tracking-wider text-purple-400 mb-4 font-semibold">
            Professional Journey
          </h2>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
            Experience
          </h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            transition={{ duration: 1 }}
            className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="relative px-4 max-w-[90rem] mx-auto">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto hide-scrollbar flex gap-6 py-8 px-4"
          >
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>

          <button
            onClick={() => scroll('left')}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default Experience;
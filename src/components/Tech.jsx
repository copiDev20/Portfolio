import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants";
const Tech = () => {
  return (
    <div className="min-h-screen py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-[1000px] h-[1000px] -top-96 -left-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute w-[1000px] h-[1000px] -bottom-96 -right-96 bg-pink-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm uppercase tracking-wider text-purple-400 mb-4 font-semibold">
            Tech Stack
          </h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
            Technologies
          </h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
            transition={{ duration: 1 }}
            className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {technologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-full h-24 flex items-center justify-center mb-4">
                    <motion.img
                      src={technology.icon}
                      alt={technology.name}
                      className="w-16 h-16 object-contain filter group-hover:brightness-110 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>
                  <p className="text-white/80 text-center font-medium group-hover:text-white transition-colors duration-300">
                    {technology.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "../constants";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const FeedbackCard = ({ testimonial, name, designation, company, image }) => (
  <div className="relative flex-shrink-0 w-full md:w-[400px] lg:w-[450px] px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5 }}
      className="relative p-8 md:p-10 rounded-2xl h-full group"
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glass effect background with improved opacity */}
      <div className="absolute inset-[1px] bg-gray-900/90 backdrop-blur-xl rounded-2xl" />
      
      {/* Inner border glow */}
      <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content container */}
      <div className="relative">
        {/* Animated quote icon */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute -top-4 -left-2"
        >
          <Quote className="w-10 h-10 text-purple-400/30 group-hover:text-purple-400/50 transition-colors duration-300" />
        </motion.div>

        <div className="space-y-6">
          {/* Testimonial text */}
          <p className="text-white/80 text-lg leading-relaxed pt-6 font-light">
            {testimonial}
          </p>

          {/* Author info with enhanced layout */}
          <div className="flex items-center gap-4 pt-6">
            <div className="relative group">
              {/* Avatar container with animated border */}
              <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              {/* Pulsing effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 blur-sm animate-pulse" />
            </div>

            <div className="space-y-1">
              <h4 className="text-white font-medium text-lg group-hover:text-purple-300 transition-colors duration-300">
                {name}
              </h4>
              <p className="text-white/50 text-sm font-light">
                {designation} · <span className="text-purple-400/70">{company}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

const Feedbacks = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      dragFree: true,
      containScroll: "trimSnaps"
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative min-h-screen py-20 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute w-[1000px] h-[1000px] -top-[500px] -left-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute w-[1000px] h-[1000px] -bottom-[500px] -right-[500px] bg-pink-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-purple-400 mb-4 font-semibold">
              Testimonials
            </h2>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white"
          >
            What People Say
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Carousel with improved spacing */}
        <div className="relative px-4">
          <div className="overflow-hidden -mx-8" ref={emblaRef}>
            <div className="flex py-10">
              {testimonials.map((testimonial, index) => (
                <FeedbackCard key={index} {...testimonial} />
              ))}
            </div>
          </div>

          {/* Enhanced navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollPrev}
              className="p-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 
                hover:bg-white/10 hover:border-white/20 transition-all duration-300 pointer-events-auto
                disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-purple-300 transition-colors duration-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollNext}
              className="p-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 
                hover:bg-white/10 hover:border-white/20 transition-all duration-300 pointer-events-auto
                disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-purple-300 transition-colors duration-300" />
            </motion.button>
          </div>

          {/* Enhanced pagination dots */}
          <div className="flex justify-center gap-3 mt-12">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 
                  ${selectedIndex === index 
                    ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500' 
                    : 'w-2 bg-gray-600 hover:bg-gray-500 hover:w-4'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
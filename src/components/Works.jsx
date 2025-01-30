import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { github } from "../assets";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { projects } from "../constants";
const ProjectCard = ({ name, description, tags, image, source_code_link, live_demo_link }) => (
  <div className="w-[350px] lg:w-[380px] h-[500px] relative group flex-shrink-0 pl-4">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="h-full relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 overflow-hidden">
      <div className="relative h-[240px] rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        <div className="absolute bottom-4 right-4 flex gap-3 z-20">
          {live_demo_link && (
            <motion.a
              href={live_demo_link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </motion.a>
          )}
          <motion.a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={github} alt="github" className="w-5 h-5" />
          </motion.a>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
          {name}
        </h3>
        
        <p className="text-white/70 text-sm line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className="px-3 py-1 text-xs font-medium rounded-full 
                bg-gradient-to-r from-purple-500/10 to-pink-500/10 
                border border-purple-500/20 text-white/70 
                hover:border-purple-500/40 hover:text-white/90 
                transition-all duration-300"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Works = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: true
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
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
    <div className="min-h-screen py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] -top-96 -left-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute w-[800px] h-[800px] -bottom-96 -right-96 bg-pink-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" />
      </div>

      <div className="relative max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm uppercase tracking-wider text-purple-400 mb-4 font-semibold">
            Portfolio
          </h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
            Featured Projects
          </h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
            transition={{ duration: 1 }}
            className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="relative px-4 md:px-10 lg:px-20">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <ProjectCard key={`project-${index}`} {...project} />
              ))}
            </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
            <button
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                hover:bg-white/20 transition-colors duration-300 pointer-events-auto
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                hover:bg-white/20 transition-colors duration-300 pointer-events-auto
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === index 
                    ? 'w-6 bg-purple-500' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
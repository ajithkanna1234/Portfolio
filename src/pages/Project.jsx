"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import Carousel from "@/components/animation/carousel/csrousel";

// Import images
import img1 from "../components/assets/project/project-1.png";
import img2 from "../components/assets/project/project-2.png";
import img3 from "../components/assets/project/project-3.png";
import img4 from "../components/assets/project/project-4.png";
import img5 from "../components/assets/project/project-5.png";
import img6 from "../components/assets/project/project-6.png";
import img7 from "../components/assets/project/project-7.png";
import img8 from "../components/assets/project/project-8.png";
import img9 from "../components/assets/project/project-9.png";
import img10 from "../components/assets/project/project-10.png";
import img11 from "../components/assets/project/project-11.png";
import img12 from "../components/assets/project/project-12.png";
import img13 from "../components/assets/project/project-13.png";
import img14 from "../components/assets/project/project-14.png";
import img15 from "../components/assets/project/project-15.png";
import img16 from "../components/assets/project/project-16.png";
import img17 from "../components/assets/project/project-17.png";
import img18 from "../components/assets/project/project-18.png";
import img19 from "../components/assets/project/project-19.png";
import img20 from "../components/assets/project/project-20.png";
import img21 from "../components/assets/project/project-21.png";
import img22 from "../components/assets/project/project-22.png";
import img23 from "../components/assets/project/project-23.png";
import img24 from "../components/assets/project/project-24.png";
import img25 from "../components/assets/project/project-25.png";
import img26 from "../components/assets/project/project-26.png";
import img27 from "../components/assets/project/project-27.png";
import img28 from "../components/assets/project/project-28.png";
import img29 from "../components/assets/project/project-29.png";
import img30 from "../components/assets/project/project-30.png";
import img31 from "../components/assets/project/project-31.png";
import img32 from "../components/assets/project/project-32.png";

// Project data configuration
const PROJECTS_DATA = [
  {
    id: 1,
    name: "Weather App",
    link: "https://ajithkanna1234.github.io/weather-app/",
    overlayColor: "bg-red-900/80",
    image: img1.src,
    items: [
      { id: 1, img: img1.src },
      { id: 2, img: img5.src },
    ]
  },
  {
    id: 2,
    name: "Cycle Website",
    link: "https://ajithkanna1234.github.io/cycle-webpage/",
    overlayColor: "bg-blue-900/80",
    image: img2.src,
    items: [
      { id: 1, img: img2.src },
      { id: 2, img: img6.src },
      { id: 3, img: img7.src },
      { id: 4, img: img8.src },
      { id: 5, img: img9.src },
      { id: 6, img: img10.src },
    ]
  },
  {
    id: 3,
    name: "E-Learning Platform",
    link: "https://e-learning-web-frontend.vercel.app/",
    overlayColor: "bg-green-900/80",
    image: img3.src,
    items: [
      { id: 21, img: img3.src },
      { id: 1, img: img11.src },
      { id: 2, img: img12.src },
      { id: 3, img: img13.src },
      { id: 4, img: img14.src },
      { id: 5, img: img15.src },
      { id: 6, img: img16.src },
      { id: 7, img: img17.src },
      { id: 8, img: img18.src },
      { id: 9, img: img19.src },
      { id: 10, img: img20.src },
      { id: 11, img: img21.src },
      { id: 12, img: img22.src },
      { id: 13, img: img23.src },
      { id: 14, img: img24.src },
      { id: 15, img: img25.src },
      { id: 16, img: img26.src },
      { id: 17, img: img28.src },
      { id: 18, img: img29.src },
      { id: 19, img: img30.src },
      { id: 20, img: img27.src },
    ]
  },
  {
    id: 4,
    name: "Todo List",
    link: "https://ajithkanna1234.github.io/TodoList-ajith/",
    overlayColor: "bg-yellow-900/80",
    image: img4.src,
    items: [
      { id: 1, img: img4.src },
      { id: 2, img: img31.src },
      { id: 3, img: img32.src },
    ]
  },
];

const Project = ({ id = 1, view = 1 }) => {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const handleMouseEnter = useCallback((projectId) => {
    setHoveredProjectId(projectId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredProjectId(null);
  }, []);

  const handleTouchStart = useCallback((projectId) => {
    setHoveredProjectId(projectId);
  }, []);

  const handleClick = useCallback((projectId) => {
    setHoveredProjectId(prev => prev === projectId ? null : projectId);
  }, []);

  const handleLinkClick = useCallback((e, link) => {
    e.stopPropagation();
    window.open(link, '_blank', 'noopener,noreferrer');
  }, []);

  const isProjectHovered = (projectId) => hoveredProjectId === projectId;

  const getVisibilityClasses = () => {
    const baseClasses = "transition-opacity ease-linear duration-300";
    return id === view 
      ? `${baseClasses} opacity-100 z-50`
      : `${baseClasses} opacity-0 pointer-events-none absolute inset-0`;
  };

  return (
    <div className={`relative flex flex-col w-full min-h-screen bg-black ${getVisibilityClasses()}`}>
      {/* Header Section */}
      <motion.header 
        className="flex items-center justify-center py-4 sm:py-6 md:py-8 lg:py-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl 2xl:text-7xl font-koulen text-white tracking-wider text-center px-4">
          <motion.span
              className="whitespace-nowrap"
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Projects
          </motion.span>
        </h1>
      </motion.header>

      {/* Projects Grid */}
      <main className="flex-1 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 pb-6 sm:pb-8 md:pb-12">
        <div className="w-full max-w-7xl mx-auto">
          {/* Mobile: Single column, Tablet: 2 columns, Desktop: 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {PROJECTS_DATA.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <ProjectCard
                  project={project}
                  isHovered={isProjectHovered(project.id)}
                  onMouseEnter={() => handleMouseEnter(project.id)}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={() => handleTouchStart(project.id)}
                  onClick={() => handleClick(project.id)}
                  onLinkClick={(e) => handleLinkClick(e, project.link)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const ProjectCard = ({
  project,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onTouchStart,
  onClick,
  onLinkClick,
}) => {
  const cardStyle = {
    backgroundImage: `url(${project.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <article
      style={cardStyle}
      className={`
        relative text-white shadow-xl overflow-hidden rounded-lg cursor-pointer group 
        border border-gray-700/50 transition-all duration-300 ease-in-out
        hover:scale-[1.02] hover:shadow-2xl hover:border-gray-500/50
        
        /* Responsive heights */
        h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96
        
        /* Full width */
        w-full
      `}
      onTouchStart={onTouchStart}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.name}`}
    >
      {/* Project Title Overlay */}
      <div className={`
        absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8
        transition-all duration-300 ease-in-out font-light
        ${isHovered ? "opacity-0" : project.overlayColor}
      `}>
        <h3 className={`
          text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
          transition-all duration-300 text-center leading-tight font-semibold
          ${isHovered ? "translate-y-0" : "translate-y-4"}
        `}>
          {!isHovered && project.name}
        </h3>
      </div>

      {/* Project Details (shown on hover/tap) */}
      <div 
        className={`
          ${isHovered ? "opacity-100 bg-gray-900/95" : "opacity-0"}
          rounded-lg transition-all duration-300 w-full h-full
          flex flex-col relative overflow-hidden
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Carousel Container */}
        <div className="flex-1 p-2 sm:p-3 md:p-4">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <Carousel items={project.items} />
          </div>
        </div>
        
        {/* External Link Button */}
        <button
          className={`
            absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-5 md:right-5
            py-2 px-3 sm:py-2.5 sm:px-4 md:py-3 md:px-5
            flex items-center gap-2 rounded-lg border 
            transition-all duration-200 ease-in-out
            bg-white text-black hover:bg-black hover:text-white 
            focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900
            text-sm sm:text-base md:text-lg font-medium
            shadow-lg hover:shadow-xl
            transform hover:scale-105 active:scale-95
            z-10
          `}
          onClick={onLinkClick}
          aria-label={`Open ${project.name} in new tab`}
          type="button"
        >
          <SquareArrowOutUpRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          <span>View</span>
        </button>
      </div>
    </article>
  );
};

export default Project;
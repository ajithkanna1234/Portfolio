"use client";

import React, { useState, useCallback } from "react";
import { SquareArrowOutUpRight } from "lucide-react";
import Carousel from "@/components/animation/carousel/csrousel";

// Import images
import img1 from "../components/assets/project/project-1.png";
import img2 from "../components/assets/project/project-2.png";
import img3 from "../components/assets/project/project-3.png";
import img4 from "../components/assets/project/project-4.png";
import img5 from "../components/assets/project/project-5.png";

// Project data configuration
const PROJECTS_DATA = [
  {
    id: 1,
    name: "Weather App",
    link: "https://ajithkanna1234.github.io/weather-app/",
    overlayColor: "bg-red-900/80",
    image: img1.src,
    items:[
  { id: 1, img:img1.src },
  { id: 2, img:img5.src },
]
  },
  {
    id: 2,
    name: "Cycle Website",
    link: "https://ajithkanna1234.github.io/cycle-webpage/",
    overlayColor: "bg-blue-900/80",
    image: img2.src,
  },
  {
    id: 3,
    name: "E-Learning Platform",
    link: "https://e-learning-web-frontend.vercel.app/",
    overlayColor: "bg-green-900/80",
    image: img3.src,
  },
  {
    id: 4,
    name: "Todo List",
    link: "https://ajithkanna1234.github.io/TodoList-ajith/",
    overlayColor: "bg-yellow-900/80",
    image: img4.src,
  },
];

// Animation constants
const ANIMATION_DURATION = "duration-300";
const HOVER_TRANSLATE = "translate-y-4";

const Project = ({ id, view }) => {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  // Memoized handlers for better performance
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
      : `${baseClasses} opacity-0 pointer-events-none`;
  };

  return (
    <div className={`relative flex flex-col w-full min-h-screen bg-black ${getVisibilityClasses()}`}>
      {/* Header Section */}
      <header className="flex-shrink-0 text-3xl sm:text-4xl md:text-5xl font-koulen sticky top-0 z-50 text-white bg-black flex items-center justify-center py-4 px-4">
        <h2>Projects</h2>
      </header>

      {/* Projects Grid */}
      <main className="flex-1 px-4 py-6 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto h-full">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={isProjectHovered(project.id)}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={() => handleTouchStart(project.id)}
              onClick={() => handleClick(project.id)}
              onLinkClick={(e) => handleLinkClick(e, project.link)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

// Separate ProjectCard component for better organization
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

  const overlayClasses = `
    absolute inset-0 flex items-center justify-center p-4 sm:p-6 
    transition-all ${ANIMATION_DURATION} ease-in-out font-roboto font-light
    ${isHovered ? "" : project.overlayColor}
  `;

  const titleClasses = `
    text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
    transition-all ${ANIMATION_DURATION} text-center leading-tight
    ${isHovered ? "translate-y-0" : HOVER_TRANSLATE}
  `;

  const detailsClasses = `
    ${isHovered ? "opacity-100 bg-[#171717] z-50" : "opacity-0"}
    rounded-lg text-base sm:text-lg md:text-xl lg:text-2xl font-bold 
    transition-opacity ${ANIMATION_DURATION} w-full h-full
  `;

  const linkButtonClasses = `
    absolute bottom-2 right-2 sm:bottom-3 sm:right-3 
    py-2 px-3 sm:py-3 sm:px-4 cursor-pointer
    flex text-black items-center gap-2 rounded-lg border 
    transition-colors ease-linear bg-white 
    hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-white
    touch-manipulation
  `;

  return (
    <article
      style={cardStyle}
      className="relative text-white shadow-sm shadow-white/10 overflow-hidden rounded-lg cursor-pointer group min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] aspect-[4/3] sm:aspect-auto"
      onTouchStart={onTouchStart}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.name}`}
    >
      {/* Project Title Overlay */}
      <div className={overlayClasses}>
        <h3 className={titleClasses}>
          {!isHovered && project.name}
        </h3>
      </div>

      {/* Project Details (shown on hover) */}
      <div 
        className={detailsClasses}
        onClick={(e) => e.stopPropagation()}
      >
        <Carousel items={project.items}/>
        
        {/* External Link Button */}
        <button
          className={linkButtonClasses}
          onClick={onLinkClick}
          aria-label={`Open ${project.name} in new tab`}
          type="button"
        >
          <SquareArrowOutUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </article>
  );
};

export default Project;
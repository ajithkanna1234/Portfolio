"use client";

import React, { forwardRef, useRef, useState, useCallback, useMemo } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/animation/animatedBeam/animated-beam";
import { Icons } from "@/components/common/svgFiles/SvgIcons";

// Skills configuration for better maintainability
const SKILLS_CONFIG = [
  { id: 1, name: "MongoDB", icon: "Mongo_Db", position: "top-left" },
  { id: 2, name: "Ant Design", icon: "Ant_Design", position: "top-center" },
  { id: 3, name: "Figma", icon: "Figma", position: "top-right" },
  { id: 4, name: "Redux", icon: "Redux", position: "middle-left" },
  { id: 5, name: "React", icon: "R", position: "center", isCenter: true },
  { id: 6, name: "Material UI", icon: "Material_UI", position: "middle-right" },
  { id: 7, name: "Node.js", icon: "Node_Js", position: "bottom-left" },
  { id: 8, name: "GitHub", icon: "GitHub", position: "bottom-center" },
  { id: 9, name: "Tailwind CSS", icon: "Tailwind_Css", position: "bottom-right" },
];

// Animation configuration for beams
const BEAM_ANIMATIONS = [
  // Left column to center
  { from: 1, to: 5, curvature: -15, endYOffset: 5, startXOffset: 5 },
  { from: 4, to: 5, curvature: 0, endYOffset: 0, startXOffset: 5 },
  { from: 7, to: 5, curvature: 15, endYOffset: -5, startXOffset: 5 },
  // Top/bottom to center
  { from: 2, to: 5, reverse: true, curvature: -10, endYOffset: 10 },
  { from: 8, to: 5, reverse: true, curvature: 10, endYOffset: -10 },
  // Right column to center
  { from: 6, to: 5, reverse: true, startXOffset: -5 },
  { from: 3, to: 5, curvature: -15, endYOffset: 5, startXOffset: -5 },
  { from: 9, to: 5, curvature: 15, endYOffset: -5, startXOffset: -5 },
];

// Grid position classes
const POSITION_CLASSES = {
  "top-left": "flex items-start justify-end pr-2 sm:pr-4 pt-2 sm:pt-4",
  "top-center": "flex items-start justify-center pt-2 sm:pt-4",
  "top-right": "flex items-start justify-start pl-2 sm:pl-4 pt-2 sm:pt-4",
  "middle-left": "flex items-center justify-end pr-2 sm:pr-4",
  "center": "flex items-center justify-center",
  "middle-right": "flex items-center justify-start pl-2 sm:pl-4",
  "bottom-left": "flex items-end justify-end pr-2 sm:pr-4 pb-2 sm:pb-4",
  "bottom-center": "flex items-end justify-center pb-2 sm:pb-4",
  "bottom-right": "flex items-end justify-start pl-2 sm:pl-4 pb-2 sm:pb-4",
};

const SkillCircle = forwardRef(
  ({ className, skill, isHovered, onHover, onLeave, ...props }, ref) => {
    const IconComponent = Icons[skill.icon];
    const isCenter = skill.isCenter;
    
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          "group relative z-10 flex items-center justify-center rounded-full",
          "border-2 border-white/20 bg-white/10 backdrop-blur-sm shadow-lg",
          "transition-all duration-300 ease-out cursor-pointer",
          
          // Hover effects
          "hover:border-white/40 hover:bg-white/20 hover:shadow-xl",
          "hover:scale-110 hover:-translate-y-1",
          
          // Size variants
          isCenter 
            ? "size-14 sm:size-16 md:size-20 p-3 sm:p-4" 
            : "size-10 sm:size-12 md:size-14 p-2 sm:p-3",
          
          // Active state
          isHovered && "border-white/50 bg-white/25 scale-110 -translate-y-1",
          
          className
        )}
        onMouseEnter={() => onHover(skill.id)}
        onMouseLeave={onLeave}
        onTouchStart={() => onHover(skill.id)}
        onTouchEnd={onLeave}
        {...props}
      >
        {/* Icon */}
        <IconComponent 
          className={cn(
            "transition-all duration-300",
            isCenter ? "size-6 sm:size-8 md:size-10" : "size-4 sm:size-6 md:size-8",
            isHovered && "scale-110"
          )} 
        />
        
        {/* Tooltip */}
        <div
          className={cn(
            "absolute -top-12 left-1/2 -translate-x-1/2 z-20",
            "px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap",
            "bg-gray-900/95 text-white border border-white/20",
            "backdrop-blur-sm shadow-lg",
            "transition-all duration-200 ease-out",
            "pointer-events-none select-none",
            isHovered
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-2"
          )}
        >
          {skill.name}
          {/* Tooltip arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/95" />
        </div>
      </div>
    );
  }
);

SkillCircle.displayName = "SkillCircle";

const Skill = ({ id, view }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const containerRef = useRef(null);
  
  // Create refs for each skill dynamically
  const skillRefs = useMemo(
    () => SKILLS_CONFIG.reduce((acc, skill) => {
      acc[skill.id] = React.createRef();
      return acc;
    }, {}),
    []
  );

  const handleHover = useCallback((skillId) => {
    setHoveredId(skillId);
  }, []);

  const handleLeave = useCallback(() => {
    setHoveredId(null);
  }, []);

  const isVisible = id === view;

  return (
    <div
      className={cn(
        "relative w-full h-full font-koulen text-white z-50",
        "transition-all duration-700 ease-in-out",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      onMouseLeave={handleLeave}
      onTouchEnd={handleLeave}
    >
      <div className="grid grid-rows-6 gap-6 h-full">
        {/* Header */}
      <h2 className="text-4xl md:text-5xl font-koulen sticky top-0 z-50 text-white mx-[2%] flex items-center justify-center row-span-1">
        Skills
      </h2>

        {/* Skills Grid Container */}
        <div className="flex items-center row-span-5 justify-center px-4">
          <div
            ref={containerRef}
            className="relative w-full max-w-sm sm:max-w-md md:max-w-lg h-64 sm:h-80 md:h-96"
          >
            {/* Skills Grid */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2">
              {SKILLS_CONFIG.map((skill) => (
                <div
                  key={skill.id}
                  className={POSITION_CLASSES[skill.position]}
                >
                  <SkillCircle
                    ref={skillRefs[skill.id]}
                    skill={skill}
                    isHovered={hoveredId === skill.id}
                    onHover={handleHover}
                    onLeave={handleLeave}
                  />
                </div>
              ))}
            </div>

            {/* Animated Beams */}
            <div className="absolute inset-0 pointer-events-none">
              {BEAM_ANIMATIONS.map((beam, index) => (
                <AnimatedBeam
                  key={index}
                  containerRef={containerRef}
                  fromRef={skillRefs[beam.from]}
                  toRef={skillRefs[beam.to]}
                  curvature={beam.curvature}
                  endYOffset={beam.endYOffset}
                  startXOffset={beam.startXOffset}
                  reverse={beam.reverse}
                  className="opacity-60"
                />
              ))}
            </div>

            {/* Ambient glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
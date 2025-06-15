"use client";

import React, { 
  forwardRef, 
  useRef, 
  useState, 
  useCallback, 
  useMemo,
  useEffect 
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/animation/animatedBeam/animated-beam";
import { Icons } from "@/components/common/svgFiles/SvgIcons";

// Skills configuration for better maintainability
const SKILLS_CONFIG = [
  { id: 1, name: "MongoDB", icon: "Mongo_Db", position: "top-left", category: "Database" },
  { id: 2, name: "Ant Design", icon: "Ant_Design", position: "top-center", category: "UI Library" },
  { id: 3, name: "Figma", icon: "Figma", position: "top-right", category: "Design" },
  { id: 4, name: "Redux", icon: "Redux", position: "middle-left", category: "State Management" },
  { id: 5, name: "React", icon: "R", position: "center", isCenter: true, category: "Frontend" },
  { id: 6, name: "Material UI", icon: "Material_UI", position: "middle-right", category: "UI Library" },
  { id: 7, name: "Node.js", icon: "Node_Js", position: "bottom-left", category: "Backend" },
  { id: 8, name: "GitHub", icon: "GitHub", position: "bottom-center", category: "Version Control" },
  { id: 9, name: "Tailwind CSS", icon: "Tailwind_Css", position: "bottom-right", category: "Styling" },
];

// Animation configuration for beams with optimized paths
const BEAM_CONFIGURATIONS = [
  // Left column to center - optimized curves
  { from: 1, to: 5, curvature: -20, endYOffset: 8, startXOffset: 8, delay: 0 },
  { from: 4, to: 5, curvature: 0, endYOffset: 0, startXOffset: 8, delay: 0.1 },
  { from: 7, to: 5, curvature: 20, endYOffset: -8, startXOffset: 8, delay: 0.2 },
  
  // Top/bottom to center - smooth transitions
  { from: 2, to: 5, reverse: true, curvature: -15, endYOffset: 12, delay: 0.3 },
  { from: 8, to: 5, reverse: true, curvature: 15, endYOffset: -12, delay: 0.4 },
  
  // Right column to center - balanced curves
  { from: 6, to: 5, reverse: true, startXOffset: -8, curvature: 0, delay: 0.5 },
  { from: 3, to: 5, curvature: -20, endYOffset: 8, startXOffset: -8, delay: 0.6 },
  { from: 9, to: 5, curvature: 20, endYOffset: -8, startXOffset: -8, delay: 0.7 },
];

// Grid position classes with improved spacing
const POSITION_CLASSES = {
  "top-left": "flex items-start justify-end pr-3 sm:pr-6 pt-3 sm:pt-6",
  "top-center": "flex items-start justify-center pt-3 sm:pt-6",
  "top-right": "flex items-start justify-start pl-3 sm:pl-6 pt-3 sm:pt-6",
  "middle-left": "flex items-center justify-end pr-3 sm:pr-6",
  "center": "flex items-center justify-center",
  "middle-right": "flex items-center justify-start pl-3 sm:pl-6",
  "bottom-left": "flex items-end justify-end pr-3 sm:pr-6 pb-3 sm:pb-6",
  "bottom-center": "flex items-end justify-center pb-3 sm:pb-6",
  "bottom-right": "flex items-end justify-start pl-3 sm:pl-6 pb-3 sm:pb-6",
};

// Animation variants for better performance
const skillAnimations = {
  container: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  skill: {
    hidden: { opacity: 0, scale: 0, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
        type: "spring",
        stiffness: 100
      }
    }
  },
  centerSkill: {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "backOut",
        type: "spring",
        stiffness: 120,
        delay: 0.5
      }
    }
  },
  tooltip: {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 10 }
  }
};

// Memoized SkillCircle component with enhanced animations
const SkillCircle = React.memo(forwardRef(
  ({ className, skill, isHovered, onHover, onLeave, isVisible, ...props }, ref) => {
    const IconComponent = Icons[skill.icon];
    const isCenter = skill.isCenter;
    
    const handleInteraction = useCallback((isEntering) => {
      if (isEntering) {
        onHover(skill.id);
      } else {
        onLeave();
      }
    }, [skill.id, onHover, onLeave]);

    return (
      <motion.div
        ref={ref}
        variants={isCenter ? skillAnimations.centerSkill : skillAnimations.skill}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className={cn(
          // Base styles with improved visual hierarchy
          "group relative z-10 flex items-center justify-center rounded-full",
          "border-2 backdrop-blur-md shadow-2xl",
          "transition-all duration-300 ease-out cursor-pointer",
          "select-none",
          
          // Dynamic styling based on center position
          isCenter 
            ? [
                "size-16 sm:size-20 md:size-24 p-4 sm:p-5",
                "border-blue-400/40 bg-blue-500/20",
                "hover:border-blue-300/60 hover:bg-blue-400/30",
                "shadow-blue-500/20"
              ]
            : [
                "size-12 sm:size-14 md:size-16 p-3 sm:p-4",
                "border-white/30 bg-white/10",
                "hover:border-white/50 hover:bg-white/20"
              ],
          
          // Hover and active states
          "hover:scale-110 hover:-translate-y-2 hover:shadow-xl",
          "active:scale-105 active:transition-none",
          
          // Hovered state
          isHovered && [
            "scale-110 -translate-y-2 shadow-xl",
            isCenter 
              ? "border-blue-300/70 bg-blue-400/40 shadow-blue-400/30" 
              : "border-white/60 bg-white/25"
          ],
          
          className
        )}
        onMouseEnter={() => handleInteraction(true)}
        onMouseLeave={() => handleInteraction(false)}
        onTouchStart={() => handleInteraction(true)}
        onTouchEnd={() => handleInteraction(false)}
        whileHover={{ 
          scale: 1.1, 
          y: -8,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { duration: 0.1 }
        }}
        {...props}
      >
        {/* Skill Icon with improved scaling */}
        <motion.div
          className="flex items-center justify-center"
          animate={isHovered ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <IconComponent 
            className={cn(
              "transition-all duration-300 drop-shadow-lg",
              isCenter 
                ? "size-8 sm:size-10 md:size-12" 
                : "size-5 sm:size-6 md:size-7"
            )} 
          />
        </motion.div>
        
        {/* Enhanced Tooltip with category info */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              variants={skillAnimations.tooltip}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={cn(
                "absolute -top-16 left-1/2 -translate-x-1/2 z-30",
                "px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap",
                "bg-gray-900/95 text-white border border-white/20",
                "backdrop-blur-lg shadow-2xl",
                "pointer-events-none select-none"
              )}
            >
              <div className="text-center">
                <div className="font-semibold">{skill.name}</div>
                <div className="text-xs text-gray-300 mt-1">{skill.category}</div>
              </div>
              
              {/* Enhanced tooltip arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-gray-900/95" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse effect for center skill */}
        {isCenter && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-blue-400/40"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.div>
    );
  }
));

SkillCircle.displayName = "SkillCircle";

// Main Skills component with enhanced structure
const Skills = ({ id, view, isVisible }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [beamsVisible, setBeamsVisible] = useState(false);
  const containerRef = useRef(null);
  
  // Optimized refs creation
  const skillRefs = useMemo(
    () => SKILLS_CONFIG.reduce((acc, skill) => {
      acc[skill.id] = React.createRef();
      return acc;
    }, {}),
    []
  );

  // Optimized event handlers
  const handleHover = useCallback((skillId) => {
    setHoveredId(skillId);
  }, []);

  const handleLeave = useCallback(() => {
    setHoveredId(null);
  }, []);

  // Show beams after skills are loaded
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setBeamsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setBeamsVisible(false);
    }
  }, [isVisible]);

  const componentVisible = id === view;

  return (
    <motion.div
      className={cn(
        "relative w-full h-full font-koulen text-white z-50",
        "transition-all duration-700 ease-in-out"
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: componentVisible ? 1 : 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      onMouseLeave={handleLeave}
      onTouchEnd={handleLeave}
    >
      <div className="grid grid-rows-6 gap-6 h-full">
        {/* Enhanced Header with animation */}
        <motion.header 
          className="row-span-1 flex items-center justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: componentVisible ? 1 : 0, y: componentVisible ? 0 : -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-koulen text-white tracking-wider">
            <motion.span
              className="inline-block"
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Skills
            </motion.span>
          </h1>
        </motion.header>

        {/* Skills Grid Container with enhanced layout */}
        <motion.main 
          className="row-span-5 flex items-center justify-center px-4"
          variants={skillAnimations.container}
          initial="hidden"
          animate={componentVisible ? "visible" : "hidden"}
        >
          <div
            ref={containerRef}
            className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-72 sm:h-96 md:h-[28rem]"
          >
            {/* Skills Grid */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3 sm:gap-4">
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
                    isVisible={componentVisible}
                  />
                </div>
              ))}
            </div>

            {/* Animated Beams with staggered appearance */}
            <AnimatePresence>
              {beamsVisible && (
                <motion.div 
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {BEAM_CONFIGURATIONS.map((beam, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      transition={{ delay: beam.delay, duration: 0.8 }}
                    >
                      <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={skillRefs[beam.from]}
                        toRef={skillRefs[beam.to]}
                        curvature={beam.curvature}
                        endYOffset={beam.endYOffset}
                        startXOffset={beam.startXOffset}
                        reverse={beam.reverse}
                        className="opacity-60 hover:opacity-90 transition-opacity duration-300"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Enhanced ambient effects */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Main glow */}
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
              
              {/* Secondary glow */}
              <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent rounded-full blur-2xl" />
            </div>
          </div>
        </motion.main>
      </div>
    </motion.div>
  );
};

export default Skills;
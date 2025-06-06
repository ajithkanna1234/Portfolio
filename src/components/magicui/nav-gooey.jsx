import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DarkMorphingNav = ({
  items,
  initialActiveIndex = 0,
  glowIntensity = 0.6,
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, x: 0, y: 0 });

  const updateDimensions = (element) => {
    if (!element || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    
    setDimensions({
      width: elementRect.width,
      height: elementRect.height,
      x: elementRect.left - containerRect.left,
      y: elementRect.top - containerRect.top,
    });
  };

  const handleClick = (index, event) => {
    if (activeIndex === index) return;
    
    setActiveIndex(index);
    updateDimensions(event.currentTarget);
  };

  useEffect(() => {
    const activeElement = containerRef.current?.children[1]?.children[0]?.children[activeIndex];
    if (activeElement) {
      updateDimensions(activeElement);
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveElement = containerRef.current?.children[1]?.children[0]?.children[activeIndex];
      if (currentActiveElement) {
        updateDimensions(currentActiveElement);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  const morphingBackground = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      x: dimensions.x,
      y: dimensions.y,
      width: dimensions.width,
      height: dimensions.height,
      transition: {
        type: "spring",
        stiffness: 700,
        damping: 35,
        duration: 0.3,
      }
    }
  };

  const itemVariants = {
    inactive: {
      scale: 1,
      color: "#6b7280",
      transition: { duration: 0.15 }
    },
    active: {
      scale: 1.05,
      color: "#f8fafc",
      transition: { duration: 0.2 }
    },
    hovered: {
      scale: 1.1,
      color: "#e2e8f0",
      transition: { duration: 0.15 }
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* Navigation Container */}
      <nav className="relative">
        {/* Morphing Background */}
        <motion.div
          className="absolute bg-slate-800/90 backdrop-blur-sm rounded-xl"
          initial="initial"
          animate="animate"
          variants={morphingBackground}
        />

        {/* Navigation Items */}
        <ul className="flex items-center gap-1 p-1 relative z-10">
          {items.map((item, index) => (
            <motion.li
              key={index}
              className="relative"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.button
                className="px-5 py-2.5 rounded-lg font-medium text-sm flex items-center gap-3 relative overflow-hidden"
                onClick={(e) => handleClick(index, e)}
                variants={itemVariants}
                animate={
                  activeIndex === index 
                    ? "active" 
                    : hoveredIndex === index 
                    ? "hovered" 
                    : "inactive"
                }
                whileTap={{ scale: 0.95 }}
              >
                {/* Icon */}
                <motion.span className="text-lg relative z-10">
                  {item.icon}
                </motion.span>

                {/* Text */}
                {/* <motion.span className="relative z-10 font-semibold">
                  {item.route}
                </motion.span> */}

                {/* Active State Shimmer */}
                {activeIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-lg"
                    initial={{ x: "-100%" }}
                    style={{
                      width: dimensions.width,
                      height: dimensions.height,
                    }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
              </motion.button>

              {/* Active Indicator Dots */}
              {activeIndex === index && (
                <motion.div
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 h-1 bg-purple-400 rounded-full"
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          delay: i * 0.1,
                          duration: 0.3 
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DarkMorphingNav
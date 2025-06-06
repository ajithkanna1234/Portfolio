import { Data } from "@/components/common/data";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Nav = ({
  glowIntensity = 0.6,
  className
}) => {
  const [activeIndex, setActiveIndex] = useState(1);
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
  useEffect(() => {
    // This runs once when component mounts
    const activeElement = containerRef.current?.querySelector(`[data-active-index="${activeIndex}"]`);
    if (activeElement) {
      updateDimensions(activeElement);
    }
  }, []);

  const handleClick = (id, event, item) => {
    if (activeIndex === id) return;
    setActiveIndex(id);
    updateDimensions(event.currentTarget);
    if (item.sectionId) {
      const element = document.getElementById(item.sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          top:0
        });
      }
      // Update URL without reload
      window.history.pushState({}, '', `#${item.sectionId}`);
    }
    else if (item.action) {
      item.action();
    }
  };

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
    <div className={`${className}`} ref={containerRef}>
      {/* Navigation Container */}
      <nav className="relative h-full">
        {/* Morphing Background */}
        <motion.div
          className="absolute bg-white/10 backdrop-blur-sm rounded"
          initial="initial"
          animate="animate"
          variants={morphingBackground}
        />

        {/* Navigation Items */}
        <ul className="md:flex grid grid-cols-4 flex-col md:gap-4 md:p-4 h-full relative z-10">
          {Data.map((item) => (
            <motion.li
              key={item.id}
              className="relative"
              onHoverStart={() => setHoveredIndex(item.id)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.button
                data-active-index={item.id}
                className="md:px-5 py-3 rounded font-medium text-sm flex flex-col w-full justify-center items-center gap-2 relative overflow-hidden"
                onClick={(e) => handleClick(item.id, e, item)}
                variants={itemVariants}
                animate={
                  activeIndex === item.id
                    ? "active"
                    : hoveredIndex === item.id
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
                <motion.span className="relative z-10 uppercase font-koulen tracking-widest">
                  {item.label}
                </motion.span>

                {/* Active State Shimmer */}
                {activeIndex === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded"
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
              {activeIndex === item.id && (
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
                        className={`w-1 h-1 rounded-full ${i === 0 ? "bg-red-500" : i === 1 ? "bg-amber-700" : "bg-yellow-400"}`}
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

export default Nav

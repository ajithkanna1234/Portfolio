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

  const handleClick = (id, event, item) => {
    if (activeIndex === id) return;
    setActiveIndex(id);
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

  const itemVariants = {
    inactive: {
      scale: 1,
      color: "#6b7280",
      transition: { duration: 0.15 }
    },
    active: {
      scale: 1.05,
      color: "#f8fafc",
      transition: { duration: 0.2 },
    },
    hovered: {
      scale: 1.1,
      color: "#e2e8f0",
      transition: { duration: 0.15 }
    }
  };

  return (
    <div className={`${className}`} ref={containerRef}>
      <nav className="relative h-full">
        <ul className="flex md:flex-col justify-evenly md:gap-4 md:p-4 h-full relative z-10">
          {Data.map((item) => (
            <motion.li
              key={item.id}
              className="relative"
              onHoverStart={() => setHoveredIndex(item.id)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.button
                data-active-index={item.id}
                className="md:px-5 py-3 rounded font-medium text-sm flex flex-col w-full justify-center items-center gap-2 outline-0 relative overflow-hidden"
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
                <span className="text-lg relative z-10">
                  {item.icon}
                </span>
                <span className="relative z-10 uppercase font-koulen tracking-widest">
                  {item.label}
                </span>
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav

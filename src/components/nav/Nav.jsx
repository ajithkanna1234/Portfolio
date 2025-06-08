import { Data } from "@/components/common/data";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { CoolMode } from "../animation/cool-mode";
import { useResumeDownload } from "../common/downloadResume";
import { Loader } from "lucide-react";

const Nav = ({ glowIntensity = 0.6, className }) => {
  const { downloadResume, downloadProgress, isDownloading } = useResumeDownload();
  const [activeIndex, setActiveIndex] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  const handleClick = (id, item) => {
    if (activeIndex === id) return;
    setActiveIndex(id);

    if (item.sectionId) {
      const element = document.getElementById(item.sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState({}, '', `#${item.sectionId}`);
    } else if (item.action) {
      item.action();
    }
  };

  const itemVariants = {
    inactive: { scale: 1, color: "#6b7280", transition: { duration: 0.15 } },
    active: { scale: 1.05, color: "#f8fafc", transition: { duration: 0.2 } },
    hovered: { scale: 1.1, color: "#e2e8f0", transition: { duration: 0.15 } }
  };

  return (
    <div className={className} ref={containerRef}>
      <nav className="relative h-full">
        <ul className="flex md:flex-col justify-evenly md:gap-4 md:p-4 h-full relative z-10">
          {Data.filter(item => item.id !== 4).map((item) => (
            <motion.li
              key={item.id}
              className="relative"
              onHoverStart={() => setHoveredIndex(item.id)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.button
                className="md:px-5 py-3 rounded font-medium text-sm flex flex-col w-full justify-center items-center gap-2 outline-0 relative overflow-hidden"
                onClick={() => handleClick(item.id, item)}
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

          {/* Fixed the missing return statement for id=4 item */}
          {Data.filter(item => item.id === 4).map(item => (
            <motion.li key={item.id}>
              <CoolMode>
                <div className="bg-gray-300/10 text-indigo-600 p-3 rounded flex flex-col items-center gap-2 cursor-pointer" onClick={downloadResume}>
                  <span className="text-lg">{isDownloading ? <Loader className=" animate-spin text-white"/> :item.icon}</span>
                  <span className="uppercase font-koulen tracking-widest text-sm">
                    {item.label}
                  </span>
                </div>
              </CoolMode>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
"use client"
import { useEffect, useRef, useState } from "react";

const Skill = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // true if visible, false if not
      },
      { threshold: 0.1 } // Trigger when 10% is visible
    );

    if (skillRef.current) observer.observe(skillRef.current);

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <div 
      ref={skillRef}
      className={`text-5xl text-white bg-transparent z-50 font-koulen tracking-widest relative p-[4%] backdrop-blur-md h-screen ${isVisible ? "opacity-100" : "opacity-0"} transition-all ease-in delay-1000`}
    >
      Skills
    </div>
  );
}

export default Skill;
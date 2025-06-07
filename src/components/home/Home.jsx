import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DecryptedText from "../animation/decrypted-text";
import { MorphingText } from "../magicui/morphing-text";
import TiltedCard from "../animation/tiledCard/tiled-card";
import { BoxReveal } from "../animation/box-reveal";
import { CoolMode } from "../animation/cool-mode";

const Home = () => {
  const texts = [
    "MERN Stack Developer",
    "Full Stack Developer",
  ];

  return (
    <div className="md:pl-6">
      <AnimatePresence mode="wait">
        <motion.div
          key="welcome-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: "easeOut"
            }
          }}
          className="text-5xl md:text-6xl lg:text-8xl grid md:gap-8 gap-4 md:mt-10 items-center"
          exit={{ opacity: 0 }}
        >
          <div className="flex items-center gap-8">
            <DecryptedText text="What's" className="text-gray-700" encryptedClassName="text-pink-700" /><span className="text-gray-400 italic">Up</span><span className="text-pink-800">!</span>
          </div>
          <div className="grid md:grid-cols-[auto_1fr] gap-8">
            <span className="text-gray-400 font-light text-4xl md:text-5xl lg:text-7xl">im </span>
            <BoxReveal>
              <div className="font-koulen tracking-widest italic whitespace-nowrap text-indigo-900 grid px-3 py-1 relative">
                Ajith Kanna
                <div className="bg-gray-400 text-base text-black w-fit px-4">SOFTWARE DEVELOPER</div>
              </div>
            </BoxReveal>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default React.memo(Home);
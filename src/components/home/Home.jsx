import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import DecryptedText from "../animation/decrypted-text";
import { BoxReveal } from "../animation/box-reveal";

const Home = () => {
  const texts = [
    "MERN Stack Developer",
    "Full Stack Developer",
  ];
  const Summary = [
    { title: "About", desc: "MERN Stack Developer with 2 years of experience building scalable web applications using React.js, Node.js, Express, and MongoDB. and collaborating in Agile teams. Skilled in UI/UX design, RESTful APIs, and state management ( Redux Toolkit, Context API). Certified Full-Stack Developer with a focus on clean code and responsive design." },
    { title: "Technical Skills", desc: "MERN Stack Developer with 2 years of experience building scalable web applications using React.js, Node.js, Express, and MongoDB. and collaborating in Agile teams. Skilled in UI/UX design, RESTful APIs, and state management ( Redux Toolkit, Context API). Certified Full-Stack Developer with a focus on clean code and responsive design." },
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
          className="grid md:grid-cols-2 h-screen"
          exit={{ opacity: 0 }}
        >
          <section className=" flex flex-col md:gap-8 gap-4 text-5xl md:text-6xl lg:text-8xl">
            <div className="flex items-center gap-8">
              <DecryptedText text="What's" className="text-yellow-400" encryptedClassName="text-pink-700" /><span className="text-gray-400 italic">Up</span><span className="text-pink-800">!</span>
            </div>
            <span className="text-gray-400 font-light text-4xl md:text-5xl lg:text-7xl">im </span>
            <div className="grid md:grid-cols-[auto_1fr] gap-8 mt-10">
              <BoxReveal>
                <div className="font-koulen tracking-widest italic whitespace-nowrap text-indigo-600 grid px-3 py-2 sm:mb-4">
                  <p>Ajith Kanna</p>
                  <div className="bg-white text-base text-black w-fit px-4">SOFTWARE DEVELOPER</div>
                </div>
              </BoxReveal>
            </div>
          </section>
          <section className="flex flex-col justify-end pb-6">
            <img src="https://pngimages.com/images/hd/pikachu-transparent-background-png-grr-m21sdzmdwqiq4pcm.jpg" className="size-20 animate-bounce" />
            <div className="p-2 bg-white/10 rounded-xl w-fit">
              <h1 className={`font-pixel text-yellow-400 text-xl tracking-wider mb-4`}>ABOUT ME</h1>
                <div className="bg-black rounded-lg font-roboto text-justify font-light md:text-xl text-white md:p-8 p-6">MERN Stack Developer with 2 years of experience building scalable web applications using React.js, Node.js, Express, and MongoDB. and collaborating in Agile teams. Skilled in UI/UX design, RESTful APIs, and state management ( Redux Toolkit, Context API). Certified Full-Stack Developer with a focus on clean code and responsive design.</div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Home
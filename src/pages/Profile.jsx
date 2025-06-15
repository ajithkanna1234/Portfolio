import { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import DecryptedText from "@/components/animation/decrypted-text";
import Orb from "@/components/animation/orb/Orb";
import { InteractiveHoverButton } from "@/components/animation/hoverButton/hover-button";
import { useResumeDownload } from "@/components/common/downloadResume";
import pikachu from "@/components/assets/pikachu-running.gif";

// Animation variants for better organization
const profileAnimations = {
  nameTag: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  description: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
  },
  orb: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1, delay: 0.5, ease: "easeOut" }
  }
};

// Constants for better maintainability
const PROFILE_CONTENT = {
  name: "SOFTWARE DEVELOPER",
  title: "AJITH KANNA",
  description: `MERN Stack Developer with 2 years of experience building scalable web 
  applications using React.js, Node.js, Express, and MongoDB. and collaborating in 
  Agile teams. Skilled in UI/UX design, RESTful APIs, and state management 
  (Redux Toolkit, Context API). Certified Full-Stack Developer with a focus on 
  clean code and responsive design.`
};

const Profile = memo(({ id, view }) => {
  console.log(view);
  const { downloadResume, downloadProgress, isDownloading } = useResumeDownload();
  
  const isVisible = view === id;
  const isProjectsView = view === "projects";

  // Computed classes for cleaner JSX
  const containerClasses = `
    md:text-8xl text-4xl font-bold p-[4%] relative z-50 
    tracking-widest h-screen grid gap-4
  `.trim();

  const descriptionClasses = `
    flex flex-col justify-between h-full bg-black text-sm lg:text-base 
    md:p-8 p-4 font-light font-roboto text-justify sm:w-1/2 
    tracking-wide text-white z-50 relative transition-all duration-700
    ${isVisible ? "scale-100" : "scale-0"}
  `.trim();

  // Fixed orb container classes - properly hide in projects view
  const orbContainerClasses = `
    h-screen md:w-1/2 w-full fixed top-0 transition-all 
    duration-500 delay-200 ease-in-out
    ${isProjectsView 
      ? "opacity-0 -z-50 pointer-events-none scale-0" 
      : isVisible 
        ? "translate-x-full opacity-100 z-10 scale-100" 
        : "md:translate-x-1/2 opacity-100 z-10 scale-100"
    }
  `.trim();

  const renderResumeButton = () => (
    <InteractiveHoverButton
      onClick={downloadResume}
      className="mt-4"
      disabled={isDownloading}
      aria-label={isDownloading ? "Downloading resume..." : "Download resume"}
    >
      {isDownloading ? (
        <div className="flex items-center gap-2">
          <Image 
            src={pikachu} 
            alt="Loading animation" 
            className="h-5 w-fit" 
            priority
          />
          <span className="sr-only">Downloading...</span>
        </div>
      ) : (
        <>
          Resume
        </>
      )}
    </InteractiveHoverButton>
  );

  return (
    <div className={containerClasses}>
      {/* Header Section */}
      <header className="space-y-4 mt-10">
        <DecryptedText
          text={PROFILE_CONTENT.title}
          className="text-white italic relative z-50"
          encryptedClassName="text-pink-700"
        />
        
        <AnimatePresence mode="wait">
          <motion.div 
            className="flex gap-2 items-center"
            {...profileAnimations.nameTag}
          >
            <motion.p 
              className="bg-gray-800 text-xs md:text-sm lg:text-base text-white 
                         font-light size-fit px-4 py-3 rounded-sm"
            >
              {PROFILE_CONTENT.name}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </header>

      {/* Description Section */}
      <motion.main 
        className={descriptionClasses}
        {...profileAnimations.description}
      >
        <div className="space-y-6">
          <p className="leading-relaxed">
            {PROFILE_CONTENT.description}
          </p>
          
          {renderResumeButton()}
        </div>
      </motion.main>

      {/* Orb Background - Conditionally render for better performance */}
      <AnimatePresence>
        {!isProjectsView && (
          <motion.div 
            className={orbContainerClasses}
            {...profileAnimations.orb}
            exit={{ 
              opacity: 0, 
              scale: 0, 
              transition: { duration: 0.3 } 
            }}
          >
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

Profile.displayName = "profile";

export default Profile;
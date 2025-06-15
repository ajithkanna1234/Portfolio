"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import Profile from "./pages/Profile";
import Skill from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
// Animation variants for better performance and organization
const sectionAnimations = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
  transition: { duration: 0.6, ease: "easeInOut" }
};
const scrollButtonAnimations = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.3, ease: "easeOut" }
};
// Configuration for sections
const SECTIONS_CONFIG = [
  { id: "profile", component: Profile, label: "Profile" },
  { id: "skills", component: Skill, label: "Skills" },
  { id: "projects", component: Project, label: "Projects" },
  { id: "contacts", component: Contact, label: "Contact" }
];
// Observer configuration
const INTERSECTION_CONFIG = {
  threshold: 0.5,
  rootMargin: "-10% 0px -10% 0px"
};
const ScrollSections = () => {
  const sectionRefs = useRef([]);
  const [visibleSection, setVisibleSection] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  // Memoized current section index
  const currentSectionIndex = useMemo(() =>
    SECTIONS_CONFIG.findIndex(section => section.id === visibleSection),
    [visibleSection]
  );
  // Navigation state
  const navigationState = useMemo(() => ({
    canScrollUp: currentSectionIndex > 0,
    canScrollDown: currentSectionIndex < SECTIONS_CONFIG.length - 1 || currentSectionIndex === -1,
    isAtTop: currentSectionIndex === -1,
    isAtBottom: currentSectionIndex === SECTIONS_CONFIG.length - 1
  }), [currentSectionIndex]);
  // Optimized scroll handler with debouncing
  const handleScroll = useCallback(() => {
    if (isScrolling) return;

    setIsScrolling(true);

    let targetIndex;

    if (navigationState.isAtTop) {
      targetIndex = 0;
    } else if (navigationState.isAtBottom) {
      targetIndex = 0; // Loop back to first section
    } else {
      targetIndex = currentSectionIndex + 1;
    }
    const targetSection = sectionRefs.current[targetIndex];
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    // Reset scrolling state after animation completes
    setTimeout(() => setIsScrolling(false), 800);
  }, [currentSectionIndex, navigationState, isScrolling]);
  // Scroll to previous section
  const handleScrollUp = useCallback(() => {
    if (isScrolling || !navigationState.canScrollUp) return;

    setIsScrolling(true);
    const targetIndex = currentSectionIndex - 1;
    const targetSection = sectionRefs.current[targetIndex];

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    setTimeout(() => setIsScrolling(false), 800);
  }, [currentSectionIndex, navigationState.canScrollUp, isScrolling]);
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowDown":
        case " ": // Spacebar
          event.preventDefault();
          if (navigationState.canScrollDown) handleScroll();
          break;
        case "ArrowUp":
          event.preventDefault();
          if (navigationState.canScrollUp) handleScrollUp();
          break;
        case "Home":
          event.preventDefault();
          sectionRefs.current[0]?.scrollIntoView({ behavior: "smooth" });
          break;
        case "End":
          event.preventDefault();
          sectionRefs.current[SECTIONS_CONFIG.length - 1]?.scrollIntoView({ behavior: "smooth" });
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleScroll, handleScrollUp, navigationState]);
  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);
          }
        });
      },
      INTERSECTION_CONFIG
    );
    // Observe all sections
    const currentRefs = sectionRefs.current;
    currentRefs.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => {
      currentRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  // Render scroll button with proper accessibility
  const renderScrollButton = (direction, onClick, visible, ariaLabel) => (
    <AnimatePresence>
      {visible && (
        <motion.button
          {...scrollButtonAnimations}
          onClick={onClick}
          disabled={isScrolling}
          className="fixed left-1/2 transform -translate-x-1/2 bottom-4 z-50 
                     text-white bg-black/20 backdrop-blur-lg rounded-full 
                     p-2 hover:bg-black/40 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-white/50
                     disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label={ariaLabel}
          whileHover="whileHover"
          whileTap="whileTap"
        >
          {direction === "up" ? (
            <ArrowUp className="text-white" />
          ) : (
            <ArrowDown className="text-white" />
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
  return (
    <div className="scroll-sections-container">
      {/* Sections */}
      {SECTIONS_CONFIG.map((section, index) => {
        const Component = section.component;

        return (
          <motion.section
            key={section.id}
            id={section.id}
            ref={el => (sectionRefs.current[index] = el)}
            {...sectionAnimations}
            className="min-h-screen relative"
            aria-label={section.label}
          >
            <Component
              view={visibleSection}
              id={section.id}
              isVisible={visibleSection === section.id}
            />
          </motion.section>
        );
      })}
      {/* Navigation Buttons */}
      {renderScrollButton(
        "up",
        handleScrollUp,
        navigationState.canScrollUp && !isScrolling,
        "Scroll to previous section"
      )}

      {renderScrollButton(
        "down",
        handleScroll,
        navigationState.canScrollDown && !isScrolling,
        "Scroll to next section"
      )}
      {/* Section Indicator */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 
                      flex flex-col gap-2">
        {SECTIONS_CONFIG.map((section, index) => (
          <button
            key={section.id}
            onClick={() => {
              if (!isScrolling) {
                setIsScrolling(true);
                sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
                setTimeout(() => setIsScrolling(false), 800);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 
                       ${visibleSection === section.id
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
              }`}
            aria-label={`Go to ${section.label} section`}
            disabled={isScrolling}
          />
        ))}
      </div>
    </div>
  );
};
export default ScrollSections;
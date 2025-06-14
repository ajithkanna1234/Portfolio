import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import "./Carousel.css";

const DEFAULT_ITEMS = [
  {
    title: "Text Animations",
    description: "Cool text animations for your projects.",
    id: 1,
  },
  {
    title: "Animations",
    description: "Smooth animations for your projects.",
    id: 2,
  },
  {
    title: "Components",
    description: "Reusable components for your projects.",
    id: 3,
  },
  {
    title: "Backgrounds",
    description: "Beautiful backgrounds and patterns for your projects.",
    id: 4,
  },
  {
    title: "Common UI",
    description: "Common UI components are coming soon!",
    id: 5,
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  autoplay = true,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = true,
  round = false,
}) {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const containerPadding = 16;
  const itemWidth = containerWidth > 0 ? containerWidth - containerPadding * 2 : 0;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  // Pre-calculate all transforms before rendering
  const transforms = carouselItems.map((_, index) => {
    const range = [
      -(index + 1) * trackItemOffset,
      -index * trackItemOffset,
      -(index - 1) * trackItemOffset,
    ];
    const outputRange = [90, 0, -90];
    return useTransform(x, range, outputRange, { clamp: false });
  });

  // Handle resize and initial width
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Pause on hover effect
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  // Autoplay effect
  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered) && containerWidth > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
    containerWidth,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? "round" : ""}`}
      style={{
        width: "100%",
        heigth: "100%",
        ...(round && { height: "100%", aspectRatio: "1/1", borderRadius: "50%" }),
      }}
    >
      {containerWidth > 0 && (
        <>
          <motion.div
            className="carousel-track"
            drag="x"
            {...dragProps}
            style={{
              width: itemWidth,
              gap: `${GAP}px`,
              perspective: 1000,
              perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
              x,
            }}
            onDragEnd={handleDragEnd}
            animate={{ x: -(currentIndex * trackItemOffset) }}
            transition={effectiveTransition}
            onAnimationComplete={handleAnimationComplete}
          >
            {carouselItems.map((item, index) => (
              <motion.div
                key={index}
                className={`carousel-item ${round ? "round" : ""}`}
                style={{
                  width: itemWidth,
                  height: round ? itemWidth : "100%",
                  rotateY: transforms[index],
                  ...(round && { borderRadius: "50%" }),
                }}
                transition={effectiveTransition}
              >
                <div className={`carousel-item-header ${round ? "round" : ""}`}>
                  <span className="carousel-icon-container">
                    {/* {item.icon} */}
                  </span>
                </div>
                <div className="carousel-item-content">
                  <div className="carousel-item-title">{item.title}</div>
                  <p className="carousel-item-description">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className={`carousel-indicators-container ${round ? "round" : ""}`}>
            <div className="carousel-indicators">
              {items.map((_, index) => (
                <motion.div
                  key={index}
                  className={`carousel-indicator ${
                    currentIndex % items.length === index ? "active" : "inactive"
                  }`}
                  animate={{
                    scale: currentIndex % items.length === index ? 1.2 : 1,
                  }}
                  onClick={(e) => {e.stopPropagation();setCurrentIndex(index)}}
                  transition={{ duration: 0.15 }}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
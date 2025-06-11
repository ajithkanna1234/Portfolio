"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/animation/animatedBeam/animated-beam";
import { Icons } from "@/components/common/svgFiles/SvgIcons";

const Skill = ({ id, view }) => {
  const Circle = forwardRef(({ className, children, size = "size-12" }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          size,
          className
        )}
      >
        {children}
      </div>
    );
  });

  Circle.displayName = "Circle";

  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);
  const div8Ref = useRef(null);
  const div9Ref = useRef(null);

  return (
    <div
      className={`
        relative h-screen w-full p-[4%] font-koulen text-5xl 
        tracking-widest text-white transition-all duration-300 
        ease-in-out z-50
        ${id === view ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h2 className="mb-8 text-center text-4xl md:text-5xl">MY SKILLS</h2>
        
        <div
          className="relative flex w-full max-w-4xl items-center justify-center"
          ref={containerRef}
        >
          <div className="grid grid-cols-3 grid-rows-3 place-items-center gap-10 md:gap-16">
            {/* Top Row */}
            <Circle ref={div1Ref}>
              <Icons.googleDrive className="size-6 md:size-8" />
            </Circle>
            <Circle ref={div5Ref}>
              <Icons.googleDocs className="size-6 md:size-8" />
            </Circle>
            <Circle ref={div8Ref}>
              <Icons.figma className="size-6 md:size-8" />
            </Circle>

            {/* Middle Row */}
            <Circle ref={div2Ref}>
              <Icons.notion className="size-6 md:size-8" />
            </Circle>
            <Circle ref={div4Ref} size="size-16 md:size-20">
              <Icons.openai className="size-8 md:size-10" />
            </Circle>
            <Circle ref={div6Ref}>
              <Icons.zapier className="size-6 md:size-8" />
            </Circle>

            {/* Bottom Row */}
            <Circle ref={div3Ref}>
              <Icons.whatsapp className="size-6 md:size-8" />
            </Circle>
            <Circle ref={div7Ref}>
              <Icons.messenger className="size-6 md:size-8" />
            </Circle>
            <Circle ref={div9Ref}>
              <Icons.tailwind className="size-6 md:size-8" />
            </Circle>
          </div>

          {/* Animated Beams - Adjusted connections */}
          {/* Top Left to Center */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div4Ref}
            curvature={-25}
            endYOffset={10}
            startXOffset={10}
          />
          
          {/* Middle Left to Center */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div2Ref}
            toRef={div4Ref}
            endYOffset={5}
            startXOffset={10}
          />
          
          {/* Bottom Left to Center */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div3Ref}
            toRef={div4Ref}
            curvature={25}
            endYOffset={-10}
            startXOffset={10}
          />
          
          {/* Top Middle to Center */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div5Ref}
            toRef={div4Ref}
            reverse
            curvature={-15}
            endYOffset={15}
          />
          
          {/* Middle Right to Center */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div4Ref}
            reverse
            startXOffset={-10}
          />
          
          {/* Bottom Middle to Center */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div7Ref}
            toRef={div4Ref}
            reverse
            curvature={15}
            endYOffset={-15}
          />
          
          {/* Center to Top Right */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div4Ref}
            toRef={div8Ref}
            curvature={-25}
            endYOffset={10}
            startXOffset={-10}
          />
          
          {/* Center to Bottom Right */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div4Ref}
            toRef={div9Ref}
            curvature={25}
            endYOffset={-10}
            startXOffset={-10}
          />
        </div>
      </div>
    </div>
  );
};

export default Skill;
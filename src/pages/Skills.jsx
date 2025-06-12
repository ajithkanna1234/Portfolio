"use client";

import React, { forwardRef, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/animation/animatedBeam/animated-beam";
import { Icons } from "@/components/common/svgFiles/SvgIcons";

const Skill = ({ id, view }) => {
  const [hovered, setHovered] = useState({ id: null, open: false });
  const hoverFunction = (id) => {
    setHovered({ id: id, open: true });
  };
  const Circle = forwardRef(
    ({ className, children, size = "size-12", id, ...props }, ref) => {
      return (
        <div
          ref={ref}
          className={cn(
            "z-10 flex items-center justify-center rounded-full border-2 border-white/10 bg-white/10 backdrop-blur-sm p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
            size,
            className
          )}
          {...props}
          onMouseEnter={() => hoverFunction(id)}
          onTouchStart={() => hoverFunction(id)}
          onTouchEnd={() => setHovered({ id: null, open: false })}
          onMouseLeave={() => setHovered({ id: null, open: false })}
        >
          {children}
            <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap tracking-normal font-roboto text-xs px-2 py-1 rounded transition-all ease-linear ${hovered.open && id === hovered.id ? "scale-100 text-white bg-black" : "scale-0"}`}>
              {children.type.name === "R" ? "React" : children.type.name.replace(/_/g, " ")}
            </div>
        </div>
      );
    }
  );

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
        relative w-full font-koulen h-full text-5xl 
        tracking-widest text-white transition-all duration-700 
        ease-in-out z-50
        ${id === view ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <div className="grid grid-rows-3 items-center justify-center">
        <h2 className="text-4xl md:text-5xl text-center border-b border-dotted row-span-1 pb-4">
          MY SKILLS
        </h2>

        <div
          onTouchEnd={() => setHovered({ id: null, open: false })}
          onMouseLeave={() => setHovered({ id: null, open: false })}
          className="relative flex p-4 rounded-xl w-full md:w-[400px] mx-auto row-span-2 h-[300px] items-center justify-center"
          ref={containerRef}
        >
          {/* Grid Layout */}
          <div className="absolute grid grid-cols-3 grid-rows-3 w-full h-full">
            {/* Row 1 */}
            <div className="flex items-start justify-end pr-4 pt-4">
              <Circle ref={div1Ref} id={1}>
                <Icons.Mongo_Db className="size-6 md:size-8" />
              </Circle>
            </div>
            <div className="flex items-start justify-center pt-4">
              <Circle ref={div5Ref} id={2}>
                <Icons.Ant_Design className="size-6 md:size-8" />
              </Circle>
            </div>
            <div className="flex items-start justify-start pl-4 pt-4">
              <Circle ref={div8Ref} id={3}>
                <Icons.Figma className="size-6 md:size-8" />
              </Circle>
            </div>

            {/* Row 2 */}
            <div className="flex items-center justify-end pr-4">
              <Circle ref={div2Ref} id={4}>
                <Icons.Redux className="size-6 md:size-8" />
              </Circle>
            </div>
            <div className="flex items-center justify-center">
              <Circle ref={div4Ref} id={5} size="size-16 md:size-20">
                <Icons.R className="size-8 md:size-10" />
              </Circle>
            </div>
            <div className="flex items-center justify-start pl-4">
              <Circle ref={div6Ref} id={6}>
                <Icons.Material_UI className="size-6 md:size-8" />
              </Circle>
            </div>

            {/* Row 3 */}
            <div className="flex items-end justify-end pr-4 pb-4">
              <Circle ref={div3Ref} id={7}>
                <Icons.Node_Js className="size-6 md:size-8" />
              </Circle>
            </div>
            <div className="flex items-end justify-center pb-4">
              <Circle ref={div7Ref} id={8}>
                <Icons.GitHub className="size-6 md:size-8" />
              </Circle>
            </div>
            <div className="flex items-end justify-start pl-4 pb-4">
              <Circle ref={div9Ref} id={9}>
                <Icons.Tailwind_Css className="size-6 md:size-8" />
              </Circle>
            </div>
          </div>

          {/* Animated Beams */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Left Column to Center */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div1Ref}
              toRef={div4Ref}
              curvature={-15}
              endYOffset={5}
              startXOffset={5}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div2Ref}
              toRef={div4Ref}
              curvature={0}
              endYOffset={0}
              startXOffset={5}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div3Ref}
              toRef={div4Ref}
              curvature={15}
              endYOffset={-5}
              startXOffset={5}
            />

            {/* Middle Column to Center */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div5Ref}
              toRef={div4Ref}
              reverse
              curvature={-10}
              endYOffset={10}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div7Ref}
              toRef={div4Ref}
              reverse
              curvature={10}
              endYOffset={-10}
            />

            {/* Right Column to Center */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div6Ref}
              toRef={div4Ref}
              reverse
              startXOffset={-5}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div8Ref}
              toRef={div4Ref}
              curvature={-15}
              endYOffset={5}
              startXOffset={-5}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div9Ref}
              toRef={div4Ref}
              curvature={15}
              endYOffset={-5}
              startXOffset={-5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

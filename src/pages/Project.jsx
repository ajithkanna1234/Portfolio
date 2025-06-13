"use client";

import React from "react";

const Project = ({ id, view }) => {
  const [isHovering,setHoveringIndex] = React.useState(null);
  const projects = [
    { name: "Project 1", icon: "icon1" },
    { name: "Project 2", icon: "icon2" },
    { name: "Project 3", icon: "icon3" },
    { name: "Project 4", icon: "icon4" },
  ];
  return (
    <div
      className={`fixed grid grid-rows-6 size-full bg-black transition-opacity ease-in-out duration-500 top-0 left-0 ${
        id === view ? "opacity-100 z-50" : "opacity-0"
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-koulen sticky top-0 text-white mx-[2%] flex items-center justify-center row-span-1">
        Projects
      </h2>
      <div className="row-span-5 grid md:grid-rows-2 md:grid-cols-2 rounded-xl m-[2%]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative text-white shadow-sm shadow-white/10 overflow-hidden"
            onMouseEnter={() => setHoveringIndex(index)}
            onMouseLeave={() => setHoveringIndex(null)}
            onTouchStart={() => setHoveringIndex(index)}
            onTouchEnd={() => setHoveringIndex(null)}
          >
            <div className={`transition-all size-full ease-linear p-2 z-50 top-0 ${isHovering === index ? " translate-y-0 bg-gray-950" : "-translate-y-100 bg-gray-950/50"}`}>
            {project.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

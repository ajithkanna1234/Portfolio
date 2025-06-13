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
      <div className="row-span-5 grid md:grid-rows-2 md:grid-cols-2 gap-2 rounded-xl m-[2%]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg relative text-white border"
            onMouseEnter={() => setHoveringIndex(index)}
            onMouseLeave={() => setHoveringIndex(null)}
            onTouchStart={() => setHoveringIndex(index)}
            onTouchEnd={() => setHoveringIndex(null)}
          >
            {/* <div className={`transition-all size-full ease-linear top-0 ${isHovering === index ? "absolute scale-100 rounded-none bg-white/10" : "scale-0 rounded-full bg-white/5"}`}></div> */}
            {project.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

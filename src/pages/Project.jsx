"use client";
import React from "react";
import img1 from "../components/assets/project/project-1.png";
import img2 from "../components/assets/project/project-2.png";
import img3 from "../components/assets/project/project-3.png";
import img4 from "../components/assets/project/project-4.png";
import { Globe, SquareArrowOutUpRight } from "lucide-react";
import Carousel from "@/components/animation/carousel/csrousel";

const Project = ({ id, view }) => {
  const [isHovering, setHoveringIndex] = React.useState(null);
  const projects = [
    { link:"https://ajithkanna1234.github.io/weather-app/",color: "bg-red-900/80", name: "WEATHER APP", img: img1.src },
    { link:"https://ajithkanna1234.github.io/cycle-webpage/",color: "bg-blue-900/80", name: "CYCLE WEBSITE", img: img2.src },
    { link:"https://e-learning-web-frontend.vercel.app/",color: "bg-green-900/80", name: "E LEARNING PLATFORM", img: img3.src },
    { link:"https://ajithkanna1234.github.io/TodoList-ajith/",color: "bg-yellow-900/80", name: "TODO LIST", img: img4.src },
  ];

  return (
    <div
      className={`relative grid grid-rows-6 gap-6 w-full min-h-dvh bg-black transition-opacity ease-linear duration-300 top-0 left-0 ${id === view ? "opacity-100 z-50" : "opacity-0 pointer-events-none"
        }`}
    >
      <h2 className="text-4xl md:text-5xl font-koulen sticky top-0 z-50 text-white mx-[2%] bg-black flex items-center justify-center row-span-1">
        Projects
      </h2>
      <div className="row-span-5 grid grid-cols-1 md:grid-rows-2 mx-auto md:grid-cols-2 w-4/5 gap-4 p-[2%]">
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${project.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="relative text-white shadow-sm shadow-white/10 md:min-h-full z-40 overflow-hidden rounded-lg"
            onTouchStart={() => setHoveringIndex(index)} // Add touch event
            onMouseEnter={() => setHoveringIndex(index)}
            onMouseLeave={() => setHoveringIndex(null)}
            onClick={() => setHoveringIndex(isHovering === index ? null : index)}
          >
            <div
              className={`absolute inset-0 flex items-center justify-center p-[1%] transition-all duration-300 ease-in-out font-roboto font-light ${isHovering === index
                ? ""
                : `${project.color}`
                }`}
            >
              <div
                className={`text-2xl md:text-4xl transition-all duration-300 ${isHovering === index ? "translate-y-0" : "translate-y-4"
                  }`}
              >
                {isHovering !== index && project.name}
              </div>
            </div>
            <div className={`${isHovering === index ? "opacity-100 border-[#555] bg-black z-50" : "opacity-0 border-transparent"} rounded-lg text-xl md:text-2xl border font-bold transition-opacity duration-300 size-full`}
            onClick={(e) => e.stopPropagation()}
            >
              <Carousel />
              <div className="absolute bottom-2 cursor-pointer right-2 py-2 px-3 flex text-black items-center gap-2 rounded-lg border transition-colors ease-linear bg-white hover:bg-black hover:text-white"
                onClick={(e) => { e.stopPropagation(); window.open(project.link, '_blank', 'noopener,noreferrer') }}>
                <SquareArrowOutUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
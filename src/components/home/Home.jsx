import React from "react";
import { BoxReveal } from "@/components/magicui/box-reveal";
import profileImg from "@/components/assets/image.jpg"
import { Meteors } from "@/components/magicui/meteors";
import { LineShadowText } from "../magicui/line-shadow-text";

const Home = () => {
  return (
    <div className="font-koulen lg:text-9xl relative overflow-hidden whitespace-nowrap grid tracking-wider text-white mt-20 h-full">
      <div className="flex gap-[3%] h-fit">
      <BoxReveal className="text-gray-300 font-sans">What’s</BoxReveal><LineShadowText className="italic" shadowColor={"pink"}> up! </LineShadowText>
      </div>
      <Meteors className={"-z-10"}/>
    </div>
  );
};

export default Home;

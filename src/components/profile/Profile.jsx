import React from "react";
import { BoxReveal } from "@/components/magicui/box-reveal";
import profileImg from "@/components/assets/image.jpg"
import { Meteors } from "@/components/magicui/meteors";

const Profile = () => {
  return (
    <div className="font-roboto lg:text-9xl whitespace-nowrap tracking-wider text-white mt-20">
      <div className="flex gap-[2%]">
      <span>Hi</span>
      <div className="text-xl bg-[#F44250] animate-pulse">im</div>
      </div>
      <Meteors className="-z-10"/>
    </div>
  );
};

export default Profile;

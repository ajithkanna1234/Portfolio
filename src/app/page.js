"use client";

import { Data } from "@/components/common/data";
import About from "@/pages/About";
import Nav from "@/pages/Nav";
import Profile from "@/pages/Profile";
import Image from "next/image";
export default function Home() {
  return (
   <main className="relative h-screen ">
    <Profile/>
    <About/>
      {/* <div className="grid md:grid-cols-[auto_1fr] h-full w-full gap-4">
        <Nav className="h-full sticky top-0 bg-black" />
        <div className="h-full overflow-y-scroll">
          {Data?.map((object, i) => (
            <div
              key={i}
              id={object.sectionId}
              ref={object.ref}
              className={`w-full box-border p-2 md:p-4 ${object.className}`}
            >
              {object.component}
            </div>
          ))}
        </div>
        </div> */}
    </main>
  );
}

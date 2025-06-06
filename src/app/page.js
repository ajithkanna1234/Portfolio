"use client";

import { Data } from "@/components/common/data";
import Nav from "@/components/nav/Nav";

export default function Home() {
  return (
    <main className="relative mx-auto">
      <Nav />
      {Data?.map((object, i) => (
        <div
          key={i}
          id={object.sectionId}
          ref={object.ref}
          className={`!z-50 ${object.className ? object.className : "h-screen w-[90vw] mx-auto"
            }`}
        >
          {object.component}
        </div>
      ))}
    </main>
  );
}

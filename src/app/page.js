"use client";

import { tabs } from "@/components/common/data";

export default function Home() {
  return (
    <main className="relative w-4/5 mx-auto">
      {tabs.map((object, i) => (
        <div
          key={i}
          ref={object.ref}
          className={`!z-50 ${
            object.className ? object.className : "h-screen"
          }`}
        >
          {object.element}
        </div>
      ))}
    </main>
  );
}

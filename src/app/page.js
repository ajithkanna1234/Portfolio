"use client";

import { Data } from "@/components/common/data";
import Nav from "@/components/nav/Nav";

export default function Home() {
  return (
   <main className="relative h-screen w-screen overflow-hidden">
      <div className="grid md:grid-cols-[auto_1fr] h-full w-full gap-4">
        <Nav className="h-full sticky top-0 md:border-r border-[#6b7280]" />
        <div className="h-full overflow-y-auto">
          {Data?.map((object, i) => (
            <div
              key={i}
              id={object.sectionId}
              ref={object.ref}
              className={`h-screen w-full border-b border-[#6b7280] box-border p-4 ${object.className}`}
            >
              {object.component}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

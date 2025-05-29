"use client";

import { useEffect } from "react";
import Data from "@/common/data";
import { Meteors } from "@/components/magicui/meteors";

export default function Home() {

  useEffect(() => {
    const projectRef = Data.find((item) => item.target === "project")?.ref;
    const handleScroll = () => {
      if (!projectRef?.current) return;
      const rect = projectRef.current.getBoundingClientRect();
      if (Math.abs(rect.top) < 1) {
        document.documentElement.style.setProperty("--background", "oklch(1 0 0)");
        document.documentElement.style.setProperty("--foreground", "oklch(0 0 0)");
      } else {
        document.documentElement.style.setProperty("--background", "oklch(0 0 0)");
        document.documentElement.style.setProperty("--foreground", "oklch(1 0 0)");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative">
      <Meteors className="absolute -z-10" />
      {Data?.map((object, i) => (
        <div key={i} ref={object.ref} className="!z-50 h-screen">
          {object.element}
        </div>
      ))}
    </main>
  );
}

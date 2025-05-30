"use client"

import { useEffect } from "react"
import Data from "@/common/data"
import { Meteors } from "@/components/magicui/meteors"
import Nav from "@/nav/Nav"

export default function Home() {
  useEffect(() => {
    const projectRef = Data.find(item => item.target === "project")?.ref

    const handleScroll = () => {
      if (!projectRef?.current) return
      const rect = projectRef.current.getBoundingClientRect()

      if (Math.abs(rect.top) < 1) {
        // in “project” view
        document.documentElement.style.setProperty(
          "--background",
          "#03001A"
        )
        document.documentElement.style.setProperty("--foreground", "black")
      } else {
        // outside “project” view
        document.documentElement.style.setProperty(
          "--background",
          "black"
        )
        document.documentElement.style.setProperty("--foreground", "white")
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // init
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative">
      <Nav/>
      <Meteors className="fixed -z-10" />
      {Data.map((object, i) => (
        <div key={i} ref={object.ref} className="!z-50 h-screen">
          {object.element}
        </div>
      ))}
    </main>
  )
}

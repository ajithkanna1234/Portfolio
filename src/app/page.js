"use client"

import Data from "@/components/common/data"
import { Dock } from "@/components/magicui/dock"
import Nav from "@/components/nav/Nav"
import { SmoothCursor } from "@/components/ui/smooth-cursor"

export default function Home() {

  return (
    <main className="relative overflow-hidden">
      <div className="w-4/5 mx-auto">
      {/* <Dock/> */}
      <Nav/>
      {Data.map((object, i) => (
        <div key={i} ref={object.ref} className="!z-50 h-screen">
          {object.element}
        </div>
      ))}
      </div>
    </main>
  )
}

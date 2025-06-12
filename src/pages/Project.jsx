"use client"
const Project = ({ id, view }) => {
   const projects = [
      { name: "Project 1", icon: "icon1" },
      { name: "Project 2", icon: "icon2" },
      { name: "Project 3", icon: "icon3" },
      { name: "Project 4", icon: "icon4" }
   ];
   return (
      <div className={`fixed grid grid-rows-6 size-full bg-black transition-opacity ease-in-out duration-500 top-0 left-0 ${id === view ? "opacity-100 z-50" : "opacity-0"}`}>
         <h2 className="text-4xl md:text-5xl font-koulen text-white mx-[2%] flex items-center justify-center border-b border-dotted row-span-1">
            Projects
         </h2>
         <div className="row-span-5 grid md:grid-cols-4 rounded-xl m-[2%]">
            {projects.map((project, index) => (
               <div key={index} className="border-white border">
               </div>
            ))}
         </div>
      </div>
   )
}

export default Project
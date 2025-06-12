"use client"
const Project = ({id,view}) => {
 return (
    <div className={`fixed size-full bg-black transition-opacity ease-in-out duration-500 top-0 left-0 z-50 ${id === view ? "opacity-100":"opacity-0"}`}></div>
 )
}

export default Project
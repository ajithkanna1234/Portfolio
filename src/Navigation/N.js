import React, { useContext } from 'react'
import { AppContext } from "../App"
// import "./N.css"
import H from "../image/home-icon-183.svg"
import Switch from "../image/dev-icon-48.svg"
import Edu from "../image/dev-icon-217.svg"
import Project from "../image/dev-icon-120.svg"
function N() {
  const { visible, setVisible, setPv, pv,ev,setEv} = useContext(AppContext)
  const [active, setActive] = React.useState(true)
  const handleBtn = () => {
    setVisible(!visible)
  }
  const navigationBtn = (condition) => {
    setPv(condition)
    setEv(condition)
    if(condition) {
      setActive(false)
    }
    else {
      setActive(true)
    }
  }

  return (
    <div className=' mx-auto rounded-xl'>
      <section className='flex N bg-gradient-to-r from-gray-100 from-10% via-violet-100 via-30% to-gray-100 to-90% justify-between items-center py-2 pr-2'>
        <div className=' N-a bg-white hover:border-white px-4 py-2 border-b-4 shadow-md border-r-2 rounded-md rounded-b-lg z-10 lg:block hidden'>
          <small className=''><img className='h-8 N-img' src={H} />Home</small>
        </div>
        <div className=' w-[20%] N-b bg-white p-1 mr-auto ml-2 cursor-pointer transition-all duration-300 border-b-4 border-r-2 rounded-lg shadow-md hover:bg-amber-200 hover:border-white hover:scale-105 z-10'>
          {visible === false ? (
            <marquee direction='right' className='p-2 h-[34px] bg-green-200 shadow-black shadow-inner rounded-md gap-1'>
              <div className='flex  justify-center items-center'>
                <small className='animate-pulse font-[fantasy] text-[15px]'>A J I T H K A N N A &#9996;</small>
              </div>
            </marquee>
          ) : (
            <marquee direction='right' className='p-2 h-[34px] bg-gray-800 shadow-black shadow-inner rounded-md gap-1'>
              <div className='flex  justify-center items-center'>
                <small className='animate-pulse font-[fantasy] text-green-400 text-[15px]'>F R O N T - E N D | D E V E L O P E R 	&#128513;</small>
              </div>
            </marquee>
          )}
          {!visible ? (
            <img className="h-5 w-5 rounded-full mx-auto mt-1 shadow shadow-black bg-red-300 hover:bg-green-400 hover:scale-105" src={Switch} onClick={() => handleBtn()} />
          ) : (
            <img className="h-5 w-5 rounded-full mx-auto mt-1 shadow shadow-black bg-green-400 hover:bg-red-400 hover:scale-105" src={Switch} onClick={() => handleBtn()} />
          )}
        </div>
        <section className='flex justify-evently items-center'>

          <div className={` N-a cursor-pointer transition-all duration-300 hover:bg-indigo-200 px-4 py-2 mx-2 border-b-4 rounded-md rounded-b-lg shadow-md border-l-2 hover:border-white hover:scale-105 z-10 ${active ? "bg-indigo-100" : "bg-white"}`} onClick={() =>navigationBtn(false)}>
            <small><img className='h-8 N-img mx-auto' src={Edu} />Education</small>
          </div>
          <div className={`N-a cursor-pointer transition-all duration-300 hover:bg-cyan-200 px-4 py-2 mx-2 border-b-4 rounded-md rounded-b-lg shadow-md border-l-2 hover:border-white hover:scale-105 z-10 ${!active ? "bg-cyan-100" : "bg-white"}`} onClick={() => navigationBtn(true)}>
            <small><img className='h-8 N-img mx-auto' src={Project} />Project</small>
          </div>
          <div className='bg-white N-a flex gap-4 cursor-pointer transition-all duration-300 px-4 py-4 mx-1 border-b-4 rounded-md rounded-b-lg shadow-md  border-l-2 hover:border-white hover:scale-105 z-10'>
            <a className=' rounded-xl' target='blank' href='https://github.com/ajithkanna1234?tab=repositories'><i class="text-3xl N-L fi fi-brands-github"></i></a>
          </div>
          <div className='bg-white N-a flex gap-4 cursor-pointer transition-all duration-300 px-4 py-4 mx-1 border-b-4 rounded-md rounded-b-lg shadow-md  border-l-2 hover:border-white hover:scale-105 z-10'>
            <a className=' rounded-xl' target='blank' href='https://www.linkedin.com/in/ajith-kanna-t-b6a092235/'><i class="text-3xl N-L text-blue-400 fi fi-brands-linkedin"></i></a>
          </div>
          <div className='bg-white N-a flex gap-4 cursor-pointer transition-all duration-300 px-4 py-4 mx-1 border-b-4 rounded-md rounded-b-lg shadow-md  border-l-2 hover:border-white hover:scale-105 z-10'>
            <a className=' rounded-xl' target='blank' href='https://wa.me/916381811595?text=Hello%20Ajith'><i class="text-3xl N-L text-green-400 fi fi-brands-whatsapp"></i></a>
          </div>
        </section>

      </section>
    </div>
  )
}

export default N
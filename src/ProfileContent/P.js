import React, { useContext, useEffect, useState } from 'react'
import S from "../Profilesecondarycontent/S"
import Profile from "../image/profileimage.png"
import Interest from "../image/dev-icon-1.svg"
import design from "../image/dev-icon-237.svg"
import paper from "../image/dev-icon-111.svg"
import draw from "../image/dev-icon-143.svg"
import Plus from "../image/dev-icon-222.svg"
import anitv from "../image/anitv.gif"
import profile from "../image/Profile.mp4"
import { AppContext } from '../App'
function P() {
      const {pv} = useContext(AppContext)
      const ref = React.useRef(null)
    useEffect(() => {
      if(!pv && ref.current) {
        const element = ref.current;
        const rect = element.getBoundingClientRect();
        window.scrollTo({
          top: rect.top + window.scrollY - 100,
          behavior: 'smooth'
        });
      }
    }, [pv])
  const [In,setIn] = useState(false)
  const Interests = () => {
    setIn(!In)
  }
  return (
    <div className='container-sm P w-[70%] flex flex-col mx-auto mt-1'>
      <main className='p-2 container-sm  rounded-xl shadow-inner relative'>
        <div className=' flex P1 gap-4 items-center my-1'>
          {/* <div className='h-[20%] P-img w-[30%] bg-gradient-to-b from-amber-200 to-red-500 shadow-inner border-amber-200 rounded-[100%] profile'>
            <img className=' cursor-pointer transition-all profile1 duration-300 hover:scale-110 z-10' src={Profile} />
          </div> */}
            <video className='h-[100%] w-[100%] object-cover object-center absolute opacity-5' autoPlay loop muted playsInline disablePictureInPicture controls={false}> 
              <source src={profile} type="video/mp4" />
            </video>
          <div className='h-[20%] P-img w-[30%] bg-white border-amber-200 border-4 rounded-full profile '>
            <img className=' profile1 z-10' src={Profile} />
          </div>
          <div className=' flex P-c flex-col gap-4 '>
            {/* <p className='bg-white border-b-4 rounded-xl font-sans drop-shadow-lg transition-all duration-300 p-2 w-fit hover:scale-105 border-r-2'>Hello Every One &#128075;,</p> */}
            <p className='bg-white border-b-4 rounded-xl drop-shadow-lg p-2 transition-all duration-300 text-gray-500 w-fit hover:scale-105 border-r-2'>I'm <img className='inline h-4' src={anitv} /></p>
            {/* <p className='animate-pulse bg-clip-text text-transparent transition-all duration-300 bg-gradient-to-r from-indigo-300 from-10% via-sky-400 via-30% to-emerald-300 to-90% border-b-4 mx-5 p-2 text-4xl font-[fantasy] hover:scale-105 shadow-lg border-cyan-100 border-l-2 rounded-xl'>Full Stack Developer </p> */}
            <p className=' bg-white transition-all duration-300 text-gray-700 border-b-4 p-2 px-4 font-[fantasy] hover:scale-105 shadow-lg border-cyan-100 border-l-2 rounded-xl'>MERN Stack Developer </p>
            <p className=' bg-white transition-all duration-300 text-gray-700 border-b-4 p-2 px-4 font-[fantasy] hover:scale-105 shadow-lg border-cyan-100 border-l-2 rounded-xl'>Full Stack Developer </p>
          </div>
        </div>
      </main>
        <section onClick={Interests} className='my-1 I-A relative '>
          <div className='bg-gray-100 cursor-pointer tracking-wider flex items-center gap-2 p-1 text-red-500 text-md drop-shadow-md'>
            <img className='h-4 inline ' src={Interest} />
            <b className='font-[fantasy]'>INTEREST</b>
            <span className='ml-auto' onClick={Interests}><img className='h-3 inline' src={Plus}/></span>
          </div>
          { In === true ? (
          <ul className=' w-full list-inside text-sm drop-shadow-lg absolute z-10 bg-white border-4 border-white'>
            <li className='my-1 pl-1 ml-1 mt-2 text-justify'><span className='mr-2'><img src={draw} className='h-4 inline'/></span>Drawing.</li>          
            <li className='my-1 pl-1 ml-1 mt-2 text-justify'><span className='mr-2'><img src={paper} className='h-3 inline'/></span>PaperCrafts.</li>
            <li className='my-1 pl-1 ml-1 mt-2 text-justify'><span className='mr-2'><img src={design} className='h-4 inline'/></span>Designing.</li>
          </ul>
          ):("")}
        </section>
      <section>
        <S/>
      </section>
    </div>
  )
}

export default P
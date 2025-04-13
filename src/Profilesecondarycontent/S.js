import React from 'react'
import Skill from "../image/dev-icon-71.svg"
import About from "../image/about-icon-233.svg"
function S() {
  return (
    <div className='container-sm I-A mt-1'>
      <div className=' container-sm rounded-xl bg-blue-100 h-full shadow-inner p-2'>
        <span className='z-[99] rounded-xl'>
          <span className='z-10'>
            <b className=' text-md font-[fantasy] tracking-wider shadow text-green-400 p-1 bg-white border-b-4 border-r-2 rounded'><img className='h-4 inline mr-2' src={About} />About me .</b></span>
        </span>
        <p className='indent-12 leading-loose my-2 text-sm transition-all duration-300 rounded-xl text-gray-500 p-2 mx-auto bg-white border-b-4 border-r-2 shadow-md hover:scale-[1.01] h-full w-fit break-words font-sans '>Hello! 👋 I'm a passionate software developer with 2+ years of experience, currently working in <a className='text-purple-500' href='https://web.loyaltri.com/' target='blank'>Loyaltri HRMS</a> at Cordova Cloud Solutions. I hold a Bachelor’s in Computer Science from Amrita College of Engineering and specialize in building scalable web applications.</p>
      </div>
      <section className='container-sm I-A bg-green-200 rounded-xl mt-1'>
        <div className='flex items-center gap-1 tracking-wider bg-white border-b-4 p-1 text-[#108edc] drop-shadow-lg'>
          <img className='h-4 inline ' src={Skill} />
          <b className='font-[fantasy] text-sm'>SKILLS</b>
        </div>
        <div className='flex-wrap flex gap-3 p-1 drop-shadow-sm'>
          <small className='shadow my-1 px-2 py-1 inline border-b-4 rounded-lg text-red-400 bg-white'>HTML</small>
          <small className='shadow my-1 px-2 py-1 inline border-b-4 rounded-lg text-blue-400 bg-white'>CSS</small>
          <small className='shadow my-1 px-2 py-1 inline border-b-4 rounded-lg text-yellow-400 bg-white'>REACT JS</small>
          <small className='shadow my-1 px-2 py-1 inline border-b-4 rounded-lg text-green-400 bg-white'>JAVASCRIPT</small>
          <small className='shadow my-1 px-2 py-1 inline border-b-4 rounded-lg text-pink-400 bg-white'>REDUX</small>
          <small className='shadow my-1 px-2 py-1 inline border-b-4 rounded-lg text-gray-400 bg-white'>TAILWIND</small>
          <small className='shadow my-1 px-2 py-1 inline border-b-4 rounded-lg text-purple-400 bg-white'>BOOTSTRAP</small>
          <small className='shadow my-1 px-2 py-1 inline border-b-4 rounded-lg text-indigo-400 bg-white'>PRIMEREACT</small>
          <small className='shadow my-1 px-2 py-1 inline border-b-4 rounded-lg text-cyan-400 bg-white'>ANT D</small>
          <small className='shadow my-1 px-2 py-1 inline border-b-4 rounded-lg text-red-400 bg-white'>MongoDb</small>
          <small className='shadow my-1 px-2 py-1 inline border-b-4 rounded-lg text-blue-400 bg-white'>Express</small>
        </div>
      </section>
    </div>
  )
}

export default S
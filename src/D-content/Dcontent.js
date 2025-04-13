import React, { useContext, useEffect, useMemo } from 'react'
import Preview from "../image/dev-icon-226.svg"
import college from "../image/college.jpg"
import school from "../image/school.jpg"
import { AppContext } from '../App'
function Dcontent() {
    const {ev} = useContext(AppContext)
    const ref = React.useRef(null)
  useEffect(() => {
    if(!ev && ref.current) {
      const element = ref.current;
      const rect = element.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.scrollY - 100,
        behavior: 'smooth'
      });
    }
  }, [ev])
  
  return (
    <div className=' rounded-xl' ref={ref}>
      <section className='grid grid-flow-col gap-2'>
        <h1 className='tracking-wider bg-gray-100 text-gray-500 text-center rounded-t-xl font-[fantasy] drop-shadow-sm px-2 py-4 flex gap-2 items-center'>
          <span className=''>EDUCATION PREVIEW</span>
          <img className='inline h-4 hover:bg-gray-200  hover:scale-110 drop-shadow-none' src={Preview} />
        </h1>
      </section>
      <section className='rounded-b-xl border-b-8 grid D-contente mx-auto items-center h-[90%]'>
        <div className='flex flex-wrap bg-gradient-to-r from-gray-100 from-45% via-white via-10% to-white to-50% justify-between items-center h-[100%]'>
            <img className=' w-[44%] cursor-pointer b h-full D-content D-content1 brightness-50 hover:brightness-100 shadow drop-shadow-lg A' src={college} alt="" />
          <span className=' w-3/6 D-content bg-white rounded-lg '>
            <h1 className='text-lg'>Amrita College Of Engineering and Technology</h1>
            <h1 className=' my-1 text-[small] text-blue-400'>Erachakulam</h1>
            <p className='text-justify text-[small] w-[90%] mx-auto my-4 bg-gray-100 p-2'>Amrita College of Engineering & Technology, formerly Sun College of Engineering, is an engineering college located in Nagercoil in Kanyakumari district, Tamil Nadu, India. It was established by the ACP education trust, Nagercoil in 1999. It was acquired by Amrita Institutions and renamed in 2018.</p>
            <p><b className='font-mono text-gray-700'>CGPA </b>: <b className='text-green-400'>7.6</b></p>
          </span>
        </div>
        <div className='flex flex-wrap bg-gradient-to-r from-gray-100 from-45% via-white via-10% to-white to-50% justify-between items-center h-[100%]'>
            <img className=' w-[44%] cursor-pointer b h-full D-content D-content1 brightness-50 hover:brightness-100 shadow drop-shadow-lg B' src={school} alt="" />
          <span className=' w-3/6 D-content bg-white rounded-lg '>
            <h1 className='text-lg'>Kumari Metriculation Higher Secondary School</h1>
            <h1 className=' my-1 text-[small] text-blue-400'>Kottar</h1>
            <p className='text-justify text-[small] w-[90%] mx-auto my-4 bg-gray-100 p-2'>
              Kumari Matriculation Higher Secondary School is an excellent academic Institution with glorious history dating back I st May 2002. The Institution has opened up promoting academic carrier to the aspiring youth of Kanyakumari Dist.he history of Kumari is in essence of history of ideas, vigour and hand work.
            </p>
            <p><b className='font-mono text-gray-700 mr-2'>HSC  </b> : 58<b className='text-green-400'> %</b></p>
            <p><b className='font-mono text-gray-700 '>SSLC </b>: 85<b className='text-green-400'> %</b></p>
          </span>
        </div>
      </section>
    </div>
  )
}

export default Dcontent;
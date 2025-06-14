import { CoolMode } from '@/components/animation/cool-mode';
import { Send } from 'lucide-react';
import React from 'react';

const Contact = () => {
  return (
    <div className='relative h-screen bg-gradient-to-b from-black/10 to-black z-50'>
      <div className='h-full lg:h-3/4 w-full bg-black/50 lg:border border-white/10 backdrop-blur-xl md:rounded-t-full absolute bottom-0 flex items-center justify-center'>
        <div className='relative flex flex-col items-center justify-center gap-8 w-full px-4 py-8 md:py-0'>
          <h2 className="text-4xl md:text-5xl font-koulen z-50 text-white mx-[2%] w-fit bg-black py-4">
            Contact Me
          </h2>

          <div className='w-full md:w-1/2 space-y-8 flex flex-col items-center'>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-4 text-white !bg-transparent border-b border-white focus:outline-none focus:border-blue-500
                        [-webkit-text-fill-color:_white] 
                        [&:-webkit-autofill]:!bg-transparent
                        transition-[background-color] duration-[5000s] ease-[ease] delay-[0s]"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 text-white !bg-transparent border-b border-white focus:outline-none focus:border-blue-500
                        [-webkit-text-fill-color:_white] 
                        [&:-webkit-autofill]:!bg-transparent
                        transition-[background-color] duration-[5000s] ease-[ease] delay-[0s]"
            />

            <CoolMode>
              <button className="rounded-2xl border-2 border-dashed border-white bg-black px-6 py-3 font-semibold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                <Send/>
              </button>
            </CoolMode>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
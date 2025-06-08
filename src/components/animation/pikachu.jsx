import React from "react";

const RunningPikachu = () => {
  return (
    <div className="relative w-16 h-12 mx-auto">
      {/* Animation container */}
      <div className="relative h-full animate-[run_0.6s_infinite_steps(6)]">
        {/* Frame 1 */}
        <div className="absolute inset-0 frame-1">
          {/* Body */}
          <div className="absolute w-10 h-8 bg-yellow-400 rounded-full top-1 left-3"></div>
          {/* Ears */}
          <div className="absolute w-2 h-3 bg-yellow-400 -top-1 left-4 transform -rotate-12"></div>
          <div className="absolute w-2 h-3 bg-yellow-400 -top-1 left-7 transform rotate-12"></div>
          {/* Tail */}
          <div className="absolute w-4 h-2 bg-yellow-400 top-3 left-0 transform rotate-12"></div>
          {/* Face */}
          <div className="absolute w-2 h-1 bg-black top-4 left-5"></div>
          <div className="absolute w-2 h-1 bg-black top-4 left-8"></div>
          {/* Cheeks */}
          <div className="absolute w-2 h-2 bg-red-400 rounded-full top-5 left-3"></div>
          <div className="absolute w-2 h-2 bg-red-400 rounded-full top-5 left-10"></div>
          {/* Legs */}
          <div className="absolute w-2 h-3 bg-yellow-400 bottom-0 left-4"></div>
          <div className="absolute w-2 h-2 bg-yellow-400 bottom-0 left-7"></div>
        </div>

        {/* Frame 2 (mid-stride) - hidden by default */}
        <div className="absolute inset-0 opacity-0 frame-2">
          {/* Adjusted body position */}
          <div className="absolute w-10 h-8 bg-yellow-400 rounded-full top-2 left-3"></div>
          {/* Ears */}
          <div className="absolute w-2 h-3 bg-yellow-400 -top-1 left-4 transform -rotate-6"></div>
          <div className="absolute w-2 h-3 bg-yellow-400 -top-1 left-7 transform rotate-6"></div>
          {/* Tail */}
          <div className="absolute w-4 h-2 bg-yellow-400 top-4 left-0 transform rotate-6"></div>
          {/* Face */}
          <div className="absolute w-2 h-1 bg-black top-5 left-5"></div>
          <div className="absolute w-2 h-1 bg-black top-5 left-8"></div>
          {/* Cheeks */}
          <div className="absolute w-2 h-2 bg-red-400 rounded-full top-6 left-3"></div>
          <div className="absolute w-2 h-2 bg-red-400 rounded-full top-6 left-10"></div>
          {/* Legs - mid stride */}
          <div className="absolute w-2 h-2 bg-yellow-400 bottom-0 left-4 transform -rotate-12"></div>
          <div className="absolute w-2 h-3 bg-yellow-400 bottom-0 left-7 transform rotate-12"></div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes run {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(4px);
          }
        }
        .frame-1 {
          animation: frame1 0.6s infinite;
        }
        .frame-2 {
          animation: frame2 0.6s infinite;
        }
        @keyframes frame1 {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        @keyframes frame2 {
          0%, 50%, 100% { opacity: 0; }
          25%, 75% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default RunningPikachu;
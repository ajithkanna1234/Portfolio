import React from 'react'
import "../index.css"
export default function Loading() {
  return (
    <div className=' h-full grid gap-2 grid-flow-col items-center justify-center'>
        <div>Loading</div>
        <div className='bg-green-400 animate-bounce loading rounded-full h-2 w-2'></div>
        <div className='bg-blue-400 animate-bounce loading rounded-full h-2 w-2'></div>
        <div className='bg-amber-400 animate-bounce loading rounded-full h-2 w-2'></div>
    </div>
  )
}

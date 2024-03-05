import React from 'react'
import { useState } from 'react'


function State() {
  const [color,setcolor] = useState("")
  const handleOn = () =>{
    setcolor("blue")
  }
  const handleOf=() =>{
    setcolor("white")
  }

  return (
    <div>
      <div style={{backgroundColor: color}} className='w-[300px] h-[300px] border-2 border-black rounded-full ml-[640px] mt-16'></div>
    <div  className=' text-center gap-2 mt-3 text-white'>
    <button onClick={handleOn} className='bg-orange-500 px-5 py-5 mr-3'>NO</button>
      <button onClick={handleOf} className='bg-orange-500 px-5 py-5'>OFF</button>
    </div>
  
    </div>
  )
}






export default State

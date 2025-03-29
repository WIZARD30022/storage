import React from 'react'

const navbar = () => {
  return (
    <div className='flex justify-between bg-purple-800 text-white py-2'>
        <div>
            <span className='font-bold text-xl  mx-10'>iTask</span>
        </div>
        <ul className='flex gap-5 mx-10'>
            <li className='cursor-pointer hover:font-bold transition-all duration-75'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-75'>Your Task</li>
        </ul>
    </div>
      
  )
}

export default navbar

// rafc mave basic structure for navbar
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-violet-700 text-white py-2">
        <div className='logo p-0'>
            <span className='font-bold text-xl mx-8'>iTask</span>
        </div>
        <ul className='flex gap-8 mx-9'>
            <li className='cursor-pointer hover:font-bold transition-all duration-1000  '>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-1000  '>Your tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar


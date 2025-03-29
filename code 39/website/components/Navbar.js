import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between mx-4 bg-slate-800 text-white py-3 px-2">
        <div className="logo font-bold">Facebook</div>
        <ul className="flex gap-2 text-sm">
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar is rendered")
  return (
    <div>
      I am an {adjective} Navbar
      <button onClick={() => {getAdjective()}}> change </button>
    </div>
  )
}

export default memo(Navbar)

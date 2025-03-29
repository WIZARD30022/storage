import React, {useEffect} from 'react'
import './Navbar.css'

const Navbar = ({color}) => {

    useEffect(() => {
      alert("colour changed")
    }, [color])

  return (
    <div className='nav-div'>
        <ol>
            <li>Home {color}</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Inquary</li>
        </ol>
    </div>
  )
}

export default Navbar
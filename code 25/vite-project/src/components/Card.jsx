import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="" width={216} height={200} style={{border: "2px solid black"}}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card

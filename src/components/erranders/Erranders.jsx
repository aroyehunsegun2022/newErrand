import React from 'react'
import { Link } from 'react-router-dom'
import "./erranders.css"

const Erranders = (props) => {
  return (
    <div className='er_erranders'>
        <div className='er__erranders-container'>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <Link to='' className='erranders-btn' >Signup</Link>
        </div>
    </div>
  )
}

export default Erranders
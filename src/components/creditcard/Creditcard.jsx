import React from 'react'
import "./creditcard.css"

const Creditcard = (props) => {
  return (
    <div className='er__creditcard' onClick={props.onclick}>
        <div>
            <img src={props.pic} alt='card type' />
        </div>
        <div>
            <h3>{props.name}</h3>
        </div>
    </div>
  )
}

export default Creditcard
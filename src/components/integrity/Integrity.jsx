import React from 'react'
import "./integrity.css"

const Intergrity = ({image, title, content}) => {
  return (
    <div className='er__integrity'>
        <div className='er__integrity-image'>
            <img src={image} alt='integrity' className='int-pic' />
        </div>
        <div className='er__integrity-content'>
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default Intergrity
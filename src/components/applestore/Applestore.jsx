import React from 'react'
import "./applestore.css"
import applestore from "../../assets/applestore.png"

const Applestore = () => {
  return (
    <div className='er__applestore'>
        <img src={applestore} alt='apple store'/>
        <div className='er__content'>
            <p>Download on</p>
            <h4>Apple Store</h4>
        </div>
    </div>
  )
}

export default Applestore
import React from 'react'
import "./googlestore.css"
import googleplay from "../../assets/playstore.png"

const Googlestore = () => {
  return (
    <div className='er__googlestore'>
        <p>Get it on</p>
        <img src={googleplay} alt='google playstore' />
        <h6>Google Play</h6>
    </div>
  )
}

export default Googlestore
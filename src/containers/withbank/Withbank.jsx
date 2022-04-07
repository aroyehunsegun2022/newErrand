import React from 'react'
import "./withbank.css"

const Withbank = () => {
  return (
    <div className='er__withbank'>
            <h1>Top up with Bank</h1>
            <div className='er__withbank-card'>
                <h2>Bank acc number here</h2>
                <h2>Bank name here</h2>
            </div>
            <p>Sending money into this account automatically reflects in your wallet</p>
    </div>
  )
}

export default Withbank
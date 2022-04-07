import React from 'react'
import "./walletmodal.css"

const Walletmodal = ( { setOpenModal } ) => {
  return (
    <div className='er__walletmodal'>
        <div className='er__walletmodal_container'>
            <div className='er__walletmodal_closebtn'>
            <button
                    onClick={() => {
                    setOpenModal(false);
                    }}
                >
                    X
                </button>
            </div>
            <div className='er__walletmodal_body'>
                <a href='/paywithbank'>Pay using Bank</a>
                <a href='/paywithcard'>Pay using Card</a>
            </div>
        </div>
    </div>
  )
}

export default Walletmodal
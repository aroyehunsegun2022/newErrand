import React from 'react'
import { Creditcard } from "../../components"
import "./wallet.css"

const Wallet = () => {
  return (
    <div className='er__wallet'>
        <div className='er__wallet-container'>
            <div className='top'>
                <h2>Cards</h2>
                <h2>Bank</h2>
            </div>
            <hr />
            <div className='middle'>
                <Creditcard />
                <Creditcard />
                <Creditcard />
            </div>
            <button>top up wallet</button>
        </div>
    </div>
  )
}

export default Wallet
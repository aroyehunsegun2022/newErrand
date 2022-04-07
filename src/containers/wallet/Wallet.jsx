import React, { useState } from 'react'
import { Creditcard, Walletmodal } from "../../components"
import "./wallet.css"

const Wallet = () => {
  const [walletmodalOpen, setWalletmodalOpen] = useState(false);
  return (
    <div className='er__wallet'>
    {walletmodalOpen && <Walletmodal setOpenModal={setWalletmodalOpen} />}
        <div className='er__wallet-container'>
                <Creditcard name='Top up wallet' onclick={() => {setWalletmodalOpen(true);}} />
                <Creditcard name='Transfer to wallet' />
                <Creditcard name='Transfer to bank' />
        </div>
        <div></div>
    </div>
  )
}

export default Wallet
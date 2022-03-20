import React from 'react'
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import './paymentcomp.css'

const Paymentcomp = () => {
  return (
    <div className='er__paymentcomp'>
        <div className='er__paymentcomp-container'>
            <h1>2,300</h1>
            <div className='paycash'>
                <a href='d'><PaymentIcon sx={{ marginRight: 1}} />Pay cash</a>
            </div>
            <button className='firstbtn'>Complete</button>
            <div className='paywith-wallet'>
                <a href='d'><AccountBalanceWalletIcon sx={{ marginRight: 1}} />Pay with wallet</a>
            </div>
            <div className='btn-container-box'>
                <button className='secondbtn'>Pay</button>
                <button className='thirdbtn'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Paymentcomp
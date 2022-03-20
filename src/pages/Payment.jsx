import React from 'react'
import { Navbar, Paymentcomp } from "../components"
import "./pages.css"

const Payment = () => {
  return (
    <div className=''>
        <Navbar />
        <div className='er__payment'>
            <Paymentcomp />
            <p><a href='v'>By tapping "PAY NOW" I accept Jumia's Payment Terms & Conditions, General Terms and Conditions, and Privacy and Cookie Notice</a></p>
        </div>
    </div>
  )
}

export default Payment
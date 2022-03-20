import React from 'react'
import { Navbar, Completepayment } from "../components"
import "./pages.css"

const Paymentsuccess = () => {
  return (
    <div>
        <Navbar />
        <div className='er__paymentsuccess'>
            <Completepayment />
        </div>
    </div>
  )
}

export default Paymentsuccess
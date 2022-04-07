import React from 'react'
import { Navbar, Sidebar } from "../components"
import { Withbank } from "../containers"
import "./pages.css"

const Paywithbank = () => {
  return (
    <div>
        <div>
            <Navbar />
            <div className='er__dashboard'>
                <Sidebar />
                <Withbank />
            </div>
        </div>
    </div>
  )
}

export default Paywithbank
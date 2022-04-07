import React from 'react'
import { Navbar, Sidebar } from "../components"
import { Withcard } from "../containers"
import "./pages.css"

const Paywithcard = () => {
  return (
    <div>
        <div>
            <Navbar />
            <div className='er__dashboard'>
                <Sidebar />
                <Withcard />
            </div>
        </div>
    </div>
  )
}

export default Paywithcard
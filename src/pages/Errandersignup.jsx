import React from 'react'
import { Errandersignupform, Footer } from "../containers"
import { Navbar } from "../components"
import './pages.css'

const Errandersignup = () => {
  return (
      <div>
        <Navbar />
        <div className='er__errandersignup'>
            <Errandersignupform />
        </div>
        <Footer />
      </div>
  )
}

export default Errandersignup
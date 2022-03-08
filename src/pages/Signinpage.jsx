import React from 'react'
import { Navbar } from "../components"
import { Signinform, Download, Footer } from "../containers"

const Signinpage = () => {
  return (
    <div>
        <Navbar />
        <Signinform />
        <Download />
        <Footer />
    </div>
  )
}

export default Signinpage
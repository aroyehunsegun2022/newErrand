import React from 'react'
import { Hero, Who, Features, Download, Footer } from "../containers"
import { Navbar } from "../components"
import "./pages.css"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Who />
        <Features />
        <Download />
        <Footer />
    </div>
  )
}

export default Home
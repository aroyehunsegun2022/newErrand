import React from 'react'
import { Link } from 'react-router-dom'
import { Googlestore, Applestore } from "../../components"
import "./download.css"

const Download = () => {
  return (
    <div className='er__download'>
        <div className='er__download-message'>
            <h2>HOW TO DOWNLOAD THE APP?</h2>
            <p>You can click the link to download our app which is available on both playstore for androids and appstore for apple Iphones</p>
        </div>
        <div className='er__download-platforms'>
        <Link to='/'> <Googlestore /> </Link>
        <Link to="/"> <Applestore /> </Link>
        </div>
    </div>
  )
}

export default Download
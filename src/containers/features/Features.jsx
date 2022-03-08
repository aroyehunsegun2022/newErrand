import React from 'react'
import { Integrity } from "../../components"
import bestseller from "../../assets/bestseller.png"
import deliverytime from "../../assets/deliverytime.png"
import easyuse from "../../assets/easyuse.png"
import bigphone from "../../assets/phone2.png"
import smallphone from "../../assets/phone1.png"
import "./features.css"

const Features = () => {
  return (
    <div className='er__features'>
        <div className='er__features-container'>
            <div className='er__features-content'>
                <h1>e-Errand APP</h1>
                <p>FEATURES</p>
            </div>
            <div className='er__features-image-container'>
                {/* <div className='big-image'> */}
                    <img src={bigphone} alt='eerrand' className='big-image' />
                    <img src={smallphone} alt='eerrand' className='small-image' />
                {/* </div> */}
                {/* <div className='small-image'>
                    <img src={smallphone} alt='eerrand' />
                </div> */}
            </div>
        </div>
        <div className='er__features-integrity'>
            <Integrity image={easyuse} title="Easy to Use" content="The application is designed in such a way that a four year old can easily navigate through it" />
            <Integrity image={bestseller} title="Best price" content="Each Eerrands posted are worth every bits of their value, both suitable to the Eerrandee and Eerrander" />
            <Integrity image={deliverytime} title="TImely delivery" content="Instantaneous errand running is guaranteed their value, both suitable to the Eerrandee and Eerrander" />
        </div>
    </div>
  )
}

export default Features
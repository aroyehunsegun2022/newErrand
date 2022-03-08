import React, {useState} from 'react'
import { Errandform, Indoorform } from "../../components"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./hero.css"

const Hero = () => {
    const [ showForm, setShowForm] = useState("indoorForm")
  return (
    <div className='er__hero'>
        <div className='er__hero-content'>
            <h1>Lorem ipsum</h1>
            <p>dolor sit amet, consectetur adipiscing elit,</p>
        </div>
        <div className='er__hero-errands'>
            <div className='er_hero-errands-form-container'>
                <div className='errand-buttons'>
                    <button onClick={() => setShowForm("indoorForm")} >Indoor</button>
                    <button onClick={() => setShowForm("outdoorForm")} >Outdoor</button>
                    <button onClick={() => setShowForm("artisanForm")} className='artisan-btn' >Artisan</button>
                </div>
                <div className='errand-form-body'>
                    {showForm === "indoorForm" &&  <div className='errands indoor'>
                            <div className='request-title'>
                                <h3>Request Errand</h3>
                                <p><ArrowDropDownIcon sx={{ fontSize: 18, marginLeft: 1, marginTop: 1 }} /></p>
                            </div>
                            <Indoorform title="Request Errand" placeholder1="Enter Location" placeholder3="Errand Description" />
                        </div>}
                    {showForm === "outdoorForm" && <div className='errands outdoor'>
                            <div className='request-title'>
                                <h3>Request Errand</h3>
                                <p><ArrowDropDownIcon sx={{ fontSize: 18, marginLeft: 1, marginTop: 1 }} /></p>
                            </div>
                            <Errandform placeholder1="Enter Pick-up location" placeholder2="Enter Destination" placeholder3="Errand Description" />
                        </div>}
                    {showForm === "artisanForm" && <div className='errands artisan'>
                            <div className='request-title'>
                                <h3>Select Artisan</h3>
                                <p><ArrowDropDownIcon sx={{ fontSize: 18, marginLeft: 1, marginTop: 1 }} /></p>
                            </div>
                            <Indoorform title="Request Errand" placeholder1="Enter Location" placeholder3="Errand Description" />
                        </div>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
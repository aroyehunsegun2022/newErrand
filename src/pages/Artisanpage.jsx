import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Navbar, Indoorform } from "../components"
import { Selecterrandees} from "../containers"
import './pages.css'

const Artisanpage = () => {
    const [showErrandees, setShowErrandees] = useState(false)
  return (
      <div>
        <Navbar />
        <div className='er__errandpages'>
            <div className='er__errandpages-formbody'>
                <div className='form-title'>
                    <h2>Artisan Errand</h2>
                </div>
                <div className='form-field'>
                    <div className='request-title'>
                        <h3>Request Errand</h3>
                        <p><ArrowDropDownIcon sx={{ fontSize: 18, marginLeft: 1, marginTop: 1 }} /></p>
                    </div>
                    <Indoorform handleclick={(event) => {event.preventDefault(); setShowErrandees(true)}} title="Request Errand" placeholder1="Enter Location" placeholder3="Errand Description" />
                </div>
            </div>
            <div className='er__errandpages-errbody'>
                {showErrandees ? <Selecterrandees /> : null}
                {/* <Selecterrandees /> */}
            </div>
        </div>
      </div>
    
  )
}

export default Artisanpage
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Navbar, Errandform } from "../components"
import { Selecterrandees} from "../containers"
import './pages.css'

const Outdoorpage = () => {
    const [showErrandees, setShowErrandees] = useState(false)
  return (
      <div>
        <Navbar />
        <div className='er__errandpages'>
            <div className='er__errandpages-formbody'>
                <div className='form-title'>
                    <h2>Outdoor Errand</h2>
                </div>
                <div className='form-field'>
                    <div className='request-title'>
                        <h3>Request Errand</h3>
                        <p><ArrowDropDownIcon sx={{ fontSize: 18, marginLeft: 1, marginTop: 1 }} /></p>
                    </div>
                    <Errandform handleclick={(event) => {event.preventDefault(); setShowErrandees(true)}} placeholder1="Enter Pick-up location" placeholder2="Enter Destination" placeholder3="Errand Description" />
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

export default Outdoorpage
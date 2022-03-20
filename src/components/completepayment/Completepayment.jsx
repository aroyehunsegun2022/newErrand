import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import "./completepayment.css"

const Completepayment = () => {
  return (
    <div className='er__completepayment'>
        <div className='er__completepayment-container'>
            <h2>Payment Sent</h2>
            <div>
                <p className='icon-background'><DoneIcon sx={{ fontSize: 150 }} /></p>
            </div>
            <p className='backto-profile'><a href='v'>go back to profile</a></p>
            <a className='experience' href='c'>Would you like to share your experience? Click here</a>
        </div>
    </div>
  )
}

export default Completepayment
import React, { useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './sidebar.css'

const Sidebar = () => {
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(!showResults)
  return (
    <div className='er__sidebar'>
        <div className='er__sidebar-container'>
            <div className='er__sidebar-container-top'>
                <div className='er__sidebar-container-top-profile'>
                    <img src='' className='' alt='profile pic' />
                </div>
                <div className='er__sidebar--container-info'>
                    <h2>Lorem Ipsum <CheckCircleIcon sx={{ fontSize: 30, marginLeft: 1}} /></h2>
                    <p>View Profile</p>
                    <h1>N0.00</h1>
                    <p>Wallet balance</p>
                </div>
            </div>
            <div className='er__sidebar-container-bottom'>
                <p onClick={onClick}><SquareRoundedIcon sx={{ fontSize: 20, marginRight: 1}} />Errand categories<ArrowDropDownIcon sx={{ fontSize: 22, marginLeft: 1, marginTop: 1 }} /></p>
                { showResults ? 
                    <div className='errands'>
                        <p><SquareRoundedIcon sx={{ fontSize: 20, marginRight: 1}} /><a href='/indoorerrand'>Indoor errand</a></p>
                        <p><SquareRoundedIcon sx={{ fontSize: 20, marginRight: 1}} /><a href='/outdoorerrand'>Outdoor errand</a></p>
                        <p><SquareRoundedIcon sx={{ fontSize: 20, marginRight: 1}} /><a href='/artisanerrand'>Artisan errand</a></p>
                    </div>
                 : null }
                <p><SquareRoundedIcon sx={{ fontSize: 20, marginRight: 1}} />Payment</p>
                <p><SquareRoundedIcon sx={{ fontSize: 20, marginRight: 1}} />History</p>
                <p><SquareRoundedIcon sx={{ fontSize: 20, marginRight: 1}} />Dispute/Ticket</p>
                <p><SquareRoundedIcon sx={{ fontSize: 20, marginRight: 1}} />Update Profile</p>
                <p><SquareRoundedIcon sx={{ fontSize: 20, marginRight: 1}} />Switch Role</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
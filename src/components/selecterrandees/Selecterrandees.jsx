import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GradeIcon from '@mui/icons-material/Grade';
import './selecterrandees.css'

const Selecterrandees = () => {
    
  return (
    <div className='er__selecterrandees'>
        <div className='er__selecterrandees-container'>
            <div className='er__selecterrandees-each'>
                <div className='er__sidebar-container-each-profile'>
                    <img src='' className='' alt='profile pic' />
                </div>
                <div className='er__sidebar--container-deets'>
                    <h5>Lorem Ipsum <CheckCircleIcon sx={{ fontSize: 18, marginLeft: 1}} /></h5>
                    <p>View Profile <span>20m away</span></p>
                    <p><GradeIcon sx={{ fontSize: 18}} /></p>
                    <button className="mybtn">Request</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Selecterrandees
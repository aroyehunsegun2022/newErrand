import React from 'react'
import GradeIcon from '@mui/icons-material/Grade';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './location.css'

const Location = () => {
  return (
    <div className='er__location'>
        <div className='er__location-container'>
            <div className='er__location-box'>
                <div className='er__location1'>
                    <div className='er__eacherrandee-container-bottom-reviews-profile-pic'>
                        <img src='' className='' alt='profile pic' />
                    </div>
                    <div className='er__eacherrandee-container-bottom-reviews-content'>
                        <h5>Lorem Ipsum <CheckCircleIcon sx={{ fontSize: 25, marginLeft: 1}} /></h5>
                        <p>Iyana-Ipaja - Bus stop</p>
                        <p><GradeIcon sx={{ fontSize: 18}} /></p>
                        <p className='phoneno'>07076874532</p>
                    </div>
                </div>
                <div className='line'></div>
                <div className='er__location1'>
                    <div className='er__eacherrandee-container-bottom-reviews-profile-pic'>
                        <img src='' className='' alt='profile pic' />
                    </div>
                    <div className='er__eacherrandee-container-bottom-reviews-content'>
                        <h5>Lorem Ipsum <CheckCircleIcon sx={{ fontSize: 25, marginLeft: 1}} /></h5>
                        <p>Iyana-Ipaja - Bus stop</p>
                        <p><GradeIcon sx={{ fontSize: 18}} /></p>
                        <p className='phoneno'>07076874532</p>
                    </div>
                </div>
                <div className='complete-cancel'>
                    <button className='completebtn'>Complete</button>
                    <button className='cancelbtn'>Cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Location
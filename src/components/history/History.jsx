import React from 'react'
import SquareIcon from '@mui/icons-material/Square';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./history.css"

const History = () => {
  return (
    <div className='er__history'>
        <div className='er__history-container'>
            <div className='er__history-each'>
                <p><SquareIcon sx={{ fontSize: 13, marginRight: 1}} /></p>
                <div className='er__history-container-deets'>
                    <h3>Lorem ipsum</h3>
                    <h5>January 15 11:20am</h5>
                    <p>cancelled errand</p>
                </div>
                <p><ArrowForwardIosIcon sx={{ fontSize: 8, marginLeft: 10}} /></p>
            </div>
        </div>
    </div>
  )
}

export default History
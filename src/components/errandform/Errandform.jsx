import React from 'react'
import SquareIcon from '@mui/icons-material/Square';
import "./errandform.css"

const Errandform = (props) => {
  return (
    <div className='er__errandform'>
        <div className='er__errandform-inputs'>
            <form>
                <div>
                    <SquareIcon sx={{ fontSize: 8, marginRight: 1, marginTop: 1, color:'grey' }} />
                    <input placeholder={props.placeholder1} type="text" className='location' />
                </div><br />
                <div>
                    <SquareIcon sx={{ fontSize: 8, marginRight: 1, marginTop: 1 }} />
                    <input placeholder={props.placeholder2} type="text" className='location' />
                </div><br />
                <div>
                    <input placeholder={props.placeholder3} type="text" className='description' />
                </div><br />
                <button onClick={props.handleclick} className='request-btn' >Request</button>
            </form>
        </div>
    </div>
  )
}

export default Errandform
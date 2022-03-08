import React from 'react'
import SquareIcon from '@mui/icons-material/Square';
// import { Selecterrandees} from "../../containers"
import "./indoorform.css"

const Indoorform = (props) => {
  
  return (
    <div className='er__indoorform' >
        <div className='er__indoorform-input' >
        <form>
                <div>
                    <SquareIcon sx={{ fontSize: 8, marginRight: 1, marginTop: 1, color:'grey' }} />
                    <input placeholder={props.placeholder1} type="text" className='location' />
                </div><br />
                <div>
                    {/* <textarea placeholder={props.placeholder3} type="text" className='description'></textarea> */}
                    <input placeholder={props.placeholder3} type="text" className='description' />
                </div><br />
                <button onClick={props.handleclick} className='request-btn' >Request</button>
            </form>
        </div>
    </div>
  )
}

export default Indoorform
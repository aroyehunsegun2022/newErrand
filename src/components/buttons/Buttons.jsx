import React from 'react'
// import { Link } from 'react-router-dom'
import "./buttons.css"

const Buttons = (props) => {
  return (
    <div className='er__buttons'>
        <a href={props.url} className='signinbtn'>{props.title}</a>
        {/* <button className=''></button> */}
        <p>{props.content}</p>
        <a href='x' className='note'>Already Have an Account? Sign in</a>  
    </div>
  )
}

export default Buttons
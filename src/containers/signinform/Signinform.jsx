import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import './signinform.css'
import logo from "../../assets/eerrand.png"

const Signinform = () => {
  return (
        <div className='er__signinform'>
            <div className='er__signinform-logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='er__signinform-form'>
                <form>
                    <input type='email' placeholder='Email Address' className='form-control' />
                    <input type='password' placeholder='Password' className='form-control' />
                    <button className='btn'>Sign in</button>
                </form>
                <div className='other-links'>
                    <p><a href='reset'>Forgot Password? Click here</a></p>
                    <div className='faang'>
                        <p>Sign in with </p>
                        <a href='s'><FacebookIcon sx={{ fontSize: 30, marginRight: 1 }} /></a>
                        <a href='s'><GoogleIcon sx={{ fontSize: 30, marginRight: 1 }} /></a>
                    </div>
                    <p className='have'><a href='f' className='no-account'>Dont have an Account? Sign up</a></p>
                </div>
            </div>
        </div>
  )
}

export default Signinform
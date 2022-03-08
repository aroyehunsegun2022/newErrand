import React from 'react'
import './errandersignupform.css'

const Errandersignupform = () => {
  return (
    <div className='er__errandersignform'>
        <div className='er__errandersignform-content'>
            <h1>Need someone to run your errands?</h1>
            <p>dolor sit amet, consectetur adipiscing elit,</p>
        </div>
        <div className='er__errandersignform-form'>
            <h3>Sign up Now</h3>
            <form>
                <input type='text' className='form-control' placeholder='Firstname'/>
                <input type='text' className='form-control' placeholder='Lastname'/>
                <input type='email' className='form-control' placeholder='Email'/>
                <input type='text' className='form-control' placeholder='Phone Number'/>
                <input type='password' className='form-control' placeholder='Password'/>
                <input type='password' className='form-control' placeholder='Confirm Password'/>
                <div>
                    <input type='checkbox' />
                    <label><a href='ddf'>By proceeding, I agree to e-Errand's Terms of Use and acknowledge that I have read the Privacy Policy</a></label>
                </div>
                <button className='signupbtn1'>Signup</button>
            </form>
            <p><a href='dfd'>Already have an account? Sign in</a></p>
        </div>
    </div>
  )
}

export default Errandersignupform
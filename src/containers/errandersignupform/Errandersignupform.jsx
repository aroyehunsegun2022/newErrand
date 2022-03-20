import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import './errandersignupform.css'

const Errandersignupform = () => {

    const [addfname, setAddFname] = useState('')
    const [addlname, SetAddLname] = useState('')
    const [addemail, setAddEmail] = useState('')
    const [addphone, setAddPhone] = useState('')
    const [addpassword, setAddPassword] = useState('')
    const [addaddress, setAddAddress] = useState('')
    const navigate = useNavigate()

    const handleFnameChange = (event) => {
        setAddFname(event.target.value)
        console.log(addfname)
    }

    const handleLnameChange = (event) => {
        SetAddLname(event.target.value)
        console.log(addfname)
    }

    const handleEmailChange = (event) => {
        setAddEmail(event.target.value)
        console.log(addemail)
    }

    const handlePhoneChange = (event) => {
        setAddPhone(event.target.value)
        console.log(addemail)
    }

    const handlePasswordChange = (event) => {
        setAddPassword(event.target.value)
        console.log(addpassword)
    }

    const handleAddressChange = (event) => {
        setAddAddress(event.target.value)
        console.log(addaddress)
    }

    function signUp()
    {
        let item = {addfname, addlname, addemail, addphone,addpassword,addaddress}
        console.log(item)
    }

    // async function handleSubmit(){
    //     let result = await fetch("http://127.0.0.1:5000/register" , {
    //         method:'POST',
    //         mode: 'cors',
    //         headers: {"Content-Type": "application/json", 'Access-Control-Allow-Origin': '*', "accept": "application/json"}, 
    //         body: JSON.stringify({addfname, addlname, addemail, addphone, addpassword, addaddress})
    //     })
    //     result = await result.json()
    //     console.log("result", result)
    //     localStorage.setItem("user-info",JSON.stringify(result))
    //     navigate.push("/signin")
    // }

    // const handleSubmit = ()=>{
    //     fetch("http://127.0.0.1:5000/register" , {
    //         method:'POST',
    //         mode: 'cors',
    //         headers: {"Content-Type": "application/json", 'Access-Control-Allow-Origin': '*', "accept": "application/json"}, 
    //         body: JSON.stringify({addfname, addlname, addemail, addphone, addpassword, addaddress})
    //     }).then(response => response.json())
    //     .then(message => console.log(message))
    //     // localStorage.setItem("user-info",JSON.stringify(response))
    //     navigate.push("/signin")
    // }

    // const handleSubmit = (event)=> {
        
    //     event.preventDefault()
    //     // const formdeets = {addfname, addemail, addmsg}
    //     fetch("http://127.0.0.1:5000/api/send/", {
    //         method:'POST',
    //         mode: 'cors',
    //         headers: {"Content-Type": "application/json", 'Access-Control-Allow-Origin': '*'}, 
    //         body: JSON.stringify({addfname, addemail, addmsg})
    //      }).then(response => response.json())
    //         .then(message => console.log(message))
    //         setAddFname('')
    //         setAddEmail('')
    //         setAddMsg('')
    //         setSuccessRes('success')
    // }


  return (
    <div className='er__errandersignform'>
        <div className='er__errandersignform-content'>
            <h1>Need someone to run your errands?</h1>
            <p>dolor sit amet, consectetur adipiscing elit,</p>
        </div>
        <div className='er__errandersignform-form'>
            <h3>Sign up Now</h3>
            <form>
                <input type='text' value={addfname} onChange={handleFnameChange} className='form-control' placeholder='Firstname'/>
                <input type='text' value={addlname} onChange={handleLnameChange} className='form-control' placeholder='Lastname'/>
                <input type='email' value={addemail} onChange={handleEmailChange} className='form-control' placeholder='Email'/>
                <input type='text' value={addphone} onChange={handlePhoneChange} className='form-control' placeholder='Phone Number'/>
                <input type='password' value={addpassword} onChange={handlePasswordChange} className='form-control' placeholder='Password'/>
                <input type='text' value={addaddress} onChange={handleAddressChange} className='form-control' placeholder='Address'/>
                <div>
                    <input type='checkbox' />
                    <label><a href='ddf'>By proceeding, I agree to e-Errand's Terms of Use and acknowledge that I have read the Privacy Policy</a></label>
                </div>
                <button onClick={signUp} className='signupbtn1'>Signup</button>
            </form>
            <p><a href='dfd'>Already have an account? Sign in</a></p>
        </div>
    </div>
  )
}

export default Errandersignupform
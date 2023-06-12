import React, { useState } from 'react'
import './loginForm.css'
import { NavLink } from "react-router-dom";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';


const LoginForm = () => {
  const navigate = useNavigate();
  function onClickOpen () {
    navigate ('/')
  }

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

const userLogin = async (e) => {
  e.preventDefault()
   const res =  await fetch('/signin', {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
   })

   const data = res.json()

   if (res.status === 400 || !data)
   {
    window.alert("Invalid credentials")
   }
   else
   {
    window.alert("Login Successfully")
    navigate('/home')
   }
}

function register (){
navigate("/lawyer")

}

function customer (){
  navigate("/customer")
  
  }


  return (
    <>
    <div className='form-bodyLogin'>
     <div className="bodyContainerLogin">
       <div className ="containerLogin">
         <h1 className='MainTextLogin'>
             Login <span className='HireLogin'>HireALawyer.pk</span>
         </h1>
        {/* <p className='hire'>HireALawyer.pk</p> */}
         <form method='POST'>
             <div className ="form-containerLogin">
             
             <div className ="form-controlLogin">
                 <label className='TextLogin'>Email Address</label>
                 <div></div>
                 <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value) } required  className='FieldLogin'/>
             </div>
             
             <div className ="form-controlLogin">
                 <label className='TextLogin'>Password</label>
                 <div></div>
                 <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value) } required  className='FieldLogin'/>
             </div>

                <div className='container-btn-textLogin'>

                    {/* <a class="forgot-link" href="./ "> Forgot Password ?</a>
                    <div className='underlineForgetLogin'></div> */}

                </div>
             <button className ="submit-btnLogin" onClick={userLogin} >Submit</button>
             <div className='registerLogin'>
                <h6 className='text-accountLogin'>
                  Don't have an account?
                </h6>
                <ul>
                  <li className='Register-btnLogin-Control'>
                    <Button className='Register-btnLogin' onClick={register} >Register as Lawyer</Button>
                    <Button className='Register-btnLogin' onClick={customer} >Register as Customer</Button>
                  </li>
                </ul>
                {}

                
                
             </div>
             
         </div>
         </form>
     </div>
 
 </div>

 </div>
    </>
  )
}

export default LoginForm
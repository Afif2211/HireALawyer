import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './customerRegistration.css'
import Footer from './Footer'
import Navbar from './Navbar'

const CustomerRegistration = () => {
  
  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    password: "",
    cpassword: ""
  })

  let name, value;
  const handleInputs = (e) => {
    console.log(e)
    name = e.target.name
    value = e.target.value

    setUser({...user, [name]:value})
  }


  const PostData = async (e) => {
    e.preventDefault()

    const {name, email, phone, city, password, cpassword} = user

    const res = await fetch('/register', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json" 
      },
      body: JSON.stringify({
        name, email, phone, city, password, cpassword
      })
    })
    const data = await res.json()
    
    if (res.status === 422 || !data)
    {
      window.alert("Invalid Registration")
      console.log("Invalid Registration")
    }
    else
    {
      window.alert("Registration Successful")
      console.log("Registration Successful")
      navigate('/login')
    }

  }

  return (
    <>
    <Navbar />
    <div className='customer-register-container'>
      <div className='textLogoContainer'>
        <h1> <span className='logoText'>HireALawyer.pk</span>  Customer Registration</h1>
      </div>
      <div className='customer-details-container'>
        <form method='POST' >
        <div className='form-container-registration-customer'>
          
          <div className='customer-details-control'>
            <label for="name">Name </label>
            <div/>
            <input type="name" name = "name" value = {user.name} onChange = {handleInputs} className = 'inputControl-customer'/>
          </div>

          <div className='customer-details-control'>
            <label for="email">Email Address</label>
            <div/>
            <input type="email" name = "email" value = {user.email} onChange = {handleInputs} className = 'inputControl-customer'/>
          </div>

          <div className='customer-details-control'>
            <label for="phone">Phone Number</label>
            <div/>
            <input type="telephone" name = "phone" value = {user.telephone} onChange = {handleInputs} className = 'inputControl-customer'/>
          </div>

          <div className='customer-details-control'>
            <label for="phone">Choose State</label>
            <div/>
              <select name="State" id="State"className = 'inputControl-customer'>
                <option value="Punjab">Punjab</option>
                <option option value="Sindh">Sindh</option>
                <option value="Balochistan">Balochistan</option>
                <option value="Islamabad">Islamabad</option>
              </select>
          </div>

          <div className='customer-details-control'>
            <label for="City">City</label>
            <div/>
            <input type="text" name = "city" value = {user.city} onChange = {handleInputs} className = 'inputControl-customer'/>
          </div>

          <div className='customer-details-control'>
            <label for="password">Password</label>
            <div/>
            <input type="password" name = "password" value = {user.password} onChange = {handleInputs} className = 'inputControl-customer'/>
          </div>

          <div className='customer-details-control'>
            <label for="password">Confirm Password</label>
            <div/>
            <input type="password" name = "cpassword" value = {user.cpassword} onChange = {handleInputs} className = 'inputControl-customer'/>
          </div>

         
          {/* <input type="checkbox" id="terms&Conditions" name="terms&Conditions" /> */}
          {/* < className='tickText'> I agree to HireALawyer.pk Privacy Policy & Terms. </> */}
          <button type="submit" value="register" onClick={PostData} className='create-customer-account'>Create Account</button>
          </div>
        </form>
      </div>
      
    </div>
    
    </>
  )
}

export default CustomerRegistration
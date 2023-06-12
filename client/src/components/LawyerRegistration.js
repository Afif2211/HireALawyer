import React from 'react'
import { useNavigate } from 'react-router-dom'
import './lawyerRegistration.css'
import Footer from './Footer'
import { useState } from 'react'

const LawyerRegistration = () => {

  const navigate = useNavigate()
  function onClickOpen() {

    navigate ('/login')
  }

  const [user, setUser] = useState({
    name: "", 
    email: "", 
    password: "", 
    cpassword: "", 
    cnic: "", 
    phone: "", 
    city: "", 
    
    experience: "", 
    qualification: "", 
    expertise: "",
    description:"",
    image:""
  })

  let name, value;
  const handleInputs = (e) => {
   
    name = e.target.name
    value = e.target.value
    
    setUser({...user, [name]:value})
    console.log(value)
  }

  const imageupload =(event)=>{
    console.log(event.target.files[0]);
    setUser({...user,image:event.target.files[0]})
  }
  const PostData = async (e) => {
    e.preventDefault()

   
    const formdata=new FormData();
      formdata.append('myfile',user.image)
      formdata.append('name',user.name)
      formdata.append('email',user.email)
      formdata.append('password',user.password)
      formdata.append('cpassword',user.cpassword)
      formdata.append('cnic',user.cnic)
      formdata.append('phone',user.phone)
      formdata.append('city',user.city)
      formdata.append('experience',user.experience)
      formdata.append('qualification',user.qualification)
      formdata.append('expertise',user.expertise)
      formdata.append('description',user.description)
      try {
        const response = await fetch('/registerlawyer', {
          method: 'POST',
          body: formdata
        });
        const data = await response.text();
        alert(data);
      } catch (error) {
        console.error(error);
        alert('Error uploading file');
      }

  }

  return (
    <>
    
    
    <div className='lawyer-register-container'>
      <div className='textLogoContainer'>
        <h1> <span className='logoText'>HireALawyer.pk</span>  Lawyer Registration</h1>
      </div>
      <div className='lawyer-details-container'>
        <form method='POST'  enctype="multipart/form-data">
        <div className='form-container-registration'>
          
          <div className='lawyer-details-control'>
            <label for="name">Name </label>
            <div/>
            <input type="Name" name='name' value = {user.name} onChange = {handleInputs} className = 'inputControl'/>
          </div>

          <div className='lawyer-details-control'>
            <label for="email">Email Address</label>
            <div/>
            <input type="email" name='email' value = {user.email} onChange = {handleInputs} className = 'inputControl'/>
          </div>

          <div className='lawyer-details-control'>
            <label for="password">Password</label>
            <div/>
            <input type="password" name='password' value = {user.password} onChange = {handleInputs} className = 'inputControl'/>
          </div>

          <div className='lawyer-details-control'>
            <label for="password">Confirm password</label>
            <div/>
            <input type="password" name='cpassword' value = {user.cpassword} onChange = {handleInputs} className = 'inputControl'/>
          </div>

          <div className='lawyer-details-control'>
            <label for="cnic" className='cnicLabel'>Cnic</label>
            <div/>
            <input type="number" name='cnic' value = {user.cnic} onChange = {handleInputs} className = 'inputControl'/>
          </div>

          <div className='lawyer-details-control'>
            <label for="phone">Phone Number</label>
            <div/>
            <input type="telephone" name='phone' value = {user.phone} onChange = {handleInputs} className = 'inputControl'/>
          </div>

          <div className='lawyer-details-control'>
            <label for="phone">Choose State</label>
            <div/>
              <select name="State" id="State"className = 'inputControl'>
                <option value="Punjab">Punjab</option>
                <option option value="Sindh">Sindh</option>
                <option value="Balochistan">Balochistan</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Kpk">Kpk</option>
                <option value="Gilgit">Gilgit</option>
                <option value="Kashmir">Kashmir</option>
              </select>
          </div>

          <div className='lawyer-details-control'>
            <label for="City">City</label>
            <div/>
            <input type="text" name='city' value = {user.city} onChange = {handleInputs} className = 'inputControl'/>
          </div>

          <div className='lawyer-details-control'>
            <label for="Experience">Experience</label>
            <div/>
            <input type="text" name='experience' value = {user.experience} onChange = {handleInputs} className = 'inputControl'/>
          </div>

          <div className='lawyer-details-control'>
            <label for="Qualification">Qualification</label>
            <div/>
            <input type="text" name='qualification' value = {user.qualification} onChange = {handleInputs} className = 'inputControl'/>
          </div>

          <div className='lawyer-details-control'>
            <label for="Expertise" >Area of Expertise</label>

            <div/>
            <select name="expertise" value={user.expertise} onChange = {handleInputs} id="Expertise" className = 'inputControl'>
            <option name="expertise" value="Legal notice">Legal notice</option>
            <option  name="expertise"  value="Criminal matter">Criminal matter</option>
            <option  name="expertise" value="Divorce">Divorce</option>
            <option name="expertise" value="family matter">family matter</option>
            <option name="expertise" value="Mediation">Mediation</option>
            <option name="expertise" value="Company Reg.">Company Reg.</option>
            <option name="expertise" value="Trade mark">Trade mark</option>
            <option name="expertise" value="Tax filling">Tax filling</option>
            <option name="expertise" value="Recovery matter">Recovery matter</option>
            <option name="expertise" value="Immigration">Immigration</option>
            <option name="expertise" value="Service matter">Service matter</option>
            <option name="expertise" value="civil matter">Civil matter</option>
          </select>
          </div>
          <div className='lawyer-details-control'>
            <label for="description">Description</label>
            <div/>
            <input type="text" name='description' maxlength="320" placeholder='maxlength upto 320 words' value = {user.description} onChange = {handleInputs} className = 'inputControl'/>
          </div>

          <div className='lawyer-details-control'>
            <label for="myfile" >Profile Picture</label>
            <div/>
            <input type="file" id="myfile" onChange={imageupload} name="myfile" className = 'inputControl'/>
          </div>

          <div className='lawyer-details-control'>
            <label for="myfile">ID Card Front Side</label>
            <div/>
            <input type="file" id="myfile" name="myfile" className = 'inputControl'/>
          </div>

          <div className='lawyer-details-control'>
            <label for="myfile">Bar License/Reg.License</label>
            <div/>
            <input type="file" id="myfile" name="myfile" className = 'inputControl'/>
          </div>

          <div className='lawyer-details-control'>
            <label for="myfile">Resume</label>
            <div/>
            <input type="file" id="myfile" name="myfile" className = 'inputControl'/>
          </div>
          
          </div>
          {/* <input type="checkbox" id="terms&Conditions" name="terms&Conditions" /> */}
          {/* < className='tickText'> I agree to HireALawyer.pk Privacy Policy & Terms. </> */}
          <button type="submit" onClick={PostData} className='create-lawyer-account'>Create Account</button>
        </form>
      </div>
      
    </div>
    
    </>
  )
}

export default LawyerRegistration
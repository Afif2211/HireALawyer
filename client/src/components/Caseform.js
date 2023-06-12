import React from 'react'
import { useNavigate } from 'react-router-dom'
import './caseform.css'
import Navbar from './Navbar'

import { useState } from 'react'

const Caseform = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: "", 
    caseno: "",
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
    formdata.append('name',user.name)
    formdata.append('caseno',user.caseno)
    
    formdata.append('expertise',user.expertise)
    formdata.append('description',user.description)
    formdata.append('myfile2',user.image)
      try {
        const response = await fetch('/casestudy', {
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
    <Navbar />
    
    <div className='lawyer-register-container-cases'>
      <div className='textLogoContainer-cases'>
        <h1> <span className='logoText-cases'>HireALawyer.pk</span>  Submit recent Case study</h1>
      </div>
      <div className='lawyer-details-container-cases'>
        <form method='POST'  enctype="multipart/form-data">
        <div className='form-container-registration-cases'>
          
          <div className='lawyer-details-control-cases'>
            <label for="name">Name of the case</label>
            <div/>
            <input type="Name" name='name' value = {user.name} onChange = {handleInputs} className = 'inputControl-cases'/>
          </div>

          <div className='lawyer-details-control-cases'>
            <label for="caseno">Case number</label>
            <div/>
            <input type="Name" name='caseno' value = {user.caseno} onChange = {handleInputs} className = 'inputControl-cases'/>
          </div>
          <div className='lawyer-details-control-cases'>
            <label for="Expertise" >Area of Expertise</label>

            <div/>
            <select name="expertise" value={user.expertise} onChange = {handleInputs} id="Expertise" className = 'inputControl-cases'>
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


         
          <div className='lawyer-details-control-cases'>
            <label for="myfile2" >Picture</label>
            <div/>
            <input type="file" id="myfile2" onChange={imageupload} name="myfile2" className = 'inputControl-cases'/>
          </div>

          
          <div className='lawyer-details-control-cases'>
            <label for="description">Description</label>
            <div/>
            <textarea type="textarea" name='description' rows="5" cols="70" maxlength="420" placeholder='maxlength upto 420 words' value = {user.description} onChange = {handleInputs} className = 'inputControl-cases'/>
          </div>

         
          
          </div>
          {/* <input type="checkbox" id="terms&Conditions" name="terms&Conditions" /> */}
          {/* < className='tickText'> I agree to HireALawyer.pk Privacy Policy & Terms. </> */}
          <button type="submit" onClick={PostData} className='create-lawyer-account-cases'>Submit case</button>
        </form>
      </div>
      
    </div>
    
    </>
  )
}

export default Caseform
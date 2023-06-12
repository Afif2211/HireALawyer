import React,{useState,useEffect} from 'react'
import criminal_matter from '../images/criminal_matter.svg'
import legal_notice from '../images/legal_notice.svg'
import divorce from '../images/divorce.svg'
import family_matter from '../images/family_matter.svg'
import mediation from '../images/mediation.svg'
import company_reg from '../images/company_reg.svg'
import trade_mark from '../images/trade_mark.svg'
import tax_filing from '../images/tax_filling.svg'
import recovery_matter from '../images/recovery_matter.svg'
import immigration from '../images/immigration.svg'
import service_matter from '../images/service_matter.svg'
import civil_matter from '../images/civil_matter.svg'
import Navbar from './Navbar'
import './Services.css'
import { useNavigate,useParams } from 'react-router-dom';
import Footer from './Footer'

function Casestudy() {
  const navigate = useNavigate();
  const [buttonValue, setButtonValue] = useState(null);
  const {expertise} = useParams();
  const handlebutton=(event)=>{
    setButtonValue(event.target.value);
  }
  const [data, setData] = useState([]);

  

  function profilesFunc (value) {
  
    navigate("/cases" , {
      state: value
    })
  }
  return (
    <>
    <Navbar />
    <div className="hero-main">
      <div className="hero-h1" >
         <h1>Case Study</h1>
      </div>
      <div className="hero-services-container">

        <div className="legal_notice hero-block"  value="Legal notice" onChange={handlebutton}  onClick={()=>profilesFunc("legal notice") }>
          <img className='img_services' src={legal_notice} alt='./'/>
          <p>Legal notice</p>
        </div>

        <div className="criminal-matter hero-block" value="Criminal matter" onChange={handlebutton} onClick={()=>profilesFunc("Criminal matter")} >
          <img className='img_services'  src={criminal_matter} alt='./'/>
          <p>Criminal Matter</p>
        </div>

        <div className="divorce hero-block" value="Divorce" onChange={handlebutton} onClick={()=>profilesFunc("Divorce")} >
          <img className='img_services'  src={divorce} alt='./'/>
          <p>Divorce</p>
        </div>

        <div className="family_matter hero-block" value="family matter" onChange={handlebutton} onClick={()=>profilesFunc("family matter")} >
          <img className='img_services'  src={family_matter} alt='./'/>
          <p>Family Matter</p>
        </div>

        <div className="mediation hero-block"  value="Meditation" onChange={handlebutton} onClick={profilesFunc("Meditation")} >
          <img className='img_services' src={mediation} alt='./'/>
          <p>Mediation</p>
        </div>
        
        <div className="company_reg hero-block"  value="Company Reg" onChange={handlebutton} onClick={()=>profilesFunc("Company Reg")} >
          <img className='img_services' src={company_reg} alt='./'/>
          <p>Company Reg.</p>
        </div>
        
        <div className="trade_mark  hero-block" value="Trade mark" onChange={handlebutton} onClick={()=>profilesFunc("Trade mark")}  value="Trade mark">
          <img className='img_services' src={trade_mark} alt='./'/>
          <p>Trade Mark</p>
        </div>
        
        <div className="tax_filing hero-block" onChange={handlebutton}  value="Tax filling" onClick={()=>profilesFunc("Tax filling")} >
          <img className='img_services' src={tax_filing} alt='./'/>
          <p>Tax Filing</p>
        </div>
        
        <div className="recovery_matter hero-block" onChange={handlebutton} value="Recovery matter" onClick={()=>profilesFunc("Recovery matter")} >
          <img className='img_services' src={recovery_matter} alt='./'/>
          <p>Recovery Matter</p>
        </div>
        
        <div className="immigration hero-block" onChange={handlebutton} value="Immigration" onClick={()=>profilesFunc("Immigration")} >
          <img className='img_services' src={immigration} alt='./'/>
          <p>Immigration</p>
        </div>
        
        <div className="service_matter hero-block" onChange={handlebutton} value="Service matter" onClick={()=>profilesFunc("Service matter")}>
          <img className='img_services'  src={service_matter} alt='./'/>
          <p>Service Matter</p>
        </div>
        
        <div className="civil_matter hero-block" onChange={handlebutton} value="civil matter" onClick={()=>profilesFunc("civil matter")} >
          <img className='img_services' src={civil_matter} alt='./'/>
          <p>Civil Matter</p>
        </div>
      
      </div>
      </div>
     
    </>
  )
}

export default Casestudy
import React from 'react'
import "./About.css"
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Afif from '../images/Afif.jpg'
import Shahsawar from '../images/Shahsawar.jpg'
import Masab from '../images/Masab.jpg'
import Navbar from './Navbar'
function About() {
  const navigate = useNavigate()
  function onClickOpen() {
    navigate('/contact')
  }
  return (
    <>
    <Navbar />
    <div className="about-container">

    <div className="about-section">
    <h1>About Us</h1>
    {/* <p>Some text about who we are and what we do.</p> */}
  </div >
  <div className='abt_con'>
    <div className='abt-para-con'>
    <p className='abt_para'> <span className='HireText'>HireALawyer.pk </span> is a leading online platform that aims to revolutionize the way individuals and businesses access legal services. With a strong focus on convenience, transparency, and efficiency, we provide a seamless experience for clients seeking legal assistance and empower lawyers to deliver exceptional services. <br />

Our platform connects clients with a diverse network of skilled lawyers specializing in various practice areas. <br /> Whether you need assistance with personal injury claims, business contracts, family law matters, or any other legal issue, we have a qualified and experienced lawyer to meet your needs. We understand that every legal situation is unique, and we strive to match clients with lawyers who have the right expertise and approach to handle their specific case. <br />

At <span className='HireText'>HireALawyer.pk </span>  we are committed to leveraging technology to make the legal process more accessible and efficient. Our user-friendly website allows clients to browse lawyer profiles, compare reviews and ratings, and schedule consultations at their convenience. We believe in providing transparent and upfront information, including pricing structures and timelines, enabling clients to make informed decisions about their legal matters.</p>

    </div>
  
  <h2 className='main-text'>Our Vision</h2>

<div className="abt-para-con-1">

  <p className='abt_para'>"Transforming the legal industry through innovation and accessibility. We connect individuals and businesses with top-notch lawyers who understand their needs, providing efficient solutions. <br />

We break barriers to justice by making the legal process affordable, transparent, and efficient for all. Our platform serves as a knowledge hub, empowering lawyers with valuable insights from previous court rulings. <br />

At <span className='HireText'>HireALawyer.pk,</span> excellence, integrity, and client satisfaction drive us. We aim to be the go-to platform for legal services, offering exceptional customer service and a reliable network of lawyers.

Together, let's redefine the legal experience, empowering individuals and businesses to navigate with confidence and ease".</p>
  
</div>
  </div>
  <div className="row">
  <div className="card_abt">
  <div className="column">
  <img src={Afif} alt="Jane" className='img1_abt'/>
  <div className="container-aboutus">
  <h2>Afif Ahmad</h2>
  <p className="title">CEO & Founder</p>
  
          <p>"As the founder and CEO, I am dedicated to driving the success of our company. With a passion for innovation and a strong leadership mindset, I strive to guide our team towards achieving our goals and delivering exceptional services to our clients".</p>
          <p>afifbalouch@gmail.com</p>
          <p><button className="button" onClick={onClickOpen}>Contact</button></p>
        </div>
      </div>
      </div>
    
  </div>
  <div className="row">
      <div className="card_abt">
      <div className="column">
      <img src={Shahsawar} alt="John" className='img3_abt'/>
      <div className="container-aboutus">
      <h2>Shah sawar Jan</h2>
      <p className="title">Co-Founder & CEO</p>
      <p>"As Shahsawar, I am proud to be a co-founder and CEO of our company. With a shared vision and relentless determination, my fellow co-founder and I have built a successful organization. Together, we lead our team with passion and drive, constantly striving for excellence and innovation. It is a privilege to contribute to our company's growth and make a positive impact in the industry we serve".</p>
      <p>shahsawarj95@gmail.com</p>
      <p><button className="button" onClick={onClickOpen}>Contact</button></p>
      </div>
      </div>
          </div>
          </div>
  
    <div className="row">
      <div className="card_abt">
      <div className="column">
      <img src={Masab} alt="Mike" className='img2_abt'/>
      <div className="container-aboutus">
      <h2>Masab</h2>
      <p className="title">Chief Operating Officer</p>
      <p>"As Masab, I am honored to serve as the operational director of our organization. With a passion for efficiency and a meticulous approach, I strive to optimize our operations and drive our company towards success. By implementing streamlined processes and effective resource management, I aim to maximize productivity and enhance overall performance. It is a privilege to be part of a dynamic team and contribute to our collective growth and achievements."</p>
      <p>masabrohan@gmail.com</p>
      <p><button className="button" onClick={onClickOpen}>Contact</button></p>
      </div>
      </div>
      </div>
    </div>
  
    
          
    </div>
          </>
          )
}

export default About
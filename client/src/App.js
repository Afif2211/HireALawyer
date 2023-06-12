import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Profile from "./components/Profile";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import customerRegistration from "./components/CustomerRegistration"
import LawyerRegistration from "./components/LawyerRegistration.js"
import ProfileLawyers from "./components/ProfileLawyers";
import "./App.css";
import CustomerRegistration from "./components/CustomerRegistration";
import Footer from "./components/Footer.js";
import Chatbot from "./components/Chatbot";
import ForgotPasswordForm from "./components/ForgetPasswordForm";
import HireForm from "./components/HireForm";
import Caseform from "./components/Caseform"
import Casedescription from "./components/Casedescription";
import Casestudy from "./components/Casestudy";
import Cases from "./components/Cases";
function App() {
  return (
    <>
    
{/* <Navbar/> */}
{/* <Home /> */}
    <Chatbot/>
    <Routes>
      <Route path="/" element={ <LoginForm />}/>

      <Route exact path="/home" element={<Home/>}/>
        
      <Route path="/about" element={ <About />}/>

      <Route path="/service" element={ <Services />}/>

      <Route path="/contact" element={ <Contact />}/>

      <Route path="/profile/:id" element={ <Profile />}/>
       
       
      <Route path="/register" element={ <customerRegistration />}/>

      <Route path="/lawyer" element={ <LawyerRegistration />}/>

      <Route path="/profiles" element={ <ProfileLawyers />}/>

      <Route path="/customer" element={ <CustomerRegistration/>}/>

      <Route path="/profile/:id/hire-form" element={<HireForm />} />

      <Route path="/casestudy" element={ <Casestudy />}/>

      <Route path="/cases" element={ <Cases />}/>

      <Route path="/customer" element={ <CustomerRegistration/>}/>
      
      <Route path="/caseform" element={ <Caseform/>}/>

      <Route path="/casedescription/:id" element={ <Casedescription/>}/>

    </Routes>
     
     <Footer />
    </>
  );
    
}



export default App;
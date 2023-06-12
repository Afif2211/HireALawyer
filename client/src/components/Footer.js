import React from 'react'
import './footer.css'
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
  } from "react-icons/fa";
  import { NavLink} from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
    <>
        <footer className="footer-container">
            <div className="footer-row">
                <div className="footer-col">
                    
                </div>
                <div className="footer-col">
                    <h3>Office</h3>
                    <p>E11/3 Markaz, Islamabad</p>
                    <p>Islamabad, PIN 33500, Capital City</p>
                    <p className="footer-email">hirelawyer@gmail.com</p>
                    <h4>03157484942</h4>
                </div>
                <div className="footer-col">
                    <h3>Links</h3>
                    <ul className='footer-ul'>

                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/about">about</NavLink>
                        </li>

                        <li>
                            <NavLink to="/service">services</NavLink>
                        </li>

                         <li>
                            <NavLink to="/contact">contact</NavLink>
                        </li>

                        

                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Newsletter</h3>
                    <form className='footer-form' >
                        {/* <FontAwesomeIcon icon="fa-solid fa-envelope" /> */}
                        <i className='far fa-envelop'></i>
                        <input type="email" placeholder='Enter your email id' required/>
                        <button type='submit'><i className='fas fa-arrow-right'></i></button>
                    </form>
                    <div className="social-icons">
                        <FaFacebookSquare/>
                        <FaInstagramSquare/>
                        <FaYoutubeSquare/>
                    </div>
                </div>
            </div>
            <hr />
            <p className="copyright">Hire A lawyer &copy; 2022 - All rights reserved</p>
        </footer>





    </>
  )
}

export default Footer
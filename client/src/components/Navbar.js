// import React, { useState } from "react";
// import "./navbar.css";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";


// import { Button } from "@material-ui/core";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {

//   const navigate =useNavigate();
// function Home(){

// navigate('/home');
// }
// function about(){

// navigate('/about');
// }
// function services(){

// navigate('/service');
// }
// function contact(){

// navigate('/contact');
// }
// function Casestudy(){

//   navigate('/Casestudy');
//   }
// function login(){
// navigate('/');
// }

//   const [showMediaIcons, setShowMediaIcons] = useState(false);
//   return (
//     <>
//       <nav className="main-nav">
//         {/* 1st logo part  */}
//         <div className="logo">
//           <h2>
//             <span>H</span>ire
//             <span>a</span>Lawyer
//           </h2>
//         </div>

//         {/* 2nd menu part  */}
//         <div
//           className={
//             showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
//           }>
//           <ul>
//             <li>
//               <Button className="navbtn" onClick={Home}>Home</Button>
//             </li>
//             <li>
//             <Button className="navbtn" onClick={about}>About</Button>
//             </li>
//             <li>
//             <Button className="navbtn" onClick={services}>Services</Button>
//             </li>
//             <li>
//             <Button className="navbtn" onClick={Casestudy}>Case study</Button>
//             </li>
//             <li>
//             <Button className="navbtn" onClick={contact}>Contact</Button>
//             </li>
//             <li>
//             <Button  onClick={login} className="login-button">Login</Button>
//           </li>
//           </ul>
//         </div>

//         {/* 3rd social media links */}
//         <div className="social-media">
//         <ul className="social-media-desktop">
//             <li>
//               <a
//                 href="/"
//                 target="">
//                 <FaFacebookSquare className="facebook" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/"
//                 target="">
//                 <FaInstagramSquare className="instagram" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/"
//                 target="">
//                 <FaYoutubeSquare className="youtube" />
//               </a>
//             </li>
//           </ul>

//           {/* hamburget menu start  */}
//           <div className="hamburger-menu">
//             <a  onClick={() => setShowMediaIcons(!showMediaIcons)}>
//               <GiHamburgerMenu />
//             </a>
//           </div>
//         </div>
//       </nav>
//       {/* hero section  */}
//       {/* <section className="hero-section">
      
//       </section> */}
//     </>
//   );
// };

// export default Navbar;





import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  // Debounce function to prevent multiple rapid clicks
  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const navigateWithDebounce = debounce(navigate, 300); // Adjust the delay (in milliseconds) as per your preference

  function handleNavigation(route) {
    navigateWithDebounce(route);
  }

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part */}
        <div className="logo">
          <h2>
            <span>H</span>ire
            <span>a</span>Lawyer
          </h2>
        </div>

        {/* 2nd menu part */}
        <div
          className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}
        >
          <ul>
            <li>
              <Button className="navbtn" onClick={() => handleNavigation('/home')}>
                Home
              </Button>
            </li>
            <li>
              <Button className="navbtn" onClick={() => handleNavigation('/about')}>
                About
              </Button>
            </li>
            <li>
              <Button className="navbtn" onClick={() => handleNavigation('/service')}>
                Services
              </Button>
            </li>
            <li>
              <Button className="navbtn" onClick={() => handleNavigation('/Casestudy')}>
                Case study
              </Button>
            </li>
            <li>
              <Button className="navbtn" onClick={() => handleNavigation('/contact')}>
                Contact
              </Button>
            </li>
            <li>
              <Button onClick={() => handleNavigation('/')} className="login-button">
                Login
              </Button>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="/" target="">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="/" target="">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a href="/" target="">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburger menu start */}
          <div className="hamburger-menu">
            <a onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

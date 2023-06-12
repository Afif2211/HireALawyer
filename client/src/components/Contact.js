import React, { useState } from 'react';
import './contact.css';
import Footer from './Footer';
import Navbar from './Navbar'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, phone, message };

    try {
      const response = await fetch('/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); 

      
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.log(error); 
    }
  };

  return (
    <>
    <Navbar />
      <div className='contact-main'>
        <div className="container-cnc">
          <div className="content">
            <div className="left-side">
              <div className="address details">
                <i className="fas fa-map-marker-alt"></i>
                <div className="topic">Address</div>
                <div className="text-one">Street 45B, House No 1055, E11/3, Islamabad</div>
                <div className="text-two">ISLAMABAD</div>
              </div>
              <div className="phone details">
                <i className="fas fa-phone-alt"></i>
                <div className="topic">Phone</div>
                <div className="text-one">+923157474281</div>
                <div className="text-two">+923111875511</div>
              </div>
              <div className="email details">
                <i className="fas fa-envelope"></i>
                <div className="topic">Email</div>
                <div className="text-one">afifbalouch@gmail.com</div>
                <div className="text-two">shahsawarkhan@gmail.com</div>
              </div>
            </div>
            <div className="right-side">
              <div className="topic-text">Send us a message</div>
              <p>If you have any type of queries, you can send us a message from here. It will be a pleasure for our team to help you.</p>
              <form onSubmit={handleSubmit}>
                <div className="input-box">
                  <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-box">
                  <input type="number" placeholder="Enter phone " value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="input-box message-box">
                  <textarea className='text-field' cols="90" rows="100" placeholder='Your message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <div>
                  <button type="submit" className='submit-btnContact'>Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
  {/* <Footer /> */}
</>
);
}

export default Contact;

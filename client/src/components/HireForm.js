import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HireForm({ selectedProfileEmail }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      contact,
      message,
      recipient: selectedProfileEmail,
    };

    try {
      const response = await fetch('/sendmessagelawyer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setName('');
        setEmail('');
        setContact('');
        setMessage('');
        // navigate('/success');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
        <>
          <div className='contact-main'>
            <div className="container-cnc">
              <div className="content">
                {/* ... */}
                <div className="right-side">
                  <div className="topic-text">Send us a message</div>
                  <p>If you have any type of queries, you can send us a message from here. It will be a pleasure for our team to help you.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="input-box">
                      <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="input-box">
                      <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-box">
                      <input type="text" placeholder="Enter your phone no." value={contact} onChange={(e) => setContact(e.target.value)} />
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
        </>
      );
}

export default HireForm;
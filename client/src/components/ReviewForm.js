import React, { useState } from 'react';
import './contact.css';

function ReviewForm({ handleReviewSubmit }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, comment, rating };

    try {
      await fetch('/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      setName('');
      setComment('');
      setRating('');

      // Call the parent component's handleReviewSubmit to fetch the updated reviews
      handleReviewSubmit();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='contact-main'>
      <div className="container-cnc">
        <div className="content">
          <div className="right-side">
            <div className="topic-text">Please tell us about your experience</div>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="input-box">
                <textarea className='text-field' placeholder='Your comment' value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
              </div>
              <div className="input-box">
                <input type="number" placeholder="Rate out 10(poor-good)" value={rating} onChange={(e) => setRating(e.target.value)} />
              </div>
              <div>
                <button type="submit" className='submit-btnContact'>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
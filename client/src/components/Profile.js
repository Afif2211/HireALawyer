import React, { useState, useEffect } from 'react';
import './Profile.css';
import { useNavigate, useParams } from 'react-router-dom';
import HireForm from './HireForm';
import Footer from './Footer'
import Navbar from './Navbar'

const Profile = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [selectedProfileEmail, setSelectedProfileEmail] = useState('');

  useEffect(() => {
    fetch(`/id/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, [id]);

  const navigate = useNavigate();

  function onClick() {
    setSelectedProfileEmail(data.email);
    setShowForm(true);
  }

  return (
    <>
    <Navbar />
      <div className="container-profile">
        <div className="avatar-flip">
          <img src={`http://localhost:8003/public/images/${data.image}`} height="150" width="150" alt="Avatar 2" />
        </div>
        <h2 className="h2">Adv.{data.name}</h2>
        <h4 className="h4">
          Experience
          <p>{data.experience}</p>
        </h4>
        <h4 className="h5">
          City
          <p>{data.city}</p>
        </h4>

        <h4 className="h6">
          Description
          <p>"{data.description}"</p>
        </h4>

        <div>
          <button className="button-5" role="button" onClick={onClick}>
            Hire Me
          </button>
        </div>
      </div>
      {showForm && <HireForm selectedProfileEmail={selectedProfileEmail} />}
      {/* <Footer /> */}
    </>
  );
};

export default Profile;

// Profile.js

// import React, { useState, useEffect } from 'react';
// import './Profile.css';
// import { useNavigate, useParams, Link } from 'react-router-dom';

// const Profile = () => {
//   const { id } = useParams();
//   const [data, setData] = useState({});
//   const [showForm, setShowForm] = useState(false);
//   const [selectedProfileEmail, setSelectedProfileEmail] = useState('');

//   useEffect(() => {
//     fetch(`/id/${id}`)
//       .then((res) => res.json())
//       .then((data) => setData(data.data));
//   }, [id]);

//   const navigate = useNavigate();

//   function onClick() {
//     setSelectedProfileEmail(data.email);
//     setShowForm(true);
//   }

//   const handleFormSubmit = () => {
//     navigate(`/profile/${id}/hire-form`);
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="avatar-flip">
//           <img src={`http://localhost:6003/public/images/${data.image}`} height="150" width="150" alt="Avatar 2" />
//         </div>
//         <h2 className="h2">Adv.{data.name}</h2>
//         <h4 className="h4">
//           Experience
//           <p>{data.experience}</p>
//         </h4>
//         <h4 className="h5">
//           City
//           <p>{data.city}</p>
//         </h4>

//         <h4 className="h6">
//           Description
//           <p>{data.description}</p>
//         </h4>

//         <div>
//           <button className="button-5" role="button" onClick={handleFormSubmit}>
//             Hire Me
//           </button>
//         </div>
//       </div>
//       {showForm && (
//         <Link to={`/profile/${id}/hire-form`} state={{ selectedProfileEmail }} />
//       )}
//     </>
//   );
// };

// export default Profile;

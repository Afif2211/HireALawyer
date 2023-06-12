import React,{useEffect,useState} from 'react'
import "./Casedescription.css"
import { useNavigate, useParams } from 'react-router-dom';
import pdf from '../images/pdfpic.png'
import Navbar from './Navbar'
const Casedescription = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`/id_cases/${id}`)
          .then((res) => res.json())
          .then((data) => setData(data.data));
      }, [id]);
    console.log(data);


  return (
   <>
   <Navbar />
   <div className="card_case">
   <div className='img_case'><img src={pdf} alt="" />
   <a href={`http://localhost:8003/public/images/${data.image}`} download target='blank'>Click to download </a>
   </div>
  <div className="card-description_case">
    <h3>{data.name}</h3>
    <p>{data.description}</p>
  </div>
</div>
   
   
   
   </>


  )
}

export default Casedescription
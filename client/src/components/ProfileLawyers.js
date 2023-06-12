import React, { useEffect, useState } from 'react'
import './profileLawyers.css'
import img1 from '../images/download.jpeg';
import axios from "axios"
import Profiledata from './Profiledata'
import { generatePath,useNavigate, useLocation } from "react-router-dom";
import Navbar from './Navbar'

const ProfileLawyers = () => {
  const location = useLocation();
 
  const [dataLawyer, setdatalawyers] = useState([]);
  console.log("location.state",location.state);

  
  const fetchData = async () => {
    fetch(`/expertise/${location.state}`).then(res=>res.json()).then(data=> 
      setdatalawyers(data)
      )
    // const data = await response.json()
    
    // console.log(data)
  }
console.log(dataLawyer)
  useEffect(() => {
    fetchData()
  }, [])

  console.log("dataLawyer",dataLawyer);




  const navigate = useNavigate();
  const routeChange = (id) => {
    const path = generatePath("/id/:id");
    navigate(path);
  };
  



//news







  // Get ID from URL
  // const params = useParams();
      
  //     const [posts, setPosts] = useState([])
      
  //         useEffect(()=> {
  //             axios.get(`/id:id ${params.id}`)
  //             .then(res => {
  //                 console.log(res)
  //                 setPosts(res.data)
  //             })
  //             .catch(err =>{
  //                 console.log(err)
  //             })
  //         }, [params.id])
  
   const onclick=(id)=> {
     navigate(`/profile/${id}`)
    
   }

  

  


  return (
    <>
    <Navbar />
      <div className='filter'> sort by:
        <select cla></select>
        <select id="sortby" name="sortby" onchange=" "><option value="bumped_at-desc" selected="selected">Updated Date: Recent First</option>
          <option value="bumped_at-asc">Highest win</option>
          <option value="price-asc">Highest ratting</option>
          <option value="price-desc">Most cases</option>
          <option value="model_year-desc">Lowest Win</option>
          <option value="model_year-asc">Lowest ratting</option>
          <option value="mileage-asc"></option>
          <option value="mileage-desc"></option></select>
      </div>
      <div className="container-fluid mt-5">

      
<div className="scroll">
<h2>Latest News</h2>
<marquee  behavior="scroll" direction="up" onmouseover="this.stop()" onmouseout="this.start()">
<ul class="timeline">
<li>
<a href="https://portals.au.edu.pk/qec/">
<b>Feedback from customers
<img src="new.gif" alt=""/></b>
</a>
<a href="#" class="float-right">
<b>1<sup>st</sup> December, 2022</b>
</a>
<p>Click here to view details</p>
</li>
<li>
<a href="https://au.edu.pk/Pages/Examination/Date_Sheet_MBBS_Examination.aspx">
<b>Revised Law change
<img src="new.gif" alt=""/></b>
</a>
<a href="#" class="float-right">
<b>22<sup>nd</sup> November, 2022</b>
</a>
<p>Click here to view details</p>
</li>
<li>
<a href="https://portals.au.edu.pk/admissions/">
<b> Lawyers news
<img src="new.gif" alt=""/></b>
</a>
<a href="#" class="float-right">
<b>21<sup>st</sup> November, 2022</b>
</a>
<p>Click here to view details</p>
</li>
<li>
<a href="https://portals.au.edu.pk/feesystem/">
<b>High court News
<img src="new.gif" alt=""/></b>
</a>
<a href="#" class="float-right">
 <b>6<sup>th</sup> October, 2022</b>
</a>
<p>Click here to view details</p>
</li>
<li>
<a href="https://au.edu.pk/Pages/AUInfo/download/Academic_Calendar_2022_23.pdf">
<b>Academic Calendar 2022-23
<img src="new.gif" alt=""/></b>
</a>
<a href="#" class="float-right">
<b>2<sup>nd</sup> September, 2022</b>
</a>
<p>Click here to view details</p>
</li>

</ul>
</marquee>

</div>









        <div className='row text-center'>
            
      {dataLawyer.map(post => {
      console.log(dataLawyer)
            return (


              <div className="col-10 col-md-5 mt-5" >

                <div className="profilecards card p-1 " to  onClick={()=>onclick(post._id)
                } >
               
                  <div className="d-flex align-items-center" >
                    <div className="image"> <img src={`http://localhost:6003/public/images/${post.image}`} className="rounded" width="160" height="100px"/> </div>
                    <div className="ml-3 w-100">

                      <h4 className="mb-0 mt-0 textLeft">Adv.{post.name} </h4>
                      {/* <span className="text-left">{type }</span> */}
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span className="articles">Win</span> <span className="number1">5</span> </div>
                        <div className="d-flex flex-column">
                          <span className="followers">Cases</span> <span className="number2">10</span> </div>
                        {/* <div className="d-flex flex-column">
                          <span className="rating">Rating</span> <span className="number3"></span> </div> */}
                      </div>

                    </div>
                  </div>
                </div>


              </div>




            )
          })
          }


          


        </div>
      </div>











    </>
  )
}

export default ProfileLawyers


// a slide object contains the image link, title and function/click event for when a user clicks on a card
import gridimg from '../images/hhhh.jpg'
import gridimg2 from '../images/vvcv.jpg'
import gridimg3 from '../images/kala.jpg'
import gridimg4 from '../images/vvv.jpg'
import '../components/Home.css'
import gridimg5 from '../images/cvx.jpg'
import gridimg6 from '../images/khan.jpg'
import gridimg7 from '../images/khan2.jpg'
import Review from './Review'
import Footer from './Footer'
import Chatbot from './Chatbot'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
//import Cardlist from './Cardlist'

function Home() {
  const navigate = useNavigate()

  function open() {
    navigate('/contact')
  }
  
  return (
  
        <>
        <Navbar />
    <Chatbot/>
       <div className='main-home-container'>

        <section className="background firstsection">
                <div className="box-main">
                    <div className="firsthalf">
                        <h2 className="text-big">Get the best lawyers in yours city</h2>
                        <p className="text-small">If you are looking for a best lawyer for your case HireALawyer.com is the best stop for you. </p>
                       
                   
                    </div>

                   
                </div>
                </section>


              

              <section className="second-ourlawyers">
              <h2 className='heading2lawyers'>Our Lawyers</h2>

              <div class="flex-container">

                     <div class="flex-child1">
                              <img src={gridimg6} alt="" />
                              <div className='box'>
                              <h4 className='lawyerdescription'>Shahsawar</h4>
                              <p className='lawyerpara'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo tempora molestiae adipisci.</p>
                              </div>
                         </div>
  
                          <div class="flex-child2 ">
                                     <img src={gridimg7} alt="" />
                                     <div className='box'>
                                     <h4 className='lawyerdescription'>Masab</h4>
                                     <p className='lawyerpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolores inventore exercitationem.</p>
                                     </div>
                                </div>
  
                              </div>
              </section>
                  

              










             




                <section className='thirdsection'>
                <div className="grid-container-sec3">
                <div className="grid-item1-sec3">
                <h3>​Our commitment: measurable results at all organizational levels</h3>
                <p>Testimonials or case studies from past clients, highlighting the positive outcomes and experiences they had while working with the firm. Contact information for the firm, including phone numbers, email addresses, and a form for potential clients to request a consultation.</p>
                <button className='grid-btn-sec3' onClick={open}>Contact Us</button>
                </div>
                <div className="grid-item2-sec3"><img src={gridimg} alt="" /></div>
                </div>
                </section>







                

              <section className='fourthsection'>
               <div className="grid-container2-sec4">
               <div className='gridimg1-sec4'>
               <img src={gridimg2} alt="" />
               
               </div>

               <div className='gridimg2-sec4'>
               <img className='grid2-sec4-img1' src={gridimg3} alt="" />
               <img className='grid2-sec4-img2' src={gridimg4} alt="" />
               <h4>What our Firm offer</h4>
               <p>A list of the legal services the firm offers, along with a description of each service and how it can benefit clients.</p>
               </div>
               
              
               </div>
              
               </section>





               <section className='fifthsection'>
               
               <div className='grid-box-sec5' >
               <div className='gridboximg-sec5'>
               <img src={gridimg5} alt="" />
               </div>
               <div className='gridboxtext-sec5'> <h2>​Do you need professional Lawyers for your Case? If you do you're in the right place</h2> </div>
               
               
               
               </div>
               </section>










              <section className='sixthsection'>
              <div className='sixth'>
              <h2 className='sixthsectionh2'>Leading consultant firm in pakistan</h2>
              <p className='sixthpara'>​We provide flexible and 24/7 online learning that fits around You. Become an industry leader with accredited undergraduate and postgraduate courses online. Fully Online.</p>
              </div>
              <div className='consultingitems'>
              <div className='consultingitem1'>
              <h3>01</h3>
              <p>A frequently asked questions (FAQ) section, addressing common concerns and questions that clients may have when seeking legal representation.</p>         
              </div>
              
              <div className='consultingitem2'>
              <h3>02</h3>
              <p>Resources or educational materials related to the firm's areas of practice, such as articles, blog posts, or videos that provide information about the legal process or specific legal issues..</p>         
              </div>
              
              <div className='consultingitem3'>
              <h3>03</h3>
              <p>Links to the firm's social media pages or other online profiles, allowing clients to connect with the firm and stay up-to-date on its latest news and updates.</p>         
              </div>
              </div>




              </section>

              
       </div>

                <Review/>
                



        </>
  );
}

export default Home;

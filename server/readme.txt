router.get("/getalllawyers",  (req,res)=>{
User.find((err,data)=>{
if(err)
{
    res.status(500).send(err)
}else{
    res.status(200).send(data);
    
}

});

});



axios

const [datalawyer, setdatalawyers] = useState([])

  
  const getData = async () => {
    const { data } = await axios.get(`/getalllawyers`);
    setdatalawyers(data);
  };
  useEffect(() => {
    getData();
  }, []);





profiles

  <div class="container">
    <div class="avatar-flip">
      <img src={imgshery1} height="150" width="150"/>
      <img src={imgshery2} height="150" width="150"/>
    </div>
    <h2 className='h2'>{dataLawyer.name}</h2>
    <h4 className='h4'></h4>
    <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna ip sum dolore.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt quae quas voluptate doloremque ex, itaque provident eos corporis. Qui repellat incidunt totam, expedita similique sequi amet ex doloribus aliquid!.</p>
    <div >
    <button class="button-5" role="button" onClick={onclick}>Hire Me</button>

    
    </div>
  </div>


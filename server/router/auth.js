const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const multer  = require('multer')
require('../db/conn')
const path = require('path');
const User = require('../model/userSchema')
const Lawyer = require('../model/lawyerSchema')
const nodemailer = require('nodemailer');
const casestudy = require('../model/Casestudy')


router.get('/', (req,res)=>{
    res.send("Hello world from router server ")
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
      }
  })
  
  const upload = multer({ storage: storage })


router.post('/register', async (req, res)=>{

    const {name, email, phone, city, password, cpassword} = req.body
    
    if (!name || !email || !phone || !city ||  !password || !cpassword)
    {
        res.status(422).json({ error: "please fill all the fields properly" })
    }
    
    try {

        const userExist = await User.findOne({ email: email })

        if (userExist)
        {
            return res.status(422).json({ error: "Email already Exist" })
        }
        else if (password != cpassword)
        {
            return res.status(422).json({ error: "Password and Confirm Password didn't match" })
        }
        else
        {
            const user = new User({ name, email, phone, city, password, cpassword})
        
            const register = await user.save()
        
            if (register)
            {

                res.status(201).json({ message: "user registered successfully" })
                
            }
        }
        
    } catch (err) {
        console.log(err)
    }
})

router.post('/registerlawyer', upload.single('myfile'),  async (req, res)=>{
    const image= req.file.filename
        
   
    const {name, email, password, cpassword, cnic, phone, city, experience, qualification, expertise,description} = req.body
    
    if ( !name || !email || !password || !cpassword || !cnic || !phone || !city || !experience ||!description || !qualification || !expertise)
    {
        res.status(422).json({ error: "please fill all the fields properly" })
    }
    
    try {

        const lawyerExist = await Lawyer.findOne({ email: email })

        if (lawyerExist)
        {
            return res.status(422).json({ error: "Email already Exist " })
        }
        else if (password != cpassword)
        {
            return res.status(422).json({ error: "Password and Confirm Password didn't match" })
        }
        else
        {
            const lawyer = new Lawyer({ name, email, password, cpassword, cnic, phone, city, experience, qualification, expertise,description,image })
        
  
  
            const register = await lawyer.save()
        
            if (register)
            {
                res.status(201).json({ message: "user registered successfully" })
            }
        }
        
    } catch (err) {
        console.log(err)
    }
})


router.post('/signin', async (req,res) => {
    try
    {
        const { email, password } = req.body

        if ( !email || !password )
        {
            return res.status(400).json({ error: "Please fill all the fields" })
        }

        const userLogin = await User.findOne({ email: email })
        const lawyerLogin = await Lawyer.findOne({ email: email })
        
        
        if (lawyerLogin)
        {
            const isMatchLawyer = await bcrypt.compare(password, lawyerLogin.password)
            if(!isMatchLawyer)
            {
                return res.status(400).json({ error: "Invalid Credentials" })
            }
            else
            {
                return res.status(201).json({ message: "Login Successfully" })
            }
        }
        else if (userLogin)
        {
            const isMatchUser = await bcrypt.compare(password, userLogin.password)
            if(!isMatchUser)
            {
                return res.status(400).json({ error: "Invalid Credentials" })
            }
            else
            {
                return res.status(201).json({ message: "Login Successfully" })
            }
        }
        else
        {
            return res.status(400).json({ error: "Invalid Credentials" })
        }
    

    } catch (err) {
        console.log(err)
    }

})

router.get("/getalllawyers", async (req,res)=>{
try{

    const lawyers= await Lawyer.find({})
    res.send({status:"ok", data:lawyers})

}catch(error){

    console.log(error);
}

});

router.get("/id/:id", async (req,res)=>{
    try{
        const lawyers= await Lawyer.findById(req.params.id)
        res.send({status:"hag", data:lawyers})
    
    
    }catch(error){
    
        console.log(error);
    }
    
    });
    
    router.get('/expertise/:expertise', async (req, res) => {
        const expertise = req.params.expertise;
        const items = await Lawyer.find({ expertise:expertise });
        res.json(items);
      });

    
    router.post('/sendmessagelawyer', async (req, res) => {
        const { name, email, contact, message, recipient } = req.body;
      
        try {
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'hirethelawyer.pk@gmail.com', // Replace with your email address
              pass: 'filayfqpdlnoqjbl', // Replace with your email password
            },
          });
      
          const mailOptions = {
            from: 'hirethelawyer.pk@gmail.com', // Replace with your email address
            to: recipient,
            subject: 'Client Message',
            text: `
              Name: ${name}
              Email: ${email}
              Contact: ${contact}
              Message: ${message}
            `,
          };
      
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
              res.status(500).json({ error: 'Internal Server Error send message' });
            } else {
              console.log('Email sent: ' + info.response);
              res.status(200).json({ message: 'Message sent successfully' });
            }
          });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });


      

const Review = require('../model/reviewSchema');

// POST /api/reviews
router.post('/reviews', async (req, res) => {
  try {
    const { name, comment, rating } = req.body;
    
    // Create a new review instance
    const newReview = new Review({ name, comment, rating });

    // Save the review to the database
    const savedReview = await newReview.save();

    res.status(201).json({ message: 'Review added successfully', review: savedReview });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// GET /api/reviews
router.get('/reviews', async (req, res) => {
  try {
    // Fetch all reviews from the database
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

router.post('/casestudy', upload.single('myfile2'),  async (req, res)=>{
  const image= req.file.filename
      
 
  const {name, caseno, expertise,description} = req.body
  
  
  
  try {

     
          const casede = new casestudy({ name, caseno,  expertise,description,image })
      


          const register = await casede.save()
      
          if (register)
          {
              res.status(201).json({ message: "user registered successfully" })
          }
      
      
  } catch (err) {
      console.log(err)
  }
})

router.get("/getallcasestudies", async (req,res)=>{
  try{
  
      const casestudies= await casestudy.find({})
      res.send({status:"ok", data:casestudies})
  
  }catch(error){
  
      console.log(error);
  }
  
  });

  //CASE STUDY   GET
  router.get("/id_cases/:id", async (req,res)=>{
      try{
         //const objectid= new ObjectId()
          const cases= await casestudy.findById(req.params.id)
          res.send({status:"hag", data:cases})
      
      
      }catch(error){
      
          console.log(error);
      }
      
      });
//CASE STUDY WITH RESPECT TO EXPERTISE

  router.get('/expertise_cases/:expertise', async (req, res) => {
      const expertise = req.params.expertise;
      const experitsecase = await casestudy.find({ expertise:expertise });
      res.json(experitsecase);
    });

      

module.exports = router
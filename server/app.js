const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const app = express()

//for securing password 
dotenv.config({ path: './config.env' })
require('./db/conn')
const User = require('./model/userSchema')

app.use(express.json());

//we link router files to make it easy  
app.use(require('./router/auth'))
const contactRouter = require('./contactRouter'); 
app.use('/', contactRouter);

//for connection and securing PORT
const PORT = process.env.PORT

//middleware 
const middleware = (req,res,next)=>{
    console.log("Hello I'm middleware")
    next()
}

app.get('/', (req,res)=>{
    res.send("Hello this is home page")
})

app.get('/about', middleware ,(req,res)=>{
    console.log("Middleware is called first")
    res.send("Hello this is about page")
})

app.get('/contact', (req,res)=>{
    res.send("Hello this is contact page")
})

app.get('/signin', (req,res)=>{
    res.send("Hello this is sign-in page")
})

app.get('/signup', (req,res)=>{
    res.send("Hello this is sign-up page")
})
app.get('/getalllawyers', (req,res)=>{
    res.send("Hello this is lawyers page")
})
app.get('/getalllawyers/id', (req,res)=>{
    res.send("Hello this is lawyers page")
})
app.get('/id_cases/:', (req,res)=>{
    res.send("Hello this is case page")
})
app.use('/public',express.static('public'))
app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}.....`)
})
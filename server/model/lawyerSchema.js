const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const lawyerSchema = new mongoose.Schema({
   
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    
    description:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    cnic:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    expertise: {
        type: String,
        required: true
    },
    image:{
        type:String,
        required:true
    }
})

lawyerSchema.pre('save', async function (next) {
    if(this.isModified ('password') ) 
    {
        this.password = await bcrypt.hash(this.password, 12)
        this.cpassword = await bcrypt.hash(this.cpassword, 12)
    }
    next()
})

const Lawyer = mongoose.model('LAWYERPRACTICE', lawyerSchema)
module.exports = Lawyer
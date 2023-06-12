const mongoose = require('mongoose')


const Casestudy = new mongoose.Schema({
   
    name: {
        type: String,
        required: true
    },
    caseno: {
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
    },
    description:{
        type:String,
        required:true
    }
})



const casestudy = mongoose.model('casestudy', Casestudy)
module.exports = casestudy
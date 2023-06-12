const mongoose = require('mongoose')

const DB = process.env.DATABASE
//for deprication warning
mongoose.set("strictQuery", false);

//for connection with database
mongoose.connect(DB).then(()=>{
    console.log("Connection Successful with MongoDB")
}).catch((err) => console.log(err)) 

const mongoose = require("mongoose");
const DB = process.env.DATABAE;

mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection successfull")
}).catch((error)=>{
    console.log("error occerd") 
})
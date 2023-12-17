const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config({ path: "./config.env" }); 
PORT = process.env.PORT
require("./db/conn")
// const DB = process.env.DATABAE;
// const DB='mongodb+srv://mohsinkhanktk44:khattak1230@cluster0.kfrmnbk.mongodb.net/mernproject?retryWrites=true&w=majority' 
// mongoose.connect(DB, {
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// }).then(()=>{
//     console.log("connection successfull")
// }).catch((error)=>{
//     console.log("error occerd") 
// })


const middleware = (req,res,next)=>{
console.log("adasd");
next()
}


app.get("/",(req,res)=>{
res.send("Hello World From server")
})

app.get("/contact", middleware,(req,res)=>{
    console.log("hello contact ")
res.send("Hello World From CONTACT")
})

app.get("/about",(req,res)=>{
res.send("Hello World From About")
})
app.get("/about",(req,res)=>{
res.send("Hello World From sign in ")
})
app.get("/about",(req,res)=>{
res.send("Hello World From signup")
})

app.listen(PORT,()=>{
console.log(`server is running at port ${PORT}`)
})
const express =require("express");
// import useNewUrlParser from{mongoose}
const app=express();
const mongoose=require('mongoose');
const dotenv=require("dotenv");
dotenv.config({path:"./config.env"})

require('./db/conn')
app.use(express.json())
app.use(require('./routes/auth'));
// const User= require('./models/userSchema')
const PORT=process.env.PORT;
const middleware=(req,res,next)=>{
    console.log(`hello middleware`);
    next();
}


// app.get('/',(req,res)=>{
//     res.send("hello home page");
// });
app.get('/about',middleware,(req,res)=>{
    res.send('hello about page');
});

app.listen(5000,()=>{
    console.log("server started at 5000");
});

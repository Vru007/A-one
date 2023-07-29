const express=require('express');
const router=express.Router();

require('../db/conn');

const User=require("../models/userSchema");
router.get('/',(req,res)=>{
    res.send('server auth js file chalu hai')
});

router.post('/register',(req,res)=>{

    const {name,password,confirmpassword}=req.body;
    // console.log(name);
    // console.log(password);

    if(!name || !password ||!confirmpassword){
          return res.status(422).json({error:"pura form bhar bhai"});
    }
    // res.json({user:req.body})
    if(password!=confirmpassword){
        return res.status(422).json({error:"Enter same password"});
    }
    User.findOne({name:name})    
    .then((userExists)=>{
        if(userExists){
            return res.status(422).json({error:"name already exists"})
        }

        const user=new User({name:name, password:password, confirmpassword:confirmpassword});

        user.save().then(()=>{
             
            res.status(201).json({message:"user registered successfully"});

        }).catch((err)=>res.status(500).json({error:"Failed registration"}));

    
    }).catch(err=>{console.log(err)});
    
})
module.exports=router;
const express = require('express');
const route = express.Router();

route.use(express.json());


let user = [{id:"1",name:"ala",email:"bjaouiala3@gmail.com",password:"123456"},{id:"2",name:"haithem",email:"haithem@gmail.com",password:"123456"}]

route.post("/user",(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const fuser = user.find(u => u.email == email);
    if(fuser.email === email && fuser.password === password){
        res.json(fuser);
    }else res.status(404).json(" not found ");

})

route.post("/register",(req,res)=>{
    let rUser =req.body
    let uemail = req.body.email
    let u = user.find(u => u.email == uemail)
    if(u){
        res.json("email exist")
    }else res.json(rUser);
   
})
module.exports = route;
const express = require('express');
const app =express();
const userRoute = require('./User.js')
app.use('/auth',userRoute);
app.listen(9000,()=>{
    
})
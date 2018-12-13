const express=require("express");
const app=express();
const routes=require("./routes");
const cookieParser = require('cookie-parser')
app.use(cookieParser()); //Third party middleware

app.use(express.json()); //Built-in middleware

app.use("/ip",routes);

let sample=(req,res,next)=> 
{
res.send("This is a sample application to demostrate middleware types");
next();
};

app.get("/",sample,(req,res)=>{
});

app.post('/user',(req,res)=>
{
    res.send("Hi "+req.body.name+" Message: "+req.body.message);
});

app.listen(3000,()=>console.log("Listening on the port 3000"));


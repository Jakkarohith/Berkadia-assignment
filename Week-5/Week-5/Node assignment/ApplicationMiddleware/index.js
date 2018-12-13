const express=require("express");
const app=express();
app.use(express.json()); 

function logger(req,res,next){
console.log("The IP address of the user : "+req.ip);
console.log("The Hostname : "+req.hostname);
console.log("The path : "+req.path);
console.log("The protocol :"+req.protocol);
next();
}
app.use(logger);
app.get("/",(req,res)=>{
    res.send("check console :");
});

app.post('/user',(req,res)=>
{
    res.send("Hi "+req.body.name+" Message: "+req.body.message);
});

app.listen(3000,()=>console.log("Listening on the port 3000"));


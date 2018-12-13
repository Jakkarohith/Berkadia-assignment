const express=require("express");
const app=express();

app.use(express.json()); 


app.get("/",sample,(req,res)=>{
    res.send("This is the get method");
});

app.post('/user',(req,res)=>
{
    res.send("Hi "+req.body.name+" Message: "+req.body.message);
});

app.listen(3000,()=>console.log("Listening on the port 3000"));


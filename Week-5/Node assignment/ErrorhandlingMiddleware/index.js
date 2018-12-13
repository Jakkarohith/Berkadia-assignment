const express=require("express");
const app=express();

  app.use(function(error, req, res, next) {
    console.error(error.stack);
    res.status(500).send(error.message+': The code broke');
  });
  
  app.get('/', (req, res)=> 
  {
    throw new Error('Woops');
  });
  
 app.post('/user',(req,res)=>
    {
    res.send("Hi "+req.body.name+" Message: "+req.body.message);
    });

app.listen(3000,()=>console.log("Listening on the port 3000"));


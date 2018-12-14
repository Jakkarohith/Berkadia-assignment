const express=require("express");
const app=express();
const fs=require("fs");
const Joi=require("joi");
const crudrouter=require("./routes/crudroutes");
const routes=require("./routes/routes");
const student=require("./routes/studentdetails");

app.use(express.json());
let Bodyparser=require("body-parser");
app.use(Bodyparser.json({limit :"10mb"}));
app.use('/student',student);
app.use("/ip",routes);
app.use("/crud",crudrouter);

app.listen(3000,()=>{console.log("server listening on port 3000..");});

const express=require("express");
const app=express();
const routes=require("./routes");

app.use("/ip",routes);

app.listen(3000,()=>console.log("Listening on the port 3000"));
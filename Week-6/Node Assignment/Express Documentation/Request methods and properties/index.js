const express=require("express");
const app=express();
const studentroutes=require("./studentroutes")
let Bodyparser=require("body-parser");
const cookie=require('cookie-parser');
const cookie_secret=require('cookie-parser');
app.use(cookie('secret'));

app.use(Bodyparser.json({limit :"10mb"}));
app.use('/student',studentroutes);

app.get("/",(req,res)=>
{
console.log(req.fresh);
console.log(req.hostname);
console.log(req.ip);
console.log(req.ips);
console.log(req.method);
console.log(req.originalUrl);
console.log(req.path);
console.log(req.protocol);
console.log(req.query);
console.log(req.route);
console.log(req.stale);
console.log(req.subdomains);
console.log(req.xhr);
console.log(req.accepts('application/json'));
res.cookie('user', 'user details', { expires: new Date(Date.now() + 190000), httpOnly: true});
res.cookie('cookie-signed','',{ expires: new Date(Date.now() + 90000), httpOnly: true,signed:true});
res.send("This is the get method");
});
app.post("/user",(req,res)=>
{
console.log(req.route); 
console.log(req.subdomains);   
console.log(req.xhr);
console.log(req.accepts('application/json'));
console.log(req.get('Content-Type'));
console.log(req.is('application/json'));
console.log('Cookie : ', req.cookies);
console.log('Signed Cookie:',req.signedCookies);
let uname=req.body.username;
let profile=req.body.profile;
res.send("Username : "+uname+"  "+"profile : "+profile);
});

app.listen(4000,()=>console.log("listening bro"));
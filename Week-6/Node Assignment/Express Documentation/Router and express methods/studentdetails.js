const express=require("express");
const app=express();
let Bodyparser=require("body-parser");
const studentroutes=require("./studentroutes");
app.use(Bodyparser.json({limit :"10mb"}));
app.use(BodyParser.urlencoded({ extended: true }));
app.use('/student',studentroutes);

const options = {
    dotfiles: 'ignore',
   etag: false,
   extensions: ['htm', 'html'],
   index: false,
   maxAge: '1d',
   redirect: false,
   setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
    }
}
  
app.use(express.static('htm', options));
app.listen(4000,()=>console.log("listening bro"));
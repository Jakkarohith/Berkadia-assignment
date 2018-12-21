const express=require("express");
const app=express();
let Bodyparser=require("body-parser");
const cookie=require('cookie-parser');
app.use(cookie('user'));

app.use(Bodyparser.json({limit :"10mb"}));
app.use('/student',require("./studentroutes"));
app.use(function(req, res, next){
    res.locals.user = req.body.user;
    next();
  });
  app.get("/index",(req,res)=>{
    res.render('/index');
  })
  app.get('/file/:name', function (req, res, next) {

    var options = {
      root: __dirname + '/public/',
      dotfiles: 'deny',
      headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
      }
    };
  
    var fileName = req.params.name;
    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err);
      } else {
        console.log('Sent:', fileName);
      }
    });
  
  });
app.get('/filedisplay',(req,res)=>{
  res.sendStatus(200);
});

app.get('/html',(req,res)=>{
  res.set('Content-Type', 'text/html');
   res.send("<h1>Hi hello</h1>");
});


app.get('/download',(req,res)=>{
    res.download('/Node/Working_express/res_methods/sample.jpg');
});

app.get('/google',(req,res)=>{
    res.redirect('https://www.google.com/');
});
app.get('/', function (req, res) {
    res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);    
    console.log(res.headersSent); 
    res.send('This is the get method');
    console.log(res.headersSent); 
  });
app.post("/image",(req,res)=>
{
    res.attachment('/2.jpeg');
    res.send("Image uploaded"); 
})
app.listen(4000,()=>console.log("listening bro"));
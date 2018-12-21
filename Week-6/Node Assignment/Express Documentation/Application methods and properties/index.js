const express=require("express");
const app=express();
const students=require("./students.json");

let Bodyparser=require("body-parser");
app.use(Bodyparser.json({limit :"10mb"}));

app.use(function (req, res, next) {
    console.log('Time: %d', Date.now());
    next();
  });

app.route('/userprofile')
.all((req, res, next)=> {
   res.send("The user profile is been displayed");
});

app.locals.owner="Jakka Rohith";
app.locals.projectname="Express Documentation";

console.log(app.locals.owner+"  "+app.locals.projectname);

const admin = express();

admin.on('mount', function (parent) {
  console.log('Admin Mounted');
  console.log(parent); 
});

admin.get('/', function (req, res) {
  res.send('Admin Homepage');
});
app.use('/admin', admin);

const user=express();
user.get('/', function (req, res,next) {
    console.log(user.mountpath); 
    res.send('user Homepage');
    next();
  });  

const profile=express();
profile.get('/',function (req, res,next) {
    console.log(profile.mountpath); 
    res.send('profile of user');
    next();
  }); 
user.use('/profile',profile);
app.use(['/user','/system'], user);
console.log(app.path());
console.log(user.path());
console.log(profile.path());

app.all('/home', function (req, res, next) {
    console.log('Accessing the home page ...');
    res.send("This the home page");
    next() 
  },
  function (req, res, next) {
    console.log('Accessing the home page ...');
    next() 
  });

app.disable('env');
console.log(app.get('env'));
console.log(app.disabled('env'));

app.enable('env');
console.log(app.get('env'));
console.log(app.enabled('env'));

console.log(app.get('user'));

app.set('user', 'Jakka Rohith');
console.log(app.get('user'));

app.param('id',(req,res,next,id)=>{
    if(id=='1')
    {
        res.send("Hello user");
        next();
    }
    else{
        res.sendStatus(404);
    }
})

app.get('/:id',(req,res)=>{
    console.log("This is the get method  "+req.params.id);
    console.log("Accessing local variables owner using req "+ req.app.locals.owner);
    console.log("Accessing local variables projectname using req "+ req.app.locals.projectname);
    res.json(students.find(x=>x.id==req.params.id));
});


app.post('/',(req,res)=>{
    let body=req.body;
    let index=students.findIndex(x=>x.id==body.id);
    if(index===-1)
    {
    students.push(body);  
    }
    else{
        students[index]=body;
    }
    res.json(body);
});
app.put('/id',(req,res)=>{
    let body=req.body;
    let index=employees.findIndex(x=>x.id==req.params.id)
    students[index].name=body.name;
    res.json(students[index]);
});
app.delete('/id',(req,res)=>{
    let s=students.findIndex(x=>x.id==req.params.id);
    students.splice(s,1);
    res.send('success');
});

app.listen(4000,()=>console.log("listening bro"));
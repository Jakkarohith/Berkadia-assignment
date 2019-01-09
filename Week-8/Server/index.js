const express=require('express');
const app=express();
const router = express.Router();
const Joi=require("joi");
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',router);
app.use(express.json());
mongoose.connect('mongodb://localhost/MovieTicketBooking',{useNewUrlParser:true})
  .then(()=>{console.log("connected to the database");
   });
const citiesSchema=new mongoose.Schema({
    name:String,
    Num_of_theaters:Number,
    pincode:Number
});
const Cities=mongoose.model('cities',citiesSchema);
const theatersSchema=new mongoose.Schema(
    {
    name:String,
    now_playing:String,
    location:String,
    cost_of_ticket:Number,
    city:String,
    pincode:Number,
    timings:Array  
    });
const Theaters=mongoose.model('theaters',theatersSchema);
const bookingSchema=new mongoose.Schema(
  {
  name:String,
  moviename:String,
  location:String,
  totalcost_of_ticket:Number,
  num_of_tickets:Number,
  city:String,
  pincode:Number,
  time:String  
  });
const Booking=mongoose.model('booking',bookingSchema);
router.get('/cities',(req, res) => {
  Cities.find()
     .then((result) => 
       {
       res.send({result});
       })
    .catch((err) => 
      {
       console.log(err); 
      });    
});
router.get('/movie/:moviename',(req,res)=>
{
  if(req.params.moviename==null)
  {
  res.end('Enter the moviename'); 
  }
  else
  {
  Theaters.find({now_playing:req.params.moviename})
  .then((result) => 
    {
      res.send({result});
    })
 .catch((err) => 
   {
    console.log(err); 
   });
  }    
});

router.post('/book',(req,res)=>
{
  const schema={
    name: Joi.string().min(3).required(),
    location : Joi.string().min(3).required(),
    num_of_tickets: Joi.number().min(1).max(6).required(),
    moviename:Joi.string().min(3).required(),
    city:Joi.string().min(3).required(),
    pincode:Joi.number().required(),
    time:Joi.string().min(3).required()
    };
    const result=Joi.validate(req.body,schema);
    if(result.error)
    {
       res.status(404).send("Enter the valid details");
       return; 
    }
    else{
        let location=req.body.location;
        let moviename=req.body.moviename;
        let pincode=req.body.pincode;
        function updateBookingData(locationData,pincodeData,movienameData)
        {
         Theaters.find()
                 .and([{location:locationData},{pincode:pincodeData},{now_playing:movienameData}])
                 .select({timings:1,cost_of_ticket:1})
                 .then((result) => 
                 {
                  let totalamount=result[0].cost_of_ticket;
                  let time=result[0].timings;
                  let id=result[0]._id;
                 for(let i=0;i<5;i++)
                 {
                  if(time[i].showtime==req.body.time)
                  {
                  let totalavailableseats=result[0].timings[i].available_seats;
                  if(totalavailableseats>0)
                  {
                  let bookingdata=new Booking({
                    name:req.body.name,
                    moviename:req.body.moviename,
                    location:req.body.location,
                    totalcost_of_ticket:totalamount*req.body.num_of_tickets,
                    num_of_tickets:req.body.num_of_tickets,
                    city:req.body.city,
                    pincode:req.body.pincode,
                    time:req.body.time     
                    });
                  bookingdata.save()
                      .then((result)=>
                      {
                       res.send(`Booking successfull!!! ${result}`); 
                      })
                      .catch((err)=>
                      {
                      res.end("Sorry somethimg went wrong");
                      });
                    }  
                  }
                  else{
                    res.end("Oops!! Think your late its housefull now!!");
                  }
                 }
                 })
               .catch((err) => 
                {
                 console.log(err); 
                }); 

         }
       updateBookingData(location,pincode,moviename);    
    }
});

router.get('/theater/:pincode/:moviename',(req,res)=>
{
  if(req.params.pincode==null||req.params.moviename==null)
  {
    res.end("Enter valid pincode and moviename");
  }
  Theaters.find()
          .and([{now_playing:req.params.moviename},{pincode:+req.params.pincode}]) 
  .then((result) => 
    {
      res.send({result});
    })
 .catch((err) => 
   {
    console.log(err); 
   });    
});
  
app.listen(3000, () => console.log(`App listening on port 3000!`)); 
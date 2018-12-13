const express=require("express");
const router=express.Router();
router.use(function(req,res,next)
{
console.log("The Ip address of the user"+req.ip);
next();    
});
function baseUrl(req,res,next)
{
console.log("The URl on which user is mounted "+req.baseUrl);
next();    
}
router.get('/',(req,res)=>
{
res.send("This is method uses ip router middleware");
})
router.get('/get',baseUrl,(req,res)=>
{
res.send("This is the  method uses ip router middleware and baseurl middleware ");
})
module.exports=router;

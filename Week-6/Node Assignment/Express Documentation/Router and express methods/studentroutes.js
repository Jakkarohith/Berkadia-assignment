var students=require("./students.json");
var router=require('express').Router();

router.use(function(req, res, next) {
    console.log('%s %s %s', req.method, req.url, req.path);
    next();
  });
router.route('/student/:id')
.all(function(req, res, next) {
  next();
})
.get(function(req, res, next) {
    let body=req.body;
    let index=students.findIndex(x=>x.id==body.id);
    if(index===-1)
    {
    students.push(body);  
    }
    else{
        students[index]=body;
    }
    res.json(body.id);
})
.put(function(req, res, next) {
    next(new Error('not implemented'));
})
.post(function(req, res, next) {
  next(new Error('not implemented'));
})
.delete(function(req, res, next) {
  next(new Error('not implemented'));
});


router.get('/:id',(req,res)=>{
    console.log(req.params.id);
    res.json(students.find(x=>x.id==req.params.id));
});
router.post('/',(req,res)=>{
    let body=req.body;
    let index=students.findIndex(x=>x.id==body.id);
    if(index===-1)
    {
    students.push(body);  
    }
    else{
        students[index]=body;
    }
    res.json(body.id);
});
router.delete('/id',(req,res)=>{
    let s=students.findIndex(x=>x.id==req.params.id);
    students.splice(s,1);
    res.send('success');
});
function  consolefunction()
{
   console.log("This is router.all method"); 
}  
router.all('*', consolefunction);

module.exports=router;
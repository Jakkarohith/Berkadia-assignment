var students=require("./students.json");
var router=require('express').Router();

router.get('/:id',(req,res)=>{
    console.log(req.params.id);
    console.log(req.baseUrl);
    console.log(req.fresh);
    console.log(req.ip);
    console.log(req.ips);
    console.log(req.method);
    console.log(req.originalUrl);
    console.log(req.params.id);
    console.log(req.path);
    console.log(req.protocol);
    console.log(req.route);
    console.log(req.secure);
    console.log(req.stale);
    console.log(req.subdomains);
    console.log(req.xhr);
    res.json(students.find(x=>x.id==req.params.id));
});
router.post('/',(req,res)=>{
    console.log(req.fresh);
    console.log(req.route);
    console.log(req.get('Content-Type'));
    console.log(req.is('application/json'));
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
    console.log(req.hostname);
    console.log(req.ip);
    console.log(req.ips);
    console.log(req.method);
    console.log(req.protocol);
    console.log(req.stale);
    let s=students.findIndex(x=>x.id==req.params.id);
    students.splice(s,1);
    res.send('success');
});
module.exports=router;
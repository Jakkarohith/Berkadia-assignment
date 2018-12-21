var students=require("./students.json");
var router=require('express').Router();

router.get('/:id',(req,res)=>{
    console.log(req.params.id);
    res.cookie('user', {name:"rohith",id:1}, { expires: new Date(Date.now() + 900000), httpOnly: true,signed:true });
    res.json(students.find(x=>x.id==req.params.id));
});
router.post('/',(req,res)=>{
    let body=req.body;
    let index=students.findIndex(x=>x.id==body.id);
    if(index===-1)
    {
    res.status(400).send('Id not found');  
    }
    else{
        students[index]=body;
    }
    res.set('Content-Type', 'text/json');
    res.json(body.id);
});
router.delete('/id',(req,res)=>{
    let s=students.findIndex(x=>x.id==req.params.id);
    res.cookie('deletstudent', 
    {
    name:"Rohith Jakka",
    id:1,
    college:"Vardhaman college of engineering"
    }, { path: '/id' });
    res.location('/deletstudent');
    res.clearCookie('deletstudent', { path: '/id' });
    students.splice(s,1);
});
module.exports=router;
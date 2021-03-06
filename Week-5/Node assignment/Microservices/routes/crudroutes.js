const express=require("express");
const router=express.Router();

const filedata="This is a new file";
const fileupdata="This is an updated file";

const home=`<center><h2>This is home page</h2></center><br>
<h4>1.To perform CREATE operation rewrite the url with create</h4><br>
<h4>2.To perform READ operation rewrite the url with read</h4><br>
<h4>2.To perform READ operation of one fiile rewrite the url with readonefile</h4><br>
<h4>3.To perform UPDATE operation rewrite the url with update </h4><br> 
<h4>4.To perform DELETE operation rewrite the url with delete </h4><br>`;

router.get('/',(req,res)=>{
    res.send(home);
    });

    router.post('/readonefile', (req, res) => {
        const schema={
        filename: Joi.string().min(3).required(),
        };
        const result=Joi.validate(req.body,schema);
        if(result.error)
        {
           res.status(404).send("Enter the valid file name");
           return; 
        }
        else{
        const filename=req.body.filename;
        fs.exists(filename, function(exists) { 
           if (exists){
            fs.readFile(filename, function (err,data)
               {
                if (err)  res.send('File is not created.');
                res.send(data);
                  });
           }
           else{      
            res.send('File is doesnt exists');
               } 
       }); 
       } 
    });
    
    router.post('/create', (req, res) => {
         const schema={
         filename: Joi.string().min(3).required(),
         };
         const result=Joi.validate(req.body,schema);
         if(result.error)
         {
            res.status(404).send("Enter the valid file name");
            return; 
         }
         else{
         const filename=req.body.filename;
         fs.exists(filename, function(exists) { 
            if (exists){
                res.send('File is already created.');
            }
            else{      
                fs.writeFile(filename,filedata, function (err) {
                if (err)  res.send('File is not created.');
                res.send('File is created successfully.');
                  });
                } 
        }); 
        } 
    });
    router.put('/update', (req, res) => {
        const schema={
        filename: Joi.string().min(3).required(),
        };
        const result=Joi.validate(req.body,schema);
        if(result.error)
        {
           res.status(404).send("Enter the valid file name");
           return; 
        }
        else{
        const filename=req.body.filename;
        fs.exists(filename, function(exists) { 
           if (!exists){
               res.send('File is doesnt exist.');
           }
           else{      
               fs.routerendFile(filename," "+fileupdata, function (err) {
               if (err)  res.send('File is not created.');
               res.send('File is updated successfully.');
                 });
               } 
       }); 
       } 
    });
    router.delete('/delete', (req, res) => {
        const schema={
        filename: Joi.string().min(3).required(),
        };
        const result=Joi.validate(req.body,schema);
        if(result.error)
        {
           res.status(404).send("Enter the valid file name");
           return; 
        }
        else{
        const filename=req.body.filename;
        fs.exists(filename, function(exists) { 
           if (!exists){
               res.send('File is doesnt exist.');
           }
           else{      
               fs.unlink(filename ,function (err) {
               if (err)  res.send('File is not created.');
               res.send('File is deleted successfully.');
                 });
               } 
       }); 
       } 
    });
module.exports=router;    
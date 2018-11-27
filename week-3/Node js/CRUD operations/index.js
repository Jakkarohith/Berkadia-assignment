const http=require("http");
const fs=require("fs");
const filedata="This is new file content";
const fileupdata="This is file content is updated";
const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
     res.writeHead(200, { 'Content-Type': 'text/html' });
     res.write("<center><h2>This is home page</h2></center><br>");
     res.write("<h4>1.To perform CREATE operation rewrite the url with create</h4><br>");
     res.write("<h4>2.To perform READ operation rewrite the url with read</h4><br>");
     res.write("<h4>3.To perform UPDATE operation rewrite the url with update </h4><br> ");
     res.write("<h4>4.To perform DELETE operation rewrite the url with delete </h4><br>");
    res.end();
    }
    if(req.url==='/create')
    {
    fs.exists('newfile.txt', function(exists) { 
            if (exists){
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h2>File is already created.</h2>');
                res.end();
            }
            else{      
                fs.writeFile('newfile.txt',filedata, function (err) {
                if (err)
                    { 
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.write('File is not created.');
                    res.end();
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write('<h3>File is created successfully.</h3>');
                    res.end();
                  });
                } 
    });
  }
    if(req.url==='/read')
    {
        fs.exists('newfile.txt', function(exists) { 
            if (exists) { 
               fs.readFile("newfile.txt",'utf8',(err,data)=>{
                if (err)
                { 
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('File is not created.');
                res.end();
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h3>');
                res.write(data);
                res.write('</h3>');
                res.end(); 
            });
            } 
            else{
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h3>File is not created yet.</h3>');
                res.end();
            }
          });
    }
    if(req.url==='/update')
    {
        fs.exists('newfile.txt', function(exists) { 
        if (exists){
            fs.appendFile("newfile.txt","    "+fileupdata,(err,data)=>{
                if (err)
                { 
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('File is not updated.');
                res.end();
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h3>File is updated.</h3>');
                res.end();   
            });
        }
        else
        {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('<h3>File is not created.</h3>');
            res.end();   
        }
    });
 }
    if(req.url==='/delete')
    {
        fs.exists('newfile.txt', function(exists) { 
            if (exists){
                fs.unlink("newfile.txt",(err)=>{
                    if (err)
                    { 
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.write('File is not deleted.');
                    res.end();
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write('<h3>File is deleted sucessfully.</h3>');
                    res.end();    
                });
            }
            else{
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('<h3>File is not created yet.</h3>');
            res.end();
            }
     });
}    
});
server.listen(3000);
    


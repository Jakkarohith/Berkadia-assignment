const  http = require('http');
http.createServer(function (req, res) {
  let number1= new promise((resolve,reject)=>
  {
    resolve(10);
  });
  let number2= new promise((resolve,reject)=>
  {
    resolve(20);
  });
  let result=await number1 + await number2;
  res.write(result); 
  res.end(); 
}).listen(8000);
console.log("server listening on 8000");

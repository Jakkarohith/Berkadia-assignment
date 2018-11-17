var sb = require('readline-sync');
var num=parseInt(sb.question("Enter your Number \n"));
let i,count=0;
for(i=2;i<num/2;i++)
{
 if(num%i==0)
 {
     count=count+1;
     break;
 }   
}
if(count==0)
{
    console.log(num+" is a prime number");
}
else{
    console.log(num+" is not  a prime number");
}
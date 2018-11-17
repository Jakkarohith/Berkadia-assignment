var sb = require('readline-sync');
var num=parseInt(sb.question("Enter your number \n"));
function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log("The factorial of  "+num+" "+factorial(num));
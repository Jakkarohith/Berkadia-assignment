var sb = require('readline-sync');
console.log("1.ADDITION\n");
console.log("2.SUBRACTION\n");
console.log("3.MULTIPLICATION\n");
console.log("4.DIVISON\n");
var option1=sb.question("Enter your choice \n");
var option=parseInt(option1);
switch(option)
{
case 1 :
var x = sb.question("Enter  the first number\n");
var y = sb.question("Enter  the second number\n");
c=parseInt(x)+parseInt(y);
console.log("Addition of "+x+" "+y+"="+c);
break;
case 2 :
var x = sb.question("Enter  the first number\n");
var y = sb.question("Enter  the second number\n");
c=parseInt(x)-parseInt(y);
console.log("Subraction of "+x+" "+y+"="+c);
break;
case 3 :
var x = sb.question("Enter  the first number\n");
var y = sb.question("Enter  the second number\n");
c=parseInt(x)*parseInt(y);
console.log("Multiplication of "+x+" "+y+"="+c);
break;
case 4 :
var x = sb.question("Enter  the first number\n");
var y = sb.question("Enter  the second number\n");
c=parseInt(x)/parseInt(y);
console.log("Divison of "+x+" "+y+"="+c);
break;
default : console.log("Wrong Input");
break;
}

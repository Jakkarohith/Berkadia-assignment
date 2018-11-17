var sb = require('readline-sync');
var x = sb.question("Enter  the first number\n");
var y = sb.question("Enter  the second number\n");
c=parseInt(x)-parseInt(y);
console.log("Subraction of "+x+" "+y+"="+c);
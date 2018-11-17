var line = require('readline-sync');

var x = line.question("Enter  the first number\n");
var y = line.question("Enter  the second number\n");
c=parseInt(x)+parseInt(y);
console.log("Addition of "+x+" "+y+"="+c);
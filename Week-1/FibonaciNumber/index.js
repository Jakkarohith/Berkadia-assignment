var sb = require('readline-sync');
var num=parseInt(sb.question("Enter your Number \n"));
function fib(n)
{
let a=0,b=1,c;
if(n==0||n==1)
{
   console.log("Fibonacii series"+ a);
}
else   if(n==2){
console.log("Fibonacii series"+ a+" "+b);
}
else
{
console.log("Fibonacii series\n"+a+"\n"+b);   
for(i=2;i<=n;i++)
{
c=a+b;
a=b;
b=c;
console.log(c);
}
}
}
fib(num);

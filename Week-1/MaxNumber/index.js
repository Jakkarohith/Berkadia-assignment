var sb = require('readline-sync');
var n=parseInt(sb.question("Enter the number of elements in the array \n"));
var arr=new Array();
console.log("Enter the array elements");
for(let i=0;i<n;i++)
{
    arr[i]=parseInt(sb.question());
}
var max=arr[0];
for(let i=1;i<n;i++)
{
if(max<arr[i])
{
max=arr[i];    
}    
}
console.log("Maximun number in "+arr+"  "+max);

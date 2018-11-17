var sb = require('readline-sync');
var n=parseInt(sb.question("Enter the number of elements in the array \n"));
var arr=new Array();
console.log("Enter the array elements");
for(let i=0;i<n;i++)
{
    arr[i]=parseInt(sb.question());;
}
var flag=0;
for(let i=0;i<n;i++)
{
 for(let j=i+1;j<n;j++)
 {
  if(arr[i]==arr[j])
  {   
  console.log("Duplicate element found at "+(j+1)+" is "+arr[i]);
  flag=1; 
  }   
 }   
}
if(flag==0)
{
    console.log("No duplicate element");   
}

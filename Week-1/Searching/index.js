var sb = require('readline-sync');
var n=parseInt(sb.question("Enter the number of elements in the array \n"));
var arr=new Array();
console.log("Enter the array elements");
for(let i=0;i<n;i++)
{
    arr[i]=parseInt(sb.question());;
}
var flag=0;
var key=parseInt(sb.question("Enter the key value to search \n"));
for(let i=0;i<n;i++)
{
if(key==arr[i])
{
    flag=1;
    console.log("Search successfull \n"+"key position "+(i+1)+"\nArray :"+arr);
}
}
if(flag==0)
    {
    console.log("Search Unsuccessfull");    
    }

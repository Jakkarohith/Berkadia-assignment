var sb = require('readline-sync');
var n=parseInt(sb.question("Enter the number of elements in the array \n"));
var arr=new Array();
console.log("Enter the array elements");
for(let i=0;i<n;i++)
{
    arr[i]=parseInt(sb.question());;
}

console.log(arr); 
for (let i=0; i<n-1;i++) 
    for (let j=0;j<n-i-1;j++) 
        if (arr[j]>arr[j+1]) 
        { 
            let temp=arr[j]; 
            arr[j]=arr[j+1]; 
            arr[j+1]=temp; 
        } 
console.log("Sorted Array");
console.log(arr); 

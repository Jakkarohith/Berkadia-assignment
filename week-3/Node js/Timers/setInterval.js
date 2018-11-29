let n = 0;
let num=10;
let result=setInterval(Table,1000);
function Table(){
   n++;
   if(n >=1)
   {
        console.log(num+" "+"*"+" "+n+"  =  "+n*num);
   }
   if(n==10)
   {
     console.log(n+" End of the table "); 
     clearInterval(result);
    }
}
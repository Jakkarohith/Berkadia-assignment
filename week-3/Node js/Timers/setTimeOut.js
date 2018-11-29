let n = 0;
let num=6;
function table(){
   n++;
   if(n <=10)
   {
      setTimeout(table,2000);
      console.log(num+" "+"*"+" "+n+"  =  "+n*num);
   }
   if(n==10)
    console.log("End of the table ");
}
setTimeout(table,1000);


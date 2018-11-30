var obj = {name:"Niladri"};
var greeting = function(a,b,c)
{
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};
var bound = greeting.bind(obj); 
console.dir(bound); 
console.log("Output using .bind() below ");
console.log(bound("Newtown","KOLKATA","WB"));

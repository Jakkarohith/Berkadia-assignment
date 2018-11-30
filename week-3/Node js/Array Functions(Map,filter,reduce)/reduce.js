let student1 = [15, 23, 11, 47];
let student2 = [95, 93, 17, 77];
let student3 = [45, 73, 21, 57];
let student4 = [85, 45, 90, 47];
let student5 = [50, 73, 41, 50];

function getSum(total, num) {
    return total + Math.round(num);
}
function myFunction(item) {
   let  marks=(item.reduce(getSum, 0)/400)*100;
	if(marks<30)
		return "fail";
	else 
		return "pass";
}

myFunction(student1);
myFunction(student2);
myFunction(student3);
myFunction(student4);
myFunction(student5);
let  Students = [
    {firstname : "Jakka", lastname: "Rohith",state:"Telangana",district:"hyderbad",marks1:50,marks2:50,marks3:50},
   {firstname : "Conor", lastname: "mcgregor",state:"Up",district:"CC",marks1:30,marks2:40,marks3:70},
	{firstname : "jakka", lastname: "gunith",state:"AP",district:"GP",marks1:40,marks2:60,marks3:90},
    {firstname : "Mike", lastname: "Tyson",state:"kerala",district:"RR",marks1:10,marks2:20,marks3:30}
];


function getFullName(item, index) {
    let  fullname = [item.firstname,item.lastname].join("   ");
    return fullname;
}

function getAddress(item, index) {
    let address = [item.district,item.state].join("    ");
    return address;
}
function getPercent(item, index) {
    let marks =((item.marks1+item.marks2+item.marks3)/300)*100;
	if(marks>50)
        return "Pass";
	else
		return "Fail";
}

function myFunction() {
    console.log(" Full name of the Student :"+Students.map(getFullName));
	console.log("Address of the student :"+Students.map(getAddress));
	console.log("Aggregrate of the studentrs : "+Students.map(getPercent));
}
myFunction();
 

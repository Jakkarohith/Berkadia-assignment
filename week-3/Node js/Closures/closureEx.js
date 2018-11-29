function showName (firstName, lastName) { 
	let firstname = "JAKKA ";
	let lastname=" ROHITH";
 
function FullName () {
	let state="Telangana";
	let district="Hyderabad";
	let area="Attapur";	
	function address()
	{
	return  area+" "+district+" "+state;	
	}
	let add=address();
return "Name :"+" " + firstName + " " + lastName+"  address : "+add;     
}

return FullName (); 
} 

showName ("Jakka", "rohith"); // Your name is Michael Jackson 
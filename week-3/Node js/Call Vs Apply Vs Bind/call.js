var person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName:"jakka",
    lastName: "Rohith",
}
var person2 = {
    firstName:"jakka",
    lastName: "gunith",
}
person.fullName.call(person2); 
person.fullName.call(person1); 
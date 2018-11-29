class StudentDetails
{
     constructor(rollnum,name,college,marks) {
      this.rollnum=rollnum;
      this.name = name;
      this.college = college;
      this.marks = marks;
      console.log("This is a parent class");
    }
  printdetails()
	{
        console.log("Roll number of the student"+rollnum);
        console.log("Name of the student"+name);
        console.log("College of the student"+college);
        console.log("Marks of the student"+marks); 
	}
}
  class Student extends StudentDetails{
    constructor(rollnum,name,college,marks) {
        super(rollnum,name,college,marks);
        super.printdetails(); 
        console.log("This is a child class");
    }
  }
  let rohith= new Student('1','jakka rohith','vce','75');
  let gunith= new Student('2','jakka gunith','kmit','80');
  let vijay= new Student('3','jakka vijay','NIIT warangal','99');
 

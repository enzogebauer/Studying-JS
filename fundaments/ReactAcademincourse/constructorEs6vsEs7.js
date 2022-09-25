// constructor on ES6
class Human {
  constructor(){
    this.gender = "male";
  }
  
  

  printGender() {
    console.log(this.gender);
  }

}
class Person extends Human {
  constructor(){
    super();
    this.name = "Enzo";
    this.gender = "female;"
  }
  
  

PrintMyName(){
  console.log(this.name);
}

}
const person = new Person();
person.PrintMyName();
person.printGender();

// constructor no ES7
class HumanES7 {
  
  gender = "male";




printGenderES7 = () => {
  console.log(this.gender);
}

}

class PersonES7 extends HumanES7 {

  name = "Enzo";
  gender = "female;"




PrintMyNameES7 = () =>{
console.log(this.name);
}

}
const personES7 = new PersonES7();
personES7.PrintMyNameES7();
personES7.printGenderES7();
var firstName = "Peter";
var lastName = "Ally";

function showFullName() {
  console.log(this.firstName, this.lastName);
}

var person = {
  firstName: "Penelope",
  lastName: "Barrymore",
  fullName: function() {
    console.log(this.firstName + " " + this.lastName);
    console.log(person.firstName + " " + person.lastName);
  },
  fullName2: () => {
    console.log(this.firstName + " " + this.lastName);
  } // arrow function using exection context no binding.
};
persona.fullName2();

class Person {
  constructor() {
    this.firstName = "Penelope";
    this.lastName = "Barrymore";
    this.fullName = this.fullName.bind(this);
  }

  fullName() {
    console.log(this.firstName + " " + this.lastName);
  }

  fullName2 = () => {
    console.log(this.firstName + " " + this.lastName);
  };
}

const p = new Person();
console.log(p.firstName);
p.fullName();
p.fullName2();

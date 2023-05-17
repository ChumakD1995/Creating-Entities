class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  dislpayInformation() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const Human1 = new Human("Dmytro", 28);
const Human2 = new Human("Kate", 27);
const Human3 = new Human("Vlad", 16);
Human1.dislpayInformation(); 
Human2.dislpayInformation(); 
Human3.dislpayInformation(); 

class Auto {
  constructor(brand, model, year, carNumber) {
    this.brand = brand; 
    this.model = model; 
    this.year = year; 
    this.carNumber = carNumber; 
    this.owner = null; 
  }

  assignOwner(owner) {
    if (owner.age > 18) {
      this.owner = owner;
    } else {
      console.log("The owner of the car must be over 18 years old.")
    }
  }

  dislpayInformation() { 
    console.log("Information about auto");
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`CarNumber: ${this.carNumber}`);

    if (this.owner) {
      console.log("Information about owner");
      this.owner.dislpayInformation();
    } else {
      console.log("Owner is not assigned");
    }
  }
}

const Auto1 = new Auto("Volkswagen", "Jetta", 2016, "KA3188AE");
Auto1.assignOwner(Human1);
Auto1.dislpayInformation(); 

const Auto2 = new Auto("Seat", "Leon", 2015, "AI4218BR");
Auto2.assignOwner(Human2);
Auto2.dislpayInformation(); 

const Auto3 = new Auto("Porsche", "Cayenne", 2008, "BH2001AE")
Auto3.assignOwner(Human3); 
Auto3.dislpayInformation(); 



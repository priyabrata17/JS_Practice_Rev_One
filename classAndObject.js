
const student = {
    fullName: "Rohit Kumar",
    marks: 82,
    printMarks: function () {
        document.write(this.marks);
        console.log(this.marks);
    }
}

student.printMarks();
console.log(student);

const taxRate = {
    calTax() {
        return "Tax rate is 10%";
    }
}

const employee1 = {
    salary: 5000
}
const employee2 = {
    salary: 25000
}
const employee3 = {
    salary: 15000
}

Object.setPrototypeOf(employee1, taxRate);
Object.setPrototypeOf(employee2, taxRate);
Object.setPrototypeOf(employee3, taxRate);


//Classes
class ToyotaCar {
    constructor(brand, milage) {
        this.brand = brand;
        this.milage = milage;
    }

    start() {
        return "Car Started";
    }

    stop() {
        return "Car Stops";
    }

    // setBrand(brand) {
    //     this.brand = brand;
    // }
}

let fortuner = new ToyotaCar("Fortuner", 18);
let lexus = new ToyotaCar();

//Inheritance
class Person {
    constructor(name) {
        this.species = "Homo sepiens",
        this.name = name;
    }
    eat() {
        console.log(`Entering Parent!`);
        console.log(`eats`);
    }
    sleep() {
        return `sleeps`;
    }
}

class Enginner extends Person {
    constructor(name,branch) {
        super(name);
        this.branch = branch;
    }
    work() {
        console.log(`Entering Child!`);
        super.eat();
        console.log(`Solve Problems`);
        console.log(`Exit Child!`);
    }
}
class Doctor extends Person {
    work() {
        return `Treat Patients`
    }
}

const uttam = new Enginner("Uttam","Civil");
const vikash = new Doctor();

let datas = "Hello This is college";
class College {
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(datas);
    }
}

const studentOne = new College("Asif", "asif@abc.com");

class Admin extends College {
    constructor(name,email,role) {
        super(name,email);
        this.role = role;
    }
    editData() {
        datas = `Hello This is College Edited By ${this.name}`;
        console.log(datas);
    }
}

const adminOne = new Admin("Amar", "amar@admin.com", "Admin");
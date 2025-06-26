class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }
  add(num) {
    this.real += num.real;
    this.imaginary += num.imaginary;
  }
  get Real() {
    return this.real;
  }
  set Real(real) {
    this.real = real;
  }
  get Imaginary() {
    return this.imaginary;
  }
  set Imaginary(imaginary) {
    this.imaginary = imaginary;
  }
}

let a = new Complex(8, 9);
let b = new Complex(7, 6);
console.clear();
// b.add(a);
// b.getReal()
console.log(a.real,b.imaginary,);

class Human {
  walk() {
    console.log("human is walking");
  }
  talk() {
    console.log("human is talking");
  }
  read() {
    console.log("Human is reading");
  }
  learning() {
    console.log("the human is learning");
  }
}
class Student extends Human {
  read() {
    super.read();
    console.log("The student is reading");
  }
  learning() {
    super.learning();
    console.log("The student is learning");
  }
}

let student1add = new Student();
const name = "Nilesh";
student1add.read();
console.log(student1add instanceof Student);
console.log(name instanceof Student); // Not meaningful
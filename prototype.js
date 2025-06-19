const parent = {
  greet() {
    console.log("Hello from the prototype!");
  }
};

const child = {
  sayHi() {
    console.log("Hi from child!");
  }
};

// Set parent as prototype of child using __proto__
child.__proto__ = parent;

// Now child can access both methods
child.sayHi();  // Output: "Hi from child!"
child.greet();  // Output: "Hello from the prototype!"

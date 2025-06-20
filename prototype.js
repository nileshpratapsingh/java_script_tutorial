const parent = {
  greet() {
    console.log("Hello from the prototype!");
  },
};

const child = {
  sayHi() {
    console.log("Hi from child!");
  },
};

// Set parent as prototype of child using __proto__
child.__proto__ = parent;

// Now child can access both methods
child.sayHi(); // Output: "Hi from child!"
child.greet(); // Output: "Hello from the prototype!"

// new method

const a = {
  any() {
    console.log("yo wass up");
  },
};

const p = {
  any2() {
    console.log("Prototype of a");
  },
};

// Preferred way:
Object.setPrototypeOf(a, p);

a.any(); // "yo wass up"
a.any2(); // "Prototype of a"

// creating the object prototype

const proto = {
  greet() {
    console.log("Hello!");
  },
};

const obj = Object.create(proto); // `proto` is the prototype of `obj`

obj.greet(); // Output: Hello!

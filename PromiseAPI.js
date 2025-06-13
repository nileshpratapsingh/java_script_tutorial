// Promise API Examples

// Promise.resolve
const resolvedPromise = Promise.resolve("Resolved value");
resolvedPromise.then(value => console.log("Promise.resolve:", value));

// Promise.reject
const rejectedPromise = Promise.reject("Rejected value");
rejectedPromise.catch(error => console.log("Promise.reject:", error));

// Promise.all
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then(values => console.log("Promise.all:", values))
  .catch(error => console.log("Promise.all error:", error));

// Promise.race
const fast = new Promise(resolve => setTimeout(() => resolve("fast"), 100));
const slow = new Promise(resolve => setTimeout(() => resolve("slow"), 500));

Promise.race([fast, slow])
  .then(value => console.log("Promise.race:", value));

// Promise.allSettled
const mixed1 = Promise.resolve("success");
const mixed2 = Promise.reject("fail");

Promise.allSettled([mixed1, mixed2])
  .then(results => console.log("Promise.allSettled:", results));

// Promise.any
const any1 = Promise.reject("fail 1");
const any2 = Promise.resolve("success 2");
const any3 = Promise.resolve("success 3");

Promise.any([any1, any2, any3])
  .then(value => console.log("Promise.any:", value))
  .catch(error => console.log("Promise.any error:", error));

//demo Error
const rejectError = Promise.reject("demoError");
rejectError.catch(error => console.log(error));
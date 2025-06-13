import "colors";

let arr = [34, 930, 123, 44, 65, 734, 432, 745];

let a = arr.map((index) => {
  return index + index;
});

console.log(arr);
console.log("map");
console.log(a);

console.log("forEach");
arr.forEach((element) => {
  console.log(element);
});

console.log("filter");
let a2 = arr.filter((n) => {
  return n > 100;
});

console.log(a2);

console.log("reduce");
let a3 = arr.reduce((index, value, array) => {
  return array + value - index;
});
console.log(a3);

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(findSum(arr));

// Sum of elements of an array without using reduce()
let arrr = [34, 930, 123, 44, 65, 734, 432, 745, 895, 1234, 5678, 91011];

let summ = 0;
for (let i = 0; i < arrr.length; i++) {
  summ += arrr[i];
}

console.log("Sum of array elements:", summ);

new Promise((resolve, reject) => {
  let error = false;
  if (!error) {
    const sum = findSum(arr);
    resolve(sum);
    console.log("Success:".green);
  } else {
    reject("Can't find the sum");
  }
})
  .then((summ) => {
    console.log("Sum of array elements (from Promise):", summ);
    console.log("no error".green);
  })
  .catch((err) => {
    console.log("error:", err);
  });

new Promise((resolve, reject) => {
  let promiseTwo = false;
  if (!promiseTwo) {
    resolve();
  } else {
    reject();
  }
})
  .then(() => {})
  .catch(() => {});

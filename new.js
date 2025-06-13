let a = "nilesh";
let b = 10;
console.log(a + b);

console.log(typeof a + typeof b);

console.log(typeof (a + b));

const c = {
  name: "nilesh",
  rollno: 5952,
  section: true,
};
console.table(c);

c["status"] = "passed";
c["name"] = "rohan";
console.log(c);

const dict = {
  word1: "defination",
  word2: "defination",
  word3: "defination",
  word4: "defination",
  word5: "defination",
};
for (let i = 2; i <= 5; i++) {
  console.log(`word${i}: ${dict[`word${i}`]}`);
}

import 'colors';

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log("Promise One Resolved".red));
  }, 2000);
}).then(() => {
  console.log("Promise One then");
}).catch(() => {
  console.log("Promise One catch");
}).finally(() => {
  console.log("Promise One finally");
});

let promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log("Promise Two Resolved".green));
  }, 3000);
});

new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve(console.log("Promise Three Resolved".yellow));
  }, 5000);
}).then(() => {
  console.log("Promise Three then");
}).catch(() => {
  console.log("Promise Three catch");
}).finally(() => {
  console.log("Promise Three finally");
});

new Promise((resolve, reject)=>{
  setTimeout(()=>{
    
    let error = true; // Simulating no error
    if(!error){
      resolve(console.log("Promise Four Resolved".blue));
    }else{
      reject(console.log("Promise Four Rejected".red));
    }
  },6000);

}).then(() => {
  console.log("Promise Four then");
}).catch(() => {
  console.log("Promise Four catch");
});

const username = new Promise((resolve, reject) => {
  let blast= false;
  if(!blast){
    reject("Error: blast is not defined");
  }
  setTimeout(() => {
    const user = { name: "John Doe", age: 30, email: "john.doe.temp@email.com", 
      address: "123 Main St, Anytown, USA",};
    resolve(user);
    return user;
  }, 8000);
});
username.then((user) => {
  console.log("User fetched:", user.name);
}).catch((error) => {
  console.error("Error fetching user:", error);
});

const rejected = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("reject promise");
    reject(new Error("error!!"));
  }, 9000);
});

rejected
  .then((value) => {
    console.log("Promise resolved with value:", value);
  })
  .catch((error) => {
    console.log("Promise rejected with error:", error.message);
  });
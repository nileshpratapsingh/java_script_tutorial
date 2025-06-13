new Promise((resolve) => {
  console.log("promise is pending");
  setTimeout(() => {
    console.log("promise resolved");
    resolve(10);
  }, 2000);
})
  .then((value) => {
    console.log("promise completed", value + 1);
    return new Promise((resolve) => {
      console.log("attaching multiple handlers!");
      setTimeout(() => {
        resolve(value + 2);
      }, 2000);
    });
  })
  .then((value) => {
    console.log("Multiple Handler Promise executed", value);
  });

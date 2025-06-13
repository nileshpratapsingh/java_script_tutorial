// promise chaining
 function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 complete");
      resolve(1);
    }, 1000);
  });
}

function step2(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 complete");
      resolve(previousResult + 1);
    }, 1000);
  });
}

function step3(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 complete");
      resolve(previousResult + 1);
    }, 1000);
  });
}

function step4(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 4 complete");
      resolve(previousResult + 1);
    }, 1000);
  });
}

// 🧪 Promise Chaining
step1()
  .then(result1 => step2(result1))
  .then(result2 => step3(result2))
  .then(result3 => step4(result3))
  .then(finalResult => {
    console.log("Final Result:", finalResult); // Should print 4
  })
  .catch(error => {
    console.error("Something went wrong:", error);
  });


const loadScript = function loadScript(src) {
  return new Promise((resolve, reject) => {
    script.type = "text/javascript";
    script.src = src;
    script.onload = () => { // Use 'onload' (lowercase L)
      resolve(1);
    };
    script.onerror = () => { // Use 'onerror' (lowercase L)
      reject(0);
    };
  });
};

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js");
p1.then((value) => {
  console.log(value);
});
p1.catch((error) => {
  console.log("some error occured!!\n"+error);
});
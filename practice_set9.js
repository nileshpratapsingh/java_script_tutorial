async function loadScript(src) {
  let scriptSrc = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Script is loaded!!\n");
    }, 3000);
  });
  scriptSrc.then((value) => {
    console.log(value + src);
  });

  let waitingSrc = await scriptSrc;
  return [waitingSrc];
}

console.log("sending request....");

setTimeout(() => {
  loadScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js"
  );
  console.log("fetching data....");
}, 2000);
async function test() {
  let p1 = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Something went wrong"));
    }, 4000);
  });

  p1.catch((error) => {
    console.log("Caught in p1.catch:", error.message);
  });

  try {
    return await p1;
  } catch (error) {
    console.log("Caught in async function:", error.message);
  }
}

test();

async function promises() {
  // Wait 3 seconds before starting the promises
  setTimeout(async () => {
    let p1 = new Promise((resolve) => {
      resolve("Promise 1");
    });

    let p2 = new Promise((resolve) => {
      resolve("Promise 2");
    });

    let p3 = new Promise((resolve) => {
      resolve("Promise 3");
    });

    // Await all promises and log the result
    const values = await Promise.all([p1, p2, p3]);
    console.log("All three promises", values);
  }, 5000);
}

promises();

async function promises2() {
  await new Promise((resolve) => setTimeout(resolve, 6000)); // wait 3 seconds

  let p1 = Promise.resolve("Promise 1");
  let p2 = Promise.resolve("Promise 2");
  let p3 = Promise.resolve("Promise 3");

  const values = await Promise.all([p1, p2, p3]);
  console.log("All three promises:", values);
}

promises2();

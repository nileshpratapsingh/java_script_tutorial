// Example 1: Basic try-catch
try {
  let a = 10;
  let b = a + c;
} catch (error) {
  console.log("Error caught:", error.message);
}

// Example 2: Handling errors in async functions
async function fetchData() {
  try {
    throw new Error("Failed to fetch data!");
  } catch (error) {
    console.log("Async error caught:", error.message);
  }
}
fetchData();

// Example 3: Custom error throwing
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Custom error caught:", error.message);
}

try {
  let a = 5;
  let b = a / c;
  console.log("Result:", b);
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("This will always run (finally block).");
}

// Set an item in localStorage
localStorage.setItem("username", "Nilesh");

// Get an item from localStorage
const user = localStorage.getItem("username");
console.log("Username from localStorage:", user);

// Remove an item from localStorage
localStorage.removeItem("username");

// Clear all items
localStorage.clear();
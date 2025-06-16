// Set a cookie
document.cookie = "username=Nilesh; expires=Fri, 31 Dec 2027 23:59:59 UTC; path=/";

// Get all cookies
console.log("All cookies:", document.cookie);

// Function to get a specific cookie by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

console.log("Username cookie:", getCookie("username"));
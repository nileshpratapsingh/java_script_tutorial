let ctitle = document.getElementById('firstcardtitle');

ctitle.style.background = "linear-gradient(156deg,rgba(255, 0, 0, 1) 0%, rgba(206, 237, 0, 1) 48%, rgba(232, 83, 237, 1) 61%)";
ctitle.style.webkitBackgroundClip = "text";  // For Safari/Chrome
ctitle.style.webkitTextFillColor = "transparent"; // Make the text fill transparent

let firstNavElement = document.getElementsByClassName('nav-link active');
let navbar = document.getElementsByClassName('navbar-brand');

firstNavElement[0].classList.add('text-danger');
console.log(firstNavElement);

navbar[0].classList.add('text-danger');


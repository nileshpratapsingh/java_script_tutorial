fetch("https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
  .then(response => response.json())
  .then(data => {
    console.log(data.joke); // You can display it in your HTML
  })
  .catch(error => console.error("Error fetching joke:", error));

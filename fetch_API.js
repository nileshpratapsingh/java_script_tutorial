// Example: Fetch weather data using Open-Meteo API (no API key required)
fetch('https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current_weather=true')
  .then(response => response.json())
  .then(data => {
    console.log("Current weather in Bengaluru:");
    console.table(data.current_weather);
  })
  .catch(error => {
    console.error("Error fetching weather data:", error);
  });
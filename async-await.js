async function mark1() {
  let Bengaluru_Weather = new Promise((resolve) => {
    setTimeout(() => {
      resolve("30 degree in Bengaluru");
    }, 3000);
  });

  Bengaluru_Weather.then((value) => {
    console.log(value);
  });

  let Mumbai_Weather = new Promise((resolve) => {
    setTimeout(() => {
      resolve("34 degree in Mumbai");
    }, 4000);
  });

  Mumbai_Weather.then((value) => {
    console.log(value);
  });

  let new_Bengaluru_weather = await Bengaluru_Weather;
  let new_Mumbai_weather = await Mumbai_Weather;

  return [new_Bengaluru_weather, new_Mumbai_weather];
}

console.log("Welcome to weather control room!!");
mark1();

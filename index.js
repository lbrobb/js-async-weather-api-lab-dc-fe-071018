const apiKey = "26bf5f71d5e1e1fc5f71a3ef62442f41"

function handleFormSubmit(event) {
  console.log("== handleFormSubmit ==");
  // prevent submitButton from refreshing the page:
  event.preventDefault();
  // create variable for city:
  let city = document.getElementById("city").value;
  console.log("city:", city);
  // call fetchCurrentWeather function:
  fetchCurrentWeather(city)
}

function fetchCurrentWeather(city) {
  // fetch current weather based on city
  console.log("== fetchCurrentWeather ==");
  console.log("city:", city);
  // create URL. syntax: [base][city]&APPID[apiKey]
  let weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  weatherUrl += city;
  weatherUrl += "&APPID=";
  weatherUrl += apiKey;
  console.log("weatherUrl:", weatherUrl);
  // promise (async) to fetch weatherData (in weatherJson format) from weatherUrl
  fetch(weatherUrl)
    .then( (weatherData) => {
      console.log("=== then1 ===");
      return weatherData.json()
    })
    .catch( error => {
      console.log("=== catch1 ===");
      console.error(`Oops! ${error}`) // tics: deliberately used to allow ${error} to be read by new syntax
    })
    .then( weatherJson => {
      console.log("=== then2 ===");
      console.log(weatherJson);
      return weatherJson
    })
    .catch( error => {
      console.log("=== catch2 ===");
      console.error(`Alas! Couldn't convert the json: ${error}`)
    })
    .then( weatherJson => {
      console.log("=== then3 ===");
      displayCurrentWeather(weatherJson)
    })
  //endFetch
}

function displayCurrentWeather(weatherJson) {
  // render current weather data to the DOM using provided IDs and json from API
  console.log("== displayCurrentWeather ==");
  console.log("weatherJson:", weatherJson)
  console.log("weatherJson.main.temp:", weatherJson.main.temp)


  // <td id="temp">
  // <td id="low">
  // <td id="high">
  // <td id="humidity">
  // <td id="cloudCover">
  // <td id="sunrise">
  // <td id="sunset">


}

function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
  console.log("== fetchFiveDayForecast ==")
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
  console.log("== displayFiveDayForecast ==")
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
  console.log("== createChart ==")
}

document.addEventListener('DOMContentLoaded', function() {
  console.log("-- DOMContentLoaded --");
  //
  document.getElementById("submitButton").addEventListener("click", handleFormSubmit);
  console.log("document.getElementById('submitButton'):", document.getElementById('submitButton'));
})

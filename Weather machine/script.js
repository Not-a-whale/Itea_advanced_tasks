// 1. Get DOM-elements

// 2. Add event listener

// 3. Find current location

// 4. Make request and get response

// 5. Display data

var humidity, pressure, temperature, windSpeed, weatherSummary;

// helper function to get DOM elements
function getElement(id) {
  return document.getElementById(id);
}

var humidity = this.getElement("current-humidity"),
  pressure = this.getElement("current-preasure"),
  temperature = this.getElement("current-temperature"),
  windSpeed = this.getElement("current-wind-speed"),
  weatherSummary = this.getElement("weather-summary");

function getCurrentGeoPosition() {
  //
  //
  //

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      fetchWeatherData(position.coords.latitude, position.coords.longitude);
    });
  } else {
  }
}

// 3. Function to make HTTP request to 3rd party client
fetchWeatherData(lat, long) {
    console.log(lat, long);
}

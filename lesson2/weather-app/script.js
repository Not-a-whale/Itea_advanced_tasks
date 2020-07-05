// 1. Get DOM elements
let humidity = getElement("current-humidity"),
  pressure = getElement("current-pressure"),
  temperature = getElement("current-temperature"),
  windSpeed = getElement("current-wind-speed"),
  weatherSummary = getElement("weather-summary"),
  country = getElement("country"),
  city = getElement("city"),
  time = getElement("time"),
  day = getElement("day"),
  month = getElement("month"),
  dayOfWeek = getElement("dayOfWeek"),
  body = document.querySelector("body"),
  unitsC = getElement("units-c"),
  unitsF = getElement("units-f"),
  toCelsiusBTN = getElement("to-celsius");

let isFahr = false;
let tempCels = 0;
let tempFahr = 0;
unitsF.style.display = 'none';

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let localTime = [];

// helper function to get DOM elements
function getElement(id) {
  return document.getElementById(id);
}

// changes the background of the whole body tag

function changeBackground(code, isDay) {
  let elementComputedStyle = window.getComputedStyle(body);
  let backgroundImage = `url("./images/${code}-${
    isDay ? "day" : "night"
  }.jpg")`;
  console.log(backgroundImage);
  body.style.backgroundImage = backgroundImage;

  // How to check if image even exist??
  /*   if (elementComputedStyle.getPropertyValue("backgorund-image") === "") {
    body.style.backgroundImage = `url("./images/cloudy.jpg")`;
  } */
}

// helper api call object
const api = {
  key: "d21fffed47b84c67a21204005200407",
  base: "http://api.weatherapi.com/v1",
};

// 2. Function to find current geo position
function getCurrentGeoPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let result = fetchWeatherData(
        null,
        position.coords.latitude,
        position.coords.longitude
      );
      return result;
    });
  } else {
    alert("Your browser does not support Geolocation API!");
  }
}

// 3. Function to make HTTP request to 3rd party client
function fetchWeatherData(city = null, lat, long) {
  if (!city) {
    fetch(`${api.base}/current.json?key=${api.key}&q=${lat},${long}`)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (result) {
        console.log(result);
        displayWeatherData(result);
      })
      .catch(function (err) {
        return err;
      });
  } else {
    fetch(`${api.base}/current.json?key=${api.key}&q=${city}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        displayWeatherData(result);
      })
      .catch(function (err) {
        return err;
      });
  }
}

// 4. Function to display data
function displayWeatherData(data) {
  localTime = data.location.localtime.split(" ");
  console.log(localTime);
  temperature.innerText = data.current.temp_c;
  pressure.innerText = data.current.pressure_in + " inches";
  humidity.innerText = data.current.precip_in + " mm.";
  windSpeed.innerText = data.current.wind_kph + " km. per hour";
  weatherSummary.innerText = data.current.condition.text;
  country.innerText = data.location.country;
  city.innerText = data.location.region;
  time.innerText = localTime[1];
  day.innerText = formatDate("day");
  month.innerText = formatDate(null, "month");
  dayOfWeek.innerText = formatDate(null, null, "dayOfWeek");
  changeBackground(data.current.condition.code, !!data.current.is_day);
  tempFahr = data.current.temp_f;
  tempCels = data.current.temp_c;
}

// format date

function formatDate(day, month, dayOfWeek) {
  if (day) {
    return localTime[0].split("-")[2];
  } else if (month) {
    switch (localTime[0].split("-")[1]) {
      case "01":
        return months[0];
      case "02":
        return months[1];
      case "03":
        return months[2];
      case "04":
        return months[3];
      case "05":
        return months[4];
      case "06":
        return months[5];
      case "07":
        return months[6];
      case "08":
        return months[7];
      case "09":
        return months[8];
      case "10":
        return months[9];
      case "11":
        return months[10];
      case "12":
        return months[11];
    }
  } else if (dayOfWeek) {
    let days = new Date();
    days = days.getDay();
    if (days === 0) {
      return daysOfWeek[0];
    } else if (days === 1) {
      daysOfWeek[1];
    } else if (days === 2) {
      daysOfWeek[2];
    } else if (days === 3) {
      daysOfWeek[3];
    } else if (days === 4) {
      daysOfWeek[4];
    } else if (days === 5) {
      daysOfWeek[5];
    } else if (days === 6) {
      daysOfWeek[6];
    }
  }
}

const searchBox = document.getElementById("searchBox");
searchBox.addEventListener("keydown", getWeatherOfCity);

function getWeatherOfCity(event) {
  if (event.key === "Enter") {
    fetchWeatherData(searchBox.value, null, null);
  }
}

// convert to different measurment

toCelsiusBTN.addEventListener("click", toFahrCelsConversionFunction);

function toFahrCelsConversionFunction() {
  let fahrCode = "&#8457;";
  let celsCode = "&#8451;";

  if (!isFahr) {
    temperature.innerText = tempFahr;
    unitsF.style.display = 'inline-block';
    unitsC.style.display = 'none';
    toCelsiusBTN.innerText = 'To Celsius';
    isFahr = true;
  } else {
    temperature.innerText = tempCels;
    unitsF.style.display = 'none';
    unitsC.style.display = 'inline-block';
    toCelsiusBTN.innerText = 'To Fahrenheit';
    isFahr = false;
  }
}

getCurrentGeoPosition();

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minuters = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data);
  let tempElement = document.querySelector(".temperature-number");
  let cityElement = document.querySelector("#header-city");
  let countryElement = document.querySelector("#header-country");
  let dateElement = document.querySelector("#header-date");
  let descriptionElement = document.querySelector("#header-description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  tempElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  countryElement.innerHTML = response.data.sys.country;
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "c00b6e3e1cc217d87916a8b794f7ca77";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Poltava,UA&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);

import "./styles.css";
import getWeatherInfo from "./get-weather-info.js";
import renderWeatherInfo from "./render-weather-info.js";
import convertTemperature from "./unit-converter.js";

const cityName = document.querySelector(".city-name");

const form = document.querySelector("form");
const input = document.querySelector("#city");
const unitSelector = document.getElementById("unit-selector");

form.addEventListener("submit", (e) => {
  const temperatureUnitTestVariable = document.getElementById('test-id').dataset.unit;
  console.log(temperatureUnitTestVariable);
  e.preventDefault();
  const city = input.value;
  getWeatherInfo(city).then((weatherInfo) => {
    renderWeatherInfo(weatherInfo);
    //check if user is using fahrenheit or celsius and convert if needed
    if (weatherInfo.currentUnit === unitSelector.value) {
      return;
    } else if (unitSelector.value === 'celsius') {
      convertTemperature('celsius');
    }
  });
  //console.log(weatherInfo);
});

unitSelector.addEventListener("change", (e) => {
  const temperatureUnitTestVariable = document.getElementById('test-id').dataset.unit;
  console.log(temperatureUnitTestVariable);

  convertTemperature(e.target.value);
});
import getWeatherInfo from "./getWeatherInfo.js";
import "./styles.css";

const cityName = document.querySelector(".city-name");

const form = document.querySelector("form");
const input = document.querySelector("#city");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = input.value;
  const weatherInfo = getWeatherInfo(city);
});

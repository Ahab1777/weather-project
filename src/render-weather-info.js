import { add, format } from "date-fns";

export default function renderWeatherInfo(weatherInfo) {
    //city name
    const cityName = document.querySelector(".city-name");
    cityName.textContent = weatherInfo.cityName;
    //today's weather
    const todayTemperature = document.querySelector(".today-temperature");
    todayTemperature.firstChild.nodeValue = weatherInfo.currentConditions.temp;
    const minTemperature = document.querySelector(".min-temperature");
    minTemperature.firstChild.nodeValue = weatherInfo.mainTodayInfo.tempmin;
    const maxTemperature = document.querySelector(".max-temperature");
    maxTemperature.firstChild.nodeValue = weatherInfo.mainTodayInfo.tempmax;
    const humidity = document.querySelector(".humidity");
    humidity.textContent = `${weatherInfo.mainTodayInfo.humidity} %`;
    const precipitation = document.querySelector(".precipitation");
    precipitation.textContent = `${weatherInfo.mainTodayInfo.precipitationProbability} %`;

    //next week's weather
    const nextWeekDayContainersNode = document.querySelectorAll(".day-container");
    let dateToday = new Date();
    nextWeekDayContainersNode.forEach((node, index) => {
        const nextWeekDate = node.querySelector(".next-week-date");
        const nextWeekTemperature = node.querySelector(".next-week-temperature");
        if(nextWeekTemperature && nextWeekTemperature.firstChild.nodeType === Node.TEXT_NODE) {
            nextWeekTemperature.firstChild.nodeValue = weatherInfo.conditionsForNextWeek[index].temp
        }


        nextWeekDate.textContent = format(add(dateToday, { days: weatherInfo.conditionsForNextWeek[index].daysFromToday }), "eee '-' dd/MM");
        //nextWeekTemperature.textContent = weatherInfo.conditionsForNextWeek[index].temp;
    });
}
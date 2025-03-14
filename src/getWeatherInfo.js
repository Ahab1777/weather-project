function filterWeatherInfo(data) {
  const cityName = data.address;
  const todaysConditionsByHours = data.days[0].hours;
  const arrayOfConditionsForNextWeek = []; //today and the next 7 days
  for (let i = 0; i < 8; i++) {
    arrayOfConditionsForNextWeek.push(data.days[i]);
  }

  const todaysTemperaturesByHours = [];
  for (let i = 0; i < 24; i++) {
    todaysTemperaturesByHours.push(todaysConditionsByHours[i].temp);
  }

  const currentConditions = data.currentConditions;
  const mainTodayInfo = {};
  mainTodayInfo.tempmax = data.days[0].tempmax;
  mainTodayInfo.tempmin = data.days[0].tempmin;
  mainTodayInfo.currentTemp = data.currentConditions.temp;
  mainTodayInfo.humidity = data.currentConditions.humidity;
  mainTodayInfo.precipitationProbability = data.currentConditions.precipprob;

  const conditionsForNextWeek = [];
  for (let i = 1; i < 8; i++) {
    //starting with one so we don't get today's temperature
    conditionsForNextWeek.push({
      daysFromToday: i, // Identifying each day by how many days from today it is
      tempMax: arrayOfConditionsForNextWeek[i].tempmax,
      tempMin: arrayOfConditionsForNextWeek[i].tempmin,
      temp: arrayOfConditionsForNextWeek[i].temp,
      precipType: arrayOfConditionsForNextWeek[i].preciptype,
      precipitationProbability: arrayOfConditionsForNextWeek[i].precipprob,
    });
  }

  console.log({
    cityName,
    todaysConditionsByHours,
    arrayOfConditionsForNextWeek,
    todaysTemperaturesByHours,
    conditionsForNextWeek,
    currentConditions,
    mainTodayInfo,
  });
  //add all constants created within this function to an object and return it
  return {
    cityName,
    todaysConditionsByHours,
    arrayOfConditionsForNextWeek,
    todaysTemperaturesByHours,
    conditionsForNextWeek,
    currentConditions,
    mainTodayInfo,
  };
}

export default async function getWeatherInfo(city) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?key=Q72GKJP7SXMS94XEBFKHMG7VM`,
  );
  const data = await response.json();

  return filterWeatherInfo(data);
}

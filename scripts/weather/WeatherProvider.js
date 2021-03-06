import { settings } from '../Settings.js'

let weatherCollection = [];

export const useWeatherCollection = () => {
  //Best practice: we don't want to alter the original state, so
  //make a copy of it and then return it
  //The spread operator makes this quick work
  return [...weatherCollection];
}

export const getWeather = (city) => {
  console.log(city.addresses[0].postalCode)
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${city.addresses[0].postalCode},us&units=imperial&appid=${settings.weatherKey}`)
  .then(response => response.json())
  .then(parsedResponse => {
      weatherCollection = parsedResponse.list
      return parsedResponse.list;
  })
}

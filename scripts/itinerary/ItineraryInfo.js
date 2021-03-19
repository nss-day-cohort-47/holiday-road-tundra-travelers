import { getAttractions, useAttractionCollection } from "../attractions/AttractionProvider.js";
import { getEateries, useEateriesCollection } from "../eateries/EateryProvider.js";
import { useParksCollection, getParks } from "../parks/ParkProvider.js";
import { getWeather, useWeatherCollection } from "../weather/WeatherProvider.js"
const itineraryDom = document.querySelector('body')
itineraryDom.addEventListener('change', (event) => {
  
  if(event.target.id === 'national-park__dropdown') {
    getParks()
    .then( () => {
      const park = useParksCollection().find(parkObj => parkObj.id === event.target.value)
      getWeather(park).then(() => {
        let weatherCollection = useWeatherCollection()
        const addWeatherToDom = document.querySelector('.weather')
        addWeatherToDom.innerHTML+= `
        <li>Temperature: ${weatherCollection[0].main.temp} </li>
        <li>Feels Like: ${weatherCollection[0].main.feels_like} </li>
        <li>Humidity: ${weatherCollection[0].main.humidity}</li>
        <li>Description: ${weatherCollection[0].weather[0].description}</li>`
      })
      const addParkToDom = document.querySelector('.park')
      addParkToDom.innerHTML += `
      <li>Name: ${park.fullName}</li>
      <li>Cost: $${park.entranceFees[0].cost}</li>
      <li>Location: ${park.addresses[0].city}, ${park.addresses[0].stateCode}</li>
      `
    })
  } else if(event.target.id === 'eatery__dropdown') {
    getEateries()
    .then( () => {
      const eatery = useEateriesCollection().find(eateryObj => eateryObj.id == event.target.value)
      const addEateryToDom = document.querySelector('.eatery')
      addEateryToDom.innerHTML += `
      <li>Name: ${eatery.businessName}</li>
      <li>Location: ${eatery.city}, ${eatery.state}</li>
      `
    })
  } else if(event.target.id === 'attraction__dropdown') {
    getAttractions()
    .then( () => {
      const attraction = useAttractionCollection().find(attractionObj => attractionObj.id == event.target.value)
      const addAttractionToDom = document.querySelector('.attraction')
      addAttractionToDom.innerHTML += `
      <li>Name: ${attraction.name}</li>
      <li>Location: ${attraction.city}, ${attraction.state}</li>
      `
    })
  }
})


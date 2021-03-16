import { settings } from '../Settings.js'

let parksCollection = [];

export const useParksCollection = () => {
  //Best practice: we don't want to alter the original state, so
  //make a copy of it and then return it
  //The spread operator makes this quick work
  return [...parksCollection];
}

export const getParks = () => {

  return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}`)
  .then(response => response.json())
  .then(parsedResponse => {
      parksCollection = parsedResponse.data
      console.log(parsedResponse.data)
      return parsedResponse.data;
  })
}
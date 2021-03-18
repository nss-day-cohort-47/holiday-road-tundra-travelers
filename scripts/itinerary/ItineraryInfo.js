import { useParksCollection, getParks } from "../parks/ParkProvider.js";

const itineraryDom = document.querySelector('body')
itineraryDom.addEventListener('change', (event) => {
  if(event.target.id === 'national-park__dropdown') {
    getParks()
    .then( () => {
      const park = useParksCollection().find(parkObj => parkObj.id === event.target.value)
      const addParkToDom = document.querySelector('.park')
      addParkToDom.innerHTML = `
      <li>Name: ${park.fullName}</li>
      <li>Cost: $${park.entranceFees[0].cost}</li>
      <li>Location: ${park.addresses[0].city}, ${park.addresses[0].stateCode}</li>
      `
    })
  }
})
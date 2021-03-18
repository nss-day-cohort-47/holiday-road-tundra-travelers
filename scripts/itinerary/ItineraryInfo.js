import { useParksCollection, getParks } from "../parks/ParkProvider.js";

const itineraryDom = document.querySelector('body')
itineraryDom.addEventListener('change', (event) => {
  console.log('hi', event.target.id)
  if(event.target.id === 'national-park__dropdown') {
    getParks()
    .then( () => {
      const park = useParksCollection().find(parkObj => parkObj.id === event.target.value)
      console.log(park)
    })
  }
})
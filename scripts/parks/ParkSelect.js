import { useParksCollection, getParks } from "./ParkProvider.js"

const render = (parkList) => {
    
  const parkTarget = document.querySelector(".dropDown")
  let parkFullName = []
  let options = parkList.map(singlePark => {
    parkFullName = singlePark.fullName 
      return `<option value="${singlePark.id}" id="parkDropdown-${singlePark.fullName}">${singlePark.fullName}</option>`
  }).join("")
  
  parkTarget.innerHTML += `
  <select id="national-park__dropdown">
  <option value="select" id="desSel" selected> Select a Park</option>
  ${options}
  </select>
  `
}



export const populateParks = () => {
  getParks()
  .then( () => {
      const parks = useParksCollection()
      render(parks)
  })
}
import { useEateriesCollection, getEateries } from "./EateryProvider.js"

const render = (eateriesList) => {
    
  const eateryTarget = document.querySelector(".dropDown")
  
  let options = eateriesList.map(singleEatery => {
      return `<option value="${singleEatery.id}" id="${singleEatery.id}">${singleEatery.businessName}</option>`
  }).join("")
  
  eateryTarget.innerHTML += `
  <select id="eatery__dropdown">
  <option value="select" id="eaterySel" selected> Select an Eatery</option>
    ${options}
  </select>
  `
}


export const populateEateries = () => {
  getEateries()
  .then( () => {
      const eateries = useEateriesCollection()
      render(eateries)
  })
}
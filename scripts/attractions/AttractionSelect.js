import { useAttractionCollection, getAttractions } from "./AttractionProvider.js"

const render = (attractionList) => {
    
  const attractionTarget = document.querySelector(".dropDown")
  
  let options = attractionList.map(singleAttraction => {
      return `<option value="${singleAttraction.id}" id="${singleAttraction.id}">${singleAttraction.name}</option>`
  }).join("")
  
  attractionTarget.innerHTML += `
  <select id="attraction__dropdown">
    <option value="select" id="bizSelect" selected> Select an Attraction</option>
    ${options}
  </select>`
}


export const populateAttractions = () => {
  getAttractions()
  .then( () => {
      const attractions = useAttractionCollection()
      render(attractions)
  }

  )
}
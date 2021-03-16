const render = (parkList) => {
    
  const parkTarget = document.querySelector("#national-park-select")
  
  let options = parkList.map(singlePark => {
      return `<option value="${singlePark.id}">${singlePark.fullName}</option>`
  }).join("")
  
  parkTarget.innerHTML = `
  <select id="national-park__dropdown">
              <option value="0">Select an Park</option>
              ${options}
          </select>`
}


export const populateParks = () => {
  getParks()
  .then( () => {
      const parks = useParks()
      render(parks)
  }

  )
}
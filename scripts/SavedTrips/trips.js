let tripArray = []


const savedRep = document.getElementById("savedItineraries")
export const getTripData = () => {
        return fetch("http://localhost:8088/itineraries")
        .then(response => response.json())
        .then(parsedResposne => {
            tripArray = parsedResposne
            return parsedResposne
        }).then((x) => {
            let savedAttraction = ""
            for (const y of x) {
                savedAttraction += `<button type="submit" id="reserve${y.tripName}">${y.tripName}</button>`

            }
            savedRep.innerHTML = savedAttraction;
        })
}

export const useTripArray = () => {
    console.log("in use trips array function")
    getTripData()//.then(() => { return [...tripArray] })

}
const populateDomWithSavedData = (value, tagId) =>
{
    document.getElementById(`savedItineraries`).innerHTML = `
    <div id="savedTripInfo">
    <h4>${value.tripName}</h4>
    <h4>Park Name: ${value.parks.name}</h4>
    <h4>Location: ${value.parks.location}</h4>
    <h4>Attraction: ${value.attraction.name}</h4>
    <h4>Location: ${value.attraction.location}</h4>
    <h4>Eatery: ${value.eatery.name}</h4>
    <div>Click "here" to return</div>
    </div>
    `
}
savedRep.addEventListener("click", event => {
    let target
    let value = {}
    if (event.target.id.startsWith("reserve")) {
        target = event.target.id.slice(7)
        value = tripArray.filter(target2 => {
            return target2.tripName === target
        })
        populateDomWithSavedData(value[0],event.target.id)
    }else{
        getTripData()
    }
    
})
let tripArray = []

export const getTripData = () => {
    return fetch("http://localhost:8088/itineraries")
        .then(response => response.json())
        .then(parsedResposne => {
            tripArray = parsedResposne
            console.log("Trip Array", tripArray)
            return parsedResposne
        }).then((x) => {
            let savedAttraction =""
            for(const y of x){
                savedAttraction += `<button type="submit">${y.tripName}</button>`
        }
        document.getElementById("savedItineraries").innerHTML = savedAttraction;
    })
}

export const useTripArray = () => {
    console.log(getTripData())
        return getTripData().then( () => {return [...tripArray]})
    
}

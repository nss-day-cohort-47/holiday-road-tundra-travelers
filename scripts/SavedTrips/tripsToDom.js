import {useTripArray} from "./trips.js"
const tripDomRep = document.getElementById("savedItineraries")
const sendIt = (temp) => {
    let temp2 = temp
    console.log("in send it",temp2)
    tripDomRep.innerHTML = `<p>${temp2.eater[2].name}</p>`

}
export const sendTripsToDom = () => {
    sendIt(useTripArray())

}

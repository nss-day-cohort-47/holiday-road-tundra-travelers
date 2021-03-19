import { getWeatherObj } from "./weatherToJson.js";
import { getParksObject } from "./parksToJson.js";
import { getAttractionObject } from "./attractionToJson.js";
import { getEateryObject } from "./eateryToJson.js";


// Fetch call to POST itinerary to JSON server
const sendToDataBSe = obj => {
    return fetch("http://localhost:8088/itineraries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
        .then(response => response.json())
}
// Fucntion to be called by when save button is clicked.
export const useDb = (itinObject) => {
    sendToDataBSe( itinObject);
}

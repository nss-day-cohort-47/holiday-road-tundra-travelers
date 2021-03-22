import { getTripData } from "../SavedTrips/trips.js";
import { getAttractionObject } from "./attractionToJson.js";
import { getEateryObject } from "./eateryToJson.js";
import { useDb } from "./getDataFromDom.js";
import { getParksObject } from "./parksToJson.js";
import { getWeatherObj } from "./weatherToJson.js";



export const saveButton = (saveName) => {
    const itinObject = {
        // TODO: hook up data in getter functions to retreive data from dom.
        tripName: saveName,
        eatery: getEateryObject(),
        attraction: getAttractionObject(),
        parks: getParksObject(),
        weather: getWeatherObj()
    }
    try {
        if (saveName !== "") {
            useDb(itinObject);
        }
    } finally {
        getTripData()
    }
}

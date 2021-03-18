import {getAttractionObject} from "./attractionToJson.js";
import {getEateryObject} from "./eateryToJson.js";
import { useDb } from "./getDataFromDom.js";
import {getParksObject} from "./parksToJson.js";
import {getWeatherObj} from "./weatherToJson.js";
// Itinerary object
export const  itinObject = {
    // TODO: hook up data in getter functions to retreive data from dom.
    eatery:getEateryObject(),
    attraction:getAttractionObject(),
    parks:getParksObject(),
    weather:getWeatherObj()
}
export const saveButton = () =>{
    useDb(itinObject)
}
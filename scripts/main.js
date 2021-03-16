import { getAttractions } from "./attractions/AttractionProvider.js";
import { getEateries } from "./attractions/EateryProvider.js";
import {sendDropDownToDom} from "./nav/dropDown.js";
import { getParks } from "./parks/ParkProvider.js";
import { getWeather } from "./weather/WeatherProvider.js";

getParks()
getAttractions()
getEateries()
getWeather('nashville')
sendDropDownToDom()
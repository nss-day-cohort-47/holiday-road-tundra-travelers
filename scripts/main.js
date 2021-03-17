import { getAttractions } from "./attractions/AttractionProvider.js";
import { getEateries } from "./eateries/EateryProvider.js";
import {sendDropDownToDom} from "./nav/dropDown.js";
import { getParks } from "./parks/ParkProvider.js";
import { getWeather } from "./weather/WeatherProvider.js";
import {useDb} from "./save/getDataFromDom.js";

useDb();
sendDropDownToDom()
import { getAttractions } from "./attractions/AttractionProvider.js";
import { getEateries } from "./eateries/EateryProvider.js";
import {sendDropDownToDom} from "./nav/dropDown.js";
import { getParks } from "./parks/ParkProvider.js";
import { getWeather } from "./weather/WeatherProvider.js";
import {SendNavToDom} from "./nav/nav.js";
import {openNav} from "./nav/nav.js";
import {closeNav} from "./nav/nav.js";
sendDropDownToDom()
SendNavToDom()
openNav()
closeNav()

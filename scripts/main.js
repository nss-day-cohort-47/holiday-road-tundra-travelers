import { getAttractions } from "./attractions/AttractionProvider.js";
import { getEateries } from "./eateries/EateryProvider.js";
import {sendDropDownToDom} from "./nav/dropDown.js";
import { getParks } from "./parks/ParkProvider.js";
import { getWeather } from "./weather/WeatherProvider.js";


sendDropDownToDom()

const modal = document.getElementById("eateryContent")
const button = document.getElementById("eateryButton")
const span = document.getElementsByClassName("close")[0]
button.onclick = () => {
    modal.style.display = "block"
}
window.onclick = event => {
    if(event.target === modal) {
        modal.style.display = "none"
    }
}
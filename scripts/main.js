import { useDb } from "./save/getDataFromDom.js";
import {sendDropDownToDom} from "./nav/dropDown.js";
import {SendNavToDom} from "./nav/nav.js";
import {openNav} from "./nav/nav.js";
import {closeNav} from "./nav/nav.js";
sendDropDownToDom()
SendNavToDom()
openNav()
closeNav()
useDb();



/* Eatery Detail Button */
const modalEatery = document.getElementById("eateryContent")
const buttonEatery = document.getElementById("eateryButton")
const spanEatery = document.getElementById("eateryCloseid")
buttonEatery.onclick = () => {
    modalEatery.style.display = "block"
}
window.onclick = event => {
    if(event.target === modalEatery) {
        modalEatery.style.display = "none"
    }
}
spanEatery.onclick = () => {
    modalEatery.style.display="none"
}

const modalAttractions = document.getElementById("attractionContent")
const buttonAttractions = document.getElementById("attractionButton")
const spanAttractions = document.getElementById("attractionCloseid")
buttonAttractions.onclick = () => {
    modalAttractions.style.display = "block"
}
window.onclick = event => {
    if(event.target === modalAttractions) {
        modalAttractions.style.display = "none"
    }
}
spanAttractions.onclick = () => {
    modalAttractions.style.display="none"
}

const modalPark = document.getElementById("parkContent")
const buttonPark = document.getElementById("parkButton")
const spanPark = document.getElementById("parkCloseid")
buttonPark.onclick = () => {
    modalPark.style.display = "block"
}
window.onclick = event => {
    if(event.target === modalPark) {
        modalPark.style.display = "none"
    }
}
spanPark.onclick = () => {
    modalPark.style.display="none"
}



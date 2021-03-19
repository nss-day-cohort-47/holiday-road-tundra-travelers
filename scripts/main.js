import { useDb } from "./save/getDataFromDom.js";
import {sendDropDownToDom} from "./nav/dropDown.js";
import {SendNavToDom} from "./nav/nav.js";
import {openNav} from "./nav/nav.js";
import {closeNav} from "./nav/nav.js";
import './itinerary/ItineraryInfo.js'

sendDropDownToDom()
SendNavToDom()
openNav()
closeNav()
useDb();




// const modal = document.getElementById("eateryContent")
// const button = document.getElementById("eateryButton")
// const span = document.getElementById("closeid")
// button.onclick = () => {
//     modal.style.display = "block"
// }
// window.onclick = event => {
//     if(event.target === modal) {
//         modal.style.display = "none"
//     }
// }
// span.onclick = () => {
//     modal.style.display="none"
// }

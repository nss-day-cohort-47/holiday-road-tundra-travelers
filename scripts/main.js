// import { useDb } from "./save/getDataFromDom.js";
import {sendDropDownToDom} from "./nav/dropDown.js";
import {SendNavToDom} from "./nav/nav.js";
import {openNav} from "./nav/nav.js";
import {closeNav} from "./nav/nav.js";
import {saveButton} from "./save/writeToDb.js";
sendDropDownToDom()
SendNavToDom()
openNav()
closeNav()
const saveButtonId = document.getElementById("itinSaveButton");
saveButtonId.onclick = () =>{
    saveButton();
}

const modal = document.getElementById("eateryContent")
const button = document.getElementById("eateryButton")
const span = document.getElementById("closeid")
button.onclick = () => {
    modal.style.display = "block"
}
window.onclick = event => {
    if(event.target === modal) {
        modal.style.display = "none"
    }
}
span.onclick = () => {
    modal.style.display="none"
}

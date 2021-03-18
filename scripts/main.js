// import { useDb } from "./save/getDataFromDom.js";
import { sendDropDownToDom } from "./nav/dropDown.js";
import { SendNavToDom } from "./nav/nav.js";
import { openNav } from "./nav/nav.js";
import { closeNav } from "./nav/nav.js";
import { saveButton } from "./save/writeToDb.js";
sendDropDownToDom()
SendNavToDom()
openNav()
closeNav()

const modal = document.getElementById("eateryContent")
const button = document.getElementById("eateryButton")
const span = document.getElementById("closeid")
button.onclick = () => {
    modal.style.display = "block"
}
window.onclick = event => {
    if (event.target === modal) {
        modal.style.display = "none"
    }
}
span.onclick = () => {
    modal.style.display = "none"
}

const saveButtonId = document.getElementById("itinSaveButton");
const saveModal = document.getElementById("saveTrip")
const finalSave = document.getElementById("finalSaveId")
const saveSpan = document.getElementById("saveCloseId")
const saveMeId = document.getElementById("SaveMe")
saveButtonId.onclick = () => {
    saveModal.style.display = "block"
}
const saveTripValidation = () => {
    let textField = document.getElementById("finalSaveId").value
    if (textField === "") {
        alert("Save Trip Name must be filled out")
    } else {
        console.log(textField)
        saveButton(textField)
        saveModal.style.display = "none"
    }

}
saveMeId.onclick = event => {
    saveTripValidation();

}

finalSave.addEventListener("keydown", event => {
    if (event.key === 'Enter') {
        event.preventDefault()
        saveTripValidation()
    }
})

saveSpan.onclick = () => {
    saveModal.style.display = "none"
}
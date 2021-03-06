// import { useDb } from "./save/getDataFromDom.js";
import { sendDropDownToDom } from "./nav/dropDown.js";
import { SendNavToDom } from "./nav/nav.js";
import { openNav } from "./nav/nav.js";
import { closeNav } from "./nav/nav.js";
import { saveButton } from "./save/writeToDb.js";
import {getTripData, useTripArray} from "./SavedTrips/trips.js";
import './itinerary/ItineraryInfo.js';

sendDropDownToDom()
SendNavToDom()
openNav()
closeNav()
useTripArray()
getTripData()
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
        saveButton(textField)
        saveModal.style.display = "none";
    } 

}
saveMeId.addEventListener("click", event => {
    saveTripValidation();

})

finalSave.addEventListener("keydown", event => {
    if (event.key === 'Enter') {
        saveTripValidation()

    }
})

saveSpan.onclick = () => {
    saveModal.style.display = "none"
}
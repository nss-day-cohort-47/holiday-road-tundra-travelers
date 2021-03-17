import { populateAttractions } from "../attractions/AttractionSelect.js";
import { populateParks } from "../parks/ParkSelect.js";

// <option value="select" id="sel" selected> Select an eatery</option>

export const sendDropDownToDom = () => {
  populateParks()
  populateAttractions()
}



//change lines 12 and 19 back to Bizarry and Destination respectively once done building them out
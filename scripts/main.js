import { populateAttractions } from "./attractions/AttractionSelect.js";
import { populateEateries } from "./eateries/EaterySelect.js";
import { populateParks } from "./parks/ParkSelect.js";
import { useDb } from "./save/getDataFromDom.js";

populateParks()
populateAttractions()
populateEateries()
useDb();
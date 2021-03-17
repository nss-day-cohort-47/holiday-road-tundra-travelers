import { populateAttractions } from "./attractions/AttractionSelect.js";
import { populateEateries } from "./eateries/EaterySelect.js";
import { populateParks } from "./parks/ParkSelect.js";
import { useDb } from "./save/getDataFromDom.js";
import { SendNavToDom } from "./nav/nav.js";
import { openNav } from "./nav/nav.js";
import { closeNav } from "./nav/nav.js";

SendNavToDom()
openNav()
closeNav()
populateParks()
populateAttractions()
populateEateries()
useDb();


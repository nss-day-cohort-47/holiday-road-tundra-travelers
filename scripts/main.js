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


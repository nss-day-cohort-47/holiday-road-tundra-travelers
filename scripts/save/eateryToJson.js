// This class gathers infromation from the dom the returns it as an eatery object
import {getItiniSaveOBject} from "../itinerary/ItineraryInfo.js";
const eatery = {}
export const getEateryObject = () => {

    let name = getItiniSaveOBject()
    eatery.name =   name.eatery.name;
    eatery.location = name.eatery.location;
    return eatery;
}
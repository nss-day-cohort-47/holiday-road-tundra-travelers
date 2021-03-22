// This class gathers infromation from the dom the returns it as an Parks object
import {getItiniSaveOBject} from "../itinerary/ItineraryInfo.js";

const Parks = {}
export const getParksObject = () => {
    let temp = getItiniSaveOBject();
    Parks.name = temp.parks.name;

    Parks.location = temp.parks.location;
    return Parks
}
import {getItiniSaveOBject} from "../itinerary/ItineraryInfo.js";
// This class gathers infromation from the dom the returns it as an Attraction object

const Attraction = {}
export const getAttractionObject = () => {
    let temp = getItiniSaveOBject();
    Attraction.name =   temp.attraction.name;
    Attraction.location = temp.attraction.location;
  // This class gathers infromation from the dom the returns it as an eatery object
    return Attraction
}
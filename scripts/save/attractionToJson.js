// This class gathers infromation from the dom the returns it as an Attraction object

const Attraction = {}
export const getAttractionObject = () => {
    Attraction.name = "Mamoth Caves";
    Attraction.type = "Adventure";
    Attraction.cost = 60;
    Attraction.location = "Louisville";
    Attraction.weblink = "Https://something.com";
    Attraction.coordinates = [1233, 3334];
    Attraction.daysOfWeek = [
        {
            "operating": false,
            "open": 15,
            "close": 45
        },
        {
            "operating": false,
            "open": 88,
            "close": 44
        },
        {
            "operating": false,
            "open": 101,
            "close": 22
        },
        {
            "operating": false,
            "open": 66,
            "close": 12
        },
        {
            "operating": false,
            "open": 13,
            "close": 18
        },
        {
            "operating": false,
            "open": 4,
            "close": 33
        },
        {
            "operating": false,
            "open": 3,
            "close": 44
        }
    ]
    return Attraction
}
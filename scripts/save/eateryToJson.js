// This class gathers infromation from the dom the returns it as an eatery object

const eatery = {}
export const getEateryObject = () => {
    eatery.name = "joes";
    eatery.type = "burger joint";
    eatery.cost = 3334;
    eatery.location = "here";
    eatery.weblink = "Https://something.com";
    eatery.coordinates = [1233, 3334];
    eatery.daysOfWeek = [
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
    return eatery
}
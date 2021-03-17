// Converts weather to JSON
const weather = {}
export const getWeatherObj = () => {

    weather.location = "nashville"  
    weather.dateTime = "1200 March 17 2021 "
    weather.temperature = 100
    weather.atmospherics = "Thunder Storms" 
    weather.barometer = "29.98"
    weather.windSpeed = 4  
    weather.direction = "South"
    return weather
}
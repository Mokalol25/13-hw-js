const weather = {
    temperature: prompt("введіть температуру"),
    humidity: 10,
    windSpeed: 2,
    checkTemperature() {
        if (weather.temperature > 0) {
            console.log("false")
        } else {
            console.log("true")
        }
    }
}
weather.checkTemperature()
const request = require("postman-request")



const forecast = (lat, long, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=559f6b524e0e7164b254f8fd6f32e6ff&query=" + 
    lat + "," + long + "&units=f"

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather service",undefined)
        } else if (body.error){
            callback("Unable to find location",undefined)
        } else{
            const temperature = body.current.temperature
            const apparentTemp = body.current.feelslike
            callback(undefined, " It is " + temperature + " degrees but it feels like " + apparentTemp)
        }
        
       
    })

}

module.exports = forecast

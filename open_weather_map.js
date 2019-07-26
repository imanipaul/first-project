const WEATHER_API_KEY = '03369dd446176336aa3fb056cda8ca09';
const API_STEM = 'http://api.openweathermap.org/data/2.5/weather?';

function zipUrl(zip) {
    return `${API_STEM}zip=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`;
}

function fetchForecast(zip) {
    return fetch(zipUrl(zip))
        .then(response => response.json())
        .then(responseJSON => {
            return {
                main: responseJSON.weather[0].main,
                description: responseJSON.weather[0].description,
                temp: responseJSON.main.temp
            };
        })
        .catch(error => {
            console.error(error)
        })
}

export default { fetchForecast: fetchForecast }
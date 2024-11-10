import axios from "axios";


const WEATHER_API_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "049944e84bf3400881daf37a4217c959";

export const getWeather = async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.render("index", { weather: null, error: "Please enter a city name" });
    }

    try {
        const response = await axios.get(
            `${WEATHER_API_ENDPOINT}?q=${city}&apikey=${API_KEY}&units=metric`
        );

        const weatherData = response.data;
        const weather = {
            city: weatherData.name,
            temperature: weatherData.main.temp,
            description: weatherData.weather[0].description,
            humidity:weatherData.main.humidity,
           
        };
         /* res.json(weatherData); */
        res.render("index", { weather, error: null });

    } catch (error) {
        res.render("index", { weather: null, error: "City not found or API error" });
    }
};

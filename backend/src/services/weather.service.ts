import axios from "axios";

export interface ForecastModel {
    latitude: number,
    longitude: number,
    elevation: number,
    current_weather: {
        temperature: number,
        windspeed: number,
        winddirection: number,
        weathercode: number,
        time: Date
    }
}


export async function getWeatherForecast(lat: number, lng: number): Promise<ForecastModel> {

    try {
        const { data }  = await axios.get('https://api.open-meteo.com/v1/forecast', {
            params: {
                latitude: lat,
                longitude: lng,
                current_weather: true,
            },
        });
        return {
            latitude: data.latitude,
            longitude: data.longitude,
            elevation: data.elevation,
            current_weather: {
                temperature: data.current_weather.temperature,
                windspeed: data.current_weather.windspeed,
                winddirection: data.current_weather.winddirection,
                weathercode: data.current_weather.weathercode,
                time: new Date(data.current_weather.time),
            },
        };

    } catch(error: any) {
        throw new Error(`Failed to fetch weather data: ${error.message}`);
    }
}

import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export interface WeatherData {
  name: string;
  main: { temp: number; humidity: number };
  weather: { main: string; description: string }[];
}

export const getWeather = async (city: string): Promise<WeatherData> => {
  const { data } = await api.get("/weather", {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
      lang: "pt_br",
    },
  });
  return data;
};

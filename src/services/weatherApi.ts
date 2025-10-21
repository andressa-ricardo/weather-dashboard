import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export async function getWeather(input: string) {
  try {
    const cleanInput = input.trim().replace("-", "").replace(/\s+/g, "");

    const params: any = {
      appid: API_KEY,
      units: "metric",
      lang: "pt_br",
    };

    if (/^\d{5,8}$/.test(cleanInput)) {
      const zipCode = cleanInput.slice(0, 5);
      params.zip = `${zipCode},BR`;
    } else {
      params.q = input;
    }

    const res = await axios.get(`${BASE_URL}weather`, { params });
    const data = res.data;

    return {
      city: data.name,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      windDirection: degToCardinal(data.wind.deg),
      pressure: data.main.pressure,
      condition: data.weather[0].main,
      conditionDescription: data.weather[0].description,
      sunrise: convertTime(data.sys.sunrise, data.timezone),
      sunset: convertTime(data.sys.sunset, data.timezone),
    };
  } catch (err: any) {
    console.error("Erro ao buscar clima:", err.response?.data || err.message);
    throw new Error(
      err.response?.data?.message || "Falha ao buscar dados da API"
    );
  }
}

function convertTime(unix: number, timezone: number) {
  const date = new Date((unix + timezone) * 1000);
  return date.toISOString().substr(11, 5);
}

function degToCardinal(deg: number) {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(deg / 45) % 8;
  return directions[index];
}

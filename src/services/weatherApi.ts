import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export async function getWeather(city: string, country: string = "BR") {
  try {
    const formattedCity = city.trim();

    const res = await axios.get(`${BASE_URL}weather`, {
      params: {
        q: `${formattedCity},${country}`,
        appid: API_KEY,
        units: "metric",
        lang: "pt_br",
      },
    });

    const data = res.data;

    const current = {
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      windSpeed: data.wind.speed,
      windDirection: degToCardinal(data.wind.deg),
      condition: data.weather[0].main,
      conditionDescription: data.weather[0].description,
      icon: data.weather[0].icon,
      sunrise: convertTime(data.sys.sunrise, data.timezone),
      sunset: convertTime(data.sys.sunset, data.timezone),
      lastUpdated: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    return { current };
  } catch (err: any) {
    console.error(
      "❌ Erro ao buscar clima:",
      err.response?.data || err.message
    );

    const message =
      err.response?.data?.message === "city not found"
        ? "Cidade não encontrada. Verifique o nome digitado."
        : "Falha ao buscar dados da previsão.";

    throw new Error(message);
  }
}

function convertTime(unix: number, timezone: number) {
  const date = new Date((unix + timezone) * 1000);
  return date.toISOString().substring(11, 16);
}

function degToCardinal(deg: number) {
  const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return dirs[Math.round(deg / 45) % 8];
}

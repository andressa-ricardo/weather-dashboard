import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export async function getWeather(city: string, country?: string) {
  try {
    const formattedCity = city.trim();

    const params: any = {
      q: country ? `${formattedCity},${country}` : formattedCity,
      appid: API_KEY,
      units: "metric",
      lang: "pt_br",
    };

    const res = await axios.get(`${BASE_URL}weather`, { params });
    const data = res.data;

    return {
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      windSpeed: data.wind.speed,
      wind_deg: data.wind.deg,
      windDirection: degToCardinal(data.wind.deg),
      clouds: data.clouds,
      visibility: data.visibility / 1000,
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
  } catch (err: any) {
    console.error(
      "❌ Erro ao buscar clima:",
      err.response?.data || err.message
    );

    let message = "Falha ao buscar dados da previsão.";
    const apiMessage = err.response?.data?.message?.toLowerCase();

    if (apiMessage?.includes("city not found")) {
      message = "Cidade não encontrada. Verifique o nome digitado.";
    } else if (apiMessage?.includes("nothing to geocode")) {
      message = "Digite o nome de uma cidade válida.";
    } else if (apiMessage?.includes("invalid api key")) {
      message = "Chave de API inválida. Verifique sua configuração.";
    }

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

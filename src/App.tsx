import { useState } from "react";
import { TitleHeader } from "./components/weather/TitleHeader";
import { SearchBar } from "./components/weather/SearchBar";
import { WelcomeMessage } from "./components/weather/WelcomeMessage";
import { WeatherInfo } from "./components/WeatherInfo";
import { getWeather } from "./services/weatherApi";

export default function App() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState<any | null>(null);

  const handleSearch = async () => {
    if (!city.trim()) {
      alert("Digite o nome da cidade!");
      return;
    }

    setLoading(true);
    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Erro ao buscar dados. Tente novamente.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-16 px-4  from-[#d9ecff] via-[#cfe8ff] to-[#ffffff]">
      <TitleHeader />

      <SearchBar
        city={city}
        onChange={(e) => setCity(e.target.value)}
        onSearch={handleSearch}
        onSelectCity={(cityName) => setCity(cityName)}
        loading={loading}
      />

      {weather ? <WeatherInfo data={weather.current} /> : <WelcomeMessage />}
    </div>
  );
}

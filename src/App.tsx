import { useState } from "react";
import { TitleHeader } from "./components/weather/TitleHeader";
import { SearchBar } from "./components/weather/SearchBar";
import { WelcomeMessage } from "./components/weather/WelcomeMessage";
import { getWeather } from "./services/weatherApi";
import { WeatherInfo } from "./components/WeatherInfo";

export default function App() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState<any | null>(null);

  const handleSearch = async () => {
    if (!city) return alert("Digite o nome de uma cidade!");
    setLoading(true);
    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch {
      alert("Erro ao buscar dados. Verifique o nome da cidade.");
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
        loading={loading}
      />

      {weather ? <WeatherInfo data={weather} /> : <WelcomeMessage />}
    </div>
  );
}

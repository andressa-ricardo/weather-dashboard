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
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!city.trim()) {
      setError("Digite o nome de uma cidade!");
      setWeather(null);
      setHasSearched(true);
      return;
    }

    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (err: any) {
      console.error(err);
      setWeather(null);
      setError(err.message || "Erro ao buscar dados. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-16 pb-16 px-4 from-[#d9ecff] via-[#cfe8ff] to-[#ffffff]">
      <TitleHeader />

      <SearchBar
        city={city}
        onChange={(e) => setCity(e.target.value)}
        onSearch={handleSearch}
        onSelectCity={(cityName) => setCity(cityName)}
        loading={loading}
      />

      {error && (
        <p className="text-red-600 text-center mt-6 font-medium bg-red-100 px-4 py-2 rounded-lg">
          {error}
        </p>
      )}

      {!hasSearched && <WelcomeMessage />}
      {weather && !error && <WeatherInfo data={weather} />}
    </div>
  );
}

import { useState } from "react";
import SummaryCard from "./components/SummaryCard";
import WeatherChart from "./components/WeatherChart";
import { getWeather, type WeatherData } from "./components/services/weatherApi";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState<{ time: string; temp: number }[]>(
    []
  );

  const handleSearch = async () => {
    if (!city) return alert("Digite o nome de uma cidade!");
    setLoading(true);
    try {
      const data = await getWeather(city);
      setWeather(data);

      const now = new Date();
      const mock = Array.from({ length: 8 }).map((_, i) => ({
        time: `${(now.getHours() + i) % 24}h`,
        temp: data.main.temp + (Math.random() * 2 - 1),
      }));
      setChartData(mock);
    } catch (err) {
      alert("Cidade não encontrada ou problema na API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">☁️ Weather Dashboard</h1>

      <div className="flex mb-6 gap-2">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Digite a cidade..."
          className="border p-2 rounded w-64"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Carregando..." : "Buscar"}
        </button>
      </div>

      {weather && (
        <div className="flex flex-col items-center gap-6">
          <SummaryCard title="Cidade" value={weather.name} />
          <SummaryCard
            title="Temperatura Atual"
            value={weather.main.temp.toFixed(1)}
            unit="°C"
          />
          <SummaryCard title="Umidade" value={weather.main.humidity} unit="%" />
          <SummaryCard
            title="Condição"
            value={weather.weather[0].description}
          />

          <WeatherChart data={chartData} />
        </div>
      )}
    </div>
  );
}

import { Droplets, Wind, Gauge, Sunrise, Sunset, Cloud } from "lucide-react";
import { WeatherCharts } from "./weather/WeatherCharts";

interface WeatherInfoProps {
  data: {
    city: string;
    country: string;
    temperature: number;
    feelsLike: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
    windSpeed: number;
    wind_deg: number;
    windDirection: string;
    clouds: { all: number };
    visibility: number;
    condition: string;
    conditionDescription: string;
    icon: string;
    sunrise: string;
    sunset: string;
    lastUpdated: string;
  };
}

export function WeatherInfo({ data }: WeatherInfoProps) {
  const items = [
    { title: "Umidade", value: `${data.humidity}%`, icon: <Droplets /> },
    {
      title: "Vento",
      value: `${data.windSpeed.toFixed(2)} m/s`,
      desc: `Direção: ${data.windDirection}`,
      icon: <Wind />,
    },
    { title: "Pressão", value: `${data.pressure} hPa`, icon: <Gauge /> },
    { title: "Condição", value: data.conditionDescription, icon: <Cloud /> },
    { title: "Nascer do Sol", value: data.sunrise, icon: <Sunrise /> },
    { title: "Pôr do Sol", value: data.sunset, icon: <Sunset /> },
  ];

  return (
    <section className="mt-8 w-full max-w-5xl mx-auto">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          {data.city}, {data.country}
        </h2>
        <p className="text-gray-500 text-sm">
          Última atualização: {data.lastUpdated}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center mb-8">
        <div className="flex items-center gap-4">
          <p className="text-5xl font-bold text-gray-800">
            {Math.round(data.temperature)}°C
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
            alt={data.condition}
            className="w-20 h-20"
          />
        </div>
        <p className="text-gray-600 text-sm mt-2 capitalize">
          {data.conditionDescription}
        </p>
      </div>

      <div className="mb-10">
        <WeatherCharts data={data} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white/90 backdrop-blur-md shadow-md rounded-xl p-5 flex flex-col items-center justify-center text-center transition-transform hover:scale-105"
          >
            <div className="text-blue-500 mb-2">{item.icon}</div>
            <h3 className="text-sm text-gray-600">{item.title}</h3>
            <p className="text-2xl font-semibold text-gray-800">{item.value}</p>
            {item.desc && <p className="text-xs text-gray-500">{item.desc}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

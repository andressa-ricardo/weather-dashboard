import {
  Thermometer,
  Droplets,
  Wind,
  Gauge,
  Sunrise,
  Sunset,
  Cloud,
} from "lucide-react";

interface WeatherInfoProps {
  data: {
    city: string;
    country: string;
    temperature: number;
    feelsLike: number;
    humidity: number;
    pressure: number;
    windSpeed: number;
    windDirection: string;
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
    {
      title: "Temperatura",
      value: `${data.temperature.toFixed(1)}°C`,
      desc: `Sensação: ${data.feelsLike.toFixed(1)}°C`,
      icon: <Thermometer />,
    },
    { title: "Umidade", value: `${data.humidity}%`, icon: <Droplets /> },
    {
      title: "Vento",
      value: `${data.windSpeed} m/s`,
      desc: `Direção: ${data.windDirection}`,
      icon: <Wind />,
    },
    { title: "Pressão", value: `${data.pressure} hPa`, icon: <Gauge /> },
    { title: "Condição", value: data.conditionDescription, icon: <Cloud /> },
    { title: "Nascer do Sol", value: data.sunrise, icon: <Sunrise /> },
    { title: "Pôr do Sol", value: data.sunset, icon: <Sunset /> },
  ];

  return (
    <section className="mt-8 w-full max-w-4xl mx-auto">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold text-gray-800">
          {data.city}, {data.country}
        </h2>
        <p className="text-gray-500 text-sm">
          Última atualização: {data.lastUpdated}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center mb-8">
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt={data.condition}
          className="w-24 h-24"
        />
        <p className="text-6xl font-bold text-gray-800 mt-2">
          {Math.round(data.temperature)}°C
        </p>
        <p className="text-gray-600 text-sm mt-1 capitalize">
          {data.conditionDescription}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white/80 shadow-md rounded-lg p-4 flex flex-col items-center justify-center text-center"
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

import {
  Thermometer,
  Droplets,
  Wind,
  Gauge,
  Sun,
  Sunrise,
  Sunset,
  Cloud,
  Umbrella,
} from "lucide-react";

interface WeatherInfoProps {
  data: any;
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
      value: `${data.windSpeed} km/h`,
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
        <h2 className="text-3xl font-bold text-gray-800">{data.city}</h2>
        <p className="text-gray-500 text-sm">
          Última atualização: {new Date().toLocaleTimeString().slice(0, 5)}
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

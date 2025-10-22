import { Sun, CloudRain, Cloud, CloudLightning, CloudSnow } from "lucide-react";

interface ForecastCardProps {
  day: string;
  min: number;
  max: number;
  condition?: string;
}

function getWeatherIcon(condition: string) {
  const cond = condition.toLowerCase();

  if (cond.includes("sol")) return <Sun className="text-yellow-400 w-8 h-8" />;
  if (cond.includes("chuva"))
    return <CloudRain className="text-blue-500 w-8 h-8" />;
  if (cond.includes("tempestade"))
    return <CloudLightning className="text-indigo-500 w-8 h-8" />;
  if (cond.includes("neve"))
    return <CloudSnow className="text-blue-300 w-8 h-8" />;
  if (cond.includes("nublado") || cond.includes("nuvem"))
    return <Cloud className="text-gray-500 w-8 h-8" />;

  return <Sun className="text-yellow-400 w-8 h-8" />;
}

export function ForecastCard({
  day,
  min,
  max,
  condition = "Ensolarado",
}: ForecastCardProps) {
  return (
    <div className="bg-white/80 shadow-md rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-lg transition">
      <h3 className="font-semibold text-gray-700 mb-1">{day}</h3>
      {getWeatherIcon(condition)}
      <p className="mt-2 text-gray-800 font-bold text-lg">
        {max}°<span className="text-gray-500 text-sm font-medium">/{min}°</span>
      </p>
    </div>
  );
}

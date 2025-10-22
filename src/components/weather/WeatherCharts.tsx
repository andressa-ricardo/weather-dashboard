import { TemperatureChart } from "./TemperatureChart";
import { WindChart } from "./WindChart";
import { CloudChart } from "./CloudChart";

interface WeatherChartsProps {
  data: {
    temperature?: number;
    feelsLike?: number;
    temp_min?: number;
    temp_max?: number;
    windSpeed?: number;
    wind_deg?: number;
    windDirection?: string;
    clouds?: { all?: number };
    visibility?: number;
    conditionDescription?: string;
  };
}

export function WeatherCharts({ data }: WeatherChartsProps) {
  const temperature = data.temperature ?? 0;
  const feelsLike = data.feelsLike ?? temperature;
  const tempMin = data.temp_min ?? temperature - 2;
  const tempMax = data.temp_max ?? temperature + 2;

  const windSpeed = data.windSpeed ?? 0;
  const windDeg = data.wind_deg ?? 0;
  const windDirection = data.windDirection ?? "N";

  const clouds = data.clouds?.all ?? 0;
  const visibility = data.visibility ?? 0;
  const description = data.conditionDescription ?? "Sem dados";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
      <TemperatureChart
        temp={temperature}
        feelsLike={feelsLike}
        min={tempMin}
        max={tempMax}
      />

      <WindChart speed={windSpeed} deg={windDeg} direction={windDirection} />

      <CloudChart
        clouds={clouds}
        visibility={visibility}
        description={description}
      />
    </div>
  );
}

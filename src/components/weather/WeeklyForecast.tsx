import { ForecastCard } from "./ForecastCard";

interface DailyForecast {
  day: string;
  min: number;
  max: number;
  condition: string;
}

interface WeeklyForecastProps {
  forecast: DailyForecast[];
}

export function WeeklyForecast({ forecast }: WeeklyForecastProps) {
  return (
    <div className="mt-8 w-full max-w-5xl mx-auto text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Previsão para 7 dias
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
        {forecast.map((day) => (
          <ForecastCard key={day.day} {...day} />
        ))}
      </div>
    </div>
  );
}

interface TemperatureChartProps {
  temp: number;
  feelsLike: number;
  min: number;
  max: number;
}

export function TemperatureChart({
  temp,
  feelsLike,
  min,
  max,
}: TemperatureChartProps) {
  const progress = ((temp - min) / (max - min)) * 100;

  return (
    <div className="bg-white/80 shadow-md rounded-xl p-5 flex flex-col items-center justify-start text-center h-full">
      <h3 className="text-gray-700 font-semibold">Temperatura</h3>

      <div className="mt-4 flex flex-col items-center justify-center space-y-3">
        <p className="text-3xl font-bold text-blue-600">{Math.round(temp)}°C</p>
        <p className="text-sm text-gray-500">
          Sensação térmica: {Math.round(feelsLike)}°C
        </p>

        <div className="w-full max-w-[200px] mt-1">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>{Math.round(min)}°</span>
            <span>{Math.round(max)}°</span>
          </div>

          <div className="relative h-2 bg-blue-100 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-2 bg-blue-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

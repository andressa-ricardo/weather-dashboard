import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

interface TemperatureChartProps {
  data: { hour: string; temp: number }[];
}

export function TemperatureChart({ data }: TemperatureChartProps) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-3xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">
        Variação de Temperatura
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="hour" stroke="#888" />
          <YAxis unit="°C" stroke="#888" domain={["dataMin-1", "dataMax+1"]} />
          <Tooltip
            formatter={(value) => `${value}°C`}
            labelStyle={{ color: "#555" }}
          />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#2563eb"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

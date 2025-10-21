import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface WeatherChartProps {
  data: { time: string; temp: number }[];
}

export default function WeatherChart({ data }: WeatherChartProps) {
  return (
    <div className="bg-white p-4 rounded shadow w-full max-w-2xl">
      <h3 className="text-center mb-3 font-semibold">
        Variação de Temperatura
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

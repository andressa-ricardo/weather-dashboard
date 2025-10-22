import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";
import { Eye } from "lucide-react";

interface CloudChartProps {
  clouds: number;
  visibility: number;
  description: string;
}

export function CloudChart({
  clouds,
  visibility,
  description,
}: CloudChartProps) {
  const cloudData = [{ name: "Nuvens", value: clouds, fill: "#3b82f6" }];

  return (
    <div className="bg-white/80 shadow-md rounded-xl p-5 text-center">
      <h3 className="text-gray-700 font-semibold mb-1">
        Nuvens e Visibilidade
      </h3>
      <p className="text-xs text-gray-500 mb-2">Cobertura de nuvens</p>

      <ResponsiveContainer width="100%" height={120}>
        <RadialBarChart
          cx="50%"
          cy="100%"
          innerRadius="70%"
          outerRadius="100%"
          barSize={10}
          startAngle={180}
          endAngle={0}
          data={cloudData}
        >
          <RadialBar background dataKey="value" cornerRadius={5} />
        </RadialBarChart>
      </ResponsiveContainer>

      <p className="text-2xl font-bold text-blue-600">{clouds}%</p>
      <div className="flex items-center justify-center gap-1 text-sm text-gray-500">
        <Eye className="w-4 h-4" />
        <span>{(visibility / 1000).toFixed(1)} km</span>
      </div>
      <p className="text-xs text-gray-500 capitalize mt-1">{description}</p>
    </div>
  );
}

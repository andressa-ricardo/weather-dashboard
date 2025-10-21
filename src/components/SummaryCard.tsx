interface SummaryCardProps {
  title: string;
  value: string | number;
  unit?: string;
}

export default function SummaryCard({ title, value, unit }: SummaryCardProps) {
  return (
    <div className="p-4 bg-white shadow rounded text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold mt-2">
        {value} {unit}
      </p>
    </div>
  );
}

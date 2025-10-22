interface WindChartProps {
  speed: number;
  deg: number;
  direction: string;
}

export function WindChart({ speed, deg, direction }: WindChartProps) {
  return (
    <div className="bg-white/80 shadow-md rounded-xl p-5 text-center">
      <h3 className="text-gray-700 font-semibold mb-2">Vento</h3>
      <p className="text-3xl font-bold text-gray-800">
        {Math.round(speed * 3.6)}
      </p>
      <p className="text-sm text-gray-500">km/h</p>

      <div className="relative w-24 h-24 mx-auto mt-4">
        <div className="absolute inset-0 border-2 border-gray-300 rounded-full flex items-center justify-center text-xs text-gray-500">
          <span className="absolute top-1">N</span>
          <span className="absolute right-1">L</span>
          <span className="absolute bottom-1">S</span>
          <span className="absolute left-1">O</span>
        </div>
        <div
          className="absolute left-1/2 top-1/2 w-1 h-10 bg-blue-500 origin-bottom rounded-full"
          style={{ transform: `translate(-50%, -100%) rotate(${deg}deg)` }}
        ></div>
      </div>

      <p className="text-gray-600 text-sm mt-2">{direction}</p>
    </div>
  );
}

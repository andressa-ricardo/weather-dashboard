import { Search } from "lucide-react";

interface SearchBarProps {
  city: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  loading?: boolean;
}

export function SearchBar({
  city,
  onChange,
  onSearch,
  loading,
}: SearchBarProps) {
  return (
    <div className="flex items-center justify-center w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-2 gap-2">
      <input
        type="text"
        value={city}
        onChange={onChange}
        placeholder="Digite a cidade..."
        className="flex-1 border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={onSearch}
        disabled={loading}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
      >
        <Search className="w-4 h-4" />
        {loading ? "Carregando..." : "Buscar"}
      </button>
    </div>
  );
}

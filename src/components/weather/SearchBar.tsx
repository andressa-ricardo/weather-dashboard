import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { cities } from "../../utils/cities";

interface SearchBarProps {
  city: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  onSelectCity?: (cityName: string) => void;
  loading?: boolean;
}

export function SearchBar({
  city,
  onChange,
  onSearch,
  onSelectCity,
  loading,
}: SearchBarProps) {
  const [suggestions, setSuggestions] = useState<
    { name: string; country: string }[]
  >([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (city.length >= 3) {
      const filtered = cities
        .filter((c) => c.name.toLowerCase().includes(city.toLowerCase()))
        .slice(0, 10);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [city]);

  const handleSelectCity = (selectedCity: string) => {
    if (onSelectCity) onSelectCity(selectedCity);
    setShowSuggestions(false);
  };

  return (
    <div className="relative flex flex-col items-center w-full max-w-md mx-auto">
      <div className="flex items-center w-full bg-white shadow-md rounded-lg p-2 gap-2">
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

      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
          {suggestions.map((s, index) => (
            <li
              key={index}
              onClick={() => handleSelectCity(s.name)}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100"
            >
              {s.name}{" "}
              <span className="text-gray-500 text-sm">({s.country})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

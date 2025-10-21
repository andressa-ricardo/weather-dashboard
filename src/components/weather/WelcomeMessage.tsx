import { Info } from "lucide-react";

export function WelcomeMessage() {
  return (
    <div className="flex items-start gap-2 bg-white/70 border border-blue-200 shadow-sm p-4 rounded-lg mt-6 max-w-lg mx-auto text-gray-700 backdrop-blur-sm">
      <Info className="w-5 h-5 text-blue-600 mt-1" />
      <div>
        <p className="font-semibold">Bem-vindo ao Tempo Certo!</p>
        <p className="text-sm text-gray-600">
          Digite o nome de uma cidade acima para ver a previsão do tempo.
        </p>
      </div>
    </div>
  );
}

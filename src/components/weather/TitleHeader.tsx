import { AnimatedCloudIcon } from "./animated-cloud-icon";

export function TitleHeader() {
  return (
    <header className="text-center mb-8">
      <AnimatedCloudIcon />
      <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a8a]">
        Tempo Certo
      </h1>
      <p className="text-[#475569] mt-1">
        Seu painel de meteorologia moderno e responsivo.
      </p>
    </header>
  );
}

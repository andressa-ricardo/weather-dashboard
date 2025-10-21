import { Cloud } from "lucide-react";

export function AnimatedCloudIcon() {
  return (
    <div className="flex justify-center items-center gap-2 mb-2">
      <Cloud
        className="w-10 h-10 text-[#60a5fa] opacity-70 animate-float"
        style={{ animationDelay: "0s" }}
      />
      <Cloud
        className="w-10 h-10 text-[#3b82f6] opacity-60 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <Cloud
        className="w-10 h-10 text-[#93c5fd] opacity-50 animate-float"
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
}

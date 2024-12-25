import { cn } from "@/functions/cn";

export default function SelecionarHoraButton({
  hour,
  isActive,
  onClick,
}: {
  hour: string;
  isActive?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={cn(
        "border-2 border-cold-gray-500 rounded font-poppins font-medium text-cold-gray-500 px-3 py-1 text-lg transition-colors",
        isActive ? "border-2 border-cold-gray-950 text-cold-gray-950" : ""
      )}
      onClick={onClick}
    >
      {hour}
    </button>
  );
}

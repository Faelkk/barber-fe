import { cn } from "@/functions/cn";
import { formatPrice } from "@/functions/formatPrice";

export default function ConfirmarAgendamento({
  totalAgendamento,
  onConfirmSchedule,
  isDisabled,
}: {
  onConfirmSchedule: () => void;
  totalAgendamento: number;
  isDisabled: boolean;
}) {
  return (
    <div className="w-full flex flex-col gap-2 md:items-end">
      <span className="font-poppins text-cold-gray-900 text-lg">
        Total:{" "}
        <span className="font-medium font-poppins text-cold-gray-950">
          {formatPrice(totalAgendamento)}
        </span>
      </span>
      <button
        className={cn(
          "uppercase text-Seashell-950 border-Seashell-950 font-poppins font-medium text-lg border-2 rounded px-3 py-1 w-full mt-2 md:hover:scale-105 md:transition-transform medium:max-w-[300px]",
          isDisabled && "opacity-50 cursor-not-allowed"
        )}
        onClick={onConfirmSchedule}
        disabled={isDisabled}
      >
        Confirmar Agendamento
      </button>
    </div>
  );
}

import { formatPrice } from "@/functions/formatPrice";

export default function ConfirmarAgendamento({
  totalAgendamento,
  onConfirmSchedule,
}: {
  onConfirmSchedule: () => void;
  totalAgendamento: number;
}) {
  return (
    <div className="w-full flex flex-col gap-2r md:items-end">
      <span className="font-poppins text-cold-gray-900 text-lg">
        Total:{" "}
        <span className="font-medium font-poppins text-cold-gray-950">
          {formatPrice(totalAgendamento)}
        </span>
      </span>
      <button
        className=" uppercase  text-Seashell-950 border-Seashell-950 font-poppins font-medium text-lg border-2 rounded px-3 py-1 w-full  mt-2
 md:hover:scale-105 md:transition-transform medium:max-w-[300px]"
        onClick={onConfirmSchedule}
      >
        Confirmar Agendamento
      </button>
    </div>
  );
}

import EditIcon from "@/app/components/ui/icons/Edit";
import Link from "next/link";
import { Appointment } from "@/actions/appointments/get-appointments";

export default function MeusHorariosButtonEdit({
  horario,
}: {
  horario: Appointment;
}) {
  return (
    <>
      <Link
        href={
          horario.guestName
            ? `agendar-horario-by-barber/editar/${horario._id}`
            : `/meus-horarios/editar/${horario._id}`
        }
        className="flex items-center justify-center gap-2 border px-3 py-1 rounded border-cold-gray-950 text-cold-gray-950 font-poppins  w-full font-medium"
      >
        <EditIcon fill="#292929" width={20} height={20} />
        <span> Alterar</span>
      </Link>
    </>
  );
}

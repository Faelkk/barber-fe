import EditIcon from "@/app/components/ui/icons/Edit";
import Link from "next/link";

export default function MeusHorariosButtonEdit({
  horarioId,
}: {
  horarioId: string;
}) {
  return (
    <>
      <Link
        href={`/meus-horarios/editar/${horarioId}`}
        className="flex items-center justify-center gap-2 border px-3 py-1 rounded border-cold-gray-950 text-cold-gray-950 font-poppins  w-full font-medium"
      >
        <EditIcon fill="#292929" width={20} height={20} />
        <span> Alterar</span>
      </Link>
    </>
  );
}

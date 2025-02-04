import { PlusCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function CreateNewAppointmentBybarberGuest() {
  return (
    <>
      <Link
        className="bg-Seashell-50 border-2 border-Copper-300 rounded py-5 px-4 md:px-8 flex items-center justify-center cursor-pointer min-h-[400px] "
        href="/agendar-horario-by-barber"
      >
        <div className=" flex flex-col gap-4 items-center ">
          <PlusCircledIcon height={32} width={32} color="#dab06a" />
          <span className="font-merriweather max-w-[280px] text-center text-Copper-400 font-medium">
            Clique aqui para marcar um novo agendamento
          </span>
        </div>
      </Link>
    </>
  );
}

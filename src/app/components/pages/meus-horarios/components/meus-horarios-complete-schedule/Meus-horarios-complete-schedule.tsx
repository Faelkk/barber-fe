"use client";

import TrashIcon from "@/app/components/ui/icons/Trash";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMeusHorarioCompleteSchedule } from "./use-meus-horarios-complete-schedule";

export default function MeusHorariosCompleteSchedule({
  horarioId,
}: {
  horarioId: string;
}) {
  const { handleConfirmClick, isMenuOpen, toggleMenu } =
    useMeusHorarioCompleteSchedule();

  return (
    <>
      <Dialog open={isMenuOpen} onOpenChange={toggleMenu}>
        <DialogTrigger className="flex  gap-2 w-full">
          <a className="flex items-center justify-center gap-2 border px-3 py-1 rounded border-green-700 text-green-700 font-poppins  w-full font-medium">
            <TrashIcon fill="#15803d  " width={20} height={20} />
            Marcar como concluido
          </a>
        </DialogTrigger>
        <DialogContent className="p-3 md:p-6 max-w-[90%] medium:max-w-[400px] md:max-w-[500px] md:w-auto rounded">
          <DialogTitle className="font-merriweather text-green-00 font-bold  text-xl  md:text-2xl mt-5">
            Tem certeza que deseja marcar como concluido o seu agendamento ?
          </DialogTitle>
          <span className="font-poppins text-sm pp:text-base text-black">
            Essa ação não podera ser desfeita, você tera que recriar o
            agendamento!
          </span>
          <div className="flex flex-col pp:flex-row gap-4 w-full justify-end mt-5">
            <DialogClose className="bg-gray-100 px-4 py-2 font-poppins text-black font-medium">
              Cancelar
            </DialogClose>
            <button
              className="font-poppins px-4 py-2  bg-green-500 text-gray-50 p-2 rounded font-medium"
              onClick={() => handleConfirmClick(horarioId)}
            >
              Confirmar
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

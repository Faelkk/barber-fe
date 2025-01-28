import UserIcon from "@/app/components/ui/icons/User";

import EditIcon from "@/app/components/ui/icons/Edit";
import AgendamentoCard from "../../Agendamento-card";
import { Barber } from "@/actions/appointments/get-appointments";

export default function SelecionarBarbeiro({
  onEdit,
  selectedUnit,
}: {
  onEdit: () => void;
  selectedUnit: Barber;
}) {
  return (
    <AgendamentoCard>
      <section className="flex flex-col lg:items-center lg:justify-between lg:gap-2 lg:flex-row w-full lg:min-w-[800px]">
        <header className="flex items-center gap-4">
          <div className="rounded-full h-12 w-12 bg-[#D9D9D9] flex items-center justify-center">
            <UserIcon fill="#000" width={20} height={20} />
          </div>
          <h1 className="font-poppins font-medium pp:text-lg medium:text-xl text-Seashell-950">
            {selectedUnit?.name}
          </h1>
        </header>
        <div className="block lg:hidden w-full bg-Seashell-200 h-[2px] my-5"></div>
        <button
          className="flex items-center justify-center gap-2 px-3 py-1 rounded border-2 border-Seashell-900 text-Seashell-900 font-poppins  w-full font-medium mt-5 lg:mt-0 lg:max-w-[230px]"
          onClick={onEdit}
        >
          <EditIcon fill="#3D3D3D" width={20} height={20} />
          <span> Alterar</span>
        </button>
      </section>
    </AgendamentoCard>
  );
}

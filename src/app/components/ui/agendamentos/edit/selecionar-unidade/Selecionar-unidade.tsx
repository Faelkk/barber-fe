import LocationIcon from "@/app/components/ui/icons/location";
import EditIcon from "@/app/components/ui/icons/Edit";
import AgendamentoCard from "../../Agendamento-card";
import { Unit } from "@/actions/appointments/get-appointments";

export default function SelecionarUnidade({
  selectedUnit,
  onEdit,
}: {
  selectedUnit: Unit;
  onEdit: () => void;
}) {
  return (
    <AgendamentoCard>
      <section className="flex flex-col lg:items-center lg:justify-between lg:gap-2 lg:flex-row w-full lg:min-w-[800px]">
        <header className="flex items-center gap-4">
          <div className="hidden pp:flex rounded-full h-12 w-12 bg-[#D9D9D9]  items-center justify-center">
            <LocationIcon fill="#000" width={16} height={20} />
          </div>
          <h1 className="font-poppins font-medium pp:text-lg medium:text-xl text-Seashell-950">
            {selectedUnit.address.fullAddress}
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

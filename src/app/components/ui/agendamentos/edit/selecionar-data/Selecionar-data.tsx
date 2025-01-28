import DateIcon from "@/app/components/ui/icons/Date";
import EditIcon from "@/app/components/ui/icons/Edit";
import AgendamentoCard from "../../Agendamento-card";

export default function SelecionarData({
  onEdit,
  selectedMonthAndDay,
}: {
  onEdit: () => void;
  selectedMonthAndDay: string | null;
}) {
  return (
    <AgendamentoCard>
      <section className="flex flex-col lg:items-center lg:justify-between lg:gap-2 lg:flex-row w-full lg:min-w-[800px]">
        <header className="flex items-center gap-4">
          <div className="rounded-full h-12 w-12 bg-[#D9D9D9] flex items-center justify-center">
            <DateIcon fill="#000" width={20} height={20} />
          </div>
          <h1 className="font-poppins font-medium pp:text-lg medium:text-2xl text-Seashell-950">
            {selectedMonthAndDay}
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

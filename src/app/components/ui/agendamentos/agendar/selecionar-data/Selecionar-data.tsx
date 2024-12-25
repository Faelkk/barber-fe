import DateIcon from "@/app/components/ui/icons/Date";
import SelecionarDataButton from "./components/selecionar-data-button/Selecionar-data-button";
import SelecionarHoraContainer from "./components/selecionar-hora-container/Selecionar-hora-container";
import AgendamentoCard from "../../Agendamento-card";

interface SelecionarDataInterface {
  onSelectDate: (service: string) => void;
  onSelectMonthAndDay: (monthAndDay: string) => void;
  onSelectHour: (hour: string) => void;
}

export default function SelecionarData({
  onSelectDate,
  onSelectHour,
  onSelectMonthAndDay,
}: SelecionarDataInterface) {
  return (
    <AgendamentoCard>
      <header className="flex items-center gap-4">
        <div className="rounded-full h-12 w-12 bg-[#D9D9D9] flex items-center justify-center">
          <DateIcon fill="#000" width={20} height={20} />
        </div>
        <h1 className="font-poppins font-medium pp:text-lg medium:text-2xl text-Seashell-950">
          Selecione um dia e horario
        </h1>
      </header>
      <div className="w-full bg-Seashell-200 h-[2px] my-5"></div>
      <SelecionarDataButton onSelectMonthAndDay={onSelectMonthAndDay} />
      <SelecionarHoraContainer
        onSelectHour={onSelectHour}
        onSelectDate={onSelectDate}
      />
    </AgendamentoCard>
  );
}

import DateIcon from "@/app/components/ui/icons/Date";
import SelecionarDataButton from "./components/selecionar-data-button/Selecionar-data-button";
import SelecionarHoraContainer from "./components/selecionar-hora-container/Selecionar-hora-container";
import AgendamentoCard from "../../Agendamento-card";
import { Dispatch, SetStateAction } from "react";
import { Unit } from "@/actions/appointments/get-appointments";

interface SelecionarDataInterface {
  onSelectDate: (service: string) => void;
  selectedUnit: Unit | null;
  onSelectMonthAndDay: (monthAndDay: string) => void;
  dates:
    | {
        date: string;
        formatted: string;
      }[]
    | null;
  selectedMonthAndDay: string;
  setSelectedDate: Dispatch<SetStateAction<string | null>>;
  selectDay: string | null;
  setSelectedMonthAndDayUtc: Dispatch<SetStateAction<string | null>>;
}

export default function SelecionarData({
  selectedMonthAndDay,
  dates,
  setSelectedDate,
  onSelectDate,
  selectedUnit,
  selectDay,
  setSelectedMonthAndDayUtc,
  onSelectMonthAndDay,
}: SelecionarDataInterface) {
  return (
    <AgendamentoCard>
      <header className="flex items-center gap-4">
        <div className="rounded-full h-12 min-w-12 bg-[#D9D9D9] flex items-center justify-center">
          <DateIcon fill="#000" width={20} height={20} />
        </div>
        <h1 className="font-poppins font-medium pp:text-lg medium:text-xl text-Seashell-950">
          Selecione um dia e horario
        </h1>
      </header>
      <div className="w-full bg-Seashell-200 h-[2px] my-5"></div>
      <SelecionarDataButton
        setSelectedMonthAndDayUtc={setSelectedMonthAndDayUtc}
        selectedMonthAndDay={selectedMonthAndDay}
        onSelectMonthAndDay={onSelectMonthAndDay}
        dates={dates}
        setSelectedDate={setSelectedDate}
      />
      <SelecionarHoraContainer
        selectDay={selectDay}
        onSelectDate={onSelectDate}
        selectedUnit={selectedUnit}
      />
    </AgendamentoCard>
  );
}

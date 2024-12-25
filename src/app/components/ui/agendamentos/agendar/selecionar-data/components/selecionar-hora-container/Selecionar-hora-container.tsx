"use client";

import useToggleByIndex from "@/hooks/useToggleByIndex";
import SelecionarHoraButton from "../selecionar-hora-button/Selecionar-hora-button";

interface SelecionarHoraInterface {
  onSelectDate: (service: string) => void;

  onSelectHour: (hour: string) => void;
}

export default function SelecionarHoraContainer({
  onSelectDate,
  onSelectHour,
}: SelecionarHoraInterface) {
  const { handleButtonClick, isToggleOpen } = useToggleByIndex();

  const handleSelecionarHora = (hour: string, index: number) => {
    onSelectHour(hour);
    onSelectDate(hour);
    handleButtonClick(index);
  };

  const hours = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
  ];

  return (
    <div className="flex flex-wrap max-w-[940px] gap-3 mt-5 justify-center">
      {hours.map((hour, index) => (
        <SelecionarHoraButton
          key={hour}
          isActive={isToggleOpen === index}
          onClick={() => handleSelecionarHora(hour, index)}
          hour={hour}
        />
      ))}
    </div>
  );
}

"use client";

import SelecionarDataComponent from "../../../../ui/agendamentos/agendar/selecionar-data/Selecionar-data";
import EditSelecionarDataComponent from "../../../../ui/agendamentos/edit/selecionar-data/Selecionar-data";
import { useSelecionarData } from "@/app/components/ui/agendamentos/hooks/use-selecionar-date";
import { AgendarHorarioState } from "../../agendar-horario-contaiener/use-agendar-horario-container";
import { Unit } from "@/actions/units/get-units";

interface SelecionarUnidadeProps {
  selectedUnit: Unit | null;
  onSelect: (value: AgendarHorarioState["date"]) => void;
}

export default function SelecionarData({ onSelect }: SelecionarUnidadeProps) {
  const {
    isEditing,
    selectedDate,
    handleEditDate,
    handleSelectDate,
    handleSelectedMonthAndDay,
    handleSelectHour,
  } = useSelecionarData({
    initialIsEditing: false,
    initialSelectedDate: null,
  });

  const handleSelect = (service: string) => {
    handleSelectDate();
    console.log(service, "teste");

    onSelect(service);
  };

  const handleEdit = () => {
    onSelect(null);
    handleEditDate();
  };

  return (
    <>
      {selectedDate && isEditing ? (
        <EditSelecionarDataComponent onEdit={handleEdit} />
      ) : (
        <SelecionarDataComponent
          onSelectDate={handleSelect}
          onSelectMonthAndDay={handleSelectedMonthAndDay}
          onSelectHour={handleSelectHour}
        />
      )}
    </>
  );
}

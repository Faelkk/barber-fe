"use client";

import { useSelecionarData } from "@/app/components/ui/agendamentos/hooks/use-selecionar-date";
import EditSelecionarDataComponent from "../../../../ui/agendamentos/edit/selecionar-data/Selecionar-data";
import SelecionarDataComponent from "../../../../ui/agendamentos/agendar/selecionar-data/Selecionar-data";
import { AgendarHorarioState } from "../../../agendar-horario/agendar-horario-contaiener/use-agendar-horario-container";

interface SelecionarUnidadeProps {
  dataValue: string | null;
  onSelect: (value: AgendarHorarioState["data"]) => void;
}
export default function SelecionarData({
  dataValue,
  onSelect,
}: SelecionarUnidadeProps) {
  const {
    isEditing,
    selectedDate,
    handleEditDate,
    handleSelectDate,
    handleSelectedMonthAndDay,
    handleSelectHour,
  } = useSelecionarData({
    initialIsEditing: true,
    initialSelectedDate: dataValue,
  });

  const handleSelect = (service: string) => {
    handleSelectDate();
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

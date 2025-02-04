"use client";

import SelecionarDataComponent from "../../../../ui/agendamentos/agendar/selecionar-data/Selecionar-data";
import EditSelecionarDataComponent from "../../../../ui/agendamentos/edit/selecionar-data/Selecionar-data";
import { useSelecionarData } from "@/app/components/ui/agendamentos/hooks/use-selecionar-date";
import { AgendarHorarioState } from "../../agendar-horario-container/use-agendar-horario-container";
import { Unit } from "@/actions/units/get-units";

interface SelecionarUnidadeProps {
  selectedUnit: Unit | null;
  onSelect: (value: AgendarHorarioState["date"]) => void;
}

export default function SelecionarData({
  onSelect,
  selectedUnit,
}: SelecionarUnidadeProps) {
  const {
    selectedMonthAndDay,
    selectedMonthAndDayUtc,
    dates,
    isEditing,
    selectedDate,
    handleEditDate,
    handleSelect,
    handleSelectedMonthAndDay,
    setSelectedMonthAndDayUtc,
    setSelectedDate,
  } = useSelecionarData({
    initialIsEditing: false,
    initialSelectedDate: null,
    onSelect,
  });

  const handleEdit = () => {
    onSelect(null);
    handleEditDate();
  };

  return (
    <>
      {selectedDate && isEditing ? (
        <EditSelecionarDataComponent
          onEdit={handleEdit}
          selectedMonthAndDay={selectedDate}
        />
      ) : (
        <SelecionarDataComponent
          setSelectedMonthAndDayUtc={setSelectedMonthAndDayUtc}
          selectDay={selectedMonthAndDayUtc}
          selectedUnit={selectedUnit}
          onSelectDate={handleSelect}
          onSelectMonthAndDay={handleSelectedMonthAndDay}
          dates={dates}
          selectedMonthAndDay={selectedMonthAndDay as string}
          setSelectedDate={setSelectedDate}
        />
      )}
    </>
  );
}

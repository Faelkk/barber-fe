"use client";

import { useSelecionarUnidade } from "@/app/components/ui/agendamentos/hooks/use-selecionar-unidade";
import SelecionarUnidadeComponent from "../../../../ui/agendamentos/agendar/selecionar-unidade/Selecionar-unidade";
import EditSelecionarUnidadeComponent from "../../../../ui/agendamentos/edit/selecionar-unidade/Selecionar-unidade";
import { AgendarHorarioState } from "../../agendar-horario-contaiener/use-agendar-horario-container";

import { Dispatch, SetStateAction } from "react";
import { Unit } from "@/actions/units/get-units";

interface SelecionarUnidadeProps {
  onSelect: (value: AgendarHorarioState["unit"]) => void;
  setSelectedUnit: Dispatch<SetStateAction<Unit | null>>;
}

export default function SelecionarUnidade({
  onSelect,
  setSelectedUnit,
}: SelecionarUnidadeProps) {
  const { isEditing, selectedUnit, handleEditUnit, handleSelectUnit } =
    useSelecionarUnidade({
      initialIsEditing: false,
      initialSelectedUnit: null,
    });

  const handleSelect = (unit: Unit) => {
    handleSelectUnit(unit);
    onSelect(unit._id);
    setSelectedUnit(unit);
  };

  const handleEdit = () => {
    onSelect(null);
    handleEditUnit();
  };

  return (
    <>
      {isEditing && selectedUnit ? (
        <EditSelecionarUnidadeComponent
          onEdit={handleEdit}
          selectedUnit={selectedUnit}
        />
      ) : (
        <SelecionarUnidadeComponent onSelect={handleSelect} />
      )}
    </>
  );
}

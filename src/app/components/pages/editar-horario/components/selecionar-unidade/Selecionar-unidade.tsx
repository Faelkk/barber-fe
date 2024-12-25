"use client";

import EditSelecionarUnidadeComponent from "../../../../ui/agendamentos/edit/selecionar-unidade/Selecionar-unidade";
import SelecionarUnidadeComponent from "../../../../ui/agendamentos/agendar/selecionar-unidade/Selecionar-unidade";
import { useSelecionarUnidade } from "@/app/components/ui/agendamentos/hooks/use-selecionar-unidade";
import { AgendarHorarioState } from "../../../agendar-horario/agendar-horario-contaiener/use-agendar-horario-container";

interface SelecionarUnidadeProps {
  unityValue: string | null;
  onSelect: (value: AgendarHorarioState["unidade"]) => void;
}

export default function SelecionarUnidade({
  unityValue,
  onSelect,
}: SelecionarUnidadeProps) {
  const { isEditing, selectedUnit, handleEditUnit, handleSelectUnit } =
    useSelecionarUnidade({
      initialIsEditing: true,
      initialSelectedUnit: unityValue,
    });

  const handleSelect = (unit: string) => {
    onSelect(unit);
    handleSelectUnit(unit);
  };

  const handleEdit = () => {
    onSelect(null);
    handleEditUnit();
  };

  return (
    <>
      {isEditing && selectedUnit ? (
        <EditSelecionarUnidadeComponent onEdit={handleEdit} />
      ) : (
        <SelecionarUnidadeComponent onSelect={handleSelect} />
      )}
    </>
  );
}

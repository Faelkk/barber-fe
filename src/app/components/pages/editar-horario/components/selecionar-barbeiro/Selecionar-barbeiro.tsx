"use client";

import { useSelecionarBarbeiro } from "@/app/components/ui/agendamentos/hooks/use-selecionar-barbeiro";
import SelecionarBarbeiroComponent from "../../../../ui/agendamentos/agendar/selecionar-barbeiro/Selecionar-barbeiro";
import EditSelecionarBarbeiroComponent from "../../../../ui/agendamentos/edit/selecionar-barbeiro/Selecionar-barbeiro";
import { AgendarHorarioState } from "../../../agendar-horario/agendar-horario-contaiener/use-agendar-horario-container";

interface SelecionarUnidadeProps {
  barbeiroValue: string | null;
  onSelect: (value: AgendarHorarioState["barbeiro"]) => void;
}

export default function SelecionarBarbeiro({
  barbeiroValue,
  onSelect,
}: SelecionarUnidadeProps) {
  const { selectedBarber, isEditing, handleEditBarber, handleSelectBarber } =
    useSelecionarBarbeiro({
      initialIsEditing: true,
      initialSelectedBarber: barbeiroValue,
    });

  const handleSelect = (barber: string) => {
    handleSelectBarber(barber);
    onSelect(barber);
  };

  const handleEdit = () => {
    onSelect(null);
    handleEditBarber();
  };

  return (
    <>
      {selectedBarber && isEditing ? (
        <EditSelecionarBarbeiroComponent onEdit={handleEdit} />
      ) : (
        <SelecionarBarbeiroComponent onSelect={handleSelect} />
      )}
    </>
  );
}

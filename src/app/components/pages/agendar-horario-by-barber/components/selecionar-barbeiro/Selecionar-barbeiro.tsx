"use client";

import { useSelecionarBarbeiro } from "@/app/components/ui/agendamentos/hooks/use-selecionar-barbeiro";
import SelecionarBarbeiroComponent from "../../../../ui/agendamentos/agendar/selecionar-barbeiro/Selecionar-barbeiro";
import EditSelecionarBarbeiroComponent from "../../../../ui/agendamentos/edit/selecionar-barbeiro/Selecionar-barbeiro";
import { AgendarHorarioState } from "../../agendar-horario-container-by-barber/use-agendar-horario-container-by-barber";
import { Unit } from "@/actions/units/get-units";
import { Auth } from "@/actions/units/get-unit-by-id";

interface SelecionarUnidadeProps {
  selectedUnit: Unit | null;
  onSelect: (value: AgendarHorarioState["barber"]) => void;
}

export default function SelecionarBarbeiro({
  selectedUnit,
  onSelect,
}: SelecionarUnidadeProps) {
  const { selectedBarber, isEditing, handleEditBarber, handleSelectBarber } =
    useSelecionarBarbeiro({
      initialIsEditing: false,
      initialSelectedBarber: null,
    });

  const handleSelect = (barber: Auth) => {
    handleSelectBarber(barber);
    onSelect(barber._id);
  };

  const handleEdit = () => {
    onSelect(null);
    handleEditBarber();
  };

  return (
    <>
      {selectedBarber && isEditing ? (
        <EditSelecionarBarbeiroComponent
          onEdit={handleEdit}
          selectedUnit={selectedBarber}
        />
      ) : (
        <SelecionarBarbeiroComponent
          selectedUnit={selectedUnit}
          onSelect={handleSelect}
        />
      )}
    </>
  );
}

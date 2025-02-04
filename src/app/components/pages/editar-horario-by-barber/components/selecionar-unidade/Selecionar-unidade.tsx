"use client";

import EditSelecionarUnidadeComponent from "../../../../ui/agendamentos/edit/selecionar-unidade/Selecionar-unidade";
import SelecionarUnidadeComponent from "../../../../ui/agendamentos/agendar/selecionar-unidade/Selecionar-unidade";
import { useSelecionarUnidade } from "@/app/components/ui/agendamentos/hooks/use-selecionar-unidade";
import { AgendarHorarioState } from "../../../agendar-horario/agendar-horario-container/use-agendar-horario-container";
import { Dispatch, SetStateAction } from "react";
import { Unit } from "@/actions/appointments/get-appointments";
import { Unit as UnitTyped } from "@/actions/units/get-units";
import { EditAppointmentState } from "../../editar-horario-container/use-editar-horario-container";

interface SelecionarUnidadeProps {
  unityValue: Unit | null;
  onSelect: (value: AgendarHorarioState["unit"]) => void;
  setSelectedUnit: Dispatch<SetStateAction<UnitTyped | null>>;
  setAppointment: Dispatch<SetStateAction<EditAppointmentState | null>>;
}

export default function SelecionarUnidade({
  unityValue,
  onSelect,
  setSelectedUnit,
  setAppointment,
}: SelecionarUnidadeProps) {
  const { isEditing, selectedUnit, handleEditUnit, handleSelectUnit } =
    useSelecionarUnidade({
      initialIsEditing: true,
      initialSelectedUnit: unityValue,
    });

  const handleSelect = (unit: UnitTyped) => {
    onSelect(unit._id);
    handleSelectUnit(unit);

    setSelectedUnit(unit);
  };

  const handleEdit = () => {
    onSelect(null);
    handleEditUnit();
    setAppointment((prevState) =>
      prevState
        ? {
            _id: prevState._id,
            status: prevState.status,
            guestName: prevState.guestName,
            barbershop: prevState.barbershop,
            unit: prevState.unit,
            barber: null,
            date: null,
            service: null,
            serviceType: null,
          }
        : null
    );
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

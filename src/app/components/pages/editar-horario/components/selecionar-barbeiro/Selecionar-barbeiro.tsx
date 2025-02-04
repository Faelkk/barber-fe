"use client";

import { useSelecionarBarbeiro } from "@/app/components/ui/agendamentos/hooks/use-selecionar-barbeiro";
import SelecionarBarbeiroComponent from "../../../../ui/agendamentos/agendar/selecionar-barbeiro/Selecionar-barbeiro";
import EditSelecionarBarbeiroComponent from "../../../../ui/agendamentos/edit/selecionar-barbeiro/Selecionar-barbeiro";
import { AgendarHorarioState } from "../../../agendar-horario/agendar-horario-container/use-agendar-horario-container";
import { Unit } from "@/actions/units/get-units";
import { Barber } from "@/actions/appointments/get-appointments";
import { Dispatch, SetStateAction } from "react";
import { EditAppointmentState } from "../../editar-horario-container/use-editar-horario-container";

interface SelecionarUnidadeProps {
  barbeiroValue: Barber | null;
  selectedUnit: Unit | null;
  onSelect: (value: AgendarHorarioState["barber"]) => void;
  setAppointment: Dispatch<SetStateAction<EditAppointmentState | null>>;
}

export default function SelecionarBarbeiro({
  selectedUnit,
  barbeiroValue,
  onSelect,
  setAppointment,
}: SelecionarUnidadeProps) {
  const { selectedBarber, isEditing, handleEditBarber, handleSelectBarber } =
    useSelecionarBarbeiro({
      initialIsEditing: true,
      initialSelectedBarber: barbeiroValue,
    });

  const handleSelect = (barber: Barber) => {
    handleSelectBarber(barber);
    onSelect(barber._id);
  };

  const handleEdit = () => {
    onSelect(null);
    handleEditBarber();
    setAppointment((prevState) =>
      prevState
        ? {
            _id: prevState._id,
            status: prevState.status,
            client: prevState.client,
            barbershop: prevState.barbershop,
            unit: prevState.unit,
            barber: null,
            date: null,
            service: prevState.service,
            serviceType: prevState.serviceType,
          }
        : null
    );
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
          onSelect={handleSelect}
          selectedUnit={selectedUnit}
        />
      )}
    </>
  );
}

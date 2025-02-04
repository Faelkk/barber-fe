"use client";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";

import { useSelecionarData } from "@/app/components/ui/agendamentos/hooks/use-selecionar-date";
import EditSelecionarDataComponent from "../../../../ui/agendamentos/edit/selecionar-data/Selecionar-data";
import SelecionarDataComponent from "../../../../ui/agendamentos/agendar/selecionar-data/Selecionar-data";
import { AgendarHorarioState } from "../../../agendar-horario/agendar-horario-container/use-agendar-horario-container";
import { Dispatch, SetStateAction } from "react";
import { Unit } from "@/actions/appointments/get-appointments";
import { EditAppointmentState } from "../../editar-horario-container/use-editar-horario-container";

interface SelecionarUnidadeProps {
  selectedUnit: Unit | null;
  dataValue: string | null;
  onSelect: (value: AgendarHorarioState["date"]) => void;
  setAppointment: Dispatch<SetStateAction<EditAppointmentState | null>>;
}
export default function SelecionarData({
  selectedUnit,
  setAppointment,
  dataValue,
  onSelect,
}: SelecionarUnidadeProps) {
  let dataFormatted = null;

  if (dataValue) {
    dataFormatted = format(
      dataValue as string,
      "dd 'de' MMMM 'de' yyyy | EEEE 'às' HH:mm",
      {
        locale: ptBR,
      }
    );
  }

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
    initialIsEditing: true,
    initialSelectedDate: dataFormatted,
    onSelect,
  });

  const handleEdit = () => {
    onSelect(null);
    handleEditDate();
    setAppointment((prevState) =>
      prevState
        ? {
            _id: prevState._id,
            status: prevState.status,
            guestName: prevState.guestName,
            barbershop: prevState.barbershop,
            unit: prevState.unit,
            barber: prevState.barber,
            service: prevState.service,
            serviceType: prevState.serviceType,
            date: null,
          }
        : null
    );
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

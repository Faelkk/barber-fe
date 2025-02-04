import { useState } from "react";
import { AgendarHorarioState } from "../../../agendar-horario-by-barber/agendar-horario-container-by-barber/use-agendar-horario-container-by-barber";
import { Dispatch, SetStateAction } from "react";
import { EditAppointmentState } from "../../editar-horario-container/use-editar-horario-container";

export function useInputGuestName({
  onSelect,
  setAppointment,
  guestNameValue,
}: {
  onSelect: (value: AgendarHorarioState["guestName"]) => void;
  guestNameValue: string | null;
  setAppointment: Dispatch<SetStateAction<EditAppointmentState | null>>;
}) {
  const [guestNameSelected, setSelectedGuestName] = useState(
    guestNameValue ? guestNameValue : ""
  );
  const [guestName, setGuestName] = useState(
    guestNameValue ? guestNameValue : ""
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (guestName?.trim()) {
      onSelect(guestName);
      setSelectedGuestName(guestName);
    }
  };

  const handleEdit = () => {
    setSelectedGuestName("");
    onSelect(null);
    setAppointment((prevState) =>
      prevState
        ? {
            _id: prevState._id,
            status: prevState.status,
            guestName: null,
            barbershop: prevState.barbershop,
            unit: null,
            barber: null,
            date: null,
            service: null,
            serviceType: null,
          }
        : null
    );
    setGuestName("");
    setSelectedGuestName("");
  };

  return {
    guestName,
    guestNameSelected,
    handleSubmit,
    handleEdit,
    setGuestName,
  };
}

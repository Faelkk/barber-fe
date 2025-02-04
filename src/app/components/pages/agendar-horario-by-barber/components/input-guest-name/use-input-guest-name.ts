import { useState } from "react";
import { AgendarHorarioState } from "../../agendar-horario-container-by-barber/use-agendar-horario-container-by-barber";

export function useInputGuestName({
  onSelect,
}: {
  onSelect: (value: AgendarHorarioState["guestName"]) => void;
}) {
  const [guestNameSelected, setSelectedGuestName] = useState("");
  const [guestName, setGuestName] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (guestName.trim()) {
      onSelect(guestName);
      setSelectedGuestName(guestName);
    }
  };

  const handleEdit = () => {
    setSelectedGuestName("");
    onSelect(null);
  };

  return {
    guestName,
    guestNameSelected,
    handleSubmit,
    handleEdit,
    setGuestName,
  };
}

"use client";

import { useSelecionarServico } from "@/app/components/ui/agendamentos/hooks/use-selecionar-servico";
import EditSelecionarServicoComponent from "../../../../ui/agendamentos/edit/selecionar-servico/Selecionar-servico";
import SelecionarServicoComponent from "../../../../ui/agendamentos/agendar/selecionar-servico/Selecionar-servico";
import { AgendarHorarioState } from "../../../agendar-horario/agendar-horario-contaiener/use-agendar-horario-container";

interface SelecionarUnidadeProps {
  serviceValue: string | null;
  onSelect: (value: AgendarHorarioState["servico"]) => void;
}

export default function SelecionarServico({
  serviceValue,
  onSelect,
}: SelecionarUnidadeProps) {
  const { selectedService, isEditing, handleEditService, handleSelectService } =
    useSelecionarServico({
      initialIsEditing: true,
      initialSelectedService: serviceValue,
    });

  const handleSelect = (service: string) => {
    onSelect(service);
    handleSelectService(service);
  };

  const handleEdit = () => {
    onSelect(null);
    handleEditService();
  };

  return (
    <>
      {selectedService && isEditing ? (
        <EditSelecionarServicoComponent onEdit={handleEdit} />
      ) : (
        <SelecionarServicoComponent onSelect={handleSelect} />
      )}
    </>
  );
}

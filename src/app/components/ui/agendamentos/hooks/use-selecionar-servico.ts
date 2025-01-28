import { CombinedServicesType } from "@/app/components/pages/agendar-horario/components/selecionar-servico/Selecionar-servico";
import { useState } from "react";

interface UseSelecionarServicoProps {
  initialIsEditing?: boolean;
  initialSelectedService?: CombinedServicesType | null;
}

export function useSelecionarServico({
  initialIsEditing = false,
  initialSelectedService = null,
}: UseSelecionarServicoProps) {
  const [isEditing, setIsEditing] = useState<boolean>(initialIsEditing);
  const [selectedService, setSelectedService] =
    useState<CombinedServicesType | null>(initialSelectedService);

  const handleSelectService = (service: CombinedServicesType) => {
    setSelectedService(service);
    setIsEditing(true);
  };

  const handleEditService = () => {
    setIsEditing(false);
    setSelectedService(null);
  };

  return { isEditing, selectedService, handleSelectService, handleEditService };
}

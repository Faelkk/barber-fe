import { GlobalService } from "@/actions/services/get-global-services";
import { CombinedServicesType } from "@/app/components/pages/agendar-horario/components/selecionar-servico/Selecionar-servico";
import { useState } from "react";

interface UseSelecionarServicoProps {
  initialIsEditing?: boolean;
  initialSelectedService?: GlobalService | null;
}

export function useSelecionarServico({
  initialIsEditing = false,
  initialSelectedService = null,
}: UseSelecionarServicoProps) {
  const [isEditing, setIsEditing] = useState<true | false>(initialIsEditing);
  const [selectedService, setSelectedService] =
    useState<CombinedServicesType | null>(initialSelectedService);

  const handleSelectService = (service: CombinedServicesType) => {
    setSelectedService(service);
    setIsEditing(true);
  };

  const handleEditService = () => {
    setIsEditing(false);
  };

  return { isEditing, selectedService, handleSelectService, handleEditService };
}

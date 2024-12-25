"use client";

import { useSelecionarServico } from "@/app/components/ui/agendamentos/hooks/use-selecionar-servico";
import SelecionarServicoComponent from "../../../../ui/agendamentos/agendar/selecionar-servico/Selecionar-servico";
import EditSelecionarServicoComponent from "../../../../ui/agendamentos/edit/selecionar-servico/Selecionar-servico";
import { AgendarHorarioState } from "../../agendar-horario-contaiener/use-agendar-horario-container";
import { useEffect, useState } from "react";
import getServices from "@/actions/services/get-global-services";
import Loading from "@/app/loading";
import { Unit } from "@/actions/units/get-units";

interface SelecionarUnidadeProps {
  onSelect: (value: AgendarHorarioState["service"]) => void;
  selectedUnit: Unit | null;
}

export interface CombinedServicesType {
  _id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  barbershop: string;
  type: "local" | "global";
  avatar: string;
  thumbnail: string;
}

export default function SelecionarServico({
  onSelect,
  selectedUnit,
}: SelecionarUnidadeProps) {
  const [services, setService] = useState<CombinedServicesType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(false);
  const { selectedService, isEditing, handleEditService, handleSelectService } =
    useSelecionarServico({
      initialIsEditing: false,
      initialSelectedService: null,
    });

  const handleSelect = (service: CombinedServicesType) => {
    onSelect(service._id);
    handleSelectService(service);
  };

  const handleEdit = () => {
    onSelect(null);
    handleEditService();
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoading(true);
        const { data, error, ok } = await getServices();

        console.log(selectedUnit?.localService, data, "datas");

        if (data && ok && !error) {
          const combinedServices = [
            ...(selectedUnit?.localService || []),
            ...data,
          ];

          console.log(combinedServices, "combined");

          setService(combinedServices);
          setIsLoading(false);
        } else {
          throw new Error("erro ao pegar unidade");
        }
      } catch {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchServices();
  }, [selectedUnit]);

  if (isLoading) return <Loading />;

  if (services && !error)
    return (
      <>
        {selectedService && isEditing ? (
          <EditSelecionarServicoComponent
            onEdit={handleEdit}
            selectedService={selectedService}
          />
        ) : (
          <SelecionarServicoComponent
            onSelect={handleSelect}
            services={services}
          />
        )}
      </>
    );
}

"use client";

import { useSelecionarServico } from "@/app/components/ui/agendamentos/hooks/use-selecionar-servico";
import SelecionarServicoComponent from "../../../../ui/agendamentos/agendar/selecionar-servico/Selecionar-servico";
import EditSelecionarServicoComponent from "../../../../ui/agendamentos/edit/selecionar-servico/Selecionar-servico";
import { AgendarHorarioState } from "../../agendar-horario-container-by-barber/use-agendar-horario-container-by-barber";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import getServices from "@/actions/services/get-global-services";
import Loading from "@/app/loading";
import { Unit } from "@/actions/units/get-units";

interface SelecionarUnidadeProps {
  onSelect: (value: AgendarHorarioState["service"]) => void;
  selectedUnit: Unit | null;
  setSelectTypeService: (type: "local" | "global" | null) => void;
  setTotalAgendamento: Dispatch<SetStateAction<number | null>>;
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
  setSelectTypeService,
  selectedUnit,
  setTotalAgendamento,
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
    setSelectTypeService(service.type);
    onSelect(service._id);
    handleSelectService(service);

    setTotalAgendamento(service.price);
  };

  const handleEdit = () => {
    setSelectTypeService(null);
    onSelect(null);
    handleEditService();
    setTotalAgendamento(null);
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoading(true);
        const { data, error, ok } = await getServices();

        if (data && ok && !error) {
          const combinedServices = [
            ...(selectedUnit?.localService || []),
            ...data,
          ];

          setService(combinedServices);
          setIsLoading(false);
          setIsError(false);
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

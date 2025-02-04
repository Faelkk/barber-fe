"use client";

import { useSelecionarServico } from "@/app/components/ui/agendamentos/hooks/use-selecionar-servico";
import EditSelecionarServicoComponent from "../../../../ui/agendamentos/edit/selecionar-servico/Selecionar-servico";
import SelecionarServicoComponent from "../../../../ui/agendamentos/agendar/selecionar-servico/Selecionar-servico";
import { AgendarHorarioState } from "../../../agendar-horario/agendar-horario-container/use-agendar-horario-container";
import Loading from "@/app/loading";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CombinedServicesType } from "../../../agendar-horario/components/selecionar-servico/Selecionar-servico";
import getServices from "@/actions/services/get-global-services";
import { Unit } from "@/actions/units/get-units";

import { EditAppointmentState } from "../../editar-horario-container/use-editar-horario-container";

interface SelecionarUnidadeProps {
  serviceValue: CombinedServicesType | null;
  onSelect: (value: AgendarHorarioState["service"]) => void;
  selectedUnit: Unit | null;
  setSelectTypeService: (type: "local" | "global" | null) => void;
  setAppointment: Dispatch<SetStateAction<EditAppointmentState | null>>;
  setTotalAgendamento: Dispatch<SetStateAction<number | null>>;
}

export default function SelecionarServico({
  selectedUnit,
  serviceValue,
  onSelect,
  setAppointment,
  setSelectTypeService,
  setTotalAgendamento,
}: SelecionarUnidadeProps) {
  const [services, setService] = useState<CombinedServicesType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(false);

  const { selectedService, isEditing, handleEditService, handleSelectService } =
    useSelecionarServico({
      initialIsEditing: true,
      initialSelectedService: serviceValue,
    });

  const handleSelect = (service: CombinedServicesType) => {
    setSelectTypeService(service.type);
    onSelect(service._id);
    handleSelectService(service);
    setTotalAgendamento(service.price);
  };

  const handleEdit = () => {
    onSelect(null);
    handleEditService();
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
            service: null,
            serviceType: null,
          }
        : null
    );
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

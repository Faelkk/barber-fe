"use client";

import Container from "@/app/components/ui/container/Container";
import SelecionarUnidade from "../components/selecionar-unidade/Selecionar-unidade";
import SelecionarServico from "../components/selecionar-servico/Selecionar-servico";
import SelecionarBarbeiro from "../components/selecionar-barbeiro/Selecionar-barbeiro";
import SelecionarData from "../components/selecionar-data/Selecionar-data";
import ConfirmarAgendamento from "@/app/components/ui/agendamentos/Confirmar-Agendamento";

import { useEditarHorarioContainer } from "./use-editar-horario-container";

import Loading from "@/app/loading";

export default function EditarHorarioContainer() {
  const {
    totalAgendamento,
    setTotalAgendamento,
    appointment,
    isLoading,
    selectedUnit,
    setSelectedUnit,
    setSelectTypeService,
    setAppointment,
    updateSelection,
    isStepCompleted,
    isAllStepsCompleted,
    isStateChanged,
    handleConfirmSchedule,
  } = useEditarHorarioContainer();

  if (isLoading) return <Loading />;

  return (
    <Container>
      <main className="flex flex-col  justify-center mt-[120px] px-4">
        <header>
          <h1 className="font-merriweather font-bold text-lg mini:text-2xl pp:text-3xl md:text-4xl text-black pp:relative before:content-[''] before:bg-black pp:ml-[30px] before:w-4 before:h-4 before:absolute before:left-[-30px] before:top-1/2 before:-translate-y-1/2">
            Editar seu horario
          </h1>
        </header>
        <section className="flex flex-col mt-10 gap-10">
          {appointment && !isLoading && (
            <>
              <SelecionarUnidade
                setSelectedUnit={setSelectedUnit}
                unityValue={appointment?.unit}
                setAppointment={setAppointment}
                onSelect={(value) => updateSelection("unit", value)}
              />

              {isStepCompleted("unit") && (
                <SelecionarServico
                  setTotalAgendamento={setTotalAgendamento}
                  selectedUnit={selectedUnit}
                  setSelectTypeService={setSelectTypeService}
                  serviceValue={appointment?.service}
                  setAppointment={setAppointment}
                  onSelect={(value) => updateSelection("service", value)}
                />
              )}

              {isStepCompleted("service") && (
                <SelecionarBarbeiro
                  setAppointment={setAppointment}
                  selectedUnit={selectedUnit}
                  barbeiroValue={appointment.barber}
                  onSelect={(value) => updateSelection("barber", value)}
                />
              )}

              {isStepCompleted("barber") && (
                <SelecionarData
                  selectedUnit={selectedUnit}
                  dataValue={appointment.date}
                  setAppointment={setAppointment}
                  onSelect={(value) => updateSelection("date", value)}
                />
              )}

              {isAllStepsCompleted && totalAgendamento && (
                <ConfirmarAgendamento
                  totalAgendamento={totalAgendamento}
                  onConfirmSchedule={handleConfirmSchedule}
                  isDisabled={!isStateChanged()}
                />
              )}
            </>
          )}
        </section>
      </main>
    </Container>
  );
}

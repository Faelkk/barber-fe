"use client";

import Container from "@/app/components/ui/container/Container";
import SelecionarUnidade from "../components/selecionar-unidade/Selecionar-unidade";
import SelecionarServico from "../components/selecionar-servico/Selecionar-servico";
import SelecionarBarbeiro from "../components/selecionar-barbeiro/Selecionar-barbeiro";
import SelecionarData from "../components/selecionar-data/Selecionar-data";
import ConfirmarAgendamento from "@/app/components/ui/agendamentos/Confirmar-Agendamento";
import { useAgendarHorarioContainerByBarber } from "./use-agendar-horario-container-by-barber";
import InputGuestName from "../components/input-guest-name/Input-guest-name";

export default function AgendarHorarioContainerByBarber() {
  const {
    setTotalAgendamento,
    totalAgendamento,
    updateSelection,
    isStepCompleted,
    selectedUnit,
    setSelectedUnit,
    setSelectTypeService,
    handleConfirmSchedule,
  } = useAgendarHorarioContainerByBarber();

  const isAllStepsCompleted =
    isStepCompleted("guestName") &&
    isStepCompleted("unit") &&
    isStepCompleted("service") &&
    isStepCompleted("barber") &&
    isStepCompleted("date");

  return (
    <Container>
      <main className="flex flex-col justify-center mt-[120px] px-4">
        <header>
          <h1 className="font-merriweather font-bold text-lg mini:text-2xl pp:text-3xl md:text-4xl text-black pp:relative before:content-[''] before:bg-black pp:ml-[30px] before:w-4 before:h-4 before:absolute before:left-[-30px] before:top-1/2 before:-translate-y-1/2">
            Agendar horário
          </h1>
        </header>
        <section className="flex flex-col mt-10 gap-10 w-full">
          <InputGuestName
            onSelect={(value) => updateSelection("guestName", value)}
          />
          {isStepCompleted("guestName") && (
            <SelecionarUnidade
              onSelect={(value) => updateSelection("unit", value)}
              setSelectedUnit={setSelectedUnit}
            />
          )}

          {isStepCompleted("unit") && (
            <SelecionarServico
              selectedUnit={selectedUnit}
              onSelect={(value) => updateSelection("service", value)}
              setSelectTypeService={setSelectTypeService}
              setTotalAgendamento={setTotalAgendamento}
            />
          )}
          {isStepCompleted("service") && (
            <SelecionarBarbeiro
              selectedUnit={selectedUnit}
              onSelect={(value) => updateSelection("barber", value)}
            />
          )}
          {isStepCompleted("barber") && (
            <SelecionarData
              selectedUnit={selectedUnit}
              onSelect={(value) => updateSelection("date", value)}
            />
          )}
          {isAllStepsCompleted && totalAgendamento && (
            <ConfirmarAgendamento
              isDisabled={false}
              onConfirmSchedule={handleConfirmSchedule}
              totalAgendamento={totalAgendamento}
            />
          )}
        </section>
      </main>
    </Container>
  );
}

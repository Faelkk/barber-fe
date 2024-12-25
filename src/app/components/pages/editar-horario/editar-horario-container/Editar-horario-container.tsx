"use client";

import Container from "@/app/components/ui/container/Container";
import SelecionarUnidade from "../components/selecionar-unidade/Selecionar-unidade";
import SelecionarServico from "../components/selecionar-servico/Selecionar-servico";
import SelecionarBarbeiro from "../components/selecionar-barbeiro/Selecionar-barbeiro";
import SelecionarData from "../components/selecionar-data/Selecionar-data";
import ConfirmarAgendamento from "@/app/components/ui/agendamentos/Confirmar-Agendamento";

import { useEditarHorarioContainer } from "./use-editar-horario-container";
import { useEffect } from "react";

export default function EditarHorarioContainer() {
  const { state, updateSelection, isStepCompleted } =
    useEditarHorarioContainer();

  useEffect(() => {
    console.log(state);
  }, [state]);

  const isAllStepsCompleted =
    isStepCompleted("unidade") &&
    isStepCompleted("servico") &&
    isStepCompleted("barbeiro") &&
    isStepCompleted("data");

  return (
    <Container>
      <main className="flex flex-col  justify-center mt-[120px] px-4">
        <header>
          <h1 className="font-merriweather font-bold text-lg mini:text-2xl pp:text-3xl md:text-4xl text-black pp:relative before:content-[''] before:bg-black pp:ml-[30px] before:w-4 before:h-4 before:absolute before:left-[-30px] before:top-1/2 before:-translate-y-1/2">
            Editar seu horario
          </h1>
        </header>
        <section className="flex flex-col mt-10 gap-10">
          <SelecionarUnidade
            unityValue={state.unidade}
            onSelect={(value) => updateSelection("unidade", value)}
          />

          {isStepCompleted("unidade") && (
            <SelecionarServico
              serviceValue={state.servico}
              onSelect={(value) => updateSelection("servico", value)}
            />
          )}

          {isStepCompleted("servico") && (
            <SelecionarBarbeiro
              barbeiroValue={state.barbeiro}
              onSelect={(value) => updateSelection("barbeiro", value)}
            />
          )}

          {isStepCompleted("barbeiro") && (
            <SelecionarData
              dataValue={state.data}
              onSelect={(value) => updateSelection("data", value)}
            />
          )}

          {isAllStepsCompleted && <ConfirmarAgendamento />}
        </section>
      </main>
    </Container>
  );
}

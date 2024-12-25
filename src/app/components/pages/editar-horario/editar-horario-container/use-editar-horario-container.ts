"use client";

import { useState } from "react";

export interface EditarHorarioState {
  unidade: string | null;
  servico: string | null;
  barbeiro: string | null;
  data: string | null;
}

export function useEditarHorarioContainer() {
  const [state, setState] = useState<EditarHorarioState>({
    unidade: "São Paulo",
    servico: "Corte e Barba",
    barbeiro: "Gabriel",
    data: "2024-11-27",
  });

  const updateSelection = <K extends keyof EditarHorarioState>(
    key: K,
    value: EditarHorarioState[K]
  ) => {
    setState((prevState) => {
      const newState = { ...prevState, [key]: value };
      if (value === null) {
        // Defina todos os campos posteriores a 'key' como null
        const keys = Object.keys(newState) as Array<keyof EditarHorarioState>;
        const currentIndex = keys.indexOf(key);
        keys.slice(currentIndex + 1).forEach((k) => {
          newState[k] = null;
        });
      }
      return newState;
    });
  };

  const isStepCompleted = (step: keyof EditarHorarioState) => !!state[step];

  return { state, updateSelection, isStepCompleted };
}

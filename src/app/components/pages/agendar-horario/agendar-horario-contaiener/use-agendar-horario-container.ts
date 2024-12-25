"use client";

import { Unit } from "@/actions/units/get-units";
import { useState } from "react";

export interface AgendarHorarioState {
  unit: string | null;
  service: string | null;
  barber: string | null;
  date: string | null;
}

export function useAgendarHorarioContainer() {
  const [state, setState] = useState<AgendarHorarioState>({
    unit: null,
    service: null,
    barber: null,
    date: null,
  });
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

  const updateSelection = <K extends keyof AgendarHorarioState>(
    key: K,
    value: AgendarHorarioState[K]
  ) => {
    setState((prevState) => {
      const newState = { ...prevState, [key]: value };
      if (value === null) {
        const keys = Object.keys(newState) as Array<keyof AgendarHorarioState>;
        const currentIndex = keys.indexOf(key);
        keys.slice(currentIndex + 1).forEach((k) => {
          newState[k] = null;
        });
      }
      return newState;
    });
  };

  const isStepCompleted = (step: keyof AgendarHorarioState) => !!state[step];

  return {
    state,
    updateSelection,
    isStepCompleted,
    selectedUnit,
    setSelectedUnit,
  };
}

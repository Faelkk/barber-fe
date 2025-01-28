"use client";

import createAppointment, {
  FormData,
} from "@/actions/appointments/create-appointment";
import getUser, { User } from "@/actions/auth/get-user";
import { Unit } from "@/actions/units/get-units";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export interface AgendarHorarioState {
  unit: string | null;
  service: string | null;
  barber: string | null;
  date: string | null;
  serviceType: "global" | "local" | null;
  client: string | null;
  barbershop: string | null;
}

export function useAgendarHorarioContainer() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [error, setIsError] = useState(false);
  const [state, setState] = useState<AgendarHorarioState>({
    client: null,
    barbershop: null,
    unit: null,
    service: null,
    barber: null,
    date: null,
    serviceType: null,
  });

  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [totalAgendamento, setTotalAgendamento] = useState<number | null>(null);

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

  const setSelectTypeService = (type: "global" | "local" | null) => {
    setState((prevState) => ({ ...prevState, serviceType: type }));
  };

  const isStepCompleted = (step: keyof AgendarHorarioState) => !!state[step];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, ok, error } = await getUser();

        if (data && ok && !error) {
          setUser(data);
        } else {
          throw new Error("erro ao pegar usuarios");
        }
      } catch {
        setIsError(false);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (user && !error) {
      setState((prevState) => ({
        ...prevState,
        client: user._id as string,
        barbershop: user.barbershop as string,
      }));
    }
  }, [user, error]);

  const handleConfirmSchedule = async () => {
    const { data, ok } = await createAppointment(state as FormData);

    if (data && ok) {
      toast.success("Horario agendado com sucesso");
      router.push("/meus-horarios");
    } else {
      toast.error("Erro ao agendar horario");
    }
  };

  return {
    totalAgendamento,
    setTotalAgendamento,
    state,
    updateSelection,
    isStepCompleted,
    selectedUnit,
    setSelectedUnit,
    setSelectTypeService,
    handleConfirmSchedule,
  };
}

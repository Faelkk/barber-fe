"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import getUser, { User } from "@/actions/auth/get-user";
import { Barber, Client } from "@/actions/appointments/get-appointments";
import editAppointment, {
  FormData,
} from "@/actions/appointments/edit-appointment";
import getAppointmentById, {
  Service,
} from "@/actions/appointments/get-appointment-by-id";
import { Unit } from "@/actions/units/get-units";

export interface EditarHorarioState {
  unit: string | null;
  service: string | null;
  barber: string | null;
  date: string | null;
  serviceType: "global" | "local" | null;
  client: string | null;
  barbershop: string | null;
}

export interface EditAppointmentState {
  _id: string;
  client: Client | null;
  barber: Barber | null;
  service: Service | null;
  barbershop: string;
  serviceType: "local" | "global" | null;
  date: string | null;
  status: "scheduled" | "completed" | "cancelled";
  unit: Unit | null;
}

export function useEditarHorarioContainer() {
  const { agendamentoId } = useParams();
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [error, setIsError] = useState(false);
  const [appointment, setAppointment] = useState<EditAppointmentState | null>(
    null
  );
  const [shouldSync, setShouldSync] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorAppointment, setIsErrorAppointment] = useState(false);
  const [state, setState] = useState<EditarHorarioState>({
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

  const updateSelection = <K extends keyof EditarHorarioState>(
    key: K,
    value: EditarHorarioState[K]
  ) => {
    setState((prevState) => {
      const newState = { ...prevState, [key]: value };
      if (value === null) {
        const keys = Object.keys(newState) as Array<keyof EditarHorarioState>;
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

  const isStepCompleted = (step: keyof EditarHorarioState) => !!state[step];

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
    const fetchAppointment = async () => {
      try {
        setIsLoading(true);
        const { data, ok, error } = await getAppointmentById(
          agendamentoId as string
        );

        if (data && ok && !error) {
          setAppointment(data);
          setIsLoading(false);
        } else {
          throw new Error("erro ao pegar appointment");
        }
      } catch {
        setIsErrorAppointment(false);
        setIsLoading(false);
      }
    };

    fetchAppointment();
  }, [agendamentoId]);

  useEffect(() => {
    if (appointment && !isErrorAppointment && shouldSync) {
      setState((prevState) => ({
        ...prevState,
        barber: appointment.barber?._id || null,
        client: appointment.client?._id || null,
        date: appointment.date || null,
        service: appointment.service?._id || null,
        serviceType: appointment.serviceType || null,
        unit: appointment.unit?._id || null,
      }));

      setSelectedUnit(appointment.unit);
      setShouldSync(false);
    }
  }, [appointment, isErrorAppointment, shouldSync]);

  useEffect(() => {
    if (user && !error && shouldSync && appointment && !isErrorAppointment) {
      setState((prevState) => ({
        ...prevState,
        client: appointment?.client?._id as string,
        barbershop: user.barbershop as string,
      }));
    }
  }, [user, error, appointment, shouldSync, isErrorAppointment]);

  const handleConfirmSchedule = async () => {
    const { data, ok } = await editAppointment(
      state as FormData,
      appointment?._id as string
    );

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
    setAppointment,
    isLoading,
    state,
    updateSelection,
    isStepCompleted,
    handleConfirmSchedule,
    selectedUnit,
    setSelectedUnit,
    appointment,
    setSelectTypeService,
  };
}

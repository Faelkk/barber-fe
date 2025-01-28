"use client";

import useToggleByIndex from "@/hooks/useToggleByIndex";
import SelecionarHoraButton from "../selecionar-hora-button/Selecionar-hora-button";
import { useEffect, useState } from "react";
import getAvailableHours from "@/actions/appointments/get-available-hours";
import Loading from "@/app/loading";
import { Unit } from "@/actions/appointments/get-appointments";

interface SelecionarHoraInterface {
  onSelectDate: (service: string) => void;
  selectedUnit: Unit | null;
  selectDay: string | null;
}

export default function SelecionarHoraContainer({
  selectedUnit,
  onSelectDate,
  selectDay,
}: SelecionarHoraInterface) {
  const [hoursAvailable, sethoursAvailable] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(false);

  const { handleButtonClick, isToggleOpen } = useToggleByIndex();

  const handleSelecionarHora = (hour: string, index: number) => {
    onSelectDate(hour);
    handleButtonClick(index);
  };

  useEffect(() => {
    const fetchHoursAvailable = async () => {
      try {
        setIsLoading(true);

        const { data, error, ok } = await getAvailableHours(
          selectedUnit?._id as string,
          selectDay as string
        );

        if (data && ok && !error) {
          sethoursAvailable(data);
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

    fetchHoursAvailable();
  }, [selectedUnit, selectDay]);

  if (isLoading)
    return (
      <div className="mt-10">
        <Loading hScreen="auto" />
      </div>
    );

  if (hoursAvailable && !error)
    return (
      <div className="flex flex-wrap max-w-[940px] gap-3 mt-5 justify-center">
        {hoursAvailable?.map((hour, index) => (
          <SelecionarHoraButton
            key={hour}
            isActive={isToggleOpen === index}
            onClick={() => handleSelecionarHora(hour, index)}
            hour={hour}
          />
        ))}
      </div>
    );
}

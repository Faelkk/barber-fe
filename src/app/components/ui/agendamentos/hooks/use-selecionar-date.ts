import { useEffect, useState } from "react";
import {
  format,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  setMilliseconds,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { AgendarHorarioState } from "@/app/components/pages/agendar-horario/agendar-horario-container/use-agendar-horario-container";

interface UseSelecionarDataProps {
  initialIsEditing?: boolean;
  initialSelectedDate?: string | null;
  onSelect: (value: AgendarHorarioState["date"]) => void;
}

export function useSelecionarData({
  initialIsEditing = false,
  initialSelectedDate = null,
  onSelect,
}: UseSelecionarDataProps) {
  const [isEditing, setIsEditing] = useState<boolean>(initialIsEditing);

  const [selectedDate, setSelectedDate] = useState<string | null>(
    initialSelectedDate
  );

  const [selectedMonthAndDay, setSelectedMonthAndDay] = useState<string | null>(
    initialSelectedDate
  );
  const [selectedMonthAndDayUtc, setSelectedMonthAndDayUtc] = useState<
    string | null
  >(null);
  const [dates, setDates] = useState<
    { date: string; formatted: string }[] | null
  >(null);

  const handleSelectedMonthAndDay = (monthAndDay: string) => {
    setSelectedMonthAndDay(monthAndDay);
  };

  const handleEditDate = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    const generateNext30Days = () => {
      const today = new Date();
      return Array.from({ length: 30 }, (_, i) => {
        const date = addDays(today, i);

        const zeroedDate = setMilliseconds(
          setSeconds(setMinutes(setHours(date, 0), 0), 0),
          0
        );

        const dateUtc = zeroedDate.toISOString().slice(0, 19);
        const formatted = format(zeroedDate, "dd 'de' MMMM 'de' yyyy | EEEE", {
          locale: ptBR,
        });

        return { date: dateUtc, formatted };
      });
    };

    const dates = generateNext30Days();

    setDates(dates);

    setSelectedMonthAndDay(dates[0]?.formatted || null);
    setSelectedMonthAndDayUtc(dates[0]?.date || null);
  }, []);

  const handleSelect = (hora: string) => {
    const dateWithoutTime = selectedMonthAndDayUtc?.slice(0, 10);

    const finalDate = `${dateWithoutTime}T${hora}:00`;

    setSelectedDate(`${selectedMonthAndDay} as ${hora}`);
    setSelectedMonthAndDayUtc(finalDate);
    onSelect(finalDate);
    setIsEditing(true);
  };

  return {
    selectedMonthAndDayUtc,
    dates,
    selectedDate,
    isEditing,
    selectedMonthAndDay,
    setSelectedDate,
    setSelectedMonthAndDayUtc,
    handleEditDate,
    handleSelect,
    handleSelectedMonthAndDay,
  };
}

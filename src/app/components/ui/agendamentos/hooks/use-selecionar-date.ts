import { useState } from "react";

interface UseSelecionarDataProps {
  initialIsEditing?: boolean;
  initialSelectedDate?: string | null;
}

export function useSelecionarData({
  initialIsEditing = false,
  initialSelectedDate = null,
}: UseSelecionarDataProps) {
  const [isEditing, setIsEditing] = useState<true | false>(initialIsEditing);
  const [selectedDate, setSelectedDate] = useState<string | null>(
    initialSelectedDate
  );
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const [selectedMonthAndDay, setSelectedMonthAndDay] = useState<string | null>(
    null
  );

  const handleSelectedMonthAndDay = (monthAndDay: string) => {
    setSelectedMonthAndDay(monthAndDay);
    console.log(selectedMonthAndDay);
  };

  const handleSelectHour = (hour: string) => {
    setSelectedHour(hour);
  };

  const handleSelectDate = () => {
    const date = `${selectedMonthAndDay} às ${selectedHour}`;
    console.log(selectedMonthAndDay, selectedHour, " os dois");

    console.log(date, "teste");

    setSelectedDate(date);
    setIsEditing(true);
  };

  const handleEditDate = () => {
    setIsEditing(false);
  };

  return {
    isEditing,
    selectedDate,
    selectedHour,
    selectedMonthAndDay,
    handleEditDate,
    handleSelectDate,
    handleSelectedMonthAndDay,
    handleSelectHour,
  };
}

import { useState } from "react";
import useToggleByIndex from "@/hooks/useToggleByIndex";

export default function useSelecionarDataButton() {
  const { handleButtonClick, isToggleOpen, isMenuOpen, toggleMenu } =
    useToggleByIndex(0);
  const [selectedDate, setSelectedDate] = useState(
    "30 de outubro de 2024 | quarta-feira"
  );

  const dates = [
    "30 de outubro de 2024 | quarta-feira",
    "31 de outubro de 2024 | quinta-feira",
  ];

  const handleDateSelect = (index: number) => {
    setSelectedDate(dates[index]);
    handleButtonClick(index);
    toggleMenu();
  };

  return {
    isToggleOpen,
    isMenuOpen,
    dates,
    selectedDate,
    toggleMenu,
    handleDateSelect,
  };
}

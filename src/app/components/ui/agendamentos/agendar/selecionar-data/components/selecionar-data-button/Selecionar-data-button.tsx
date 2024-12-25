"use client";

import { useState } from "react";
import { format, addDays } from "date-fns";
import { ptBR } from "date-fns/locale";
import ArrowDownIcon from "@/app/components/ui/icons/ArrowDown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useToggleByIndex from "@/hooks/useToggleByIndex";
import SelecionarDataButtonItem from "../selecionar-data-button-item/Selecionar-data-button-item";

export default function SelecionarDataButton({
  onSelectMonthAndDay,
}: {
  onSelectMonthAndDay: (monthAndDay: string) => void;
}) {
  const { handleButtonClick, isToggleOpen, isMenuOpen, toggleMenu } =
    useToggleByIndex(0);

  const generateNext30Days = () => {
    const today = new Date();
    return Array.from({ length: 30 }, (_, i) => {
      const date = addDays(today, i);
      return format(date, "dd 'de' MMMM 'de' yyyy | EEEE", { locale: ptBR });
    });
  };

  const dates = generateNext30Days();
  const [selectedDate, setSelectedDate] = useState(dates[0]);

  const handleDateSelect = (index: number) => {
    setSelectedDate(dates[index]);
    handleButtonClick(index);
    onSelectMonthAndDay(dates[index]);
    toggleMenu();
  };

  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={toggleMenu}>
      <DropdownMenuTrigger className="outline-none w-full flex flex-col gap-4">
        <div className="border border-Seashell-900 bg-Seashell-100 rounded flex justify-between gap-2 items-center p-3 w-full mx-auto max-h-[50px]">
          <span className="text-cold-gray-900 font-poppins text-sm pp:text-base p:text-lg font-medium overflow-hidden whitespace-normal pp:whitespace-nowrap medium:whitespace-normal text-ellipsis max-w-[170px] pp:max-w-[200px] p:max-w-[300px] medium:max-w-full">
            {selectedDate}
          </span>
          <ArrowDownIcon fill="#3D3D3D" width={16} height={11} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="DropdownMenuContent max-h-[150px]"
      >
        <ul className="flex flex-col pt-2 font-poppins text-black max-h-[300px]">
          {dates.map((date, index) => (
            <SelecionarDataButtonItem
              key={index}
              isActive={isToggleOpen === index}
              onClick={() => handleDateSelect(index)}
            >
              {date}
            </SelecionarDataButtonItem>
          ))}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

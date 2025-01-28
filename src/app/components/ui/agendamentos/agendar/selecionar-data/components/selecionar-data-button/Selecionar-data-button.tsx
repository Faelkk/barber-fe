"use client";

import ArrowDownIcon from "@/app/components/ui/icons/ArrowDown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useToggleByIndex from "@/hooks/useToggleByIndex";
import SelecionarDataButtonItem from "../selecionar-data-button-item/Selecionar-data-button-item";
import { Dispatch, SetStateAction } from "react";

export default function SelecionarDataButton({
  dates,
  selectedMonthAndDay,
  setSelectedDate,
  onSelectMonthAndDay,
  setSelectedMonthAndDayUtc,
}: {
  dates:
    | {
        date: string;
        formatted: string;
      }[]
    | null;
  selectedMonthAndDay: string;
  setSelectedDate: Dispatch<SetStateAction<string | null>>;
  onSelectMonthAndDay: (monthAndDay: string) => void;
  setSelectedMonthAndDayUtc: Dispatch<SetStateAction<string | null>>;
}) {
  const { handleButtonClick, isToggleOpen, isMenuOpen, toggleMenu } =
    useToggleByIndex(0);

  const handleDateSelect = (index: number) => {
    handleButtonClick(index);
    setSelectedDate(dates?.[index]?.formatted ?? null);
    setSelectedMonthAndDayUtc(dates?.[index]?.date ?? null);
    onSelectMonthAndDay(dates?.[index]?.formatted ?? "");
    toggleMenu();
  };

  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={toggleMenu}>
      <DropdownMenuTrigger className="outline-none w-full flex flex-col gap-4">
        <div className="border border-Seashell-900 bg-Seashell-100 rounded flex justify-between gap-2 items-center p-3 w-full mx-auto max-h-[50px]">
          <span className="text-cold-gray-900 font-poppins text-sm pp:text-base p:text-lg font-medium overflow-hidden whitespace-nowrap pp:whitespace-nowrap medium:whitespace-normal text-ellipsis max-w-[170px] pp:max-w-[200px] p:max-w-[300px] medium:max-w-full">
            {selectedMonthAndDay && selectedMonthAndDay}
          </span>
          <ArrowDownIcon fill="#3D3D3D" width={16} height={11} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="DropdownMenuContent max-h-[150px]"
      >
        <ul className="flex flex-col pt-2 font-poppins text-black max-h-[300px]">
          {dates?.map((date, index) => {
            return (
              <SelecionarDataButtonItem
                key={index}
                isActive={isToggleOpen === index}
                onClick={() => handleDateSelect(index)}
              >
                {date.formatted}
              </SelecionarDataButtonItem>
            );
          })}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

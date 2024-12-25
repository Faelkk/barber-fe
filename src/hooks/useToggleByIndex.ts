"use client";

import { useState } from "react";
import { useModal } from "./useModal";

export default function useToggleByIndex(initialIndex: number | null = null) {
  const { isMenuOpen, toggleMenu } = useModal();

  const [isToggleOpen, setIsToggleOpen] = useState<number | null>(initialIndex);

  const handleButtonClick = (index: number) => {
    setIsToggleOpen(index);
  };

  return { isToggleOpen, isMenuOpen, handleButtonClick, toggleMenu };
}

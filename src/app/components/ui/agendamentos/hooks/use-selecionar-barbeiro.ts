"use client";
import { Auth } from "@/actions/units/get-unit-by-id";
import { useState } from "react";

interface UseSelecionarBarbeiroProps {
  initialIsEditing?: boolean;
  initialSelectedBarber?: Auth | null;
}

export function useSelecionarBarbeiro({
  initialIsEditing = false,
  initialSelectedBarber = null,
}: UseSelecionarBarbeiroProps) {
  const [isEditing, setIsEditing] = useState<true | false>(initialIsEditing);
  const [selectedBarber, setSelectedBarber] = useState<Auth | null>(
    initialSelectedBarber
  );

  const handleSelectBarber = (barber: Auth) => {
    setSelectedBarber(barber);
    setIsEditing(true);
  };

  const handleEditBarber = () => {
    setIsEditing(false);
  };

  return { isEditing, selectedBarber, handleEditBarber, handleSelectBarber };
}

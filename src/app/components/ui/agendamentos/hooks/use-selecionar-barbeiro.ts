"use client";
import { Barber } from "@/actions/appointments/get-appointment-by-id";
import { useState } from "react";

interface UseSelecionarBarbeiroProps {
  initialIsEditing?: boolean;
  initialSelectedBarber?: Barber | null;
}

export function useSelecionarBarbeiro({
  initialIsEditing = false,
  initialSelectedBarber = null,
}: UseSelecionarBarbeiroProps) {
  const [isEditing, setIsEditing] = useState<boolean>(initialIsEditing);
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(
    initialSelectedBarber
  );

  const handleSelectBarber = (barber: Barber) => {
    setSelectedBarber(barber);
    setIsEditing(true);
  };

  const handleEditBarber = () => {
    setIsEditing(false);
    setSelectedBarber(null);
  };

  return { isEditing, selectedBarber, handleEditBarber, handleSelectBarber };
}

import { Unit } from "@/actions/appointments/get-appointments";
import { useState } from "react";

interface UseSelecionarUnidadeProps {
  initialIsEditing?: boolean;
  initialSelectedUnit?: Unit | null;
}

export function useSelecionarUnidade({
  initialIsEditing = false,
  initialSelectedUnit = null,
}: UseSelecionarUnidadeProps) {
  const [isEditing, setIsEditing] = useState<true | false>(initialIsEditing);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(
    initialSelectedUnit
  );

  const handleSelectUnit = (unit: Unit) => {
    setSelectedUnit(unit);
    setIsEditing(true);
  };

  const handleEditUnit = () => {
    setIsEditing(false);
    setSelectedUnit(null);
  };

  return { isEditing, selectedUnit, handleSelectUnit, handleEditUnit };
}

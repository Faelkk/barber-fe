"use client";

import { useSelecionarUnidade } from "@/app/components/ui/agendamentos/hooks/use-selecionar-unidade";
import SelecionarUnidadeComponent from "../../../../ui/agendamentos/agendar/selecionar-unidade/Selecionar-unidade";
import EditSelecionarUnidadeComponent from "../../../../ui/agendamentos/edit/selecionar-unidade/Selecionar-unidade";
import { AgendarHorarioState } from "../../agendar-horario-contaiener/use-agendar-horario-container";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import getUnits, { Unit } from "@/actions/units/get-units";
import Loading from "@/app/loading";

interface SelecionarUnidadeProps {
  onSelect: (value: AgendarHorarioState["unit"]) => void;
  setSelectedUnit: Dispatch<SetStateAction<Unit | null>>;
}

export default function SelecionarUnidade({
  onSelect,
  setSelectedUnit,
}: SelecionarUnidadeProps) {
  const [units, setUnits] = useState<Unit[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(false);

  const { isEditing, selectedUnit, handleEditUnit, handleSelectUnit } =
    useSelecionarUnidade({
      initialIsEditing: false,
      initialSelectedUnit: null,
    });

  const handleSelect = (unit: Unit) => {
    handleSelectUnit(unit);
    onSelect(unit._id);
    setSelectedUnit(unit);
  };

  const handleEdit = () => {
    onSelect(null);
    handleEditUnit();
  };

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        setIsLoading(true);
        const { data, error, ok } = await getUnits();

        if (data && ok && !error) {
          setUnits(data);
          setIsLoading(false);
        } else {
          throw new Error("erro ao pegar unidade");
        }
      } catch {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchUnits();
  }, []);

  if (isLoading) return <Loading />;

  if (units && !error)
    return (
      <>
        {isEditing && selectedUnit ? (
          <EditSelecionarUnidadeComponent
            onEdit={handleEdit}
            selectedUnit={selectedUnit}
          />
        ) : (
          <SelecionarUnidadeComponent onSelect={handleSelect} units={units} />
        )}
      </>
    );
}

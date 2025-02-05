"use client";

import Button from "@/app/components/ui/button/Button";
import UnidadesHeader from "../components/unidades-header/Unidades-header";
import UnidadesList from "../components/unidades-list/Unidades-list";
import { useUnidadesSection } from "./use-unidades-section";
import { Unit } from "@/actions/units/get-units";

export default function UnidadesSection({ units }: { units: Unit[] | null }) {
  const { handleSearchChange, searchQuery } = useUnidadesSection();

  return (
    <main className="flex flex-col justify-center items-center mt-[120px]">
      <UnidadesHeader
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
      />
      <UnidadesList searchQuery={searchQuery} units={units} />
      <button
        onClick={() => {
          throw new Error("Simulação de erro Landing");
        }}
      >
        Teste erro
      </button>

      <Button
        href="/agendar-horario"
        borderColor="border-cold-gray-900"
        textColor="text-cold-gray-900"
        className="mt-16 flex justify-center"
        ariaLabel="Agende seu horario para atendimento"
      >
        Agendar horario
      </Button>
    </main>
  );
}

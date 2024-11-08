import Button from "@/app/components/ui/button/Button";
import UnidadesHeader from "../unidades-header/Unidades-header";
import UnidadesList from "../unidades-list/Unidades-list";

export default function UnidadesSection() {
  return (
    <main className="flex flex-col justify-center items-center mt-[120px]">
      <UnidadesHeader />
      <UnidadesList />
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

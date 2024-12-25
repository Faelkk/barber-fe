import Button from "@/app/components/ui/button/Button";

export default function MeusHorarioEmpty() {
  return (
    <div className="flex flex-col">
      <p className="font-poppins text-cold-gray-900 md:text-2xl mt-4">
        Nenhum horario agendado no momento, que tal agendar um agora mesmo ?
      </p>
      <Button
        href="/agendar-horario"
        borderColor="border-cold-gray-900"
        textColor="text-cold-gray-900"
        ariaLabel="Agendar horario de atendimento"
        className="mt-10 md:max-w-[250px]"
      >
        Agendar horario
      </Button>
    </div>
  );
}

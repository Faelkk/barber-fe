import Container from "@/app/components/ui/container/Container";
import ServicosContainer from "../servicos-container/Servicos-container";
import Button from "@/app/components/ui/button/Button";

export default function ServicosSection() {
  return (
    <Container>
      <main className="flex flex-col items-center justify-center mt-[120px]">
        <h1 className="font-merriweather text-4xl text-black font-bold">
          Nossos serviços
        </h1>
        <ServicosContainer />
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
    </Container>
  );
}

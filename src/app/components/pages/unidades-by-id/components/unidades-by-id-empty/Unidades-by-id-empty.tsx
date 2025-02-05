import Button from "@/app/components/ui/button/Button";
import Container from "@/app/components/ui/container/Container";

export default function UnidadesByIdEmpty() {
  return (
    <main className="flex flex-col justify-center items-center mt-[120px]">
      <Container>
        <header className="flex items-center pp:gap-3 flex-row w-[90%] justify-between">
          <h1 className="font-merriweather font-bold text-lg mini:text-2xl pp:text-3xl md:text-4xl text-black pp:relative before:content-[''] before:bg-black pp:ml-[30px] before:w-4 before:h-4 before:absolute before:left-[-30px] before:top-1/2 before:-translate-y-1/2">
            Unidade não foi encontrada.
          </h1>
        </header>
      </Container>

      <Container>
        <div className="flex  items-center pp:gap-3 flex-row w-[90%] justify-between">
          <span className="font-poppins text-xl mt-2">
            Não conseguimos acessar as informações para o id dessa idade,
            nenhuma unidade foi encontrada no momento.
          </span>
        </div>
      </Container>
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

import Container from "@/app/components/ui/container/Container";

export default function AgendarHorariocontainer() {
  return (
    <Container>
      <main className="flex flex-col items-center justify-center mt-[120px]">
        <header>
          <h1 className="font-merriweather font-bold text-lg mini:text-2xl pp:text-3xl md:text-4xl text-black pp:relative before:content-[''] before:bg-cold-gray-900 pp:ml-[30px] before:w-4 before:h-4 before:absolute before:left-[-30px] before:top-1/2 before:-translate-y-1/2">
            Agendar horario
          </h1>
        </header>
        <section className="flex flex-col"></section>
      </main>
    </Container>
  );
}

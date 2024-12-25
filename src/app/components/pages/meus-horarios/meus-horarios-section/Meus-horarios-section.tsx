import Container from "../../../ui/container/Container";
import MeusHorariosList from "../components/meus-horarios-list/Meus-horarios-list";

export default function MeusHorariosSection() {
  return (
    <Container className="mt-[120px] px-4 ">
      <div className="flex flex-col justify-center">
        <h1 className="font-merriweather font-bold text-lg mini:text-2xl pp:text-3xl md:text-4xl text-black pp:relative before:content-[''] before:bg-black pp:ml-[30px] before:w-4 before:h-4 before:absolute before:left-[-30px] before:top-1/2 before:-translate-y-1/2 capitalize">
          Meus horarios
        </h1>
        <MeusHorariosList />
      </div>
    </Container>
  );
}

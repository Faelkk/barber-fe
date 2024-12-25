import MeusHorariosList from "../meus-horarios-list/Meus-horarios-list";

export default function MeusHorariosContainer() {
  return (
    <section className="  justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 ">
      <MeusHorariosList />
    </section>
  );
}

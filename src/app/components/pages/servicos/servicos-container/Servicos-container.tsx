import ServicosCard from "../servicos-card/Servicos-card";

export default function ServicosContainer() {
  return (
    <section className="grid justify-between  gap-5 md:gap-20 w-ful max-w-[90%] grid-cols-1 medium:grid-cols-2 lg:grid-cols-3 mt-10">
      <ServicosCard />
      <ServicosCard />
      <ServicosCard />
      <ServicosCard />
      <ServicosCard />
      <ServicosCard />
    </section>
  );
}

import ServicosList from "../servicos-list/Servicos-list";

export default function ServicosContainer() {
  return (
    <section className="grid justify-between  gap-5 md:gap-20 w-ful max-w-[90%] grid-cols-1 md:grid-cols-2 default:grid-cols-3 mt-10">
      <ServicosList />
    </section>
  );
}

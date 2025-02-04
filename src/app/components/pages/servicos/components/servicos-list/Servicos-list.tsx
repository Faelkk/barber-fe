import getServices from "@/actions/services/get-global-services";
import ServicosCard from "../servicos-card/Servicos-card";
import ServicosEmpty from "../servicos-empty/Servicos-empty";

export default async function ServicosList() {
  const { data: services, error, ok } = await getServices();

  if (error) return <ServicosEmpty />;

  if (services && ok)
    return (
      <section className="grid justify-between  gap-5 md:gap-20 w-ful max-w-[90%] grid-cols-1 md:grid-cols-2 default:grid-cols-3 mt-10">
        {services?.map((service) => (
          <ServicosCard
            key={service._id}
            titulo={service.name}
            imagem={service.thumbnail}
            descricao={service.description}
          />
        ))}
      </section>
    );
}

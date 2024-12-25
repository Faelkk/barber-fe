import getServices from "@/actions/services/get-global-services";
import ServicosCard from "../servicos-card/Servicos-card";

export default async function ServicosList() {
  const { data: services, error, ok } = await getServices();

  if (error) return <h2>Um erro ocorreu.</h2>;

  // const servicos = [
  //   {
  //     id: 1,
  //     titulo: "Corte Masculino",
  //     descricao: "Um corte moderno e alinhado com as últimas tendências.",
  //     imagem: "/images/barber-cut.jpg",
  //   },
  //   {
  //     id: 2,
  //     titulo: "Barba Completa",
  //     descricao: "Design e cuidado para uma barba impecável.",
  //     imagem: "/images/beard-trim.jpg",
  //   },
  //   {
  //     id: 3,
  //     titulo: "Corte Infantil",
  //     descricao: "Cortes estilosos e confortáveis para os pequenos.",
  //     imagem: "/images/kids-haircut.jpg",
  //   },
  //   {
  //     id: 4,
  //     titulo: "Hidratação Capilar",
  //     descricao: "Tratamento profundo para cabelos mais saudáveis.",
  //     imagem: "/images/hair-treatment.jpg",
  //   },
  //   {
  //     id: 5,
  //     titulo: "Coloração",
  //     descricao: "Renove o visual com cores vibrantes ou tons naturais.",
  //     imagem: "/images/hair-color.jpg",
  //   },
  //   {
  //     id: 6,
  //     titulo: "Sobrancelha",
  //     descricao: "Design que valoriza a expressão do seu olhar.",
  //     imagem: "/images/eyebrow-design.jpg",
  //   },
  // ];

  if (services && ok)
    return (
      <>
        {services?.map((service) => (
          <ServicosCard
            key={service._id}
            titulo={service.name}
            imagem={service.thumbnail}
            descricao={service.description}
          />
        ))}
      </>
    );
}

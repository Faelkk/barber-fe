import { GlobalService } from "@/actions/services/get-global-services";
import ServicesCard from "./Services-card";
import { cn } from "@/functions/cn";

export default async function ServicesList({
  services,
}: {
  services: GlobalService[];
}) {
  // const servicesMock = [
  //   {
  //     id: 1,
  //     name: "Corte Masculino",
  //     price: 90,
  //     description:
  //       "Feito com base na estética e harmonia adequadas para o formato do seu rosto.",
  //   },
  //   {
  //     id: 2,
  //     name: "Barba Completa",
  //     price: 50,
  //     description:
  //       "Design e cuidado especial para uma barba impecável e bem definida.",
  //   },
  //   {
  //     id: 3,
  //     name: "Corte Infantil",
  //     price: 70,
  //     description: "Corte pensado no conforto e estilo para os pequenos.",
  //   },
  //   {
  //     id: 4,
  //     name: "Hidratação Capilar",
  //     price: 120,
  //     description: "Tratamento profundo para revitalizar e nutrir os cabelos.",
  //   },
  //   {
  //     id: 5,
  //     name: "Coloração",
  //     price: 200,
  //     description:
  //       "Mudança de visual com coloração profissional e personalizada.",
  //   },
  //   {
  //     id: 6,
  //     name: "Sobrancelha",
  //     price: 40,
  //     description: "Design preciso que realça a expressão natural do rosto.",
  //   },
  // ];

  if (services) {
    return (
      <div
        className={cn(
          "flex justify-center gap-5 max-w-[1200px] flex-wrap mt-10 px-2"
        )}
      >
        {services?.map((service) => (
          <ServicesCard
            key={service._id}
            titulo={service.name}
            preco={service.price}
            descricao={service.description}
          />
        ))}
      </div>
    );
  }
}

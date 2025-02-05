import { GlobalService } from "@/actions/services/get-global-services";
import ServicesCard from "./Services-card";
import { cn } from "@/functions/cn";
import ServicesEmpty from "./Services-empty";

export default async function ServicesList({
  services,
}: {
  services: GlobalService[];
}) {
  return services.length > 0 ? (
    <div
      className={cn(
        "flex justify-center gap-5 max-w-[1200px] flex-wrap mt-10 px-2"
      )}
    >
      {services.map((service) => (
        <ServicesCard
          key={service._id}
          titulo={service.name}
          preco={service.price}
          descricao={service.description}
        />
      ))}
    </div>
  ) : (
    <ServicesEmpty />
  );
}

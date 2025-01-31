import { GlobalService } from "@/actions/services/get-global-services";
import UnidadesByIdServiceCard from "../unidades-by-id-service-card/Unidades-by-id-service-card";

export default function UnidadesByIdServiceContainer({
  servicos,
  globalServices,
}: {
  servicos: GlobalService[];
  globalServices: GlobalService[];
}) {
  const combinedServices = [...servicos, ...globalServices].filter(
    (service, index, self) =>
      index === self.findIndex((s) => s._id === service._id)
  );

  return (
    <div className="grid items-center justify-center grid-cols-1 medium:grid-cols-2 default:grid-cols-3 gap-4 lg:gap-10 max-w-[1400px] mt-10 w-full">
      {combinedServices.map((servico) => (
        <UnidadesByIdServiceCard servico={servico} key={servico._id} />
      ))}
    </div>
  );
}

import { GlobalService } from "@/actions/services/get-global-services";
import UnidadesByIdServiceCard from "../unidades-by-id-service-card/Unidades-by-id-service-card";

export default function UnidadesByIdServiceContainer({
  servicos,
}: {
  servicos: GlobalService[];
}) {
  return (
    <div className="grid items-center justify-center grid-cols-1 medium:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 max-w-[1400px] mt-10 w-full">
      {servicos.map((servico) => {
        return <UnidadesByIdServiceCard servico={servico} key={servico._id} />;
      })}
    </div>
  );
}

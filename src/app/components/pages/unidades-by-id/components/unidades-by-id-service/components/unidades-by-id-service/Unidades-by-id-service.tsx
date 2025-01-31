import Button from "@/app/components/ui/button/Button";
import UnidadesByIdServiceContainer from "../unidades-by-id-service-container/Unidades-by-id-service-container";
import { GlobalService } from "@/actions/services/get-global-services";

export default function UnidadesByIdService({
  globalServices,
  servicos,
}: {
  servicos: GlobalService[];
  globalServices: GlobalService[];
}) {
  return (
    <div className="flex flex-col items-center max-w-full mt-20 px-4">
      <h2
        id="unidades-heading"
        className="font-merriweather text-center text-2xl  md:text-4xl font-bold text-cold-gray-900"
      >
        Confira nossos serviços disponiveis
      </h2>
      <p className="font-poppins text-cold-gray-900 max-w-[750px] mt-5 md:text-lg text-center">
        Todos os nossos serviços são especializados e cuidadosamente preparados
        para oferecer a cada cliente o atendimento de qualidade que você merece
      </p>

      <div className="flex flex-col items-center w-full">
        <UnidadesByIdServiceContainer
          servicos={servicos}
          globalServices={globalServices}
        />

        <Button
          href="/servicos"
          borderColor="border-cold-gray-900"
          textColor="text-cold-gray-900"
          className="mt-5 lg:mt-10 flex justify-center md:max-w-[300px] w-full"
          ariaLabel="Ver unidades disponíveis"
        >
          Ver todos os serviços
        </Button>
      </div>
    </div>
  );
}

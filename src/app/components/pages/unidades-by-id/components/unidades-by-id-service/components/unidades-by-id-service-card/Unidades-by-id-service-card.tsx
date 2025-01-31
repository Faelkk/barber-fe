import { GlobalService } from "@/actions/services/get-global-services";
import { formatPrice } from "@/functions/formatPrice";

export default function UnidadesByIdServiceCard({
  servico,
}: {
  servico: GlobalService;
}) {
  return (
    <div className=" flex flex-col justify-between w-full   md:min-w-[300px] md:w-a md:max-h-[250px] min-h-[160px] default:w-[400px] medium:h-auto  flex-shrink-0 rounded border-2 border-Copper-800 px-3 py-5 bg-Copper-50/80 drop-shadow-md">
      <header className="flex flex-col pp:flex-row pp:items-center pp:justify-between gap-2 pp:gap-10">
        <h1 className="font-merriweather text-2xl  font-bold text-cold-gray-800 capitalize">
          {servico.name}
        </h1>
        <span className="capitalize relative font-poppins text-sm md:text-lg text-cold-gray-800 pp:before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:h-[16px] before:w-[4px] before:bg-Copper-400">
          {formatPrice(servico.price)}
        </span>
      </header>
      <p className="font-poppins font-light text-sm md:text-base text-black mt-2 pp:mt-5">
        {servico.description}
      </p>
    </div>
  );
}

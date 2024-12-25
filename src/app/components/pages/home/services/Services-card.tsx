import { formatPrice } from "@/functions/formatPrice";

export default function ServicesCard({
  titulo,
  preco,
  descricao,
}: {
  titulo: string;
  preco: number;
  descricao: string;
}) {
  return (
    <div
      className="flex flex-col justify-between pp:max-w-[350px] w-full  rounded border-2 border-Copper-100 drop-shadow-sm px-3 py-5 bg-gray-100"
      style={{ boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)" }}
    >
      <header className="flex flex-col pp:flex-row pp:items-center justify-between">
        <h1 className="font-merriweather text-2xl font-bold text-black capitalize">
          {titulo}
        </h1>

        <span className="ml-3 relative font-poppins text-sm text-cold-gray-800 before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:h-[10px] before:w-[4px] before:bg-Copper-400">
          {formatPrice(preco)}
        </span>
      </header>
      <p className="font-poppins font-light text-sm text-black mt-5">
        {descricao}
      </p>
    </div>
  );
}

export default function ServicesCard() {
  return (
    <div
      className=" max-w-[300px] w-full h-[150px] rounded border-2 border-Copper-100 drop-shadow-sm p-3"
      style={{ boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)" }}
    >
      <header className="flex items-center  justify-between">
        <h1 className="font-merriweather text-2xl font-bold text-black">
          Corte
        </h1>

        <span className="relative font-poppins text-sm text-cold-gray-800 before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:h-[10px] before:w-[4px] before:bg-Copper-400">
          $90,00
        </span>
      </header>
      <p className="font-poppins font-light text-sm text-black mt-5">
        Feito com base na estética e harmonia adequadas para o formato do seu
        rosto.
      </p>
    </div>
  );
}

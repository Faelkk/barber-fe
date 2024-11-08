import Image from "next/image";

export default function ServicosCard() {
  return (
    <div className="flex flex-col items-center bg-Seashell-50 pb-5 px-2 rounded-md drop-shadow-md">
      <div className="border-4 border-Copper-300 rounded relative flex-grow mini:min-w-[200px] ">
        <figure className="w-full h-full">
          <Image
            src="/defaults/barber-unity.jpg"
            width={3000}
            height={300}
            alt="Foto ilustrativa do ambiente da barbearia com cadeiras e espelhos"
            className="w-full h-full md:max-h-[350px]"
            priority
          />
        </figure>
      </div>
      <h1 className="font-merriweather text-black text-4xl mt-5">Corte</h1>
      <p className="font-poppins max-w-[480px] text-center mt-4 text-cold-gray-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vitae
        iusto, nesciunt molestias cum laudantium similique quod iste, facere
        dignissimos officia saepe aut ipsa maxime, quia quae numquam dicta
        porro?
      </p>
    </div>
  );
}

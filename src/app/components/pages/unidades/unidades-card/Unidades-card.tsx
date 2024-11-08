import Image from "next/image";

export default function UnidadesCard() {
  return (
    <div className="border-4 border-Copper-300 rounded relative flex-grow mini:min-w-[200px] ">
      <figure className="w-full h-full">
        <Image
          src="/defaults/barber-unity.jpg"
          width={3000}
          height={300}
          alt="Foto ilustrativa do ambiente da barbearia com cadeiras e espelhos"
          className="w-full h-full md:max-h-[400px]"
          priority
        />
      </figure>
      <span className="font-merriweather text-white absolute top-4 left-5 bg-Copper-300 py-1 px-5 rounded">
        São Paulo
      </span>
    </div>
  );
}

import Image from "next/image";

interface ServicoCardProps {
  titulo: string;
  descricao: string;
  imagem?: string;
}

export default function ServicosCard({
  titulo,
  descricao,
  imagem,
}: ServicoCardProps) {
  return (
    <div className="flex flex-col items-center bg-Seashell-50 pt-2 pb-5 px-2 rounded-md drop-shadow-md md:max-w-[365px]  md:min-w-[365px] ">
      <div className=" relative flex-grow w-full max-h-[300px]  min-h-[300px] h-[300px]">
        <figure className="w-full h-full max-h-[300px] min-h-[300px]">
          <Image
            src={imagem ? imagem : "/defaults/barber-unity.jpg"}
            width={1050}
            quality={100}
            height={900}
            alt="Foto ilustrativa do ambiente da barbearia com cadeiras e espelhos"
            className="w-full h-full md:max-w-full  object-cover border-4 border-Copper-300 rounded object-center"
            priority
          />
        </figure>
      </div>
      <h1 className="font-merriweather text-black text-xl mt-4">{titulo}</h1>
      <p className="font-poppins max-w-[480px] text-center mt-3 text-cold-gray-900">
        {descricao}
      </p>
    </div>
  );
}

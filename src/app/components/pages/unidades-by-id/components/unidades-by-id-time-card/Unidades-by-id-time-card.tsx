import { Auth } from "@/actions/units/get-unit-by-id";
import Button from "@/app/components/ui/button/Button";
import Image from "next/image";

export default function UnidadesByIdTimeCard({ barbeiro }: { barbeiro: Auth }) {
  return (
    <div className="flex flex-col md:flex-row bg-Seashell-50 p-4 rounded-md drop-shadow-md gap-4">
      <div className="border-4 border-Copper-300 rounded relative  ">
        <figure className="w-full h-[146px] pp:h-[205px] max-w-full  md:h-[300px] relative">
          <Image
            src="/defaults/barber-unity.jpg"
            width={3000}
            height={300}
            alt="Foto ilustrativa do ambiente da barbearia com cadeiras e espelhos"
            className="w-full h-full object-cover"
            priority
          />
        </figure>
      </div>
      <div className="flex flex-col px-2">
        <h1 className="font-merriweather relative text-black text-xl  pp:text-3xl  mt-2 pp:before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:h-[30px] before:w-[6px] before:bg-Copper-800 pp:ml-[16px]">
          {barbeiro.name}
        </h1>

        <span className="font-poppins text-Seashell-950 uppercase text-sm md:text-base mt-3">
          {barbeiro.role}
        </span>
        <p className="font-poppins max-w-[480px] text-sm md:text-lg mt-4 text-cold-gray-900 flex-1">
          {barbeiro.description}
        </p>

        <Button
          href="/agendar-horario"
          borderColor="border-cold-gray-900"
          textColor="text-cold-gray-900"
          ariaLabel="Agendar horario de atendimento"
          className="mt-10 md:max-w-[250px]"
        >
          Agendar horario
        </Button>
      </div>
    </div>
  );
}

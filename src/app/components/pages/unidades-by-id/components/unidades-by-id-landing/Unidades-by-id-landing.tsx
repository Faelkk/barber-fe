import { UnitByIdProps } from "@/actions/units/get-unit-by-id";
import Container from "@/app/components/ui/container/Container";
import Image from "next/image";
import Link from "next/link";

export default function UnidadesByIdLanding({
  unidade,
}: {
  unidade: UnitByIdProps;
}) {
  return (
    <section
      aria-labelledby="landing-heading"
      className="border-b-4 border-Copper-300 relative md:h-[400px]"
    >
      <figure className="absolute w-full -z-10 h-full overflow-hidden">
        <Image
          src="/defaults/barber.jpg"
          width={3000}
          height={300}
          alt="Foto ilustrativa do ambiente da barbearia com cadeiras e espelhos"
          className="w-full h-full md:max-h-[400px] object-cover bg-cover bg-center bg-no-repeat"
          priority
        />
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </figure>
      <Container className="py-10 flex justify-center items-center">
        <div className="">
          <header className="flex flex-col">
            <h1
              id="landing-heading"
              className="relative font-merriweather text-4xl text-Copper-50 font-bold  text-center "
            >
              Conheça nossa unidade
            </h1>
            <p
              className="font-poppins font-light text-cold-gray-50 text-lg max-w-[800px] mt-10 text-center"
              aria-describedby="landing-heading"
            >
              {unidade.description}
            </p>
            <div className="w-full flex justify-center">
              <Link href="/agendar-horario">
                <button
                  type="button"
                  className="font-poppins text-Copper-200 px-3 py-1 rounded border-2 border-Copper-200 max-w-[200px] font-medium text-lg mt-10"
                  aria-label="Agendar horário na barbearia"
                >
                  Agendar Horário
                </button>
              </Link>
            </div>
          </header>
        </div>
      </Container>
    </section>
  );
}

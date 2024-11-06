import Container from "@/app/components/ui/container/Container";
import Image from "next/image";

export default function Landing() {
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
      <Container className="py-10">
        <div className="w-[95%]">
          <header className="flex flex-col">
            <h1
              id="landing-heading"
              className="relative font-merriweather text-4xl text-Copper-50 font-bold before:absolute before:-left-8 before:top-1/2 before:-translate-y-1/2 before:h-[30px] before:w-[4px] before:bg-Copper-200 ml-[30px]"
            >
              A melhor barbearia da cidade
            </h1>
            <p
              className="font-poppins font-light text-cold-gray-50 text-lg max-w-[600px] mt-10"
              aria-describedby="landing-heading"
            >
              Não somos apenas uma barbearia, mas trabalhamos para melhorar a
              imagem, a postura e a confiança dos nossos clientes. Aqui, você
              encontrará os melhores profissionais com o nosso atendimento de
              maior qualidade.
            </p>
            <button
              type="button"
              className="font-poppins text-Copper-200 px-3 py-1 rounded border-2 border-Copper-200 max-w-[200px] font-medium text-lg mt-10"
              aria-label="Agendar horário na barbearia"
            >
              Agendar Horário
            </button>
          </header>
        </div>
      </Container>
    </section>
  );
}

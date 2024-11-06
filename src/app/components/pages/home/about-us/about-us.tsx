import Container from "@/app/components/ui/container/Container";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="bg-Copper-100  md-l:max-h-[500px] lg:max-h-[450px] w-full">
      <Container className="py-10  flex w-full justify-center items-center">
        <div className="flex flex-col md-l:flex-row w-[90%] justify-between gap-5">
          <div className="flex flex-col">
            <h2 className="font-poppins font-semibold text-cold-gray-900 text-lg uppercase relative before:content-[''] before:bg-cold-gray-900 ml-[30px] before:w-4 before:h-4 before:absolute before:left-[-30px] before:top-1/2 before:-translate-y-1/2">
              Sobre nós
            </h2>
            <h1 className="font-merriweather text-2xl text-Copper-800 font-bold mt-5 max-w-[480px]">
              Mais do que um corte, oferecemos uma experiência que transforma
              <span className="text-Copper-500">.</span>
            </h1>
            <p className="font-poppins text-lg text-cold-gray-900 max-w-[700px] mt-[60px] relative before:bg-cold-gray-400 ml-10 before:w-5 before:h-[5px] before:absolute before:left-[-40px] before:top-1/2 before:-translate-y-1/2">
              Mais do que uma barbearia, somos um espaço dedicado a realçar a
              confiança e o estilo de cada cliente. Nossa equipe se compromete
              em proporcionar uma experiência única, onde cada detalhe é pensado
              para que você se sinta renovado e valorizado. Acreditamos que um
              bom atendimento vai além de um corte de cabelo – queremos que cada
              cliente saia daqui com uma nova versão de si mesmo. Esse é o nosso
              compromisso com você.
            </p>
          </div>
          <figure className="md-l:-mt-20 -mb-36 md-l:-mb-0">
            <Image
              src="/defaults/about-us.jpg"
              width={3000}
              height={3000}
              alt="Foto ilustrativa do ambiente da barbearia com cadeiras e espelhos"
              className="w-full h-[200px] object-cover md-l:w-[400px] md-l:h-[570px] rounded"
              priority
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}

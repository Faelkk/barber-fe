"use client";

import Container from "@/app/components/ui/container/Container";
import { useRouter } from "next/navigation";

export default function LandingEmpty() {
  const router = useRouter();
  return (
    <main className="flex flex-col justify-center items-center mt-[120px]">
      <Container>
        <header className="flex items-center pp:gap-3 flex-row w-[90%] justify-between">
          <h1 className="font-merriweather font-bold text-lg mini:text-2xl pp:text-3xl md:text-4xl text-black pp:relative before:content-[''] before:bg-black pp:ml-[30px] before:w-4 before:h-4 before:absolute before:left-[-30px] before:top-1/2 before:-translate-y-1/2">
            Erro ao carregar informações.
          </h1>
        </header>
      </Container>

      <Container>
        <div className="flex  items-center pp:gap-3 flex-row w-[90%] justify-between">
          <span className="font-poppins text-xl mt-2">
            Não conseguimos puxar as informações desta seção sobre a barbearia.
          </span>
        </div>
      </Container>
      <button
        onClick={() => router.refresh()}
        className=" mt-16 flex justify-center uppercase font-poppins font-medium text-lg border-2 rounded px-3 py-1 w-full  max-w-[200px]
 md:hover:scale-105 md:transition-transform border-cold-gray-900 text-cold-gray-90"
      >
        Recarregar
      </button>
    </main>
  );
}

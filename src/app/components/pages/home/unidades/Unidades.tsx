import Button from "@/app/components/ui/button/Button";

export default function Unidades() {
  return (
    <section
      aria-labelledby="unidades-heading"
      className="bg-Copper-50 mt-20 flex justify-center md:max-h-[330px] md:h-[330px]"
    >
      <div className="flex flex-col py-10">
        <h2
          id="unidades-heading"
          className="font-merriweather text-center md:text-start text-4xl font-bold text-cold-gray-900"
        >
          Encontre a unidade mais próxima de você
        </h2>
        <p className="font-poppins text-cold-gray-900 text-center max-w-[750px] mt-5">
          Atualmente, possuímos mais de 500 unidades espalhadas pelo Brasil em 8
          estados brasileiros: SP, RJ, SC, PR, RS, MG, MS, BA.
        </p>

        <Button
          href="/unidades"
          borderColor="border-cold-gray-900"
          textColor="text-cold-gray-900"
          className="mt-16 flex justify-center"
          ariaLabel="Ver unidades disponíveis"
        >
          Ver unidades
        </Button>
      </div>
    </section>
  );
}

import ServicesCardContainer from "./ServicesCardContainer";
import Button from "@/app/components/ui/button/Button";

export default function Services() {
  return (
    <section
      aria-labelledby="services-heading"
      className="mt-10 flex justify-center"
    >
      <div className="flex flex-col items-center">
        <h2
          id="services-heading"
          className="font-merriweather text-4xl font-bold text-cold-gray-950"
        >
          Nossos serviços
        </h2>
        <ServicesCardContainer />

        <div className="flex w-full justify-center  lg:justify-end mt-10">
          <Button
            href="/servicos"
            borderColor="border-cold-gray-900"
            textColor="text-cold-gray-900"
            ariaLabel="Ver serviços disponíveis"
          >
            Ver serviços
          </Button>
        </div>
      </div>
    </section>
  );
}

import Button from "@/app/components/ui/button/Button";
import ServicesList from "./Services-list";
import getServices from "@/actions/services/get-global-services";
import { cn } from "@/functions/cn";

export default async function Services() {
  const { data: services, error, ok } = await getServices();

  if (error) return <h2>Um erro ocorreu.</h2>;

  if (services && ok)
    return (
      <section
        aria-labelledby="services-heading"
        className="mt-10 flex justify-center"
      >
        <div className="flex flex-col justify-center items-center">
          <h2
            id="services-heading"
            className="font-merriweather text-4xl font-bold text-cold-gray-950"
          >
            Nossos serviços
          </h2>
          <ServicesList services={services} />

          <div
            className={cn(
              "flex w-full justify-center  mt-10",
              services?.length > 2 ? " lg:justify-end" : "lg:justify-center"
            )}
          >
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

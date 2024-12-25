import ScheduleIcon from "@/app/components/ui/icons/Schedule";
import ServiceCard from "./Service-card";
import AgendamentoCard from "../../Agendamento-card";
import { CombinedServicesType } from "@/app/components/pages/agendar-horario/components/selecionar-servico/Selecionar-servico";

export default function SelecionarServico({
  services,
  onSelect,
}: {
  services: CombinedServicesType[];
  onSelect: (service: CombinedServicesType) => void;
}) {
  return (
    <AgendamentoCard>
      <header className="flex items-center gap-4">
        <div className="rounded-full h-12 w-12 bg-[#D9D9D9] flex items-center justify-center">
          <ScheduleIcon fill="#000" width={20} height={20} />
        </div>
        <h1 className="font-poppins font-medium pp:text-lg medium:text-2xl text-Seashell-950">
          Selecione um serviço
        </h1>
      </header>
      <div className="w-full bg-Seashell-200 h-[2px] mt-5"></div>
      <section className="mt-4 grid grid-cols-1 pp:grid-cols-2 md:grid-cols-3 gap-5 max-w-full">
        {services.map((service) => (
          <ServiceCard
            onSelect={onSelect}
            service={service}
            key={service._id}
          />
        ))}
      </section>
    </AgendamentoCard>
  );
}

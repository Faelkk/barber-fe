import { CombinedServicesType } from "@/app/components/pages/agendar-horario/components/selecionar-servico/Selecionar-servico";
import { formatPrice } from "@/functions/formatPrice";
import Image from "next/image";

interface ServiceCardProps {
  onSelect: (service: CombinedServicesType) => void;
  service: CombinedServicesType;
}

export default function ServiceCard({ onSelect, service }: ServiceCardProps) {
  return (
    <figure
      className="w-full h-[146px] pp:h-[165px] max-w-full md:max-w-[299px] md:h-[200px] relative cursor-pointer"
      onClick={() => onSelect(service)}
    >
      <Image
        src={`${
          service.avatar ? service.avatar : "/defaults/barber-unity.jpg"
        }`}
        width={900}
        height={600}
        alt="Foto ilustrativa do ambiente da barbearia com cadeiras e espelhos"
        className="w-full h-full rounded object-cover"
        priority
      />
      <div className="absolute bottom-1 left-1 md:bottom-3 md:left-3 flex flex-col">
        <span className=" md:text-xl  text-Seashell-50 font-merriweather font-bold">
          {service.name}
        </span>
        <span className="font-poppins text-Seashell-200 text-sm">
          {formatPrice(service.price)}
        </span>
      </div>
    </figure>
  );
}

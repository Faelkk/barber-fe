import Container from "@/app/components/ui/container/Container";
import LocationIcon from "@/app/components/ui/icons/location";
import WhatsappIcon from "@/app/components/ui/icons/Whatsapp";
import ClockIcon from "@/app/components/ui/icons/Clock";
import UnidadesByIdHorarioCard from "./components/Unidades-by-id-horario-card";
import { UnitByIdProps } from "@/actions/units/get-unit-by-id";
import { formatPhoneNumber } from "@/functions/format-phone-number";

type WeekDays =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

const daysMap: Record<WeekDays, string> = {
  monday: "Segunda",
  tuesday: "Terça",
  wednesday: "Quarta",
  thursday: "Quinta",
  friday: "Sexta",
  saturday: "Sábado",
  sunday: "Domingo",
};

function formatOperatingHours(
  operatingHours: Record<WeekDays, { start: string; end: string }>
) {
  const grouped: Record<string, string[]> = {};

  Object.entries(operatingHours).forEach(([day, hours]) => {
    const time = `${hours.start} às ${hours.end}`;
    if (!grouped[time]) {
      grouped[time] = [];
    }
    grouped[time].push(daysMap[day as WeekDays]);
  });

  const formatted = Object.entries(grouped)
    .map(([time, days]) => {
      const dayRange =
        days.length > 1 ? `${days[0]} a ${days[days.length - 1]}` : days[0];
      return `${dayRange}: ${time}`;
    })
    .join("\n");

  return formatted;
}

export default function UnidadesByIdHorario({
  unidade,
}: {
  unidade: UnitByIdProps;
}) {
  const operatingHours = formatOperatingHours(unidade.operatingHours);

  return (
    <section className="bg-Copper-50 w-full flex justify-center">
      <Container className="py-10 flex flex-col lg:flex-row w-full gap-10 justify-between items-center max-w-[95%] default:max-w-[90%]">
        <div className="flex flex-col">
          <h1 className="font-merriweather text-4xl text-Copper-900 font-bold mt-5 max-w-[480px]">
            SAIBA MAIS SOBRE NÓS
          </h1>
          <p className="font-poppins text-lg text-cold-gray-900 max-w-[700px] mt-10 relative before:bg-cold-gray-400 ml-10 before:w-5 before:h-[5px] before:absolute before:left-[-40px] before:top-1/2 before:-translate-y-1/2">
            Confira nossos horários de atendimento e agende sua visita! Na
            melhor barbearia da cidade, estamos prontos para oferecer a você uma
            experiência única, com serviços de qualidade e um ambiente
            acolhedor. Venha conhecer a Barberagender e descubra o que nos torna
            a escolha favorita de tantos clientes satisfeitos!
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-col gap-4 mt-5 justify-center">
          <UnidadesByIdHorarioCard
            icon={<LocationIcon fill="#FFFF" width={20} height={20} />}
            content={unidade.address.fullAddress}
          />
          <UnidadesByIdHorarioCard
            icon={<WhatsappIcon fill="#FFFF" width={20} height={20} />}
            content={formatPhoneNumber(unidade.phoneNumber)}
          />
          <UnidadesByIdHorarioCard
            icon={<ClockIcon fill="#FFFF" width={20} height={20} />}
            content={
              <div className="flex flex-col uppercase whitespace-pre-line">
                {operatingHours}
              </div>
            }
          />
        </div>
      </Container>
    </section>
  );
}

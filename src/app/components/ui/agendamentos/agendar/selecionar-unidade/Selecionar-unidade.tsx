import LocationIcon from "../../../icons/location";
import AgendamentoCard from "../../Agendamento-card";
import UnidadeCard from "./Unidade-card";
import { useEffect, useState } from "react";
import getUnits, { Unit } from "@/actions/units/get-units";
import Loading from "@/app/loading";

export default function SelecionarUnidade({
  onSelect,
}: {
  onSelect: (unit: Unit) => void;
}) {
  const [units, setUnits] = useState<Unit[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(false);

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        setIsLoading(true);
        const { data, error, ok } = await getUnits();

        if (data && ok && !error) {
          setUnits(data);
          setIsLoading(false);
          setIsError(false);
        } else {
          throw new Error("erro ao pegar unidade");
        }
      } catch {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchUnits();
  }, []);

  if (isLoading) return <Loading />;

  if (units && !error)
    return (
      <AgendamentoCard>
        <header className="flex items-center gap-4">
          <div className="rounded-full h-12 w-12 bg-[#D9D9D9] flex items-center justify-center">
            <LocationIcon fill="#000" width={16} height={20} />
          </div>
          <h1 className="font-poppins font-medium pp:text-lg medium:text-xl text-Seashell-950">
            Selecione uma unidade
          </h1>
        </header>
        <div className="w-full bg-Seashell-200 h-[2px] mt-5"></div>
        <section className="mt-4 grid grid-cols-1 pp:grid-cols-2 md:grid-cols-3 gap-5 max-w-full">
          {units.map((unidade) => (
            <UnidadeCard onSelect={onSelect} unit={unidade} key={unidade._id} />
          ))}
        </section>
      </AgendamentoCard>
    );
}

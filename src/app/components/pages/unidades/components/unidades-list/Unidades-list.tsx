import Container from "@/app/components/ui/container/Container";
import UnidadesCard from "../unidades-card/Unidades-card";
import { Unit } from "@/actions/units/get-units";

interface UnidadesListProps {
  searchQuery: string;
  units: Unit[] | null;
}

export default function UnidadesList({
  searchQuery,
  units,
}: UnidadesListProps) {
  const filteredUnidades = units?.filter((unidade) =>
    unidade.address.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredUnidades)
    return (
      <Container>
        {filteredUnidades?.length > 0 ? (
          <section className="grid justify-between mt-10 gap-10 w-full max-w-[90%] grid-cols-1 medium:grid-cols-2 lg:grid-cols-3">
            {filteredUnidades?.map((unidade) => (
              <UnidadesCard unidade={unidade} key={unidade._id} />
            ))}
          </section>
        ) : (
          <h2 className="mt-20 font-merriweather text-lg pp:text-2xl text-center">
            Nenhuma unidade encontrada
          </h2>
        )}
      </Container>
    );
}

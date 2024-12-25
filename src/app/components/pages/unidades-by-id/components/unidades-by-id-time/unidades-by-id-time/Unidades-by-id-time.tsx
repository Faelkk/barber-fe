import Container from "@/app/components/ui/container/Container";
import UnidadesByIdContainer from "../../unidades-by-id-time-container/Unidades-by-id-container";
import { Auth } from "@/actions/units/get-unit-by-id";

export default function UnidadesByIdTime({ barbeiros }: { barbeiros: Auth[] }) {
  return (
    <Container className="mt-20 flex flex-col px-4">
      <h2 className="font-merriweather  text-2xl md:text-3xl lg:text-4xl text-Seashell-950 text-center ">
        Conheça nossos profissionais
      </h2>
      <UnidadesByIdContainer barbeiros={barbeiros} />
    </Container>
  );
}

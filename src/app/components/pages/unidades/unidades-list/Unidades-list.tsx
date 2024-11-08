import Container from "@/app/components/ui/container/Container";
import UnidadesCard from "../unidades-card/Unidades-card";

export default function UnidadesList() {
  return (
    <Container>
      <section className="grid justify-between mt-10 gap-10 w-ful max-w-[90%] grid-cols-1 medium:grid-cols-2 lg:grid-cols-3">
        <UnidadesCard />
        <UnidadesCard />
        <UnidadesCard />
        <UnidadesCard />
        <UnidadesCard />
        <UnidadesCard />
      </section>
    </Container>
  );
}

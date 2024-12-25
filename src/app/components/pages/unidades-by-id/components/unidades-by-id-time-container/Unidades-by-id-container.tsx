import { Auth } from "@/actions/units/get-unit-by-id";
import UnidadesByIdTimeCard from "../unidades-by-id-time-card/Unidades-by-id-time-card";

export default function UnidadesByIdContainer({
  barbeiros,
}: {
  barbeiros: Auth[];
}) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-10  max-w-full">
      {barbeiros.map((barbeiro) => (
        <UnidadesByIdTimeCard barbeiro={barbeiro} key={barbeiro._id} />
      ))}
    </div>
  );
}

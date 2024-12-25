import UserIcon from "@/app/components/ui/icons/User";

import BarberCard from "./Barber-card";
import { Unit } from "@/actions/units/get-units";
import { Auth } from "@/actions/units/get-unit-by-id";

export default function SelecionarBarbeiro({
  selectedUnit,
  onSelect,
}: {
  selectedUnit: Unit | null;
  onSelect: (barber: Auth) => void;
}) {
  console.log(selectedUnit, "unit");
  return (
    <section className="bg-Seashell-50 border-2 border-Copper-300 rounded py-5 px-4 md:px-8">
      <header className="flex items-center gap-4">
        <div className="rounded-full h-12 w-12 bg-[#D9D9D9] flex items-center justify-center">
          <UserIcon fill="#000" width={20} height={20} />
        </div>
        <h1 className="font-poppins font-medium pp:text-lg medium:text-2xl text-Seashell-950">
          Selecione um barbeiro
        </h1>
      </header>
      <div className="w-full bg-Seashell-200 h-[2px] mt-5"></div>
      <section className="mt-4 grid grid-cols-1 pp:grid-cols-2 md:grid-cols-3 gap-5 max-w-full">
        {selectedUnit?.auth.map((barber) => (
          <BarberCard onSelect={onSelect} barber={barber} key={barber._id} />
        ))}
      </section>
    </section>
  );
}

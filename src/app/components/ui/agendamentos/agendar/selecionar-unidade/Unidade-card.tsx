import { Unit } from "@/actions/units/get-units";
import Image from "next/image";

interface UnidadeCardProps {
  onSelect: (unit: Unit) => void;
  unit: Unit;
}

export default function UnidadeCard({ onSelect, unit }: UnidadeCardProps) {
  return (
    <figure
      className="w-full h-[146px] pp:h-[165px] max-w-full md:max-w-[299px] md:h-[200px] relative cursor-pointer"
      onClick={() => onSelect(unit)}
    >
      <Image
        src={`${unit.avatar ? unit.avatar : "/defaults/barber-unity.jpg"}`}
        width={3000}
        height={300}
        alt={`Foto ilustrativa do ambiente da barbearia em ${unit.address.fullAddress}`}
        className="w-full h-full rounded object-cover "
        priority
      />
      <span className="font-poppins md:text-xl absolute bottom-3 left-3 text-Seashell-50 font-medium">
        {unit.address.city}
      </span>
    </figure>
  );
}

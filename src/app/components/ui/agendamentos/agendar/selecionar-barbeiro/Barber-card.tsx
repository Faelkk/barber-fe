import { Auth } from "@/actions/units/get-unit-by-id";
import Image from "next/image";

interface BarberCardProps {
  onSelect: (barber: Auth) => void;
  barber: Auth;
}

export default function BarberCard({ onSelect, barber }: BarberCardProps) {
  return (
    <figure
      className="w-full h-[146px] pp:h-[165px] max-w-full md:max-w-[299px] md:h-[200px] relative cursor-pointer"
      onClick={() => onSelect(barber)}
    >
      <Image
        src="/defaults/barber-unity.jpg"
        width={3000}
        height={300}
        alt="Foto ilustrativa do ambiente da barbearia com cadeiras e espelhos"
        className="w-full h-full rounded object-cover"
        priority
      />

      <span className=" bottom-1 left-1 md:text-xl  text-Seashell-50 font-poppins font-medium absolute md:bottom-3 md:left-3">
        {barber.name}
      </span>
    </figure>
  );
}

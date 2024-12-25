import { Unit } from "@/actions/units/get-units";
import { formatPhoneNumber } from "@/functions/format-phone-number";
import Image from "next/image";
import Link from "next/link";

export default function UnidadesCard({ unidade }: { unidade: Unit }) {
  return (
    <Link
      href={`/unidades/${unidade._id}`}
      className="border-4 border-Copper-300 rounded relative flex-grow mini:min-w-[200px] cursor-pointer group"
    >
      <figure className="w-full h-full">
        <Image
          src="/defaults/barber-unity.jpg"
          width={3000}
          height={300}
          alt="Foto ilustrativa do ambiente da barbearia com cadeiras e espelhos"
          className="w-full h-full md:max-h-[400px]"
          priority
        />
      </figure>
      <span className="font-merriweather text-white absolute top-4 left-5 bg-Copper-300 py-1 px-5 rounded capitalize">
        {unidade.address.city}
      </span>
      <div className="absolute top-0 left-0 bg-Copper-300 text-white text-sm p-5 rounded-b rounded-tr opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-lg font-bold font-poppins">
          {unidade.address.city} – {unidade.address.state} –{" "}
          {unidade.address.country}
        </h3>
        <p className="mt-2 font-poppins font-medium">
          {unidade.address.fullAddress}
        </p>
        <p className="mt-1 font-poppins font-medium">
          {formatPhoneNumber(unidade.phoneNumber)}
        </p>
      </div>
    </Link>
  );
}

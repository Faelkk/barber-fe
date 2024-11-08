import Link from "next/link";
import CriarForm from "../criar-form/Criar-form";

export default function CriarContaContainer() {
  return (
    <section className="flex flex-col items-center justify-center flex-1">
      <h2 className="font-merriweather text-cold-gray-950  text-xl pp:text-2xl md:text-3xl font-bold">
        Entre em sua conta
      </h2>
      <span className="font-poppins text-lg text-Seashell-900 mt-4 block max-w-[90%] text-center">
        Já tem uma conta?{" "}
        <Link href="/">
          {" "}
          <span className="text-Seashell-950 font-medium">Fazer login</span>
        </Link>
      </span>
      <CriarForm />
    </section>
  );
}

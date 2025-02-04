import Link from "next/link";
import Container from "../container/Container";
import HeaderMenuMobile from "./Header-menu-mobile";
import getUser from "@/actions/auth/get-user";
import DropdownAccountHeader from "./Dropdown-account-header";

export default async function Header() {
  const { data, ok } = await getUser();

  return (
    <Container className="bg-Seashell-50 border-b-4 border-Copper-300">
      <header className="flex justify-between items-center w-[95%] py-[1.875rem]">
        <h1
          className="font-merriweather font-bold text-sm mini:block mini:text-base pp:text-2xl text-Seashell-950"
          aria-label="Barber Agenda"
        >
          <Link href="/">barberagender</Link>
        </h1>
        <nav aria-label="Main Navigation">
          <ul className="hidden lg:flex gap-5">
            <li>
              <Link href="/" className="font-poppins text-lg text-Seashell-950">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/unidades"
                className="font-poppins text-lg text-Seashell-950"
              >
                Unidades
              </Link>
            </li>
            <li>
              <Link
                href="/servicos"
                className="font-poppins text-lg text-Seashell-950"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="/meus-horarios"
                className="font-poppins text-lg text-Seashell-950"
              >
                Meus horarios
              </Link>
            </li>
            {data && ok ? (
              <DropdownAccountHeader user={data} />
            ) : (
              <li className="font-poppins text-lg text-Seashell-950">
                <Link
                  href="/entrar"
                  className="font-poppins text-lg text-Seashell-950"
                >
                  Entrar
                </Link>
              </li>
            )}
            <li>
              <Link
                href="/agendar-horario"
                className="font-poppins text-lg text-Copper-800 font-medium px-4 py-1 border-2 border-Copper-800 rounded"
              >
                Agendar horário
              </Link>
            </li>
          </ul>
          <HeaderMenuMobile user={data} isUserTrue={ok} />
        </nav>
      </header>
    </Container>
  );
}

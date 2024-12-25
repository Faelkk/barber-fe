import Link from "next/link";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/Instagram";
import LinkedinIcon from "../icons/Linkedin";
import TiktokIcon from "../icons/Tiktok";
import YoutubeIcon from "../icons/Youtube";

export default function Footer() {
  return (
    <footer className="mt-[200px] bg-Seashell-50">
      <section className="grid grid-cols-1 medium:grid-cols-2 lg:grid-cols-[3fr_5fr_4fr] gap-10 pt-15 pb-15 box-border max-w-[1200px] px-5 mx-auto py-[60px]">
        <h2 className="hidden lg:block font-merriweather text-cold-gray-950 text-2xl font-bold">
          barberagender
        </h2>
        <section>
          <h2 className="font-poppins font-medium text-cold-gray-900 mini:text-2xl uppercase">
            Contato
          </h2>
          <ul className="font-poppins font-medium text-cold-gray-700 mini:text-lg flex flex-col gap-4 mt-5">
            <li className="">+51 9999-99999</li>
            <li className="relative after:content-[''] after:block after:w-full after:max-w-[360px] after:h-[2px] after:bg-gray-300 after:mt-4">
              Contato-barber@gmail.com
            </li>
            <li className="">Rua Logo Ali, 79 - Breve</li>
            <li className="relative after:content-[''] after:block after:w-full after:max-w-[360px] after:h-[2px] after:bg-gray-300 after:mt-4">
              Rio Grande Do Sul - RS
            </li>
          </ul>
          <div className="flex gap-4 mt-5">
            <FacebookIcon fill="#3D3D3D" width={24} height={24} />
            <InstagramIcon fill="#3D3D3D" width={24} height={24} />
            <LinkedinIcon fill="#3D3D3D" width={24} height={24} />
            <TiktokIcon fill="#3D3D3D" width={24} height={24} />
            <YoutubeIcon fill="#3D3D3D" width={24} height={24} />
          </div>
        </section>
        <section>
          <h2 className="font-poppins font-medium text-cold-gray-900 mini:text-2xl uppercase">
            Informações
          </h2>
          <ul className="font-poppins font-medium text-cold-gray-700 mini:text-lg flex flex-col gap-4 mt-5">
            <li className="">
              <Link href="/servicos">Serviços</Link>
            </li>
            <li className="">
              <Link href="/unidades">Unidades</Link>
            </li>
            <li className="">
              <Link href="#sobre-nos">Sobre Nós</Link>
            </li>
            <li>
              {" "}
              <Link href="/meus-horarios">Meus Horários</Link>
            </li>
            <li>
              {" "}
              <Link href="/agendar-horario">Agendar horario</Link>
            </li>
          </ul>
        </section>
        <section className="col-span-full font-poppins font-medium text-cold-gray-900 uppercase">
          © Todos os direitos reservados por Rafael
        </section>
      </section>
    </footer>
  );
}

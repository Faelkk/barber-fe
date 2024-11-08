import Link from "next/link";
import Input from "../../auth/input/Input";
import Button from "../../auth/button/Button";

export default function CriarForm() {
  return (
    <form className="flex flex-col w-full items-center  px-4">
      <Input type="text" placeholder="Nome" className="mt-5" />
      <Input type="text" placeholder="Email" className="mt-5" />
      <Input type="text" placeholder="Senha" className="mt-5" />
      <Input type="text" placeholder="Telefone" className="mt-5" />
      <Input type="text" placeholder="Data de nascimento" className="mt-5" />

      <div className="w-full mt-5">
        <Link
          href="/resetar-senha"
          className="uppercase font-poppins text-Seashell-500 mt-3 text-left"
        >
          esqueci minha senha
        </Link>
      </div>
      <Button className="mt-5">Criar conta</Button>
    </form>
  );
}

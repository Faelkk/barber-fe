import TitleSign from "@/app/components/pages/auth/title-sign/Title-sign";
import CriarContaContainer from "@/app/components/pages/criar-conta/criar-conta-container/Criar-conta-container";

export default function CriarConta() {
  return (
    <main className="flex flex-col w-full justify-center items-center py-5 min-h-screen">
      <TitleSign />
      <CriarContaContainer />
    </main>
  );
}

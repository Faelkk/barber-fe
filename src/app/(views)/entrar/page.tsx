import TitleSign from "@/app/components/pages/auth/title-sign/Title-sign";
import EntrarContainer from "@/app/components/pages/entrar/entrar-container/Entrar-container";

export default function Entrar() {
  return (
    <main className="flex flex-col w-full justify-center items-center py-5 min-h-screen">
      <TitleSign />
      <EntrarContainer />
    </main>
  );
}

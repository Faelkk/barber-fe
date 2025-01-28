import ResetarSenhaForm from "../resetar-senha-form/resetar-senha-forn";

export default function ResetarSenhaSection() {
  return (
    <main className="flex flex-col w-full justify-center items-center py-5 min-h-screen">
      <header className="text-center flex justify-center flex-col items-center">
        <h2 className="font-merriweather text-cold-gray-950  text-xl pp:text-2xl md:text-3xl font-bold">
          Criar nova senha
        </h2>

        <span className="uppercase font-poppins text-Seashell-600 mt-3 text-sm  md:text-center max-w-[80%] ">
          Insira uma nova senha abaixo para resetar sua senha de login.
        </span>
      </header>

      <ResetarSenhaForm />
    </main>
  );
}

import RecuperarSenhaForm from "../recuperar-senha-form/Recuperar-senha-form";

export default function RecuperarSenhaSection() {
  return (
    <main className="flex flex-col w-full justify-center items-center py-5 min-h-screen">
      <header className="text-center flex justify-center flex-col items-center">
        <h2 className="font-merriweather text-cold-gray-950  text-xl pp:text-2xl md:text-3xl font-bold">
          Esqueci Minha senha
        </h2>

        <span className="uppercase font-poppins text-Seashell-600 mt-3 text-sm  md:text-center max-w-[80%] ">
          Informe seu e-mail abaixo, iremos lhe enviar um email com as
          instruções para você resetar a sua senha
        </span>
      </header>

      <RecuperarSenhaForm />
    </main>
  );
}

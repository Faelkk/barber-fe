import AgendarHorarioContainer from "@/app/components/pages/agendar-horario/agendar-horario-container/Agendar-horario-container";
import Footer from "@/app/components/ui/footer/Footer";
import Header from "@/app/components/ui/header/Header";
import { Toaster } from "react-hot-toast";

export default function AgendarHorario() {
  return (
    <>
      <Header />
      <AgendarHorarioContainer />
      <Toaster />
      <Footer />
    </>
  );
}

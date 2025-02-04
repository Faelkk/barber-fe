import AgendarHorarioContainerByBarber from "@/app/components/pages/agendar-horario-by-barber/agendar-horario-container-by-barber/Agendar-horario-container-by-barber";
import Footer from "@/app/components/ui/footer/Footer";
import Header from "@/app/components/ui/header/Header";
import { Toaster } from "react-hot-toast";

export default function AgendarHorario() {
  return (
    <>
      <Header />
      <AgendarHorarioContainerByBarber />
      <Toaster />
      <Footer />
    </>
  );
}

import EditarHorarioContainer from "@/app/components/pages/editar-horario/editar-horario-container/Editar-horario-container";
import Footer from "@/app/components/ui/footer/Footer";
import Header from "@/app/components/ui/header/Header";
import { Toaster } from "react-hot-toast";

export default function EditarHorario() {
  return (
    <>
      <Header />
      <EditarHorarioContainer />
      <Footer />
      <Toaster />
    </>
  );
}

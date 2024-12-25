import MeusHorariosSection from "@/app/components/pages/meus-horarios/meus-horarios-section/Meus-horarios-section";
import Footer from "@/app/components/ui/footer/Footer";
import Header from "@/app/components/ui/header/Header";
import { Toaster } from "react-hot-toast";

export default function MeusHorarios() {
  return (
    <>
      <Header />
      <MeusHorariosSection />
      <Footer />
      <Toaster />
    </>
  );
}

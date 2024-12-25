import UnidadesByIdSection from "@/app/components/pages/unidades-by-id/unidades-by-Id-section/Unidades-by-Id-section";
import Footer from "@/app/components/ui/footer/Footer";
import Header from "@/app/components/ui/header/Header";

export default function UnidadesById() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <UnidadesByIdSection />
      </div>
      <Footer />
    </>
  );
}

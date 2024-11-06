import AboutUs from "./components/pages/home/about-us/about-us";
import Landing from "./components/pages/home/landing/Landing";
import Services from "./components/pages/home/services/Services";
import Unidades from "./components/pages/home/unidades/Unidades";
import Footer from "./components/ui/footer/Footer";
import Header from "./components/ui/header/Header";

export default async function Home() {
  return (
    <>
      <Header />
      <Landing />
      <Services />
      <Unidades />
      <AboutUs />
      <Footer />
    </>
  );
}

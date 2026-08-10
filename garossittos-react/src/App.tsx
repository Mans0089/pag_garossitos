import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Historia from "./components/Historia/Historia";
import PorQueElegirnos from "./components/PorQueElegirnos/PorQueElegirnos";
import Catalogo from "./components/Catalogo/Catalogo";
import ComoPedir from "./components/ComoPedir/ComoPedir";
import Footer from "./components/Footer/Footer";
import WhatsAppFab from "./components/WhatsAppFab/WhatsAppFab";
import Chatbot from "./components/Chatbot/Chatbot";
import Divisor from "./components/Divisor";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Divisor color="#B33F23" direccion="arriba" />
        <Historia />
        <PorQueElegirnos />
        <Divisor color="#3F5D3A" direccion="abajo" />
        <Catalogo />
        <ComoPedir />
        <Divisor color="#D9A441" direccion="arriba" />
      </main>
      <Footer />
      <Chatbot />
      <WhatsAppFab />
    </>
  );
}

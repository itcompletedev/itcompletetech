
import Header from "@/components/Header";
import SyntheticHero from "@/components/ui/synthetic-hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <SyntheticHero 
        title="Transforme Sua Visão Digital em Realidade"
        description="Soluções tecnológicas completas que impulsionam o crescimento do seu negócio. Da estratégia à execução, estamos aqui para fazer acontecer."
        badgeText="IT Complete"
        badgeLabel="Inovação"
        ctaButtons={[
          { text: "Começar Agora", href: "#servicos", primary: true },
          { text: "Ver Nossos Cases", href: "#sobre" }
        ]}
        microDetails={[
          "500+ Projetos Entregues",
          "98% Satisfação",
          "24/7 Suporte"
        ]}
      />
      <Services />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

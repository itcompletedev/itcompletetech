
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Tecnologia completa para empresas que precisam{" "}
            <span className="text-primary">ir além.</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A IT Complete integra infraestrutura, nuvem, segurança e inteligência digital 
            em soluções sob medida para sua operação — com desempenho, escala e confiabilidade 
            de nível enterprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg">
              Explorar soluções
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 text-lg">
              Solicitar consultoria
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

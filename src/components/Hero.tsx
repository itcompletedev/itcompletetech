
import { ArrowRight, Shield, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background via-secondary to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground">
                Transforme Sua
                <span className="block">Visão Digital</span>
                em Realidade
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Soluções tecnológicas completas que impulsionam o crescimento do seu negócio. 
                Da estratégia à execução, estamos aqui para fazer acontecer.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary-foreground px-8 py-6 text-lg">
                Começar Agora
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg">
                Ver Nossos Cases
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative z-10 space-y-6">
              <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-6 rounded-2xl border border-primary/20 backdrop-blur-sm">
                <Shield className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Segurança Garantida</h3>
                <p className="text-muted-foreground">Proteção máxima para seus dados e sistemas</p>
              </div>
              
              <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-6 rounded-2xl border border-primary/20 backdrop-blur-sm ml-8">
                <Zap className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Performance Superior</h3>
                <p className="text-muted-foreground">Velocidade e eficiência em cada solução</p>
              </div>
              
              <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-6 rounded-2xl border border-primary/20 backdrop-blur-sm">
                <Target className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Resultados Precisos</h3>
                <p className="text-muted-foreground">Foco total nos seus objetivos de negócio</p>
              </div>
            </div>
            
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-transparent rounded-3xl blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

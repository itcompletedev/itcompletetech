
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Lock, Cloud, Network } from "lucide-react";

const Highlights = () => {
  const items = [
    {
      icon: Server,
      text: "Infraestrutura de TI e Data Center"
    },
    {
      icon: Lock,
      text: "Segurança Cibernética e Governança"
    },
    {
      icon: Cloud,
      text: "Cloud Híbrida, Privada e Pública"
    },
    {
      icon: Network,
      text: "Redes Corporativas de Alta Performance"
    }
  ];

  return (
    <section id="destaques" className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Soluções que moldam a base do{" "}
              <span className="text-primary">futuro digital</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 p-4 bg-primary/10 rounded-full">
                  <item.icon className="text-primary" size={32} />
                </div>
                <p className="font-semibold text-lg">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Veja todas as soluções
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;

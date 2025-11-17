
import { Shield, Zap, Target, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const features = [
    {
      icon: Shield,
      title: "Visão de ponta a ponta",
      description: "Do diagnóstico à implementação, cobrimos todas as camadas da sua operação — rede, servidores, segurança, backup, cloud e continuidade."
    },
    {
      icon: Award,
      title: "Entrega premium",
      description: "Arquiteturas robustas, documentações padronizadas e implementação seguindo melhores práticas globais."
    },
    {
      icon: Target,
      title: "Suporte especializado",
      description: "Equipe experiente, atendimento consultivo e acompanhamento próximo."
    },
    {
      icon: Zap,
      title: "Infraestrutura resiliente",
      description: "Projetos pensados para alta disponibilidade, escalabilidade e tolerância a falhas."
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Por que escolher a <span className="text-primary">IT Complete?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologia construída para acompanhar o ritmo dos seus desafios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-border hover:border-primary transition-all duration-300 animate-scale-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <feature.icon className="text-primary mb-6" size={48} />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

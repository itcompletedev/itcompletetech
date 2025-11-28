
import { Server, Shield, Cloud, Network, HardDrive, Activity, Headphones } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import arcs from "../assets/Arcs.svg";

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Infraestrutura de TI",
      description: "Projetos de alto desempenho para servidores, storage, virtualização e ambientes críticos. Construímos fundações resilientes e preparadas para escalar.",
      features: ["Servidores físicos e virtualizados", "Clusters de alta disponibilidade", "Storage SAN, NAS e HCI", "Padronização e governança"]
    },
    {
      icon: Shield,
      title: "Cibersegurança",
      description: "Proteção completa com políticas, análise, ferramentas avançadas e monitoramento contínuo. Segurança multilayer para ambientes corporativos.",
      features: ["Firewalls de próxima geração", "Antivírus corporativo, EDR e XDR", "Gestão de vulnerabilidades", "Segurança de e-mail e web", "Conformidade e governance"]
    },
    {
      icon: Cloud,
      title: "Cloud & Data Center",
      description: "Desenho, implementação e migração para nuvens públicas, privadas ou híbridas, garantindo elasticidade, performance e redução de custos.",
      features: ["Cloud híbrida e privada", "Azure/AWS", "Backup em nuvem e DRaaS", "FinOps e otimização"]
    },
    {
      icon: Network,
      title: "Redes Corporativas",
      description: "Conectividade segura e de alta performance para suportar operações contínuas e múltiplos dispositivos.",
      features: ["Switching e Routing", "Wi-Fi corporativo", "Segurança de rede", "VLANs e segmentação"]
    },
    {
      icon: HardDrive,
      title: "Backup & Recuperação",
      description: "Soluções para retenção, replicação e recuperação rápida em caso de incidentes.",
      features: ["Backup local e cloud", "Recuperação rápida", "Continuidade de negócios", "Monitoração e auditoria"]
    },
    {
      icon: Activity,
      title: "Monitoramento & Observabilidade",
      description: "Visibilidade total do ambiente e alertas inteligentes para manter performance e estabilidade.",
      features: ["Monitoramento 24/7", "NOC e SOC", "Alertas inteligentes", "Dashboards unificados", "Deteção de anomalias"]
    },
    {
      icon: Headphones,
      title: "Serviços gerenciados",
      description: "Atendimento especializado, equipes dedicadas e SLAs flexíveis para manter a operação estável.",
      features: ["Service Desk N1, N2, N3", "Outsourcing de TI", "Gestão do ambiente", "Plantões e suporte emergencial"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Soluções que Impulsionam Resultados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos um ecossistema completo de serviços tecnológicos para acelerar 
            o crescimento do seu negócio no ambiente digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={32} />
                </div>
                <CardTitle className="text-foreground text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

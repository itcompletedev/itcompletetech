
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Server, Lock, Cloud, Network, HardDrive, Activity, Headphones, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Solucoes = () => {
  const categories = [
    {
      name: "Infraestrutura de TI",
      icon: Server,
      title: "Arquitetura robusta para manter seu negócio em movimento",
      description: "Projetos de alto desempenho para servidores, storage, virtualização e ambientes críticos. Criamos fundações resilientes e documentadas, prontas para escalar.",
      bulletPoints: [
        "Servidores físicos e virtualizados",
        "Clusters de alta disponibilidade",
        "Storage SAN, NAS e Hiperconvergência",
        "Padronização e governança do ambiente"
      ]
    },
    {
      name: "Cibersegurança",
      icon: Lock,
      title: "Proteção inteligente, em múltiplas camadas",
      description: "Atuamos desde a definição de políticas até a implantação de ferramentas avançadas, garantindo segurança, rastreabilidade e prevenção ativa.",
      bulletPoints: [
        "Firewall de próxima geração",
        "EDR, XDR e antivírus corporativo",
        "Gestão de vulnerabilidades",
        "Segurança de e-mail e web",
        "Políticas, compliance e governança"
      ]
    },
    {
      name: "Cloud & Data Center",
      icon: Cloud,
      title: "A nuvem certa para o seu momento",
      description: "Desenhamos e migramos ambientes para nuvens públicas, privadas ou híbridas, garantindo economia, elasticidade e controle total.",
      bulletPoints: [
        "Cloud híbrida e privada",
        "Microsoft Azure e AWS",
        "Backup em nuvem e DRaaS",
        "Otimização de custos (FinOps)"
      ]
    },
    {
      name: "Redes Corporativas",
      icon: Network,
      title: "Conectividade confiável, segura e rápida",
      description: "Garantimos redes estruturadas para suportar alto tráfego, múltiplos dispositivos e baixa latência.",
      bulletPoints: [
        "Switching e Routing",
        "Wi-Fi corporativo",
        "Segurança de rede",
        "Segmentação e VLANs"
      ]
    },
    {
      name: "Backup & Recuperação",
      icon: HardDrive,
      title: "Sua empresa protegida contra qualquer cenário",
      description: "Estratégias completas de proteção, retenção, replicação e recuperação rápida — para garantir continuidade mesmo em incidentes.",
      bulletPoints: [
        "Backup local e cloud",
        "Recuperação rápida",
        "Plano de continuidade",
        "Auditoria e monitoramento"
      ]
    },
    {
      name: "Monitoramento & Observabilidade",
      icon: Activity,
      title: "Visibilidade total do seu ambiente",
      description: "Centralizamos alertas, indicadores e métricas para garantir operação previsível e proativa.",
      bulletPoints: [
        "Monitoramento 24/7",
        "Alertas inteligentes",
        "Dashboard unificado",
        "Detecção de anomalias"
      ]
    },
    {
      name: "Suporte Técnico e Outsourcing",
      icon: Headphones,
      title: "Especialistas sempre ao seu lado",
      description: "Suporte dedicado, SLAs flexíveis e equipes preparadas para manter a operação estável com velocidade e precisão.",
      bulletPoints: [
        "Service Desk N1, N2 e N3",
        "Outsourcing de TI",
        "Gestão do ambiente",
        "Plantões e atendimento emergencial"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="min-h-[60vh] flex items-center bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Soluções completas para ambientes que{" "}
              <span className="text-primary">não podem parar.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Cada solução é planejada de forma personalizada, combinando alta performance, 
              segurança e arquitetura moderna.
            </p>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Accordion type="single" collapsible className="max-w-5xl mx-auto space-y-4">
            {categories.map((category, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <category.icon className="text-primary" size={24} />
                    </div>
                    <span className="text-xl font-semibold">{category.name}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6 pb-4">
                  <div className="space-y-6 ml-16">
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {category.bulletPoints.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                          <span className="text-muted-foreground">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Pronto para transformar sua{" "}
              <span className="text-primary">infraestrutura?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Fale com nossos especialistas e descubra qual solução se encaixa melhor 
              nas necessidades da sua empresa.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 rounded-md text-lg font-medium transition-colors"
            >
              Agendar consultoria gratuita
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solucoes;

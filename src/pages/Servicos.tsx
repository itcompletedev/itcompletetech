import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Servicos = () => {
  const detailedServices = [
    {
      title: "Desenvolvimento Web Completo",
      description: "Criamos sites e aplicações web modernas que convertem visitantes em clientes",
      benefits: [
        "Design responsivo e moderno",
        "Performance otimizada e SEO",
        "Integração com sistemas existentes",
        "Manutenção e suporte contínuo"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Aplicativos Mobile",
      description: "Apps nativos e híbridos para iOS e Android com experiência excepcional",
      benefits: [
        "Interface intuitiva e atrativa",
        "Performance nativa",
        "Integração com APIs e serviços",
        "Publicação nas App Stores"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      title: "Cloud & Infraestrutura",
      description: "Soluções escaláveis em nuvem para crescer junto com seu negócio",
      benefits: [
        "Arquitetura escalável",
        "Alta disponibilidade",
        "Segurança avançada",
        "Monitoramento 24/7"
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes"]
    },
    {
      title: "Transformação Digital",
      description: "Consultoria estratégica para modernizar seus processos e sistemas",
      benefits: [
        "Análise de processos",
        "Planejamento estratégico",
        "Implementação ágil",
        "Treinamento de equipes"
      ],
      technologies: ["Agile", "DevOps", "CI/CD", "Automation"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Descoberta",
      description: "Entendemos seu negócio, objetivos e desafios"
    },
    {
      step: "02",
      title: "Planejamento",
      description: "Criamos a estratégia e arquitetura da solução"
    },
    {
      step: "03",
      title: "Desenvolvimento",
      description: "Construímos com metodologia ágil e qualidade"
    },
    {
      step: "04",
      title: "Entrega",
      description: "Implementamos, testamos e colocamos no ar"
    },
    {
      step: "05",
      title: "Suporte",
      description: "Acompanhamos e evoluímos continuamente"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Nossos <span className="text-primary">Serviços</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Soluções tecnológicas completas para impulsionar seu negócio no ambiente digital
              </p>
            </div>
          </div>
        </section>

        {/* Services Component */}
        <Services />

        {/* Detailed Services */}
        <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Detalhes dos <span className="text-primary">Serviços</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Conheça melhor como podemos ajudar seu negócio
              </p>
            </div>

            <div className="space-y-12 max-w-6xl mx-auto">
              {detailedServices.map((service, index) => (
                <Card 
                  key={index}
                  className="bg-card border-primary/20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-foreground text-3xl">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-lg">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Benefícios</h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Tecnologias</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Nosso <span className="text-primary">Processo</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                5 etapas para entregar resultados excepcionais
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {process.map((item, index) => (
                <div 
                  key={index}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default Servicos;

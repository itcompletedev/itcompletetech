import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Headphones, Users, Settings, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ServicosGerenciados = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const features = [
    { icon: Headphones, title: "Service Desk N1, N2, N3", description: "Suporte técnico em múltiplos níveis" },
    { icon: Users, title: "Outsourcing de TI", description: "Equipes especializadas dedicadas" },
    { icon: Settings, title: "Gestão do ambiente", description: "Administração completa da infraestrutura" },
    { icon: Clock, title: "Plantões e suporte emergencial", description: "Atendimento 24/7 para situações críticas" }
  ];

  const useCases = [
    {
      title: "Outsourcing Completo de TI",
      description: "Escritório com 200 colaboradores terceirizou toda operação de TI, incluindo Service Desk N1/N2 e gestão de infraestrutura, reduzindo custos em 35% e aumentando SLA.",
      impact: "35% redução de custos"
    },
    {
      title: "Service Desk Multinível",
      description: "Rede varejista implementou Service Desk com 3 níveis de atendimento, resolvendo 70% dos chamados no N1 e reduzindo tempo médio de resolução para 2 horas.",
      impact: "70% resolução N1"
    },
    {
      title: "Gestão Proativa de Ambiente",
      description: "Indústria contratou gestão completa do ambiente TI com patches mensais, otimizações e relatórios executivos, eliminando 90% dos incidentes recorrentes.",
      impact: "90% menos incidentes"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-2 mb-4">
              <Headphones className="h-8 w-8 text-primary" />
              <span className="text-sm text-primary font-medium">SERVIÇOS GERENCIADOS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atendimento Especializado e SLAs Flexíveis
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Equipes dedicadas e gestão completa para manter sua operação estável com suporte técnico em todos os níveis e plantões 24/7.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Nossos Diferenciais</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Carousel */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-4 text-center">Casos de Uso</h2>
            <p className="text-center text-muted-foreground mb-12">Exemplos de transformações que realizamos</p>
            
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {useCases.map((useCase, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-border/50">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4 mb-4">
                          <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-2xl font-semibold mb-3">{useCase.title}</h3>
                            <p className="text-muted-foreground mb-4 leading-relaxed">{useCase.description}</p>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                              <span className="text-sm font-semibold text-primary">{useCase.impact}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* CTA Contact Form */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Terceirize sua TI com Segurança</h2>
              <p className="text-muted-foreground">Receba uma proposta personalizada de serviços gerenciados</p>
            </div>
            
            <Card className="border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="E-mail corporativo"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Telefone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Descreva suas necessidades de suporte e gestão..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Solicitar Proposta Personalizada
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicosGerenciados;

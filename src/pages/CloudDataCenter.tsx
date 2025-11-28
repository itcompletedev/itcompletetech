import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Cloud, Server, Database, TrendingDown, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CloudDataCenter = () => {
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
    { icon: Cloud, title: "Cloud híbrida e privada", description: "Flexibilidade entre ambientes on-premises e cloud" },
    { icon: Server, title: "Azure/AWS", description: "Expertise nas principais plataformas cloud" },
    { icon: Database, title: "Backup em nuvem e DRaaS", description: "Proteção de dados e recuperação de desastres" },
    { icon: TrendingDown, title: "FinOps e otimização", description: "Redução de custos com governança financeira" }
  ];

  const useCases = [
    {
      title: "Migração para Nuvem Híbrida",
      description: "Empresa de logística migrou sistemas críticos para Azure mantendo dados sensíveis on-premises, alcançando elasticidade com 35% de economia.",
      impact: "35% redução de custos"
    },
    {
      title: "DR as a Service",
      description: "Indústria implementou DRaaS com RTO de 4 horas e RPO de 15 minutos, garantindo continuidade de negócios sem investimento em segundo data center.",
      impact: "RTO 4h / RPO 15min"
    },
    {
      title: "Otimização FinOps",
      description: "Startup reduziu custos AWS em 45% através de rightsizing, reserved instances e políticas de shutdown automático de ambientes não-produtivos.",
      impact: "45% economia AWS"
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
              <Cloud className="h-8 w-8 text-primary" />
              <span className="text-sm text-primary font-medium">CLOUD & DATA CENTER</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Elasticidade, Performance e Redução de Custos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Desenho, implementação e migração para nuvens públicas, privadas ou híbridas com foco em performance e otimização financeira.
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
              <h2 className="text-3xl font-bold mb-4">Migre para a Nuvem com Segurança</h2>
              <p className="text-muted-foreground">Receba um plano de migração personalizado para sua empresa</p>
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
                      placeholder="Conte sobre sua infraestrutura atual e objetivos..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Solicitar Plano de Migração
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

export default CloudDataCenter;

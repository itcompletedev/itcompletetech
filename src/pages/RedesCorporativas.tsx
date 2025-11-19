import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Network, Wifi, Shield, Layers, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const RedesCorporativas = () => {
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
    { icon: Network, title: "Switching e Routing", description: "Infraestrutura de rede de alta performance" },
    { icon: Wifi, title: "Wi-Fi corporativo", description: "Cobertura total e segura para ambientes empresariais" },
    { icon: Shield, title: "Segurança de rede", description: "Proteção multicamada em todos os pontos" },
    { icon: Layers, title: "VLANs e segmentação", description: "Isolamento lógico e controle de tráfego" }
  ];

  const useCases = [
    {
      title: "Rede Corporativa de Alto Tráfego",
      description: "Empresa com 800 colaboradores implementou rede 10Gb com VLANs segmentadas, suportando tráfego de videoconferências e transferências de arquivos grandes sem degradação.",
      impact: "800 usuários simultâneos"
    },
    {
      title: "Wi-Fi Empresarial Mesh",
      description: "Shopping center implementou rede Wi-Fi mesh com 150 access points, oferecendo cobertura total e roaming transparente para 5000+ dispositivos conectados.",
      impact: "5000+ dispositivos"
    },
    {
      title: "Segmentação de Rede",
      description: "Hospital implementou segmentação de rede por VLANs para isolar sistemas médicos críticos, atendendo requisitos de compliance e aumentando segurança.",
      impact: "100% compliance"
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
              <Network className="h-8 w-8 text-primary" />
              <span className="text-sm text-primary font-medium">REDES CORPORATIVAS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Conectividade Segura e de Alta Performance
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Infraestrutura de rede robusta para suportar operações contínuas e múltiplos dispositivos com máxima disponibilidade e segurança.
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
              <h2 className="text-3xl font-bold mb-4">Modernize sua Rede Corporativa</h2>
              <p className="text-muted-foreground">Fale com nossos especialistas e receba um projeto de rede personalizado</p>
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
                      placeholder="Descreva suas necessidades de rede..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Solicitar Projeto de Rede
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

export default RedesCorporativas;

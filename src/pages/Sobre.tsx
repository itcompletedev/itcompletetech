import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { Users, Award, Lightbulb, Rocket, Target, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sobre = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Transformar ideias em soluções tecnológicas inovadoras que impulsionam o sucesso dos nossos clientes."
    },
    {
      icon: Lightbulb,
      title: "Visão",
      description: "Ser referência em transformação digital, reconhecida pela excelência e inovação em cada projeto."
    },
    {
      icon: TrendingUp,
      title: "Valores",
      description: "Inovação, compromisso com resultados, transparência e parceria de longo prazo com nossos clientes."
    }
  ];

  const timeline = [
    {
      year: "2014",
      title: "Fundação",
      description: "Início da jornada com foco em desenvolvimento web"
    },
    {
      year: "2017",
      title: "Expansão",
      description: "Ampliação para cloud e mobile com 100+ projetos entregues"
    },
    {
      year: "2020",
      title: "Transformação",
      description: "Consolidação como referência em transformação digital"
    },
    {
      year: "2024",
      title: "Liderança",
      description: "500+ projetos e presença nacional com equipe especializada"
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
                Sobre a <span className="text-primary">ITCOMPLETE</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Mais de 10 anos transformando negócios através da tecnologia, 
                com inovação, expertise e compromisso com resultados excepcionais.
              </p>
            </div>
          </div>
        </section>

        {/* About Component */}
        <About />

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Nossos <span className="text-primary">Princípios</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                O que nos guia em cada projeto e decisão
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="bg-card border-primary/20 hover:border-primary/40 transition-all animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                      <value.icon className="text-primary" size={40} />
                    </div>
                    <CardTitle className="text-foreground text-2xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Nossa <span className="text-primary">História</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Uma década de evolução e crescimento contínuo
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div 
                    key={index}
                    className="flex gap-8 items-start animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-24 text-right">
                      <div className="text-3xl font-bold text-primary">{item.year}</div>
                    </div>
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-4 h-4 bg-primary rounded-full"></div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-20 bg-primary/30 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Nosso <span className="text-primary">Time</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Profissionais apaixonados por tecnologia e comprometidos com 
                a excelência em cada projeto
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="mb-4 p-4 bg-primary/10 rounded-full w-fit mx-auto">
                  <Users className="text-primary" size={40} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Colaboradores</div>
              </div>
              <div className="text-center">
                <div className="mb-4 p-4 bg-primary/10 rounded-full w-fit mx-auto">
                  <Award className="text-primary" size={40} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Certificações</div>
              </div>
              <div className="text-center">
                <div className="mb-4 p-4 bg-primary/10 rounded-full w-fit mx-auto">
                  <Rocket className="text-primary" size={40} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="mb-4 p-4 bg-primary/10 rounded-full w-fit mx-auto">
                  <Target className="text-primary" size={40} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Suporte</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;

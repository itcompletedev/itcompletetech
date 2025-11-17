
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Target, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Sobre = () => {
  const pillars = [
    {
      icon: Target,
      name: "Inovação contínua",
      description: "Adotamos tecnologias de última geração e evoluímos junto com o mercado."
    },
    {
      icon: Shield,
      name: "Precisão técnica",
      description: "Implementações estruturadas, padronizadas e alinhadas a frameworks globais."
    },
    {
      icon: Users,
      name: "Transparência e parceria",
      description: "Construção conjunta, comunicação clara e direcionamento consultivo."
    },
    {
      icon: Award,
      name: "Performance e estabilidade",
      description: "Projetos pensados para manter seu negócio funcionando em qualquer cenário."
    }
  ];

  const identityItems = [
    {
      title: "Missão",
      text: "Tornar a tecnologia corporativa simples, segura e preparada para escalar sem limitações."
    },
    {
      title: "Visão",
      text: "Ser referência em soluções integradas, combinando excelência técnica e relacionamento de valor."
    },
    {
      title: "Valores",
      text: "Integridade, expertise, inovação, proximidade e compromisso com resultados."
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
              Tecnologia que nasce com{" "}
              <span className="text-primary">propósito.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A IT Complete é formada por especialistas apaixonados por construir sistemas 
              confiáveis e soluções que realmente fazem diferença no dia a dia das empresas.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa Essência */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Nossa <span className="text-primary">essência</span>
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Desde o início, a IT Complete foi criada com um objetivo claro: simplificar o 
                complexo universo da tecnologia corporativa.
              </p>
              <p className="text-lg leading-relaxed">
                Acreditamos que infraestrutura, segurança, nuvem e conectividade não devem ser 
                obstáculos — e sim o motor que impulsiona inovação, produtividade e crescimento. 
                Nossa abordagem combina visão estratégica, execução precisa e suporte contínuo.
              </p>
              <p className="text-lg leading-relaxed">
                Somos orientados por resultados reais, experiência sólida e uma relação de 
                parceria com cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              O que nos <span className="text-primary">guia</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar, index) => (
              <Card 
                key={index}
                className="border-border hover:border-primary transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 inline-block p-4 bg-primary/10 rounded-full">
                    <pillar.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{pillar.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Especialistas comprometidos com o{" "}
              <span className="text-primary">sucesso da sua operação</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nossa equipe reúne profissionais com experiência prática em ambientes complexos, 
              domínio de fabricantes globais e visão ampla sobre o ecossistema tecnológico.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Nossa <span className="text-primary">identidade</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {identityItems.map((item, index) => (
              <Card 
                key={index}
                className="border-border hover:border-primary transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;

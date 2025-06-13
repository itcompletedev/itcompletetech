
import { Code, Globe, Smartphone, Database, Cloud, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Desenvolvimento Web",
      description: "Sites e aplicações web modernas, responsivas e otimizadas para conversão",
      features: ["React & Next.js", "E-commerce", "Landing Pages", "SEO Otimizado"]
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android com UX excepcional",
      features: ["React Native", "Flutter", "UI/UX Design", "App Store Deploy"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Infraestrutura escalável e automatizada para máxima performance",
      features: ["AWS & Azure", "CI/CD", "Monitoramento", "Auto-scaling"]
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transforme dados em insights valiosos para tomada de decisão",
      features: ["Big Data", "BI Dashboards", "Machine Learning", "APIs"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Proteção completa contra ameaças digitais e conformidade",
      features: ["Pen Testing", "LGPD", "Firewall", "Backup Seguro"]
    },
    {
      icon: Code,
      title: "Consultoria Tech",
      description: "Estratégia e planejamento para transformação digital completa",
      features: ["Arquitetura", "Code Review", "Treinamentos", "Suporte 24/7"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Soluções que <span className="text-primary">Impulsionam</span> Resultados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
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

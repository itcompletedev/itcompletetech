import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contato = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Telefone",
      info: "+55 (11) 98080-3677",
      description: "Atendimento de segunda a sexta, das 8h às 18h"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contato@itcomplete.com.br",
      description: "Resposta em até 24 horas"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "São Paulo, SP - Brasil",
      description: "Atendimento presencial com agendamento"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Seg-Sex: 8h-18h | Sáb: 9h-14h",
      description: "Suporte 24/7 para emergências"
    }
  ];

  const faqs = [
    {
      question: "Qual o prazo médio de desenvolvimento?",
      answer: "Depende da complexidade do projeto. Projetos simples podem levar de 2-4 semanas, enquanto projetos mais complexos podem levar de 2-6 meses."
    },
    {
      question: "Vocês oferecem suporte após a entrega?",
      answer: "Sim! Oferecemos garantia de 3 meses e planos de suporte contínuo com diferentes níveis de atendimento."
    },
    {
      question: "Como funciona o processo de orçamento?",
      answer: "Após o contato inicial, agendamos uma reunião para entender suas necessidades e entregamos uma proposta detalhada em até 24-48 horas."
    },
    {
      question: "Trabalham com metodologia ágil?",
      answer: "Sim, utilizamos metodologias ágeis (Scrum/Kanban) com entregas incrementais e feedback constante."
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
                Entre em <span className="text-primary">Contato</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Estamos prontos para transformar suas ideias em realidade. 
                Fale conosco e descubra como podemos ajudar seu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index}
                  className="bg-card border-primary/20 hover:border-primary/40 transition-all animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <method.icon className="text-primary" size={28} />
                    </div>
                    <CardTitle className="text-foreground text-lg">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-2">
                    <p className="font-semibold text-primary">{method.info}</p>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <Contact />

        {/* FAQs */}
        <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Perguntas <span className="text-primary">Frequentes</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Respostas rápidas para as dúvidas mais comuns
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card 
                  key={index}
                  className="bg-card border-primary/20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-foreground text-xl flex items-start gap-3">
                      <MessageSquare className="text-primary flex-shrink-0 mt-1" size={24} />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground ml-9">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-primary/20 via-primary/10 to-background border-primary/20 max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <div className="mb-6 mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Send className="text-primary" size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Pronto para Começar?
                </h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Agende uma consultoria gratuita e descubra como podemos 
                  transformar seu negócio através da tecnologia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                    Agendar Consultoria
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;

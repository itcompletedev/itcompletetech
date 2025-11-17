
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const benefits = [
    "Consultoria gratuita inicial",
    "Proposta personalizada em 24h",
    "Suporte técnico especializado",
    "Garantia de satisfação"
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/20 via-primary/10 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Pronto para <span className="text-primary">Transformar</span> 
            <br />seu Negócio?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Não deixe a concorrência sair na frente. Acelere sua transformação digital 
            agora e conquiste resultados extraordinários.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-2 text-left animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="text-primary flex-shrink-0" size={20} />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-12 py-6 text-lg">
              Solicitar Proposta Grátis
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-12 py-6 text-lg">
              Agendar Consultoria
            </Button>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            ⭐ Avaliação 5.0 estrelas • Mais de 200 reviews
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

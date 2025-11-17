
import { CheckCircle } from "lucide-react";

const Trust = () => {
  const bullets = [
    "Arquiteturas escaláveis e preparadas para o crescimento",
    "Soluções certificadas e alinhadas a fabricantes líderes",
    "Modelo consultivo que entende e adapta à realidade de cada negócio"
  ];

  return (
    <section id="clientes" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Confiança construída com{" "}
            <span className="text-primary">desempenho</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            A IT Complete entrega soluções para empresas que operam com alto volume, 
            alta criticidade e alta exigência.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {bullets.map((bullet, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center space-y-4 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-4 bg-primary/10 rounded-full">
                  <CheckCircle className="text-primary" size={32} />
                </div>
                <p className="text-lg font-medium">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;


import { Users, Award, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary/50 to-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Por que Escolher a 
                <span className="text-primary block">ITCOMPLETE?</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Somos mais que uma empresa de tecnologia. Somos seu parceiro estratégico 
                na jornada de transformação digital, combinando expertise técnica com 
                visão de negócio para entregar resultados excepcionais.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Experiência Comprovada</h3>
                  <p className="text-gray-300">Mais de 10 anos no mercado com centenas de projetos bem-sucedidos</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Time Especializado</h3>
                  <p className="text-gray-300">Profissionais certificados e atualizados com as últimas tecnologias</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Lightbulb className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Inovação Constante</h3>
                  <p className="text-gray-300">Sempre à frente das tendências tecnológicas do mercado</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Rocket className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Entrega Ágil</h3>
                  <p className="text-gray-300">Metodologias ágeis para entregas rápidas e eficientes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-2xl border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-white font-semibold mb-1">Projetos</div>
                  <div className="text-gray-400 text-sm">Entregues com sucesso</div>
                </div>
                
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-2xl border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-white font-semibold mb-1">Satisfação</div>
                  <div className="text-gray-400 text-sm">dos nossos clientes</div>
                </div>
              </div>
              
              <div className="space-y-6 mt-8">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-2xl border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-white font-semibold mb-1">Especialistas</div>
                  <div className="text-gray-400 text-sm">em nossa equipe</div>
                </div>
                
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-2xl border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-white font-semibold mb-1">Suporte</div>
                  <div className="text-gray-400 text-sm">Sempre disponível</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-transparent rounded-3xl blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

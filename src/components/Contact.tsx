import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const Contact = () => {
  return <section id="contact" className="py-20 bg-gradient-to-b from-black to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Vamos <span className="text-primary">Conversar</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos impulsionar 
            o crescimento do seu negócio através da tecnologia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Fale Conosco</h3>
              <p className="text-gray-300 mb-8">
                Nossa equipe está pronta para atender você e transformar suas ideias em realidade.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <div className="text-white font-semibold">Telefone</div>
                  <div className="text-gray-300">⁨+55 (11) 98080-3677⁩</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-300">contato@itcomplete.com.br</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <div className="text-white font-semibold">Endereço</div>
                  <div className="text-gray-300">São Paulo, SP - Brasil</div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Horário de Atendimento</h4>
              <div className="space-y-2 text-gray-300">
                <div>Segunda a Sexta: 8h às 18h</div>
                <div>Sábado: 9h às 14h</div>
                <div className="text-primary font-semibold">Suporte 24/7 para emergências</div>
              </div>
            </div>
          </div>

          <Card className="bg-card border-primary/20 animate-scale-in">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Solicitar Orçamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Seu nome" className="bg-secondary border-primary/20 text-white placeholder-gray-400" />
                <Input placeholder="Seu email" type="email" className="bg-secondary border-primary/20 text-white placeholder-gray-400" />
              </div>
              
              <Input placeholder="Empresa" className="bg-secondary border-primary/20 text-white placeholder-gray-400" />
              
              <Input placeholder="Telefone" className="bg-secondary border-primary/20 text-white placeholder-gray-400" />
              
              <Textarea placeholder="Conte-nos sobre seu projeto..." rows={4} className="bg-secondary border-primary/20 text-white placeholder-gray-400 resize-none" />
              
              <Button className="w-full bg-primary hover:bg-primary-dark text-white py-6 text-lg">
                Enviar Mensagem
                <Send className="ml-2" size={20} />
              </Button>
              
              <p className="text-sm text-gray-400 text-center">
                Responderemos em até 1 hora útil
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Contact;
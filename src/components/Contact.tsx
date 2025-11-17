
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Vamos construir o próximo nível da{" "}
              <span className="text-primary">sua infraestrutura?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Fale com nossos especialistas e receba uma análise personalizada.
            </p>
          </div>

          <Card className="border-border animate-scale-in">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome</label>
                    <Input placeholder="Seu nome completo" className="bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="seu@email.com" className="bg-background" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <Input placeholder="(00) 00000-0000" className="bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Empresa</label>
                    <Input placeholder="Nome da empresa" className="bg-background" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <Textarea 
                    placeholder="Descreva seu projeto ou necessidade..." 
                    rows={6}
                    className="bg-background"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Enviar mensagem
                  <Send className="ml-2" size={20} />
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border text-center">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Mail size={20} className="text-primary" />
                  <span className="font-medium">contato@itcomplete.com</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Retornamos em até 24 horas úteis.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

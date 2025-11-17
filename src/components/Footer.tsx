
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src={logo} alt="ITCOMPLETE" className="h-8 mb-4" />
            <p className="text-gray-400">
              Transformando visões em realidade digital através de soluções tecnológicas inovadoras.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Apps Mobile</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cloud & DevOps</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consultoria Tech</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nossa Equipe</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+55 (11) 9999-9999</li>
              <li>contato@itcomplete.com.br</li>
              <li>São Paulo, SP - Brasil</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ITCOMPLETE. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

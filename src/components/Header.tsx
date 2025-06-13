
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            IT<span className="text-primary">COMPLETE</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-primary transition-colors">
              Início
            </a>
            <a href="#services" className="text-white hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#about" className="text-white hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-white hover:text-primary transition-colors">
              Contato
            </a>
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Solicitar Orçamento
            </Button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4 animate-fade-in">
            <a href="#home" className="block text-white hover:text-primary transition-colors">
              Início
            </a>
            <a href="#services" className="block text-white hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#about" className="block text-white hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contact" className="block text-white hover:text-primary transition-colors">
              Contato
            </a>
            <Button className="w-full bg-primary hover:bg-primary-dark text-white">
              Solicitar Orçamento
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

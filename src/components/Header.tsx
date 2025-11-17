
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="fixed w-full z-50 bg-background/90 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="ITCOMPLETE" className="h-8" />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:text-primary transition-colors ${
                location.pathname === "/" ? "text-primary" : "text-foreground"
              }`}
            >
              Início
            </Link>
            <Link 
              to="/servicos" 
              className={`hover:text-primary transition-colors ${
                location.pathname === "/servicos" ? "text-primary" : "text-foreground"
              }`}
            >
              Serviços
            </Link>
            <Link 
              to="/sobre" 
              className={`hover:text-primary transition-colors ${
                location.pathname === "/sobre" ? "text-primary" : "text-foreground"
              }`}
            >
              Sobre
            </Link>
            <Link 
              to="/contato" 
              className={`hover:text-primary transition-colors ${
                location.pathname === "/contato" ? "text-primary" : "text-foreground"
              }`}
            >
              Contato
            </Link>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:text-primary hover:bg-primary/10"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Solicitar Orçamento
            </Button>
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4 animate-fade-in">
            <Link 
              to="/" 
              className={`block hover:text-primary transition-colors ${
                location.pathname === "/" ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/servicos" 
              className={`block hover:text-primary transition-colors ${
                location.pathname === "/servicos" ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link 
              to="/sobre" 
              className={`block hover:text-primary transition-colors ${
                location.pathname === "/sobre" ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              to="/contato" 
              className={`block hover:text-primary transition-colors ${
                location.pathname === "/contato" ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:text-primary hover:bg-primary/10 mb-4"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Solicitar Orçamento
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

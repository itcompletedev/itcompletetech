
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <Logo className="h-8 w-auto" />
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="/solucoes" className="text-foreground hover:text-primary transition-colors">
              Soluções
            </a>
            <a href="/sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre Nós
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:text-primary"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Solicitar Consultoria
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4 animate-fade-in">
            <a href="/" className="block text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="/solucoes" className="block text-foreground hover:text-primary transition-colors">
              Soluções
            </a>
            <a href="/sobre" className="block text-foreground hover:text-primary transition-colors">
              Sobre Nós
            </a>
            <a href="#contact" className="block text-foreground hover:text-primary transition-colors">
              Contato
            </a>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:text-primary mb-4"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Solicitar Consultoria
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;


import { useState } from "react";
import { Menu, X, Server, Shield, Cloud, Network, HardDrive, Activity, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/LOGOTIPO2025.svg";
import MegaMenu from "@/components/ui/mega-menu";
import type { MegaMenuItem } from "@/components/ui/mega-menu";
import "../components/csscustom/stylehome.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems: MegaMenuItem[] = [
    {
      id: 1,
      label: "Início",
      link: "/",
    },
    {
      id: 2,
      label: "Serviços",
      subMenus: [
        {
          title: "Infraestrutura",
          items: [
            {
              label: "Infraestrutura de TI",
              description: "Servidores, storage e virtualização",
              icon: Server,
              link: "/servicos/infraestrutura-ti",
            },
            {
              label: "Cloud & Data Center",
              description: "Soluções em nuvem e data centers",
              icon: Cloud,
              link: "/servicos/cloud-datacenter",
            },
            {
              label: "Redes Corporativas",
              description: "Design e implementação de redes",
              icon: Network,
              link: "/servicos/redes-corporativas",
            },
          ],
        },
        {
          title: "Segurança & Proteção",
          items: [
            {
              label: "Cibersegurança",
              description: "Proteção completa contra ameaças",
              icon: Shield,
              link: "/servicos/ciberseguranca",
            },
            {
              label: "Backup & Recuperação",
              description: "Proteção de dados empresariais",
              icon: HardDrive,
              link: "/servicos/backup-recuperacao",
            },
          ],
        },
        {
          title: "Gestão & Suporte",
          items: [
            {
              label: "Monitoramento",
              description: "Observabilidade completa",
              icon: Activity,
              link: "/servicos/monitoramento",
            },
            {
              label: "Serviços Gerenciados",
              description: "Gestão completa de TI",
              icon: Headphones,
              link: "/servicos/servicos-gerenciados",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      label: "Sobre",
      link: "/sobre",
    },
    {
      id: 4,
      label: "Contato",
      link: "/contato",
    },
  ];

  return (
    <header id="thenav" className="fixed w-full z-50 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="ITCOMPLETE" className="h-8" />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-4">
            <MegaMenu items={menuItems} />
            <Button id="ctaMenu">
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
{/* 
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
            <Button id="ctaMenu" className="w-full bg-primary hover:bg-primary/90">
              Solicitar Orçamento
            </Button>
          </nav>
        )} */}
      </div>
    </header>
  );
};

export default Header;

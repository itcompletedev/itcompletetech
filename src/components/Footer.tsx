
const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              IT<span className="text-primary">COMPLETE</span>
            </h3>
            <p className="text-muted-foreground">
              Tecnologia completa para empresas que precisam ir além
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="/sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="/solucoes" className="text-muted-foreground hover:text-primary transition-colors">Soluções</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Soluções</h4>
            <ul className="space-y-2">
              <li><a href="/solucoes" className="text-muted-foreground hover:text-primary transition-colors">Infraestrutura de TI</a></li>
              <li><a href="/solucoes" className="text-muted-foreground hover:text-primary transition-colors">Cibersegurança</a></li>
              <li><a href="/solucoes" className="text-muted-foreground hover:text-primary transition-colors">Cloud & Data Center</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>contato@itcomplete.com</li>
              <li>Retorno em 24h úteis</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 IT Complete. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

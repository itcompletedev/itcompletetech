import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import InfraestruturaIT from "./pages/InfraestruturaIT";
import Ciberseguranca from "./pages/Ciberseguranca";
import CloudDataCenter from "./pages/CloudDataCenter";
import RedesCorporativas from "./pages/RedesCorporativas";
import BackupRecuperacao from "./pages/BackupRecuperacao";
import Monitoramento from "./pages/Monitoramento";
import ServicosGerenciados from "./pages/ServicosGerenciados";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/servicos/infraestrutura-ti" element={<InfraestruturaIT />} />
            <Route path="/servicos/ciberseguranca" element={<Ciberseguranca />} />
            <Route path="/servicos/cloud-datacenter" element={<CloudDataCenter />} />
            <Route path="/servicos/redes-corporativas" element={<RedesCorporativas />} />
            <Route path="/servicos/backup-recuperacao" element={<BackupRecuperacao />} />
            <Route path="/servicos/monitoramento" element={<Monitoramento />} />
            <Route path="/servicos/servicos-gerenciados" element={<ServicosGerenciados />} />
            <Route path="/contato" element={<Contato />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

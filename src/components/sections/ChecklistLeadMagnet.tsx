import React from 'react';
import { Button } from '../ui/Button';
import { FileDown, CheckSquare, Lock } from 'lucide-react';

const ChecklistLeadMagnet: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="inline-block py-1 px-3 rounded text-xs font-bold bg-secondary text-primary mb-4">GRATUITO</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Descubra se Seu ERP Está Trabalhando Contra Você
            </h2>
            <p className="text-xl text-secondary mb-8">
              Baixe gratuitamente o Checklist de Saúde do ERP e identifique 10 sinais de que seu sistema está gerando custo em vez de inteligência.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
               <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                 Preview dos 10 Sinais:
               </h3>
               <ul className="space-y-3">
                 <li className="flex items-center gap-3">
                   <CheckSquare className="text-secondary shrink-0" />
                   <span>Relatórios financeiros e assistenciais não batem</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <CheckSquare className="text-secondary shrink-0" />
                   <span>Você usa planilhas paralelas porque não confia no sistema</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <CheckSquare className="text-secondary shrink-0" />
                   <span>Processos críticos dependem do conhecimento de 1 ou 2 pessoas</span>
                 </li>
                 <li className="flex items-center gap-3 opacity-50">
                   <div className="w-5 h-5 border-2 border-white/30 rounded"></div>
                   <span>[... 7 outros sinais críticos ocultos]</span>
                 </li>
               </ul>
            </div>
          </div>

          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl max-w-md mx-auto w-full">
            <h3 className="text-2xl font-bold mb-2">Baixar Checklist</h3>
            <p className="text-gray-500 text-sm mb-6">Preencha para receber o PDF no seu email.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome Profissional</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Seu nome" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Corporativo</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="seu@hospital.com.br" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cargo</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Ex: Diretor Financeiro" />
               </div>
               
               <Button className="w-full bg-white hover:bg-secondary text-primary text-lg h-14" size="lg">
                 <FileDown className="mr-2" /> Baixar Checklist Completo
               </Button>
               
               <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-2">
                 <Lock size={12} />
                 <span>Seus dados estão seguros. Sem spam.</span>
               </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChecklistLeadMagnet;
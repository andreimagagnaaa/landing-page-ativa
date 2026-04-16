import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, UserX, GitMerge, ChevronDown, ChevronUp } from 'lucide-react';

const Theses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const theses = [
    {
      id: 0,
      icon: PieChart,
      title: "Otimização de ROI",
      headline: "Maximização do Investimento em ERP",
      content: "A operação parcial do sistema gera custos totais de manutenção com retorno limitado. Nossa metodologia visa recuperar a capacidade ociosa do ERP, transformando despesa operacional em inteligência competitiva e estratégica.",
      stat: "Foco total na eficiência do capital investido",
      color: "blue"
    },
    {
      id: 1,
      icon: UserX,
      title: "Gestão do Conhecimento",
      headline: "Mitigação de Riscos de Capital Humano",
      content: "A dependência excessiva em processos manuais ou conhecimento tácito eleva a vulnerabilidade operacional. Atuamos na institucionalização e sistematização de processos, garantindo a continuidade e a segurança do negócio.",
      stat: "Processos auditáveis e independentes",
      color: "red"
    },
    {
      id: 2,
      icon: GitMerge,
      title: "Integridade de Dados",
      headline: "Conformidade entre Assistencial e Faturamento",
      content: "Divergências entre setores indicam falhas estruturais de fluxo e governança. Implementamos barreiras sistêmicas para assegurar a rastreabilidade e a integridade da informação, fundamentando decisões em 'Single Source of Truth'.",
      stat: "Dados consistentes para decisões seguras",
      color: "green"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#002B49 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Pilares da Governança de Dados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fundamentos para uma gestão hospitalar baseada em evidências e segurança jurídica.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {theses.map((thesis, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white rounded-xl shadow-lg border-2 cursor-pointer transition-all duration-300 ${activeTab === idx ? 'border-primary ring-2 ring-primary/20' : 'border-transparent hover:border-gray-200'}`}
              onClick={() => setActiveTab(activeTab === idx ? null : idx)}
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-secondary text-primary">
                  <thesis.icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{thesis.title}</h3>
                
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Clique para expandir</span>
                  {activeTab === idx ? <ChevronUp size={20} className="text-primary" /> : <ChevronDown size={20} className="text-gray-400" />}
                </div>

                <AnimatePresence>
                  {activeTab === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-100 mt-4 space-y-3">
                        <h4 className="font-semibold text-primary">{thesis.headline}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{thesis.content}</p>
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm font-medium text-gray-800 flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                           {thesis.stat}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Theses;
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle } from 'lucide-react';

const Cases: React.FC = () => {
  const cases = [
    {
      title: "Hospital de Médio Porte - SP",
      desafio: "Divergência de 18% entre faturamento e financeiro",
      solucao: "SEG com foco em saneamento de fluxos e validação de dados.",
      resultado: "Divergência reduzida para 2% em 4 meses",
      metric: "16%",
      metricLabel: "Recuperação de Receita",
      color: "blue"
    },
    {
      title: "Clínica Especializada - Interior",
      desafio: "80% dos processos dependiam de 2 funcionárias antigas.",
      solucao: "Mapeamento completo + Governança de processos em sistema.",
      resultado: "Conhecimento documentado, risco operacional eliminado.",
      metric: "100%",
      metricLabel: "Segurança Operacional",
      color: "green"
    },
    {
      title: "Hospital Filantrópico",
      desafio: "ERP MV utilizado em apenas 40% da capacidade contratada.",
      solucao: "Diagnóstico de Aderência + Treinamento + SEG contínuo.",
      resultado: "Utilização aumentada para 85% em 6 meses de projeto.",
      metric: "2x",
      metricLabel: "Mais Eficiência",
      color: "orange"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#002B49 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resultados que Comprovam Nossa Metodologia
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Não prometemos milagres. Entregamos método, suor e inteligência.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white border text-left rounded-xl p-8 hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 bg-primary"></div>

              <div className="relative z-10">
                <div className="text-4xl font-bold text-gray-900 mb-1">{item.metric}</div>
                <div className="text-sm font-bold uppercase tracking-wider mb-6 text-primary">{item.metricLabel}</div>
                
                <h3 className="font-bold text-lg text-gray-800 mb-4">{item.title}</h3>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <div className="flex items-start gap-2 text-xs text-gray-500">
                      <AlertTriangle size={14} className="shrink-0 mt-0.5" />
                      <span className="font-semibold">Desafio:</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{item.desafio}</p>
                  </div>

                  <div className="bg-secondary/50 p-3 rounded-lg border border-secondary">
                     <div className="flex items-start gap-2 text-xs text-primary">
                      <TrendingUp size={14} className="shrink-0 mt-0.5" />
                      <span className="font-semibold">Resultado:</span>
                    </div>
                    <p className="text-sm text-gray-800 font-medium mt-1">{item.resultado}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
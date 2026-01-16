import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Stethoscope, BarChart3, Package } from 'lucide-react';

const Areas: React.FC = () => {
  const areas = [
    {
      icon: DollarSign,
      title: "Ciclo da Receita",
      detail: "Faturamento SUS e Convênios • Glosas • Repasse Médico",
      problem: "Especialistas em otimizar o fluxo financeiro",
      result: "Maior eficiência no faturamento",
      color: "bg-secondary text-primary"
    },
    {
      icon: Stethoscope,
      title: "Assistencial e Atendimento",
      detail: "Melhoria nos processos de atendimento ao paciente e eficiência assistencial",
      problem: "Foco na jornada do paciente",
      result: "Melhore a qualidade do atendimento",
      color: "bg-secondary text-primary"
    },
    {
      icon: BarChart3,
      title: "Controladoria e Finanças",
      detail: "Otimização dos processos financeiros e de controladoria para maximizar eficiência e reduzir custos",
      problem: "Gestão inteligente de recursos",
      result: "Maximimize seus resultados",
      color: "bg-secondary text-primary"
    },
    {
      icon: Package,
      title: "Suprimentos e Farmácia",
      detail: "Gestão eficaz de suprimentos e farmácia, garantindo disponibilidade de materiais e medicamentos essenciais",
      problem: "Equilíbrio entre estoque e demanda",
      result: "Redução de desperdícios",
      color: "bg-secondary text-primary"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#002B49 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Onde Atuamos para Gerar Resultado Real
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expertise específica para resolver os gargalos mais caros da sua operação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {areas.map((area, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex gap-6"
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 ${area.color}`}>
                <area.icon size={32} />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">{area.title}</h3>
                <p className="text-sm font-medium text-gray-500 border-b border-gray-100 pb-2">{area.detail}</p>
                
                <div className="space-y-2">
                  <div className="text-sm text-gray-500 flex gap-2">
                    <span className="font-bold shrink-0">Problema:</span>
                    <span className="text-gray-600">{area.problem}</span>
                  </div>
                  <div className="text-sm text-primary flex gap-2">
                    <span className="font-bold shrink-0">Resultado:</span>
                    <span className="text-gray-800">{area.result}</span>
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

export default Areas;
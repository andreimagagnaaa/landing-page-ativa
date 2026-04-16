import React from 'react';
import { motion } from 'framer-motion';
import { Search, Settings, ShieldCheck, Users } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: Search,
      title: "Diagnóstico de Aderência",
      desc: "Auditoria mensal para identificar quais módulos do ERP estão sendo ignorados ou mal utilizados.",
      question: "Estamos usando tudo que pagamos?",
      deliverable: "Relatório de Aderência"
    },
    {
      id: 2,
      icon: Settings,
      title: "Saneamento de Fluxos",
      desc: "Ajuste de parametrizações para que a assistência alimente o faturamento automaticamente.",
      question: "Por que fazer manual o que o sistema faz?",
      deliverable: "Mapa de Fluxos Otimizados"
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "Validação de KPI",
      desc: "Auditoria rigorosa dos dados. Questionamento sistemático da integridade dos números.",
      question: "Posso confiar nos números?",
      deliverable: "Certificação de Confiabilidade"
    },
    {
      id: 4,
      icon: Users,
      title: "Comitê de Governança",
      desc: "Reunião mensal com a diretoria para apresentar evolução e definir prioridades.",
      question: "Estamos evoluindo?",
      deliverable: "Relatório Executivo + Plano de Ação"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#002B49 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider text-sm uppercase">Metodologia Proprietária</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Como Funciona o Ciclo de Otimização Mensal
          </h2>
          <p className="text-lg text-gray-600">
            Não fazemos 'visitas'. Executamos Governança Estratégica.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative group"
              >
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-md group-hover:scale-110 transition-transform duration-300 relative mx-auto lg:mx-0">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-xs text-primary border-2 border-white">
                    {step.id}
                  </div>
                  <step.icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center lg:text-left">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center lg:text-left">{step.desc}</p>
                
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-xs space-y-2">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {step.question}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 italic">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    Entregável: {step.deliverable}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
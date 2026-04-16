import React from 'react';
import { motion } from 'framer-motion';
import { Network, Database, LineChart } from 'lucide-react';

const Pillars: React.FC = () => {
  const pillars = [
    {
      icon: Network,
      title: "Processos",
      subtitle: "Mapeamento e Otimização",
      desc: "Mapeamos e otimizamos processos, identificando ineficiências e implementando melhorias estratégicas. Para aumentar a eficiência e produtividade hospitalar.",
      result: "Melhora contínua de fluxos"
    },
    {
      icon: Database,
      title: "Tecnologia",
      subtitle: "Integração e Uso Completo",
      desc: "Garantimos o uso completo do ERP integrando as operações hospitalares. Proporcionando uma visão completa e em tempo real de todos os processos.",
      result: "Domínio das ferramentas de gestão"
    },
    {
      icon: LineChart,
      title: "Indicadores",
      subtitle: "Estratégia e Decisão",
      desc: "Alinhamos a estratégia aos KPIs, facilitando o acompanhamento dos resultados e permitindo ajustes estratégicos garantindo seus objetivos.",
      result: "Decisões baseadas em dados"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#002B49 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pilares
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 group-hover:bg-blue-50"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <pillar.icon size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{pillar.title}</h3>
                <p className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">{pillar.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{pillar.desc}</p>
                
                <div className="pt-6 border-t border-gray-100">
                  <div className="text-3xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {pillar.result.split(' ')[0]} <span className="text-lg font-normal text-gray-500">
                      {pillar.result.substring(pillar.result.indexOf(' '))}
                    </span>
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

export default Pillars;
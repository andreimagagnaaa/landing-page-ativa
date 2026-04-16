import React from 'react';
import { motion } from 'framer-motion';
import { Settings, User, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';

const Difference: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#002B49 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Diferencial Competitivo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elevando o nível de maturidade da gestão hospitalar através da governança estratégica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Concorrente */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-200 rounded-xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Settings size={120} />
            </div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">Consultoria Tradicional</h3>
            <p className="text-gray-500 font-medium mb-6">Foco Técnico-Operacional</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500">
                <AlertTriangle className="shrink-0 mt-1" size={18} />
                <span>Atuação Reativa e Corretiva</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500">
                <Settings className="shrink-0 mt-1" size={18} />
                <span>Gestão baseada em chamados técnicos</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500">
                <User className="shrink-0 mt-1" size={18} />
                <span>Interlocução restrita à TI</span>
              </li>
            </ul>
          </motion.div>

          {/* Ativa */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-primary shadow-xl rounded-xl p-8 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10 text-primary">
              <TrendingUp size={120} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">Ativa Consultoria</h3>
            <p className="text-primary font-medium mb-6">Foco Estratégico de Negócio</p>
             <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="shrink-0 mt-1 text-primary" size={18} />
                <span>Atuação Proativa e Preventiva</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <TrendingUp className="shrink-0 mt-1 text-primary" size={18} />
                <span>Otimização de processos e indicadores</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <User className="shrink-0 mt-1 text-primary" size={18} />
                <span>Alinhamento direto com a Alta Gestão</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm uppercase tracking-wider text-gray-500">
                <th className="p-4 md:p-6 font-semibold">Característica</th>
                <th className="p-4 md:p-6 font-semibold bg-gray-100/50">Concorrente (Suporte/TI)</th>
                <th className="p-4 md:p-6 font-semibold bg-secondary/50 text-primary">Ativa (SEG)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { label: "Foco", compet: "Resolver tickets e bugs", ativa: "Melhorar processos e indicadores" },
                { label: "Interlocutor", compet: "Analista de TI", ativa: "Diretor/Gestor de Área" },
                { label: "Entrega", compet: "Horas de suporte", ativa: "Resultados de negócio e confiabilidade" },
                { label: "Visão", compet: "Reativa (espera o erro)", ativa: "Proativa (evita o erro no fluxo)" },
                { label: "Objetivo", compet: "Sistema funcionando", ativa: "Sistema gerando inteligência" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 md:p-6 font-medium text-gray-900 border-r border-gray-100">{row.label}</td>
                  <td className="p-4 md:p-6 text-gray-500 border-r border-gray-100">{row.compet}</td>
                  <td className="p-4 md:p-6 text-primary font-medium bg-secondary/30">{row.ativa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Difference;
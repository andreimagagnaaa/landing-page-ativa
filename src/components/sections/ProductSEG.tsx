import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';

const ProductSEG: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white overflow-hidden relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="container mx-auto">
        <div className="text-center mb-16 relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-4 backdrop-blur-sm">
            Nossa Solução Premium
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            SEG - Sustentação Estratégica de Gestão
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Governança de Dados e Processos que Transforma ERP em Ativo Estratégico
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto relative z-10">
          {/* O que NÃO é */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 text-secondary flex items-center gap-2">
              <XCircle /> O que NÃO é SEG
            </h3>
            <ul className="space-y-4">
              {[
                "Suporte técnico reativo",
                "Conserto de bugs pontuais",
                "Venda de horas sem resultado",
                "Dependência de chamados"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* O que É SEG */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/10 backdrop-blur-md rounded-2xl p-8 border border-secondary/30 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <CheckCircle size={100} className="text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <CheckCircle /> O que É SEG
            </h3>
            <ul className="space-y-4">
              {[
                "Governança preventiva de processos",
                "Auditoria contínua de aderência",
                "Transformação de dados em decisão",
                "Comitê estratégico mensal",
                "KPIs confiáveis e acionáveis"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle size={16} className="text-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-2xl"
        >
          <p className="text-lg md:text-2xl font-semibold leading-relaxed">
            "Transformamos seu ERP de <span className="text-secondary border-b border-secondary/50">'custo operacional'</span> em <span className="text-white border-b border-secondary">'ferramenta de lucro e decisão'</span>, garantindo que 100% dos processos reflitam a realidade financeira e assistencial."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSEG;
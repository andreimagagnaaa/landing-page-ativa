import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#002B49 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="relative z-10 space-y-6">
                <span className="text-primary font-semibold tracking-wide uppercase text-sm border-b-2 border-primary pb-1">Conheça a Ativa</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Consultores com mais de <span className="text-primary">15 anos</span> unindo conhecimento especializado e tecnologia.
                </h2>
                <p className="text-lg text-gray-600">
                  Na Ativa Consultoria, somos uma equipe experiente e dedicada, especializada em apoiar e transformar operações de instituições de saúde de todos os tamanhos, desde pequenas clínicas até grandes hospitais. Nossa abordagem personalizada garante que sua instituição não apenas alcance, mas supere os resultados esperados.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  {[
                    { value: "15+", label: "Anos transformando operações" },
                    { value: "30%", label: "Redução média de divergências" },
                    { value: "100%", label: "Compromisso com resultado" },
                    { value: "40%", label: "Aumento em inteligência capturada" }
                  ].map((stat, i) => (
                    <div key={i} className="border-l-4 border-blue-500 pl-4">
                      <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative"
          >
             {/* Abstract visual representation of "Governança" */}
             <div className="bg-gray-100 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10 space-y-6">
                   <h3 className="text-xl font-semibold text-primary mb-4">Nossa Promessa</h3>
                   <ul className="space-y-4">
                      {[
                        "Prevenimos problemas através de governança preventiva",
                        "Transformamos dados brutos em decisões estratégicas",
                        "Integramos equipes assistenciais e financeiras",
                        "Eliminamos a dependência de conhecimento tácito"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
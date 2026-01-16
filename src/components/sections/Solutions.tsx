import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight, Star, Settings, Box, Search, Users, Activity } from 'lucide-react';
import { Link } from 'react-scroll';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Star,
      title: "SEG - Sustentação Estratégica de Gestão",
      badge: "PRINCIPAL",
      desc: "Governança contínua de dados e processos. Para quem quer transformar ERP em ativo estratégico.",
      features: ["Ciclo de Otimização Mensal", "Auditoria de Aderência", "Comitê Executivo"],
      idealFor: "Instituições maduras buscando excelência",
      highlight: true
    },
    {
      icon: Settings,
      title: "Revitalização de Processos",
      desc: "Projeto estruturado de mapeamento, diagnóstico e redesenho de processos.",
      features: ["Mapeamento AS-IS / TO-BE", "Documentação completa", "Treinamento de equipe"],
      idealFor: "Processos desorganizados ou manuais",
      highlight: false
    },
    {
      icon: Box,
      title: "Implantação e Governança MV",
      desc: "Treinamento especializado + Governança pós-implantação para sistema MV.",
      features: ["Especialistas MV", "Recuperação de módulos", "Homologação de fluxos"],
      idealFor: "Clientes MV Soul / 2000",
      highlight: false
    },
    {
      icon: Search,
      title: "Diagnóstico de Aderência 360°",
      desc: "Auditoria completa de utilização do ERP para identificar gaps.",
      features: ["Raio-X do uso do sistema", "Identificação de desperdícios", "Plano de correção"],
      idealFor: "Suspeita de subutilização",
      highlight: false
    },
    {
      icon: Users,
      title: "Comitê de Governança Executivo",
      desc: "Reuniões mensais estratégicas com análise de KPIs auditados.",
      features: ["Análise de tendências", "Apoio à decisão", "Mentoria para gestores"],
      idealFor: "Diretoria",
      highlight: false
    },
    {
      icon: Activity,
      title: "Desenvolvimento de KPIs",
      desc: "Criação e implementação de indicadores personalizados e confiáveis.",
      features: ["Dashboards PowerBI/Qlik", "Dicionário de dados", "Validação de origem"],
      idealFor: "Gestão cega ou sem dados",
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#002B49 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossas Soluções de Governança
          </h2>
          <p className="text-lg text-gray-600">
            Não vendemos horas. Entregamos transformação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-2xl p-6 border flex flex-col h-full transition-all duration-300 hover:shadow-xl relative ${sol.highlight ? 'bg-white border-primary shadow-lg ring-1 ring-primary/20 scale-105 z-10' : 'bg-gray-50 border-gray-200 hover:bg-white'}`}
            >
              {sol.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
                  {sol.badge}
                </span>
              )}

              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${sol.highlight ? 'bg-primary text-white' : 'bg-white text-primary border border-gray-200'}`}>
                <sol.icon size={24} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{sol.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{sol.desc}</p>

              <div className="space-y-4 mb-6">
                <div className="text-xs font-semibold uppercase text-gray-400 tracking-wider">O que inclui:</div>
                <ul className="space-y-2">
                  {sol.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                       {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100 mt-auto">
                 <div className="text-xs text-gray-500 mb-4">Ideal para: <span className="font-semibold text-gray-700">{sol.idealFor}</span></div>
                 <Link to="final-cta" smooth={true} duration={500}>
                   <Button variant={sol.highlight ? "primary" : "outline"} className="w-full text-sm">
                     Saiba Mais <ArrowRight size={14} className="ml-2" />
                   </Button>
                 </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight, FileText, Activity } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-20 flex items-center bg-primary text-white overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="container mx-auto py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
        
        {/* Content */}
        <div className="flex-1 space-y-8 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs md:text-sm font-medium backdrop-blur-sm"
          >
            <Activity size={14} className="text-secondary" />
            <span>Consultoria de Gestão em Saúde</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          >
            Consultoria e Assessoria Especializada para <span className="text-secondary">Instituições de Saúde</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl"
          >
            Apoiando hospitais e clínicas na transformação de processos e otimização de resultados.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="contact" smooth={true} duration={500}>
              <Button size="lg" className="w-full sm:w-auto bg-white hover:bg-secondary text-primary border-none shadow-lg shadow-black/20">
                Conheça a Ativa
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="checklist" smooth={true} duration={500}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                <FileText className="mr-2 h-5 w-5" />
                Baixar Checklist
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Visual: Split Screen Antes/Depois */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex-1 w-full max-w-lg md:max-w-none relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            {/* Header Mockup */}
            <div className="h-8 bg-black/20 flex items-center px-4 space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <div className="relative h-[400px] bg-white text-gray-900 grid grid-cols-2">
              {/* Antes */}
              <div className="p-4 bg-gray-100 border-r border-gray-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-red-500/5 z-0 group-hover:bg-red-500/10 transition-colors"></div>
                <div className="relative z-10">
                  <span className="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded mb-2">ANTES</span>
                  <div className="space-y-2 opacity-60">
                     <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                     <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                     <div className="h-32 bg-gray-200 border border-gray-300 rounded p-2 text-xs font-mono text-gray-500">
                       ERROR 404
                       <br/>Dependency failed
                       <br/>Manual override required...
                     </div>
                     <div className="h-20 bg-yellow-100 border border-yellow-300 rounded p-2 flex items-center justify-center transform -rotate-2 shadow-sm">
                        <span className="text-xs font-handwriting text-gray-600">Post-it: Ligar pro financeiro</span>
                     </div>
                  </div>
                </div>
              </div>

              {/* Depois */}
              <div className="p-4 bg-white relative overflow-hidden group">
                 <div className="absolute inset-0 bg-green-500/5 z-0 group-hover:bg-green-500/10 transition-colors"></div>
                 <div className="relative z-10">
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded mb-2">AGORA (SEG)</span>
                  <div className="space-y-3">
                     <div className="flex gap-2">
                       <div className="flex-1 h-16 bg-blue-50 rounded-lg border border-blue-100 p-2">
                          <div className="text-[10px] text-gray-500">Faturamento</div>
                          <div className="text-lg font-bold text-blue-700">98.5%</div>
                       </div>
                       <div className="flex-1 h-16 bg-green-50 rounded-lg border border-green-100 p-2">
                          <div className="text-[10px] text-gray-500">Glosas</div>
                          <div className="text-lg font-bold text-green-700">1.2%</div>
                       </div>
                     </div>
                     <div className="h-24 bg-gray-50 rounded border border-gray-100 p-2 flex items-end justify-between gap-1">
                        {[40, 65, 50, 80, 75, 90, 85].map((h, i) => (
                          <div key={i} className="flex-1 bg-blue-500 rounded-t-sm opacity-80" style={{ height: `${h}%`}}></div>
                        ))}
                     </div>
                     <div className="flex items-center gap-2 text-[10px] text-gray-500">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        Dados auditados em tempo real
                     </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Split Line */}
            <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white shadow-lg z-20 flex items-center justify-center -ml-[1px]">
               <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center shadow-md font-bold text-xs pointer-events-none">
                 VS
               </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
};

export default Hero;
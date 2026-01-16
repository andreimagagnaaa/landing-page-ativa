import React from 'react';
import { Award, BadgeCheck } from 'lucide-react';

const PartnershipMV: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200 relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#002B49 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm">
              <Award size={18} />
              Parceria Oficial
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Parceira Oficial com o Líder de Mercado
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Em parceria com a MV, líder em sistemas de gestão hospitalar, oferecemos soluções integradas que aumentam a eficiência e a qualidade dos serviços de saúde. Não somos apenas revendedores. Somos especialistas certificados em extrair 100% do potencial da plataforma através de governança estruturada.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
               <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
                 <BadgeCheck className="text-primary" size={18} />
                 Parceiro Certificado MV
               </div>
               <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
                 <BadgeCheck className="text-primary" size={18} />
                 Especialistas em Governança
               </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Logo Ativa Placeholder */}
             <div className="text-4xl font-bold text-primary">Ativa</div>
             
             <div className="h-12 w-px bg-gray-300"></div>
             
             {/* Logo MV Placeholder (Text based for now as I can't use real image assets easily) */}
             <div className="text-5xl font-extrabold text-[#00965e] tracking-tighter">MV</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnershipMV;
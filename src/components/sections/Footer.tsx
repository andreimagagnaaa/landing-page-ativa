import React from 'react';
import { Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001f35] text-gray-400 py-16 text-sm border-t border-white/5">
       <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
             
             {/* Brand */}
             <div className="space-y-4">
                <div className="text-2xl font-bold text-white flex items-center gap-2">
                   Ativa <span className="text-xs font-normal uppercase border-l border-white/20 pl-2 text-gray-400">Consultoria</span>
                </div>
                <p className="leading-relaxed">
                   Governança Estratégica para Instituições de Saúde. Transformamos seu ERP de custo operacional em ferramenta de lucro.
                </p>
                <div className="flex gap-2 pt-2">
                   <div className="px-2 py-1 bg-white/5 rounded border border-white/10 text-xs">15+ Anos</div>
                   <div className="px-2 py-1 bg-white/5 rounded border border-white/10 text-xs">Parceiro MV</div>
                </div>
             </div>

             {/* Soluções */}
             <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Soluções</h4>
                <ul className="space-y-2">
                   <li><Link to="seg" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">SEG - Sustentação Estratégica</Link></li>
                   <li><Link to="methodology" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Diagnóstico de Aderência</Link></li>
                   <li><Link to="solutions" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Comitê de Governança</Link></li>
                   <li><Link to="solutions" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Revitalização de Processos</Link></li>
                </ul>
             </div>

             {/* Recursos */}
             <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Recursos</h4>
                <ul className="space-y-2">
                   <li><Link to="checklist" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Checklist Gratuito</Link></li>
                   <li><Link to="cases" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Cases de Sucesso</Link></li>
                   <li><Link to="faq" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Perguntas Frequentes</Link></li>
                   <li><Link to="final-cta" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Solicitar Proposta</Link></li>
                </ul>
             </div>

             {/* Contato */}
             <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Contato</h4>
                <ul className="space-y-4">
                   <li className="flex items-start gap-3">
                      <Phone size={16} className="mt-0.5 text-primary" />
                      <span>(11) 99999-9999</span>
                   </li>
                   <li className="flex items-start gap-3">
                      <Mail size={16} className="mt-0.5 text-primary" />
                      <span>contato@ativaconsultoria.com.br</span>
                   </li>
                   <li className="flex items-start gap-3">
                      <MapPin size={16} className="mt-0.5 text-primary" />
                      <span>Av. Paulista, 1000 - São Paulo, SP</span>
                   </li>
                   <li className="flex gap-4 pt-2">
                      <a href="#" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Linkedin size={16} /></a>
                      <a href="#" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"><Instagram size={16} /></a>
                      <a href="#" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"><Youtube size={16} /></a>
                   </li>
                </ul>
             </div>

          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
             <div className="text-xs">© 2026 Ativa Consultoria. Todos os direitos reservados.</div>
             <div className="flex gap-6 text-xs">
                <a href="#" className="hover:text-white">Política de Privacidade</a>
                <a href="#" className="hover:text-white">Termos de Uso</a>
                <a href="#" className="hover:text-white">LGPD</a>
             </div>
          </div>
       </div>
    </footer>
  );
};

export default Footer;
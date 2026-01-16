import React from 'react';
import { Button } from '../ui/Button';
import { Search, FileText, Briefcase, Send, Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';

const FinalCTA: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data: any) => {
    console.log(data);
    alert("Solicitação enviada! (Simulação)");
  };

  return (
    <section className="py-20 bg-primary relative text-white overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="container mx-auto relative z-10">
        
        {/* Top Section: Choice */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para Transformar Dados em Decisão?
          </h2>
          <p className="text-xl text-blue-200 mb-12">
            Escolha como quer começar:
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { 
                title: "Diagnóstico Rápido", 
                icon: Search, 
                desc: "Agende 30min de Diagnóstico Gratuito. Identificamos 3 oportunidades rápidas.", 
                btn: "Agendar Diagnóstico", 
                color: "bg-white/10 hover:bg-white/20 text-white border border-white/20" 
              },
              { 
                title: "Checklist Completo", 
                icon: FileText, 
                desc: "Baixe o Checklist de Saúde do ERP. Faça autoavaliação interna.", 
                btn: "Baixar Checklist", 
                color: "bg-white text-primary hover:bg-secondary border-none" 
              },
              { 
                title: "Proposta Personalizada", 
                icon: Briefcase, 
                desc: "Receba análise customizada para sua instituição e orçamento.", 
                btn: "Solicitar Proposta", 
                color: "bg-white/10 hover:bg-white/20 text-white border border-white/20" 
              }
            ].map((opt, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:bg-white/15 transition-colors flex flex-col text-left">
                <div className="mb-4 p-3 bg-white/10 w-fit rounded-lg">
                  <opt.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{opt.title}</h3>
                <p className="text-blue-100 text-sm mb-6 flex-grow">{opt.desc}</p>
                <Button className={`w-full ${opt.color}`}>
                  {opt.btn}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="flex items-center gap-4 py-8 mb-8 max-w-4xl mx-auto">
           <div className="h-px bg-white/20 flex-1"></div>
           <span className="text-sm uppercase tracking-widest text-white/50">OU Preencha Abaixo</span>
           <div className="h-px bg-white/20 flex-1"></div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-gray-900">
           <div className="text-center mb-8">
             <h3 className="text-2xl font-bold mb-2">Solicite Contato de um Especialista</h3>
             <p className="text-gray-500">Qualificamos sua necessidade para enviar a melhor solução.</p>
           </div>

           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo*</label>
                    <input {...register("name", { required: true })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Seu nome" />
                    {errors.name && <span className="text-xs text-red-500">Obrigatório</span>}
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Corporativo*</label>
                    <input {...register("email", { required: true })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="seu@hospital.com.br" />
                    {errors.email && <span className="text-xs text-red-500">Obrigatório</span>}
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp*</label>
                    <input {...register("phone", { required: true })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="(00) 00000-0000" />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cargo*</label>
                    <input {...register("role", { required: true })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Seu cargo" />
                 </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Instituição*</label>
                    <input {...register("company", { required: true })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Nome" />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
                    <select {...register("type")} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white">
                       <option value="">Selecione...</option>
                       <option value="hospital">Hospital</option>
                       <option value="clinica">Clínica</option>
                       <option value="laboratorio">Laboratório</option>
                       <option value="outro">Outro</option>
                    </select>
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Porte</label>
                    <select {...register("size")} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white">
                       <option value="">Selecione...</option>
                       <option value="pequeno">Pequeno</option>
                       <option value="medio">Médio</option>
                       <option value="grande">Grande</option>
                    </select>
                 </div>
              </div>

              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Principal Desafio</label>
                  <textarea {...register("challenge")} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all h-24 resize-none" placeholder="Descreva brevemente seu maior desafio atual..." />
              </div>

              <div className="flex items-start gap-3">
                 <input type="checkbox" className="mt-1 w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary" id="lgpd" required />
                 <label htmlFor="lgpd" className="text-sm text-gray-500">Concordo em receber contato da Ativa Consultoria. Seus dados estão protegidos conforme nossa Política de Privacidade.</label>
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg h-14">
                 <Send className="mr-2" size={20} /> Enviar Solicitação
              </Button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                 <Lock size={12} />
                 <span>Dados criptografados e seguros.</span>
              </div>
           </form>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-scroll';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Qual a diferença entre vocês e um suporte técnico comum?",
      answer: "Suporte técnico é reativo: você liga quando algo quebra. Nós somos governança estratégica: monitoramos processos para que não quebrem, e principalmente, para que gerem dados confiáveis para a diretoria. Atuamos no nível de negócio, não apenas de TI."
    },
    {
      question: "Como garantem que os dados estarão realmente confiáveis?",
      answer: "Utilizamos uma metodologia proprietária de 'Validação de Ponta a Ponta'. Auditamos a entrada do dado (recepção/assistência), o processamento (faturamento/estoque) e a saída (financeiro/contabilidade). Se o fluxo está correto, o dado é uma consequência matemática inevitável."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Nossos clientes costumam ver os primeiros insights de desperdício em 30 dias (Diagnóstico). Mudanças mensuráveis em fluxo e recuperação de receita ocorrem geralmente em 90 dias. A transformação cultural completa leva de 6 a 12 meses."
    },
    {
      question: "Precisamos trocar de sistema para trabalhar com vocês?",
      answer: "Não. Otimizamos o que você já tem. Somos especialistas na plataforma MV, mas nossa metodologia de governança de processos se aplica a qualquer ERP hospitalar (Tasy, Wareline, Protheus, etc)."
    },
    {
      question: "Vocês substituem nossa equipe de TI?",
      answer: "Não. Trabalhamos EM CONJUNTO com sua TI. Muitas vezes a TI interna está sobrecarregada com chamados de impressora e senha. Nós entramos para discutir estratégia e regras de negócio com o sistema, liberando a TI para focar em infraestrutura e inovação."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200 relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#002B49 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
             <HelpCircle className="text-primary" />Perguntas Frequentes
          </h2>
          <p className="text-gray-600">
            Dúvidas comuns de Diretores e Gestores Hospitalares
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-800 pr-8">{faq.question}</span>
                {openIndex === idx ? <Minus className="shrink-0 text-primary" /> : <Plus className="shrink-0 text-gray-400" />}
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-gray-50/50"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-4 pt-4 m-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="item-center text-center mt-12 bg-secondary p-8 rounded-xl border border-secondary">
           <p className="text-gray-800 font-medium mb-4">Ainda tem dúvidas sobre como podemos ajudar?</p>
           <Link to="final-cta" smooth={true} duration={500}>
             <Button className="bg-primary hover:bg-primary/90 text-white">Falar com Especialista</Button>
           </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
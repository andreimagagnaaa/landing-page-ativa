import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  Shield,
  TrendingDown,
  BarChart2,
  Database,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  AlertTriangle,
  Activity,
  Menu,
  X,
  Zap,
} from 'lucide-react';

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// ─── Header ──────────────────────────────────────────────────────────────────

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5',
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 focus:outline-none">
          <span className={cn('text-xl font-bold', scrolled ? 'text-primary' : 'text-white')}>
            Ativa
          </span>
          <span
            className={cn(
              'text-xs uppercase tracking-widest border-l pl-2',
              scrolled ? 'text-gray-400 border-gray-200' : 'text-white/60 border-white/30',
            )}
          >
            Consultoria
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {[
            ['Diagnóstico', 'pain'],
            ['Soluções', 'solutions'],
            ['Por que a Ativa', 'authority'],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={cn(
                'text-sm font-medium transition-colors',
                scrolled ? 'text-gray-600 hover:text-primary' : 'text-white/75 hover:text-white',
              )}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('cta')}
            className={cn(
              'text-sm font-semibold px-5 py-2.5 rounded-md transition-colors',
              scrolled
                ? 'bg-primary text-white hover:bg-primary/90'
                : 'bg-white text-primary hover:bg-secondary',
            )}
          >
            Diagnóstico de Processos
          </button>
        </nav>

        <button
          className={cn('md:hidden', scrolled ? 'text-primary' : 'text-white')}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-5 gap-4">
            {[
              ['Diagnóstico', 'pain'],
              ['Soluções', 'solutions'],
              ['Por que a Ativa', 'authority'],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm text-gray-700 text-left font-medium"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('cta')}
              className="bg-primary text-white text-sm font-semibold px-5 py-3 rounded-md"
            >
              Diagnóstico de Processos
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

// ─── Hero (2 colunas: copy + form inline) ────────────────────────────────────

interface HeroFormData {
  name: string;
  hospital: string;
  role: string;
  whatsapp: string;
}

const Hero: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<HeroFormData>();

  const onSubmit = (data: HeroFormData) => {
    const msg = encodeURIComponent(
      `Olá! Sou ${data.name}, ${data.role} no ${data.hospital}. Gostaria de solicitar um diagnóstico de processos MV.`,
    );
    window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-primary text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 md:py-36 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Coluna esquerda: copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs uppercase tracking-widest font-semibold text-white/50 mb-5"
            >
              Para quem já usa o sistema MV
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-title text-3xl md:text-4xl xl:text-5xl font-bold leading-tight mb-6"
            >
              Maximize a eficiência do seu sistema de gestão hospitalar.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/70 text-base md:text-lg leading-relaxed mb-8"
            >
              Processos manuais, glosas recorrentes e ausência de indicadores não são falha do sistema.
              São sintomas de que a regra de negócio nunca foi implementada corretamente.
              A Ativa corrige isso.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {[
                'Usa sistema MV Soul ou 2000',
                'Glosas acima do aceitável',
                'Faturamento manual',
                'Sem KPIs confiáveis',
              ].map((chip) => (
                <span
                  key={chip}
                  className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-white/10 border border-white/15 rounded-full"
                >
                  <CheckCircle2 size={10} className="text-secondary flex-shrink-0" />
                  {chip}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xs text-white/40"
            >
              Diagnóstico gratuito · Sem compromisso
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="hidden md:flex items-center gap-2 mt-14 text-white/30 text-xs"
            >
              <ChevronDown size={16} className="animate-bounce" />
              Role para ver as soluções
            </motion.div>
          </div>

          {/* Coluna direita: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="bg-white rounded-2xl p-8 shadow-2xl shadow-black/30 text-primary"
          >
            {isSubmitSuccessful ? (
              <div className="text-center py-10">
                <CheckCircle2 size={40} className="text-primary mx-auto mb-4" />
                <h3 className="font-title text-xl font-bold mb-2">Redirecionando para WhatsApp</h3>
                <p className="text-sm text-gray-500">
                  Se não abriu automaticamente, verifique bloqueador de pop-ups.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h2 className="font-title text-xl font-bold text-primary mb-1">
                    Solicite seu diagnóstico de processos
                  </h2>
                  <p className="text-xs text-gray-400">
                    Identificamos os gargalos do seu ciclo de receita.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1.5">
                      Nome completo
                    </label>
                    <input
                      {...register('name', { required: 'Campo obrigatório' })}
                      className={cn(
                        'w-full border rounded-lg px-4 py-3 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
                        errors.name ? 'border-red-400' : 'border-gray-200',
                      )}
                      placeholder="Seu nome"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1.5">
                      Hospital / Instituição
                    </label>
                    <input
                      {...register('hospital', { required: 'Campo obrigatório' })}
                      className={cn(
                        'w-full border rounded-lg px-4 py-3 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
                        errors.hospital ? 'border-red-400' : 'border-gray-200',
                      )}
                      placeholder="Nome da instituição"
                    />
                    {errors.hospital && (
                      <p className="text-xs text-red-500 mt-1">{errors.hospital.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-primary mb-1.5">
                        Cargo
                      </label>
                      <input
                        {...register('role', { required: 'Campo obrigatório' })}
                        className={cn(
                          'w-full border rounded-lg px-4 py-3 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
                          errors.role ? 'border-red-400' : 'border-gray-200',
                        )}
                        placeholder="Ex: Gerente"
                      />
                      {errors.role && (
                        <p className="text-xs text-red-500 mt-1">{errors.role.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-primary mb-1.5">
                        WhatsApp
                      </label>
                      <input
                        {...register('whatsapp', {
                          required: 'Obrigatório',
                          pattern: {
                            value: /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/,
                            message: 'Número inválido',
                          },
                        })}
                        type="tel"
                        className={cn(
                          'w-full border rounded-lg px-4 py-3 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
                          errors.whatsapp ? 'border-red-400' : 'border-gray-200',
                        )}
                        placeholder="(11) 99999-9999"
                      />
                      {errors.whatsapp && (
                        <p className="text-xs text-red-500 mt-1">{errors.whatsapp.message}</p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-semibold py-3.5 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-sm mt-2"
                  >
                    Solicitar Diagnóstico Gratuito
                    <ArrowRight size={16} />
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    Seus dados são usados apenas para entrar em contato.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── Pain (2 colunas: título fixo + cards) ───────────────────────────────────

const painPoints = [
  {
    icon: TrendingDown,
    title: 'Glosas recorrentes e sem diagnóstico',
    desc: 'Parametrização incorreta e regras fora do padrão geram glosas que se acumulam. Raramente são investigadas na raiz e o sistema MV tem tudo para resolver isso.',
  },
  {
    icon: Activity,
    title: 'Ciclo de receita travado',
    desc: 'Faturamento acumulado, aprovações manuais e falta de fluxo estruturado atrasam o caixa. Cada dia de atraso tem custo real para a instituição.',
  },
  {
    icon: BarChart2,
    title: 'Decisões sem dados confiáveis',
    desc: 'Relatórios contraditórios, KPIs inexistentes ou sem validação de origem. A diretoria fica sem base sólida para decidir onde cortar ou onde investir.',
  },
  {
    icon: Zap,
    title: 'Operação dependente de pessoas, não de processo',
    desc: 'Quando o conhecimento está na cabeça de alguém e não no sistema, qualquer troca de equipe trava a operação. Processo documentado e sistematizado resolve.',
  },
];

const Pain: React.FC = () => (
  <section id="pain" className="py-20 bg-secondary">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">

        <div className="md:sticky md:top-28">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={15} className="text-primary/60" />
            <span className="text-xs uppercase tracking-widest font-semibold text-primary/50">
              Diagnóstico
            </span>
          </div>
          <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mb-5 leading-tight">
            Se processos manuais dominam sua operação, o sistema MV não está entregando o que deveria.
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            O sistema foi instalado. Mas sem a regra de negócio configurada corretamente,
            a eficiência que ele promete fica no papel.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {painPoints.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-xl p-6 border border-primary/10 shadow-sm"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                <Icon size={18} className="text-primary" />
              </div>
              <h3 className="font-title text-base font-bold text-primary mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── Solutions (2 colunas 2x2) ───────────────────────────────────────────────

const services = [
  {
    icon: TrendingDown,
    badge: null,
    title: 'Revitalização do Ciclo de Receita',
    desc: 'Auditoria end-to-end do faturamento: identificamos onde estão os problemas, por que acontecem e o que precisa ser corrigido no sistema e no processo.',
    items: [
      'Diagnóstico de gap de parametrização MV',
      'Redesenho do fluxo de faturamento',
      'Redução de glosas com resultado mensurável',
    ],
    highlight: true,
  },
  {
    icon: Shield,
    badge: null,
    title: 'Melhoria Contínua de Processos',
    desc: 'Além de resolver chamados: entendemos a regra de negócio hospitalar dentro do MV e entregamos otimização mês a mês, não só suporte reativo.',
    items: [
      'Foco em regra de negócio, não só TI',
      'Ciclo mensal de otimização',
      'Governança pós-implantação',
    ],
    highlight: false,
  },
  {
    icon: BarChart2,
    badge: null,
    title: 'Dashboards e KPIs Estratégicos',
    desc: 'Indicadores validados na origem, sem relatórios contraditórios. A diretoria passa a tomar decisões com dados que fazem sentido.',
    items: [
      'Indicadores personalizados para sua realidade',
      'Validação de fonte e dicionário de dados',
      'Dashboards intuitivos',
    ],
    highlight: false,
  },
  {
    icon: Database,
    badge: null,
    title: 'Estruturação da Central de Cadastro',
    desc: 'Base de dados limpa e processos de cadastro estruturados. Pré-requisito para qualquer faturamento sem glosa e ciclo de receita eficiente.',
    items: [
      'Higienização e padronização de dados',
      'Processos de cadastro documentados',
      'Conformidade com regras das operadoras',
    ],
    highlight: false,
  },
];

const Solutions: React.FC = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section id="solutions" className="py-20 bg-white relative">
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#002B49 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-8 items-end mb-14">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-primary/40 mb-3 block">
              Soluções
            </span>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary leading-tight">
              Quatro produtos.<br />Uma premissa: resultado no ciclo de receita.
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-sm text-gray-500 md:text-right leading-relaxed">
              Não vendemos horas de suporte.<br />
              Entregamos melhoria mensurável em processo e faturamento.
            </p>
            <button
              onClick={() => scrollTo('cta')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/20 rounded-md px-5 py-2.5 hover:bg-primary hover:text-white transition-colors"
            >
              Ver qual se aplica ao seu caso <ArrowRight size={15} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map(({ icon: Icon, badge, title, desc, items, highlight }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={cn(
                'rounded-2xl p-8 border flex flex-col gap-5 transition-shadow',
                highlight
                  ? 'bg-primary text-white border-primary shadow-xl'
                  : 'bg-white text-primary border-primary/10 shadow-sm hover:shadow-md',
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0',
                    highlight ? 'bg-white/10' : 'bg-primary/5',
                  )}
                >
                  <Icon size={20} className={highlight ? 'text-white' : 'text-primary'} />
                </div>
                {badge && (
                  <span
                    className={cn(
                      'text-xs font-semibold px-2.5 py-1 rounded-full',
                      highlight ? 'bg-white/15 text-white' : 'bg-primary/10 text-primary',
                    )}
                  >
                    {badge}
                  </span>
                )}
              </div>

              <div>
                <h3
                  className={cn(
                    'font-title text-lg font-bold mb-2 leading-snug',
                    highlight ? 'text-white' : 'text-primary',
                  )}
                >
                  {title}
                </h3>
                <p
                  className={cn(
                    'text-sm leading-relaxed',
                    highlight ? 'text-white/70' : 'text-gray-500',
                  )}
                >
                  {desc}
                </p>
              </div>

              <ul className="space-y-2">
                {items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <CheckCircle2
                      size={14}
                      className={cn(
                        'mt-0.5 flex-shrink-0',
                        highlight ? 'text-white/60' : 'text-primary/50',
                      )}
                    />
                    <span className={highlight ? 'text-white/85' : 'text-gray-600'}>{item}</span>
                  </li>
                ))}
              </ul>

              {highlight && (
                <button
                  onClick={() => scrollTo('cta')}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 border border-white/20 rounded-lg px-5 py-2.5 hover:bg-white/20 transition-colors w-fit"
                >
                  Solicitar diagnóstico <ArrowRight size={14} />
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Authority (2 colunas: título fixo + cards) ──────────────────────────────

const differentials = [
  {
    num: '01',
    title: 'Entendemos a regra de negócio hospitalar',
    desc: 'Entendemos o fluxo de receita, as regras das operadoras e como o MV deve ser configurado para cada realidade. É isso que nos diferencia de TI básico.',
  },
  {
    num: '02',
    title: 'Equipe qualificada com experiência real em saúde',
    desc: 'Nossa equipe tem vivência em SUS, convênios e nas áreas que impactam o ciclo da receita: faturamento, auditoria e gestão hospitalar. Conhecemos o negócio antes de tocar no sistema.',
  },
  {
    num: '03',
    title: 'Especialistas no sistema que você já tem',
    desc: 'Não vendemos implantação de um sistema novo. Extraímos o máximo do sistema MV que você já pagou e que ainda não está entregando tudo que poderia.',
  },
];

const Authority: React.FC = () => (
  <section id="authority" className="py-20 bg-primary text-white relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.07] pointer-events-none"
      style={{
        backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    />
    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">

        <div className="md:sticky md:top-28">
          <span className="text-xs uppercase tracking-widest font-semibold text-white/40 mb-4 block">
            Por que a Ativa
          </span>
          <h2 className="font-title text-3xl md:text-4xl font-bold leading-tight mb-5">
            Especialistas em resultado,
            <br />não em chamados.
          </h2>
          <p className="text-sm text-white/60 leading-relaxed">
            Existe suporte de TI. E existe consultoria e assessoria que usa o sistema como alavanca de resultado financeiro.
            A diferença está em quem conhece as duas pontas: sistema e negócio.
          </p>
        </div>

        <div className="space-y-4">
          {differentials.map(({ num, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-7 flex gap-6 items-start"
            >
              <span className="font-title text-2xl font-bold text-white/15 flex-shrink-0 leading-none pt-0.5">
                {num}
              </span>
              <div>
                <h3 className="font-title text-base font-bold mb-2">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── CTA (2 colunas: benefícios + form) ──────────────────────────────────────

interface CTAFormData {
  name: string;
  hospital: string;
  role: string;
  whatsapp: string;
}

const CTA: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<CTAFormData>();

  const onSubmit = (data: CTAFormData) => {
    const msg = encodeURIComponent(
      `Olá! Sou ${data.name}, ${data.role} no ${data.hospital}. Gostaria de solicitar um diagnóstico de processos MV.`,
    );
    window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
  };

  return (
    <section id="cta" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-primary/40 mb-4 block">
              Próximo passo
            </span>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary leading-tight mb-5">
              Agende uma conversa com nosso consultor.
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              Um especialista analisa seu ciclo de receita, mapeia os principais gargalos
              e indica o que pode ser corrigido no seu sistema de gestão hospitalar.
              Sem custo, sem compromisso.
            </p>

            <ul className="space-y-4">
              {[
                ['Diagnóstico gratuito', 'Sem custo para avaliar onde estão os problemas.'],
                ['Especialistas em MV', 'Conduzido por quem conhece o sistema e a regra de negócio.'],
                ['Próximos passos claros', 'Você sai da conversa com um plano de ação para o seu ciclo de receita.'],
              ].map(([label, detail]) => (
                <li key={label} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-primary block">{label}</span>
                    <span className="text-xs text-gray-500">{detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-primary/10">
            {isSubmitSuccessful ? (
              <div className="text-center py-10">
                <CheckCircle2 size={40} className="text-primary mx-auto mb-4" />
                <h3 className="font-title text-xl font-bold text-primary mb-2">
                  Redirecionando para WhatsApp
                </h3>
                <p className="text-sm text-gray-500">
                  Se não abriu automaticamente, verifique bloqueador de pop-ups.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-primary mb-1.5">
                    Nome completo
                  </label>
                  <input
                    {...register('name', { required: 'Campo obrigatório' })}
                    className={cn(
                      'w-full border rounded-lg px-4 py-3 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
                      errors.name ? 'border-red-400' : 'border-gray-200',
                    )}
                    placeholder="Seu nome"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-primary mb-1.5">
                    Hospital / Instituição
                  </label>
                  <input
                    {...register('hospital', { required: 'Campo obrigatório' })}
                    className={cn(
                      'w-full border rounded-lg px-4 py-3 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
                      errors.hospital ? 'border-red-400' : 'border-gray-200',
                    )}
                    placeholder="Nome da instituição"
                  />
                  {errors.hospital && (
                    <p className="text-xs text-red-500 mt-1">{errors.hospital.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1.5">
                      Cargo
                    </label>
                    <input
                      {...register('role', { required: 'Campo obrigatório' })}
                      className={cn(
                        'w-full border rounded-lg px-4 py-3 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
                        errors.role ? 'border-red-400' : 'border-gray-200',
                      )}
                      placeholder="Ex: Gerente"
                    />
                    {errors.role && (
                      <p className="text-xs text-red-500 mt-1">{errors.role.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1.5">
                      WhatsApp
                    </label>
                    <input
                      {...register('whatsapp', {
                        required: 'Obrigatório',
                        pattern: {
                          value: /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/,
                          message: 'Número inválido',
                        },
                      })}
                      type="tel"
                      className={cn(
                        'w-full border rounded-lg px-4 py-3 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
                        errors.whatsapp ? 'border-red-400' : 'border-gray-200',
                      )}
                      placeholder="(11) 99999-9999"
                    />
                    {errors.whatsapp && (
                      <p className="text-xs text-red-500 mt-1">{errors.whatsapp.message}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-semibold py-3.5 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  Solicitar Diagnóstico Gratuito
                  <ArrowRight size={16} />
                </button>

                <p className="text-center text-xs text-gray-400">
                  Seus dados são usados apenas para entrar em contato.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Footer ──────────────────────────────────────────────────────────────────

const Footer: React.FC = () => (
  <footer className="bg-primary py-8">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-bold text-white text-lg">Ativa Consultoria</span>
      <span className="text-xs text-white/40">
        © {new Date().getFullYear()} Ativa Consultoria. Todos os direitos reservados.
      </span>
    </div>
  </footer>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const NewLP: React.FC = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Pain />
      <Solutions />
      <Authority />
      <CTA />
    </main>
    <Footer />
  </>
);

export default NewLP;

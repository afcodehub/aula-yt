import { useEffect, useState } from 'react'
import {
  ArrowRight, BarChart3, Check, ChevronDown, CirclePlay, Clock3, Code2,
  GraduationCap, Menu, MessageCircle, Play, Quote, Sparkles, Star, X,
} from 'lucide-react'

const plans = [
  { name: 'Essencial', monthly: 29, annual: 23, description: 'Para quem está começando a ensinar online.', features: ['Até 3 cursos', '500 alunos', 'Analytics essenciais', 'Suporte por e-mail'] },
  { name: 'Pro', monthly: 59, annual: 47, description: 'Para criadores que querem crescer mais rápido.', features: ['Cursos ilimitados', 'Alunos ilimitados', 'Analytics avançados', 'Automação de vendas', 'Certificados personalizados'], featured: true },
  { name: 'Studio', monthly: 119, annual: 95, description: 'Para equipes e operações educacionais.', features: ['Tudo do Pro', 'Até 10 membros', 'Domínio personalizado', 'Suporte prioritário', 'Relatórios para equipes'] },
]

const testimonials = [
  { quote: 'Em duas semanas, reorganizei meu curso inteiro e a taxa de conclusão praticamente dobrou.', name: 'Marina Alves', role: 'Mentora de negócios', initials: 'MA' },
  { quote: 'Finalmente tenho uma plataforma que parece tão profissional quanto o conteúdo que entrego.', name: 'Rafael Costa', role: 'Professor e criador', initials: 'RC' },
  { quote: 'O mais valioso é enxergar onde meus alunos travam e agir antes de eles desistirem.', name: 'Luiza Martins', role: 'Especialista em marketing', initials: 'LM' },
]

const faqs = [
  ['Preciso saber programação?', 'Não. O AulaYT foi pensado para você publicar, organizar e vender aulas sem depender de código.'],
  ['Posso testar antes de pagar?', 'Sim. Você pode começar gratuitamente e decidir quando quiser avançar para um plano pago.'],
  ['Meus alunos precisam criar uma conta?', 'Sim, para acompanhar progresso, certificados e histórico de aulas com segurança.'],
  ['Consigo migrar um curso que já existe?', 'Sim. Nossa estrutura permite importar conteúdos e reorganizar sua experiência sem começar do zero.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [annual, setAnnual] = useState(true)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible')
    }), { threshold: 0.08 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return <div className="min-h-screen overflow-hidden bg-paper text-ink selection:bg-lime selection:text-ink">
    <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-paper/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button onClick={() => go('top')} className="flex items-center gap-2 font-black tracking-tight" aria-label="Ir para o início">
          <span className="grid size-9 place-items-center rounded-xl bg-ink text-lime"><GraduationCap size={21} /></span>
          <span className="text-xl">Aula<span className="text-black/45">YT</span></span>
        </button>
        <div className="hidden items-center gap-8 text-sm font-semibold text-black/60 md:flex">
          {['Benefícios', 'Como funciona', 'Preços', 'FAQ'].map((item) => <button key={item} onClick={() => go(item === 'Benefícios' ? 'benefits' : item === 'Como funciona' ? 'preview' : item === 'Preços' ? 'pricing' : 'faq')} className="transition hover:text-ink">{item}</button>)}
        </div>
        <div className="hidden items-center gap-3 md:flex"><button onClick={() => go('pricing')} className="rounded-full px-4 py-2 text-sm font-bold">Entrar</button><button onClick={() => go('pricing')} className="rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5">Começar grátis <ArrowRight className="ml-1 inline" size={15} /></button></div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X /> : <Menu />}</button>
      </nav>
      {menuOpen && <div className="border-t border-black/5 bg-paper px-5 pb-5 pt-3 md:hidden"><div className="grid gap-1">{['benefits','preview','pricing','faq'].map((id) => <button key={id} onClick={() => go(id)} className="rounded-xl px-3 py-3 text-left font-semibold capitalize hover:bg-black/5">{id === 'benefits' ? 'Benefícios' : id === 'preview' ? 'Como funciona' : id === 'pricing' ? 'Preços' : 'FAQ'}</button>)}<button onClick={() => go('pricing')} className="mt-2 rounded-xl bg-ink py-3 font-bold text-white">Começar grátis</button></div></div>}
    </header>

    <main id="top">
      <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-36 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-28 lg:pt-48">
        <div className="relative z-10 reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-bold shadow-sm"><span className="size-1.5 rounded-full bg-lime ring-4 ring-lime/20" /> NOVO · AulaYT 2.0 <Sparkles size={13} /></div>
          <h1 className="max-w-3xl text-5xl font-black leading-[.94] tracking-[-.055em] sm:text-6xl lg:text-[76px]">Transforme seu conhecimento em <span className="relative inline-block"><span className="relative z-10">aulas que prendem.</span><span className="absolute bottom-1 left-0 -z-0 h-3 w-full -rotate-1 bg-lime/70" /></span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-black/55">Crie experiências de aprendizagem bonitas, simples e viciantes — sem código, sem complicação e com tudo que você precisa para crescer.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><button onClick={() => go('pricing')} className="group rounded-full bg-ink px-6 py-4 font-bold text-white shadow-xl shadow-black/10 transition hover:-translate-y-1">Criar minha primeira aula <ArrowRight className="ml-2 inline transition group-hover:translate-x-1" size={17} /></button><button onClick={() => go('preview')} className="rounded-full border border-black/10 bg-white px-6 py-4 font-bold transition hover:bg-black/5"><CirclePlay className="mr-2 inline" size={17} /> Ver como funciona</button></div>
          <div className="mt-8 flex items-center gap-4 text-xs font-semibold text-black/45"><div className="flex -space-x-2"><span className="avatar">MA</span><span className="avatar">RC</span><span className="avatar">LM</span><span className="avatar">+2k</span></div><span>Mais de 2.000 criadores já ensinam com o AulaYT</span></div>
        </div>
        <div className="relative reveal delay-1">
          <div className="absolute -inset-8 rounded-full bg-lime/15 blur-3xl" />
          <div className="relative rotate-1 rounded-[28px] border border-black/10 bg-white p-3 shadow-2xl shadow-black/10">
            <div className="overflow-hidden rounded-[20px] bg-[#111113] text-white">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><div className="flex items-center gap-2 text-sm font-bold"><span className="grid size-7 place-items-center rounded-lg bg-lime text-ink"><GraduationCap size={15} /></span>AulaYT</div><div className="flex gap-1.5"><span className="size-2 rounded-full bg-white/20"/><span className="size-2 rounded-full bg-white/20"/><span className="size-2 rounded-full bg-white/20"/></div></div>
              <div className="grid gap-4 p-5 sm:grid-cols-[.7fr_1.3fr]"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/35">Seu curso</p><h3 className="mt-2 text-2xl font-black leading-tight">Marketing que<br/>gera resultado.</h3><div className="mt-7 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[72%] rounded-full bg-lime" /></div><p className="mt-2 text-[10px] text-white/40">72% concluído</p></div><div className="rounded-2xl bg-white/[.06] p-3"><div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-lime/30 via-white/5 to-white/10"><div className="absolute inset-0 grid place-items-center"><span className="grid size-12 place-items-center rounded-full bg-lime text-ink shadow-lg"><Play fill="currentColor" size={18}/></span></div><div className="absolute bottom-2 left-2 rounded-md bg-black/50 px-2 py-1 text-[9px] font-bold">Aula 07 · 12:42</div></div><div className="mt-3 flex items-center justify-between"><div><p className="text-xs font-bold">A oferta irresistível</p><p className="mt-1 text-[10px] text-white/40">Próxima aula</p></div><ArrowRight size={15} className="text-white/35"/></div></div></div>
              <div className="grid grid-cols-3 gap-2 border-t border-white/10 p-5"><div className="metric"><BarChart3 size={14}/><b>4.8x</b><span>engajamento</span></div><div className="metric"><Clock3 size={14}/><b>87%</b><span>conclusão</span></div><div className="metric"><MessageCircle size={14}/><b>2.4k</b><span>alunos ativos</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-white/60 py-7"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 text-xs font-black uppercase tracking-[.15em] text-black/25 lg:justify-between lg:px-8"><span>+2.000 criadores</span><span>98% satisfação</span><span>120k+ alunos</span><span>4.9/5 avaliação</span><span>Feito para creators</span></div></section>

      <section id="benefits" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="reveal max-w-2xl"><p className="eyebrow">Tudo em um só lugar</p><h2 className="section-title">Menos ferramenta.<br/><span className="text-black/35">Mais aula.</span></h2><p className="mt-5 text-lg leading-8 text-black/50">Uma plataforma construída para tirar o peso da operação e colocar você de volta no que importa: ensinar.</p></div><div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{[
        [Sparkles, 'Experiência premium', 'Uma área de alunos linda e intuitiva, pronta para representar o valor do seu conteúdo.', '01'],
        [BarChart3, 'Analytics que ajudam', 'Descubra onde seus alunos avançam, travam e abandonam — em um olhar.', '02'],
        [Code2, 'Zero código', 'Publique aulas, organize módulos e personalize sua marca sem abrir um editor de código.', '03'],
        [MessageCircle, 'Comunidade ativa', 'Transforme aulas em conversa com comentários, feedbacks e momentos de troca.', '04'],
        [Clock3, 'Automação simples', 'Economize horas com lembretes, progresso e jornadas que acontecem sozinhas.', '05'],
        [GraduationCap, 'Certificados', 'Reconheça conquistas com certificados personalizados e prontos para compartilhar.', '06'],
      ].map(([Icon, title, text, num]) => { const I = Icon as typeof Sparkles; return <article key={String(title)} className="group reveal rounded-3xl border border-black/8 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"><div className="flex items-start justify-between"><span className="grid size-11 place-items-center rounded-2xl bg-ink text-lime"><I size={20}/></span><span className="text-xs font-black text-black/20">{String(num)}</span></div><h3 className="mt-8 text-xl font-black">{String(title)}</h3><p className="mt-2 leading-7 text-black/50">{String(text)}</p></article> })}</div></section>

      <section id="preview" className="bg-ink py-24 text-white lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr]"><div className="reveal"><p className="eyebrow text-lime">Feito para ensinar</p><h2 className="section-title text-white">Do primeiro clique<br/>ao <span className="text-white/35">“terminei!”</span></h2><p className="mt-5 text-lg leading-8 text-white/45">Cada detalhe foi pensado para manter seus alunos no fluxo: conteúdo claro, progresso visível e uma próxima aula sempre à vista.</p><div className="mt-9 grid gap-5">{[['01','Organize','Módulos, aulas e materiais em uma estrutura que faz sentido.'],['02','Engaje','Vídeo, texto, comentários e progresso sem distrações.'],['03','Converta','Uma experiência profissional que ajuda seu conhecimento a vender.']].map(([n,t,d]) => <div key={n} className="flex gap-4"><span className="font-mono text-xs text-lime/60">{n}</span><div><b>{t}</b><p className="mt-1 text-sm leading-6 text-white/40">{d}</p></div></div>)}</div></div><div className="reveal delay-1"><div className="rounded-[30px] border border-white/10 bg-white/[.04] p-3 shadow-glow"><div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#18181b]"><div className="flex items-center justify-between px-5 py-4"><span className="text-xs font-bold">Visão geral do curso</span><span className="rounded-full bg-lime/10 px-3 py-1 text-[10px] font-bold text-lime">Ao vivo</span></div><div className="grid gap-3 p-4 sm:grid-cols-[1fr_1.35fr]"><div className="space-y-2">{['Boas-vindas', 'Fundamentos', 'A oferta irresistível', 'Métricas e escala'].map((x,i)=><div key={x} className={`rounded-xl border p-3 text-xs ${i===2?'border-lime/30 bg-lime/10 text-white':'border-white/5 bg-white/[.03] text-white/45'}`}><div className="flex justify-between"><span>{x}</span><Check size={13} className={i<2?'text-lime':'text-white/20'}/></div><div className="mt-2 h-1 rounded-full bg-white/10"><div className="h-full rounded-full bg-lime" style={{width:`${[100,100,72,18][i]}%`}}/></div></div>)}</div><div className="rounded-2xl bg-white/[.04] p-3"><div className="aspect-video rounded-xl bg-gradient-to-br from-lime/20 to-white/5"><div className="grid h-full place-items-center"><span className="grid size-14 place-items-center rounded-full bg-lime text-ink"><Play fill="currentColor" size={21}/></span></div></div><div className="mt-4"><p className="font-bold">A oferta irresistível</p><p className="mt-1 text-xs text-white/35">Aprenda a construir uma oferta que seus clientes não conseguem ignorar.</p></div></div></div></div></div></div></div></div></section>

      <section id="pricing" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="reveal text-center"><p className="eyebrow">Planos simples</p><h2 className="section-title">Comece pequeno.<br/><span className="text-black/35">Cresça sem susto.</span></h2><div className="mt-7 inline-flex rounded-full border border-black/10 bg-white p-1 text-sm font-bold"><button onClick={() => setAnnual(false)} className={`rounded-full px-4 py-2 ${!annual?'bg-ink text-white':''}`}>Mensal</button><button onClick={() => setAnnual(true)} className={`rounded-full px-4 py-2 ${annual?'bg-ink text-white':''}`}>Anual <span className="ml-1 text-lime">-20%</span></button></div></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{plans.map((plan) => <article key={plan.name} className={`reveal rounded-3xl border p-7 ${plan.featured?'border-ink bg-ink text-white shadow-2xl shadow-black/10':'border-black/8 bg-white'}`}>{plan.featured && <div className="mb-5 inline-flex rounded-full bg-lime px-3 py-1 text-[10px] font-black uppercase tracking-wider text-ink">Mais escolhido</div>}<h3 className="text-xl font-black">{plan.name}</h3><p className={`mt-2 min-h-12 text-sm leading-6 ${plan.featured?'text-white/45':'text-black/45'}`}>{plan.description}</p><div className="mt-7 flex items-end gap-1"><span className="text-5xl font-black tracking-tight">R$ {annual?plan.annual:plan.monthly}</span><span className={plan.featured?'text-white/35':'text-black/35'}>/mês</span></div><button onClick={() => go('top')} className={`mt-7 w-full rounded-full py-3.5 text-sm font-black transition hover:-translate-y-0.5 ${plan.featured?'bg-lime text-ink':'bg-ink text-white'}`}>Começar agora <ArrowRight className="ml-1 inline" size={15}/></button><div className={`my-7 h-px ${plan.featured?'bg-white/10':'bg-black/7'}`}/><ul className="space-y-3">{plan.features.map(f=><li key={f} className="flex gap-2 text-sm"><Check size={17} className={plan.featured?'text-lime':'text-black'}/><span>{f}</span></li>)}</ul></article>)}</div></section>

      <section className="border-y border-black/5 bg-white/60 py-24 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="reveal text-center"><p className="eyebrow">Quem já usa</p><h2 className="section-title">“Finalmente, uma plataforma<br/>que <span className="text-black/35">não atrapalha.”</span></h2></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{testimonials.map((t) => <article key={t.name} className="reveal rounded-3xl border border-black/8 bg-paper p-7"><Quote className="text-black/15" size={26}/><p className="mt-6 text-lg font-bold leading-8">“{t.quote}”</p><div className="mt-7 flex items-center gap-3"><span className="avatar size-10">{t.initials}</span><div><b className="text-sm">{t.name}</b><p className="text-xs text-black/40">{t.role}</p></div><div className="ml-auto flex gap-0.5 text-black"><Star fill="currentColor" size={12}/><Star fill="currentColor" size={12}/><Star fill="currentColor" size={12}/><Star fill="currentColor" size={12}/><Star fill="currentColor" size={12}/></div></div></article>)}</div></div></section>

      <section id="faq" className="mx-auto max-w-4xl px-5 py-24 lg:px-8 lg:py-32"><div className="reveal text-center"><p className="eyebrow">Perguntas frequentes</p><h2 className="section-title">Ficou alguma<br/><span className="text-black/35">dúvida?</span></h2></div><div className="mt-12 divide-y divide-black/8 rounded-3xl border border-black/8 bg-white px-6">{faqs.map(([q,a],i)=><div key={q} className="reveal"><button className="flex w-full items-center justify-between gap-5 py-6 text-left font-bold" onClick={() => setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown className={`shrink-0 transition ${openFaq===i?'rotate-180':''}`} size={19}/></button><div className={`grid transition-all ${openFaq===i?'grid-rows-[1fr] pb-6':'grid-rows-[0fr]'}`}><p className="overflow-hidden text-sm leading-7 text-black/50">{a}</p></div></div>)}</div></section>

      <section className="px-5 pb-10"><div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-lime px-7 py-14 text-center sm:px-12 lg:py-20"><div className="reveal"><p className="text-xs font-black uppercase tracking-[.2em] text-ink/50">Sua próxima aula começa aqui</p><h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-[-.04em] sm:text-6xl">Seu conhecimento já está pronto. <span className="text-black/40">Agora falta publicar.</span></h2><button onClick={() => go('pricing')} className="mt-8 rounded-full bg-ink px-7 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1">Começar grátis <ArrowRight className="ml-2 inline" size={17}/></button><p className="mt-4 text-xs font-semibold text-ink/45">Sem cartão de crédito · Cancele quando quiser</p></div></div></section>
    </main>

    <footer className="mx-auto max-w-7xl px-5 py-10 lg:px-8"><div className="flex flex-col gap-8 border-t border-black/8 pt-8 md:flex-row md:items-center md:justify-between"><div><div className="flex items-center gap-2 font-black"><span className="grid size-8 place-items-center rounded-lg bg-ink text-lime"><GraduationCap size={17}/></span>AulaYT</div><p className="mt-2 text-xs text-black/35">Ensine melhor. Cresça mais.</p></div><div className="flex flex-wrap gap-5 text-xs font-bold text-black/45"><button onClick={() => go('benefits')}>Benefícios</button><button onClick={() => go('pricing')}>Preços</button><button onClick={() => go('faq')}>FAQ</button><a href="mailto:oi@aulayt.com">Contato</a></div><p className="text-xs text-black/30">© 2026 AulaYT. Feito para quem ensina.</p></div></footer>
  </div>
}

export default App

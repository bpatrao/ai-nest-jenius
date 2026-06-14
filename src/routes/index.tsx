import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Package, Truck, Boxes, LineChart, Layers, GraduationCap, Sparkles, Target, Users, Building2, CheckCircle2, Rocket, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import heroImg from "@/assets/hero-logistics.jpg";
import teamPhoto from "@/assets/jenius-team.png.asset.json";
import logoAsset from "@/assets/jenius-logo.png.asset.json";
import cultureCaseStudy from "@/assets/culture-case-study.jpeg.asset.json";
import cultureDirecao from "@/assets/culture-growth-bootcamp.jpeg.asset.json";
import cultureEquipa from "@/assets/culture-equipa.png.asset.json";
import cultureContinente from "@/assets/culture-continente.png.asset.json";
import cultureFeira from "@/assets/culture-feira.png.asset.json";
import cultureStricker from "@/assets/culture-stricker.webp.asset.json";
import cultureRecrutamento from "@/assets/culture-recrutamento.jpg.asset.json";
import cultureTeamBuilding from "@/assets/culture-teambuilding.png.asset.json";
import { SectionHeader } from "@/components/SectionHeader";
import { departments } from "@/lib/departments";
import clientUC from "@/assets/client-uc.jpg.asset.json";
import clientNeemaac from "@/assets/client-neemaac.png.asset.json";
import clientDem from "@/assets/client-dem.png.asset.json";
import clientFctuc from "@/assets/client-fctuc.jpg.asset.json";
import clientStricker from "@/assets/client-stricker.jpg.asset.json";
import clientSonae from "@/assets/client-sonae.png.asset.json";
import clientDec from "@/assets/client-dec.png.asset.json";

const culturePhotos = [
  { src: cultureStricker.url, caption: "Visita à Paul Stricker - Murtede", span: "md:col-span-2 md:row-span-2" },
  { src: cultureDirecao.url, caption: "Growth Bootcamp #2 – Capital Takeover | Universidade Autónoma de Lisboa", span: "" },
  { src: cultureCaseStudy.url, caption: "1ª Edição Case Study - Luís Simões", span: "" },
  { src: cultureContinente.url, caption: "Projeto Sonae - Aveiro", span: "" },
  { src: cultureFeira.url, caption: "Feira de Emprego da UC & AAC", span: "" },
  { src: cultureEquipa.url, caption: "1º Reunião Geral Mandato 25/26", span: "md:col-span-2" },
  { src: cultureRecrutamento.url, caption: "Recrutamento da JEnius 25/26", span: "" },
  { src: cultureTeamBuilding.url, caption: "TeamBuilding - Padel", span: "" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JEnius — Soluções logísticas inteligentes em Coimbra" },
      { name: "description", content: "Logística sem fronteiras, soluções sem limites. Júnior Iniciativa de Logística da Universidade de Coimbra." },
      { property: "og:title", content: "JEnius — Soluções logísticas inteligentes em Coimbra" },
      { property: "og:description", content: "Logística sem fronteiras, soluções sem limites." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Sparkles, title: "Consultoria em logística", desc: "Soluções logísticas personalizadas para o seu negócio." },
  { icon: Layers, title: "Desenvolvimento de layouts", desc: "Layouts eficientes para otimização de espaços e operações." },
  { icon: Truck, title: "Gestão de transportes", desc: "Otimização de rotas, custos e prazos de entrega." },
  { icon: Boxes, title: "Gestão de stocks", desc: "Controlo eficaz de inventário e redução de desperdícios." },
  { icon: Target, title: "Otimização de processos", desc: "Simplificação de fluxos e aumento da produtividade." },
  { icon: GraduationCap, title: "Formação personalizada", desc: "Capacitação da equipa do cliente em logística." },
];


const clients = [
  { name: "Universidade de Coimbra", url: "https://www.uc.pt/", logo: clientUC.url },
  { name: "NEEMAAC", url: "https://www.instagram.com/neemaac_uc/", logo: clientNeemaac.url },
  { name: "DEM", url: "https://www.uc.pt/fctuc/dem/", logo: clientDem.url },
  { name: "FCTUC", url: "", logo: clientFctuc.url },
  { name: "Stricker", url: "https://www.stricker-europe.com/pt/", logo: clientStricker.url },
  { name: "Sonae", url: "https://www.sonae.pt/pt/", logo: clientSonae.url },
  { name: "DEC", url: "https://www.uc.pt/fctuc/dec/", logo: clientDec.url },
];

const stats = [
  { value: "50+", label: "Estudantes" },
  { value: "4", label: "Departamentos" },
  { value: "3", label: "Projetos concluídos" },
  { value: "120+", label: "Nº de horas de serviços" },
];

function ClientCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 6;
  const allClients = [...clients, ...clients];

  const next = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % clients.length);
  }, []);

  const prev = useCallback(() => {
    setStartIndex((prev) => (prev - 1 + clients.length) % clients.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const visible = allClients.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex gap-4 transition-transform duration-500 ease-out">
          {visible.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="min-w-0 flex-1 rounded-xl bg-white border border-border flex items-center justify-center aspect-[16/9] hover:border-brand/40 hover:shadow-[var(--shadow-card)] transition-all overflow-hidden"
            >
              {c.url ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={c.name}
                  className="w-full h-full flex items-center justify-center p-1"
                >
                  <img src={c.logo} alt={c.name} className="w-full h-full object-contain" loading="lazy" />
                </a>
              ) : (
                <img src={c.logo} alt={c.name} className="w-full h-full object-contain" loading="lazy" />
              )}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 size-9 grid place-items-center rounded-full bg-background border border-border shadow-sm text-foreground hover:bg-brand hover:text-primary-foreground transition"
        aria-label="Anterior"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 size-9 grid place-items-center rounded-full bg-background border border-border shadow-sm text-foreground hover:bg-brand hover:text-primary-foreground transition"
        aria-label="Seguinte"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

function HomePage() {
  return (
    <>
      {/* HERO — Modern bento with mesh gradient */}
      <section className="relative overflow-hidden pt-10 md:pt-16 pb-16 md:pb-24">
        <div className="absolute inset-0 -z-10 bg-[var(--gradient-soft)]" />
        <div className="absolute -top-32 -left-32 size-[480px] rounded-full bg-brand/20 blur-3xl -z-10" />
        <div className="absolute top-40 -right-40 size-[520px] rounded-full bg-accent-orange/15 blur-3xl -z-10" />
        <div className="absolute inset-0 -z-10 opacity-[0.03] [background-image:linear-gradient(to_right,#0b1b3a_1px,transparent_1px),linear-gradient(to_bottom,#0b1b3a_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="container-page">
          {/* Top badge row */}
          <div className="animate-fade-up flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-semibold text-brand uppercase tracking-wider shadow-[var(--shadow-card)]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-orange opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent-orange" />
              </span>
              JEnius - Junior Iniciativa de Logística · Universidade de Coimbra
            </span>
          </div>

          {/* Headline */}
          <div className="animate-fade-up text-center max-w-4xl mx-auto">
            <h1 className="text-[2.5rem] md:text-7xl font-bold leading-[1.02] tracking-tight text-foreground">
              Logística sem fronteiras,{" "}
              <span className="bg-gradient-to-br from-brand-dark via-brand to-accent-orange bg-clip-text text-transparent">
                soluções sem limites.
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Desenvolvemos soluções logísticas personalizadas para empresas,
              associações e instituições — feitas por estudantes da UC, com impacto real.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:scale-[1.02] hover:opacity-95 transition"
              >
                Ver serviços <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Bento grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 animate-fade-up">
            {/* Large team photo */}
            <div className="md:col-span-4 md:row-span-2 relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)] min-h-[320px] md:min-h-[460px] group">
              <img
                src={teamPhoto.url}
                alt="Equipa JEnius em ação"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-primary-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">
                  <Users size={12} /> A nossa equipa
                </span>
              </div>
            </div>

            {/* Recruitment card */}
            <div className="md:col-span-2 relative overflow-hidden rounded-3xl border border-accent-orange/30 bg-gradient-to-br from-accent-orange/10 via-card to-brand/5 p-6 md:p-7 shadow-[var(--shadow-card)] flex flex-col justify-between min-h-[220px]">
              <div className="absolute -top-10 -right-10 size-40 rounded-full bg-accent-orange/20 blur-2xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent-orange/15 px-3 py-1 text-[10px] font-semibold text-accent-orange uppercase tracking-wider">
                  <Rocket size={12} /> Recrutamento aberto
                </span>
                <h3 className="mt-4 text-xl md:text-2xl font-bold text-foreground leading-tight">
                  Junta-te à nossa equipa
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Estudante da UC com paixão por logística e inovação?
                </p>
              </div>
              <Link
                to="/recrutamento"
                className="relative mt-5 inline-flex items-center justify-between gap-2 rounded-full bg-accent-orange px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition group/btn"
              >
                Candidata-te
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats 2x2 */}
            <div className="md:col-span-2 grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`rounded-2xl border p-4 md:p-5 transition-all hover:-translate-y-0.5 ${
                    i === 3
                      ? "bg-gradient-to-br from-brand-dark to-brand text-primary-foreground border-transparent shadow-[var(--shadow-elegant)]"
                      : "border-border bg-card/80 backdrop-blur hover:border-brand/40"
                  }`}
                >
                  <div className={`text-2xl md:text-3xl font-bold font-display ${i === 3 ? "text-primary-foreground" : "text-foreground"}`}>
                    {s.value}
                  </div>
                  <p className={`mt-1 text-[10px] uppercase tracking-wider font-semibold ${i === 3 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sobre JEnius — descritivo curto */}
          <div className="mt-14 grid md:grid-cols-3 gap-4 md:gap-5 animate-fade-up">
            <div className="md:col-span-2 rounded-3xl border border-border bg-card p-6 md:p-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-[10px] font-semibold text-brand uppercase tracking-wider">
                <Package size={12} /> Sobre a JEnius
              </span>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Otimizamos processos, aumentamos eficiência operacional e transformamos a
                logística num <span className="text-foreground font-semibold">diferencial competitivo</span> para
                empresas, associações e instituições.
              </p>
              <ul className="mt-5 grid sm:grid-cols-3 gap-3 text-sm">
                {["Projetos reais", "Equipa multidisciplinar", "Impacto mensurável"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 size={16} className="text-brand shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/sobre"
              className="group relative overflow-hidden rounded-3xl border border-brand-dark/20 bg-gradient-to-br from-brand-dark to-brand p-6 md:p-8 text-primary-foreground flex flex-col justify-between shadow-[var(--shadow-elegant)]"
            >
              <div className="absolute -bottom-10 -right-10 size-40 rounded-full bg-white/10 blur-2xl" />
              <img
                src={logoAsset.url}
                alt=""
                className="absolute top-4 right-4 size-16 opacity-20 rotate-12"
                aria-hidden="true"
              />
              <div className="relative">
                <Sparkles size={24} className="text-brand-light" />
                <h3 className="mt-4 text-xl md:text-2xl font-bold leading-tight">
                  Conhece a nossa história
                </h3>
              </div>
              <span className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                Saber mais <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Soluções inteligentes */}
      <section className="section-pad">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-orange">Soluções logísticas inteligentes</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Transforme a sua logística com inovação</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Na JEnius, oferecemos soluções logísticas personalizadas que visam otimizar
              processos e aumentar a eficiência operacional das empresas. Somos especializados
              em desenvolvimento de layouts, gestão de transportes, gestão de stocks e
              otimização de processos logísticos. O nosso compromisso é trazer inovação,
              estrutura e resultados concretos para cada projeto.
            </p>
            <Link
              to="/contacto"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-brand-dark px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95"
            >
              Contacte-nos <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: LineChart, label: "Análise de Dados" },
              { icon: Boxes, label: "Stocks Otimizados" },
              { icon: Truck, label: "Rotas Eficientes" },
              { icon: Layers, label: "Layouts Inteligentes" },
            ].map((it) => (
              <div key={it.label} className="group rounded-xl border border-border bg-card p-6 hover:border-brand/40 hover:shadow-[var(--shadow-card)] transition-all">
                <div className="size-11 grid place-items-center rounded-lg bg-brand/10 text-brand group-hover:bg-brand group-hover:text-primary-foreground transition-colors">
                  <it.icon size={20} />
                </div>
                <p className="mt-4 font-semibold text-foreground">{it.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultura */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <SectionHeader
            eyebrow="A nossa cultura"
            title="Momentos que nos definem"
            subtitle="Mais do que projetos, vivemos uma comunidade de estudantes apaixonados por logística, inovação e impacto real."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-3 md:gap-4">
            {culturePhotos.map((p) => (
              <div
                key={p.caption}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] ${p.span}`}
              >
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <p className="text-primary-foreground text-xs md:text-sm font-semibold">{p.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes */}
      {/* Clientes — Carrossel */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <SectionHeader eyebrow="Os nossos clientes e parceiros" title="Quem confiou em nós" />
          <ClientCarousel />
        </div>
      </section>

      {/* Equipa */}
      <section id="equipa" className="section-pad">
        <div className="container-page">
          <SectionHeader
            eyebrow="A nossa equipa"
            title="Estrutura"
            subtitle="A JEnius organiza-se em órgãos sociais e departamentos que trabalham em sinergia para garantir rigor, representatividade e impacto nos projetos que entrega."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((d) => (
              <Link
                key={d.slug}
                to="/estrutura/$slug"
                params={{ slug: d.slug }}
                className="group text-left rounded-2xl border border-border bg-card overflow-hidden hover:shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-brand/40 transition-all flex flex-col"
              >
                <div className={`h-28 bg-gradient-to-br ${d.color} relative`}>
                  <div className="absolute inset-0 grid place-items-center text-primary-foreground/90">
                    <Users size={32} />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-brand transition">{d.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{d.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 transition-all">
                    Ver departamento <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <SectionHeader eyebrow="Os nossos serviços" title="Eficiência e inovação para a sua empresa" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group rounded-2xl border border-border bg-card p-6 hover:border-brand/40 hover:-translate-y-1 transition-all">
                <div className="size-12 grid place-items-center rounded-lg bg-brand/10 text-brand group-hover:bg-brand group-hover:text-primary-foreground transition-colors">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/servicos" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all">
              Ver todos os serviços <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="section-pad">
        <div className="container-page">
          <div className="rounded-3xl bg-gradient-to-br from-brand-dark to-brand p-10 md:p-14 text-primary-foreground">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-4xl md:text-5xl font-bold font-display">{s.value}</div>
                  <p className="mt-2 text-sm text-primary-foreground/80">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-4 border-t border-primary-foreground/15 pt-8">
              {[
                "Projetos com impacto real",
                "Foco em logística, gestão industrial e inovação",
                "Ligação academia–empresa",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2 text-sm text-primary-foreground/90">
                  <CheckCircle2 size={18} className="text-brand-light shrink-0 mt-0.5" /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-pad">
        <div className="container-page">
          <div className="rounded-3xl border border-border bg-card p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 size-64 rounded-full bg-brand/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-accent-orange/10 blur-3xl" />
            <Building2 className="mx-auto text-brand" size={36} />
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Tem um desafio na área da logística, gestão industrial ou inovação?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              A JEnius pode ajudar a transformar problemas operacionais em soluções estruturadas,
              práticas e orientadas a resultados.
            </p>
            <Link
              to="/contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-dark px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-95"
            >
              Agendar contacto <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

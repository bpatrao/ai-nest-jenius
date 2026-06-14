import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { Target, Eye, Heart, GraduationCap, CheckCircle2, Users, ArrowRight, Linkedin, Instagram } from "lucide-react";
import { departments } from "@/lib/departments";
import logoAsset from "@/assets/jenius-logo.png.asset.json";
import cultureCaseStudy from "@/assets/culture-case-study.jpeg.asset.json";
import cultureDirecao from "@/assets/culture-growth-bootcamp.jpeg.asset.json";
import cultureEquipa from "@/assets/culture-equipa.png.asset.json";
import cultureContinente from "@/assets/culture-continente.png.asset.json";
import cultureFeira from "@/assets/culture-feira.png.asset.json";
import cultureStricker from "@/assets/culture-stricker.webp.asset.json";
import cultureRecrutamento from "@/assets/culture-recrutamento.jpg.asset.json";
import cultureTeamBuilding from "@/assets/culture-teambuilding.png.asset.json";

const stats = [
  { value: "50+", label: "Estudantes" },
  { value: "4", label: "Departamentos" },
  { value: "3", label: "Projetos concluídos" },
  { value: "120+", label: "Nº de horas de serviços" },
];

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nós — JEnius Logística" },
      { name: "description", content: "Conheça a JEnius — Júnior Iniciativa de Logística da Universidade de Coimbra, a sua missão, visão e valores." },
      { property: "og:title", content: "Sobre Nós — JEnius" },
      { property: "og:description", content: "História, missão, visão e valores da JEnius." },
    ],
  }),
  component: SobrePage,
});

const valores = [
  "Profissionalismo", "Proatividade", "Espírito de equipa", "Inovação",
  "Rigor", "Aprendizagem contínua", "Impacto real", "Ligação academia-empresa",
];

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

function SobrePage() {
  return (
    <>
      <section className="section-pad bg-secondary/40 relative overflow-hidden">
        <img
          src={logoAsset.url}
          alt=""
          className="absolute top-8 right-8 size-24 opacity-10 -rotate-12"
          aria-hidden="true"
        />
        <div className="container-page max-w-3xl text-center relative">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-accent-orange">Sobre Nós</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">A JEnius aproxima a academia do tecido empresarial</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Criamos oportunidades de aprendizagem prática para estudantes da Universidade
            de Coimbra e entregamos soluções úteis a organizações com desafios reais nas
            áreas da logística, gestão industrial e inovação.
          </p>
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

      {/* Redes Sociais — versão compacta */}
      <section className="py-8">
        <div className="container-page text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-4">Siga-nos</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://www.linkedin.com/company/jenius-associa%C3%A7%C3%A3o-j%C3%BAnior-de-log%C3%ADstica/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 hover:border-brand/40 hover:shadow-[var(--shadow-card)] transition-all"
            >
              <div className="size-8 grid place-items-center rounded-full bg-brand/10 text-brand">
                <Linkedin size={16} />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">LinkedIn</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/jenius_uc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 hover:border-brand/40 hover:shadow-[var(--shadow-card)] transition-all"
            >
              <div className="size-8 grid place-items-center rounded-full bg-brand/10 text-brand">
                <Instagram size={16} />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Instagram</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid md:grid-cols-3 gap-6">
          {[
            { icon: Heart, t: "História", d: "A JEnius nasce na Universidade de Coimbra como Junior Iniciativa focada em logística, gestão industrial e inovação, com a missão de unir a academia e o mundo empresarial." },
            { icon: Target, t: "Missão", d: "Entregar soluções logísticas práticas e orientadas a resultados, promovendo a aprendizagem dos estudantes e o impacto real nas organizações." },
            { icon: Eye, t: "Visão", d: "Ser uma referência nacional em soluções logísticas estudantis, reconhecida pela qualidade, profissionalismo e proximidade com empresas." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-7">
              <b.icon className="text-brand" size={28} />
              <h3 className="mt-4 text-xl font-bold">{b.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="valores" className="section-pad bg-secondary/40">
        <div className="container-page">
          <SectionHeader eyebrow="Valores" title="O que nos move" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {valores.map((v) => (
              <div key={v} className="flex items-center gap-2 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="text-brand shrink-0" size={18} />
                <span className="font-semibold text-foreground text-sm">{v}</span>
              </div>
            ))}
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

      <section id="cultura" className="section-pad scroll-mt-24">

        <div className="container-page grid md:grid-cols-2 gap-10 items-center">
          <div>
            <GraduationCap className="text-brand" size={32} />
            <h2 className="mt-4 text-3xl font-bold">Ligação à Universidade de Coimbra e ao Movimento Junior</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A JEnius está integrada na comunidade da Universidade de Coimbra e segue os
              valores e padrões do Movimento Junior Português e da JE Portugal: proatividade,
              empreendedorismo, espírito de equipa e orientação para resultados reais.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Vivemos uma cultura de aprendizagem contínua, onde cada projeto é uma oportunidade
              de crescimento pessoal e profissional. O nosso impacto social traduz-se na
              democratização do acesso a experiências empresariais reais para estudantes,
              preparando melhor as novas gerações para os desafios do mercado de trabalho.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Universidade de Coimbra", "JE Portugal", "Movimento Junior", "FCTUC · DEEC"].map((c) => (
              <div key={c} className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="font-display font-bold text-brand-dark">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="movimento" className="section-pad bg-secondary/40 scroll-mt-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Movimento Junior"
            title="Movimento Júnior Português"
            subtitle="Fazemos parte de uma rede nacional de estudantes-empreendedores"
          />
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-7">
                <h3 className="text-xl font-bold">O que é uma Júnior Iniciativa?</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Uma Júnior Iniciativa é uma organização sem fins lucrativos, criada e gerida
                  exclusivamente por estudantes universitários, cujo objetivo é aplicar na prática
                  os conhecimentos adquiridos durante a formação académica através da realização
                  de projetos e serviços para empresas e organizações.
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Estas iniciativas funcionam de forma semelhante a uma empresa real, permitindo
                  aos estudantes desenvolver competências profissionais, trabalhar em equipa e
                  adquirir experiência em contexto empresarial.
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Uma Júnior Iniciativa representa normalmente a fase inicial de desenvolvimento
                  de uma Júnior Empresa, encontrando-se em crescimento e estruturação organizacional
                  até atingir o nível de maturidade necessário para se tornar uma Júnior Empresa
                  reconhecida no Movimento Júnior Português.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-8 text-center">
                <Users className="mx-auto text-brand" size={40} />
                <p className="mt-4 font-display text-2xl font-bold text-brand-dark">JE Portugal</p>
                <p className="mt-2 text-sm text-muted-foreground">Federação de Júnior Empresas de Portugal</p>
                <div className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-brand/10 text-brand text-xs font-semibold uppercase tracking-wider">
                  Membro do Movimento Júnior
                </div>
              </div>
              <div id="impacto" className="rounded-2xl border border-border bg-card p-7 scroll-mt-24">

                <h3 className="text-lg font-bold">Impacto & Cultura</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={16} />
                    <span>Aprendizagem prática em ambiente empresarial real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={16} />
                    <span>Desenvolvimento de soft skills e liderança</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={16} />
                    <span>Networking nacional através da JE Portugal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={16} />
                    <span>Contribuição para o tecido económico local</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="equipa" className="section-pad scroll-mt-24">
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
    </>
  );
}

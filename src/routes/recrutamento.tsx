import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, FileText, Users, MessageSquare, Briefcase, Linkedin, Instagram } from "lucide-react";
import logoAsset from "@/assets/jenius-logo.png.asset.json";
import cultureCaseStudy from "@/assets/culture-case-study.jpeg.asset.json";
import cultureDirecao from "@/assets/culture-growth-bootcamp.jpeg.asset.json";
import cultureEquipa from "@/assets/culture-equipa.png.asset.json";
import cultureContinente from "@/assets/culture-continente.png.asset.json";
import cultureFeira from "@/assets/culture-feira.png.asset.json";
import cultureStricker from "@/assets/culture-stricker.webp.asset.json";
import cultureRecrutamento from "@/assets/culture-recrutamento.jpg.asset.json";
import cultureTeamBuilding from "@/assets/culture-teambuilding.png.asset.json";

export const Route = createFileRoute("/recrutamento")({
  head: () => ({
    meta: [
      { title: "Recrutamento — Junta-te à JEnius" },
      { name: "description", content: "Junta-te à Junior Iniciativa de Logística da Universidade de Coimbra. Candidaturas abertas." },
      { property: "og:title", content: "Recrutamento — JEnius" },
      { property: "og:description", content: "Junta-te a nós!" },
    ],
  }),
  component: RecrutamentoPage,
});

const fases = [
  { icon: FileText, t: "Candidaturas", d: "Envio do currículo, carta de motivação e informações básicas." },
  { icon: Users, t: "Dinâmicas de grupo", d: "Atividades para avaliar colaboração, comunicação e espírito de equipa." },
  { icon: MessageSquare, t: "Entrevistas", d: "Entrevistas individuais para conhecer motivações e perfil." },
  { icon: Briefcase, t: "Período Trainee — 1 mês", d: "Experiência prática de aprendizagem, integração e contacto com a JEnius." },
];

const culturePhotos = [
  { src: cultureStricker.url, caption: "Visita à Paul Stricker - Murtede", span: "md:col-span-2 md:row-span-2" },
  { src: cultureDirecao.url, caption: "Growth Bootcamp #2 – Capital Takeover | Universidade Autónoma de Lisboa", span: "" },
  { src: cultureCaseStudy.url, caption: "1ª Edição Case Study - Luís Simões", span: "" },
  { src: cultureContinente.url, caption: "Projeto Sonae - Aveiro", span: "" },
  { src: cultureFeira.url, caption: "Feira de Emprego da UC & AAC", span: "" },
  { src: cultureEquipa.url, caption: "1º Reunião Geral Mandato 25/26", span: "md:col-span-2", imgClass: "object-[center_60%]" },
  { src: cultureRecrutamento.url, caption: "Recrutamento da JEnius 25/26", span: "" },
  { src: cultureTeamBuilding.url, caption: "TeamBuilding - Padel", span: "" },
];

const faqs = [
  {
    q: "Como me posso candidatar?",
    a: "Para te candidatares, visita a secção de candidaturas no canto superior direito onde serás direcionado(a) para o formulário de candidatura espontânea. Estamos sempre à procura de pessoas que queiram fazer parte da nossa equipa!",
  },
  {
    q: "Quando abrem as candidaturas?",
    a: "As candidaturas abrem no início de cada semestre, geralmente em fevereiro e setembro. Fica atento às nossas redes sociais e ao site para atualizações específicas. Também temos as nossas candidaturas espontâneas, porém estas têm um processo mais seletivo.",
  },
  {
    q: "A equipa é apenas composta por estudantes?",
    a: "Sim, somos uma equipa de cerca de 40 jovens, multidisciplinar e altamente motivada, composta por estudantes da Universidade de Coimbra com forte ligação à Engenharia, Gestão, Dados e Tecnologia.",
  },
  {
    q: "É obrigatório ser de Engenharia e Gestão Industrial (EGI) ou Engenharia Mecânica (EM) para entrar na JEnius?",
    a: "Não. A JEnius já é uma organização multidisciplinar, aberta a estudantes de diferentes áreas de formação. Valorizamos competências e perspetivas de outras áreas, como eletrotécnica, informática, dados, economia, marketing, design, matemática, entre outras.",
  },
];

function RecrutamentoPage() {
  return (
    <>
      <section className="section-pad bg-secondary/40 relative overflow-hidden">
        <img
          src={logoAsset.url}
          alt=""
          className="absolute bottom-6 right-6 size-20 opacity-15 rotate-12"
          aria-hidden="true"
        />
        <div className="container-page relative">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-accent-orange">Recrutamento</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">Junta-te a nós!</h1>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {/* Left — Open applications info */}
            <div className="rounded-2xl border border-brand/30 bg-brand-dark/5 p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-brand-dark">Inscrições abertas!</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  As candidaturas abrem no início de cada semestre, geralmente em fevereiro e setembro.
                  Fica atento às nossas redes sociais e ao site para atualizações específicas.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Também temos as nossas candidaturas espontâneas, porém estas têm um processo mais seletivo.
                </p>
              </div>
              <a
                href="https://www.instagram.com/jenius.logistica/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-dark px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-95 self-start"
              >
                Segue-nos no Instagram <ArrowRight size={16} />
              </a>
            </div>

            {/* Right — Spontaneous applications */}
            <div className="rounded-2xl border border-border bg-card p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Candidaturas espontâneas</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Antes de submeteres a tua candidatura, queremos conhecer-te melhor. Vamos pedir
                  algumas informações básicas como nome, idade, contactos, percurso académico,
                  como conheceste a JEnius e o departamento que gostarias de integrar.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Também queremos saber que tipo de tarefas te motivam, quais as competências
                  que podes acrescentar à equipa e conhecer-te melhor através do teu CV, carta
                  de motivação e foto.
                </p>
                <p className="mt-6 font-semibold text-brand-dark">
                  Preenche tudo com calma e sê tu mesmo(a) — estamos ansiosos por te conhecer!
                </p>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeKYTc6Tz7iwQ9onnUjsilDOun0AIEwfgvzDcxS3hXLdrC7BQ/viewform"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-dark px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-95 self-start"
              >
                Candidatura espontânea <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHeader eyebrow="Como funciona?" title="Processo de Recrutamento" subtitle="O recrutamento na JEnius é realizado no início de cada semestre letivo, normalmente em fevereiro e setembro, e é constituído por quatro fases." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {fases.map((f, i) => (
              <div key={f.t} className="relative rounded-2xl border border-border bg-card p-6 hover:border-brand/40 transition-all">
                <div className="absolute -top-3 -left-3 size-9 rounded-full bg-brand-dark text-primary-foreground grid place-items-center font-bold text-sm">
                  {i + 1}
                </div>
                <f.icon className="text-brand" size={28} />
                <h3 className="mt-4 font-bold text-foreground">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
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
                  className={`absolute inset-0 w-full h-full object-cover ${p.imgClass ?? ""} group-hover:scale-105 transition-transform duration-500`}
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

      {/* FAQs */}
      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <SectionHeader eyebrow="FAQs" title="Perguntas frequentes" subtitle="Tira as suas dúvidas aqui!" />
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border bg-card px-5 data-[state=open]:border-brand/30 data-[state=open]:shadow-[var(--shadow-card)]">
                <AccordionTrigger className="text-left font-semibold hover:text-brand hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Redes Sociais */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page text-center">
          <SectionHeader
            eyebrow="Siga-nos"
            title="Acompanhe-nos nas redes sociais!"
            subtitle="Fique a par dos nossos projetos, eventos e oportunidades."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/company/jenius-associa%C3%A7%C3%A3o-j%C3%BAnior-de-log%C3%ADstica/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 hover:border-brand/40 hover:shadow-[var(--shadow-card)] transition-all"
            >
              <div className="size-10 grid place-items-center rounded-full bg-brand/10 text-brand">
                <Linkedin size={18} />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">LinkedIn</p>
                <p className="text-xs text-muted-foreground">JEnius - Associação Júnior de Logística</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/jenius_uc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 hover:border-brand/40 hover:shadow-[var(--shadow-card)] transition-all"
            >
              <div className="size-10 grid place-items-center rounded-full bg-brand/10 text-brand">
                <Instagram size={18} />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Instagram</p>
                <p className="text-xs text-muted-foreground">@jenius_uc</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

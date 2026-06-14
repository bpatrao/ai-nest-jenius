import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Lightbulb,
  HandCoins,
  GraduationCap,
  Search,
  FileText,
  BarChart3,
  Package,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Truck,
  Boxes,
  Target,
  Linkedin,
  Instagram,
} from "lucide-react";
import cultureCaseStudy from "@/assets/culture-case-study.jpeg.asset.json";
import cultureDirecao from "@/assets/culture-growth-bootcamp.jpeg.asset.json";
import cultureEquipa from "@/assets/culture-equipa.png.asset.json";
import cultureContinente from "@/assets/culture-continente.png.asset.json";
import cultureFeira from "@/assets/culture-feira.png.asset.json";
import cultureStricker from "@/assets/culture-stricker.webp.asset.json";
import cultureRecrutamento from "@/assets/culture-recrutamento.jpg.asset.json";
import cultureTeamBuilding from "@/assets/culture-teambuilding.png.asset.json";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/lib/services";

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

export const Route = createFileRoute("/empresas")({
  head: () => ({
    meta: [
      { title: "Para Empresas — JEnius Logística" },
      {
        name: "description",
        content:
          "Porquê trabalhar com a JEnius? Diferenciais, processo de projeto e como propor um desafio à nossa equipa.",
      },
      { property: "og:title", content: "Para Empresas — JEnius" },
      {
        property: "og:description",
        content:
          "Visão jovem, custo acessível e ligação à academia. Conheça como trabalhamos com empresas.",
      },
    ],
  }),
  component: EmpresasPage,
});

const iconMap: Record<string, React.ElementType> = {
  consultoria: Sparkles,
  layouts: Layers,
  transportes: Truck,
  stocks: Boxes,
  processos: Target,
};

const diferenciais = [
  {
    icon: Lightbulb,
    title: "Visão jovem, externa e atualizada",
    paragraphs: [
      "Ao contrário de uma equipa interna, que muitas vezes está condicionada pela rotina e pelos processos já existentes, a JEnius oferece uma visão externa, jovem e analítica sobre os desafios das empresas.\u00a0\nA Fresh Perspective!",
      "A nossa equipa composta exclusivamente por estudantes combina formação universitária da UC, contacto direto com as novas trends e metodologias académicas e uma vontade constante de as aplicar e resolver problemas reais.\u00a0\nEsta posição permite-nos olhar para cada desafio com uma abordagem fresca, crítica e orientada para a melhoria.\nO objetivo é identificar oportunidades que, por vezes, passam despercebidas dentro da própria organização e que muitas vezes uma consultora tradicional não pode fornecer devido à\u00a0standardização dos seus serviços e processos!",
      "Mais do que aplicar soluções standard, procuramos compreender o contexto de cada empresa e propor respostas práticas, adaptadas e inovadoras.",
    ],
  },
  {
    icon: HandCoins,
    title: "Custo acessível com elevado compromisso e prioridade",
    paragraphs: [
      "A JEnius oferece soluções a valores muito abaixo dos praticados no mercado, tornando os seus projetos acessíveis para empresas que procuram apoio em logística, gestão industrial, processos ou inovação.",
      "No entanto, o nosso diferencial não está apenas no custo.\u00a0\nEstá sobretudo no compromisso!\nPara uma consultora tradicional, um projeto pode ser apenas mais um entre muitos. Para a JEnius, cada projeto empresarial representa uma oportunidade fundamental de crescimento, aprendizagem e afirmação enquanto Junior Iniciativa.",
      "Por isso, os projetos que aceitamos assumem automaticamente um elevado grau de prioridade interna. São acompanhados com seriedade, dedicação e sentido de responsabilidade, porque o sucesso de cada parceria ou projeto contribui diretamente para o desenvolvimento dos nossos membros (o nosso principal objetivo!), da nossa organização e da relação entre a academia e o tecido empresarial.\n",
    ],
  },
  {
    icon: GraduationCap,
    title: "Ligação à academia, à comunidade empreendedora e ao Movimento Júnior Português",
    paragraphs: [
      "A posição da JEnius no ecossistema académico e empreendedor constitui uma oportunidade estratégica para as empresas.",
      "Enquanto Junior Iniciativa da Universidade de Coimbra, trabalhamos diariamente com estudantes, professores, núcleos, departamentos, associações, parceiros e entidades ligadas à inovação, à logística e à gestão industrial.\u00a0\nEsta proximidade permite às empresas aceder a uma comunidade jovem, qualificada e altamente motivada, com forte potencial de talento futuro.",
      "Colaborar com a JEnius não significa apenas desenvolver um projeto. Significa também aproximar a empresa da comunidade estudantil, reforçar a sua presença junto da Universidade de Coimbra e criar pontes com futuros profissionais, parceiros e iniciativas de inovação.",
      "Esta ligação torna cada colaboração mais rica, porque junta conhecimento académico, ambição jovem e desafios empresariais reais.",
    ],
  },
];

const processo = [
  {
    icon: Search,
    title: "Diagnóstico inicial",
    desc: "Reunião para perceber o desafio, contexto e objetivos.",
  },
  {
    icon: FileText,
    title: "Proposta de projeto",
    desc: "Definição do âmbito, entregáveis, equipa, calendário e metodologia.",
  },
  {
    icon: BarChart3,
    title: "Análise e desenvolvimento",
    desc: "Recolha de dados, estudo de processos, modelação, benchmarking ou desenho de soluções.",
  },
  {
    icon: Package,
    title: "Entrega da solução",
    desc: "Relatório, apresentação, dashboard, layout, plano de melhoria ou formação.",
  },
  {
    icon: CheckCircle2,
    title: "Acompanhamento",
    desc: "Discussão dos resultados e possíveis próximos passos.",
  },
];

const portfolioPreview = [
  { name: "Sonae", area: "Indústria · Inovação", status: "Em progresso" },
  { name: "OcupaMoz", area: "Logística · Dados", status: "Concluído" },
];

function EmpresasPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page max-w-3xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-accent-orange">
            Para Empresas
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            Porquê trabalhar com a JEnius?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Uma parceria com visão jovem, compromisso real e ligação direta à
            comunidade académica e empresarial de Coimbra.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <div className="rounded-3xl bg-gradient-to-br from-brand-dark to-brand p-10 md:p-14 text-primary-foreground text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Tem um problema de logística, stocks, layout ou processos?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/85 max-w-2xl mx-auto whitespace-pre-line">
              Agende uma reunião exploratória gratuita connosco!{"\n"}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-semibold text-brand-dark hover:opacity-95"
              >
                Quero propor um desafio <ArrowRight size={16} />
              </Link>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 rounded-md border-2 border-primary-foreground/80 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
              >
                Quero conhecer a JEnius
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-md border-2 border-primary-foreground/80 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
              >
                Receber apresentação institucional
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeader
            eyebrow="Principais diferenciais"
            title="O que nos distingue?"
          />
          <div className="grid lg:grid-cols-3 gap-6">
            {diferenciais.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-border bg-card p-7 flex flex-col"
              >
                <div className="size-12 grid place-items-center rounded-lg bg-brand/10 text-brand">
                  <d.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {d.title}
                </h3>
                <div className="mt-3 space-y-3 text-sm text-muted-foreground leading-relaxed">
                  {d.paragraphs.map((p, i) => (
                    <p key={i} className="whitespace-pre-line">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços + Portfólio combinados */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeader
            eyebrow="Serviços & Portfólio"
            title="O que oferecemos e onde já o aplicámos"
            subtitle="À esquerda os nossos serviços, à direita alguns projetos recentes."
          />
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Serviços */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground">Serviços</h3>
                <Link
                  to="/servicos"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                >
                  Ver todos <ArrowRight size={14} />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((s) => {
                  const Icon = iconMap[s.slug];
                  return (
                    <Link
                      key={s.slug}
                      to="/servico/$slug"
                      params={{ slug: s.slug }}
                      className="group rounded-xl border border-border bg-card p-4 hover:border-brand/40 hover:-translate-y-0.5 transition-all flex items-start gap-3"
                    >
                      <div className="size-9 shrink-0 grid place-items-center rounded-md bg-brand/10 text-brand group-hover:bg-brand group-hover:text-primary-foreground transition-colors">
                        {Icon && <Icon size={16} />}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground leading-tight">
                          {s.name}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Portfólio */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground">Portfólio</h3>
                <Link
                  to="/projetos"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                >
                  Ver portfólio completo <ArrowRight size={14} />
                </Link>
              </div>
              <div className="grid gap-3">
                {portfolioPreview.map((p) => (
                  <div
                    key={p.name}
                    className="rounded-xl border border-border bg-card p-5 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-bold text-foreground">{p.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {p.area}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-brand bg-brand/10 rounded-full px-2.5 py-1">
                      {p.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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

      {/* Redes Sociais */}
      <section className="section-pad">
        <div className="container-page text-center">
          <SectionHeader
            eyebrow="Siga-nos"
            title="Acompanhe-nos\u00a0nas redes sociais!\n"
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

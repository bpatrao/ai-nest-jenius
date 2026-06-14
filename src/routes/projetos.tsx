import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { FolderKanban, Clock } from "lucide-react";
import sonaeLogo from "@/assets/sonae.png.asset.json";
import ocupamozLogo from "@/assets/ocupamoz.png.asset.json";
import luisSimoesLogo from "@/assets/luis-simoes.png.asset.json";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — JEnius Logística" },
      { name: "description", content: "Projetos realizados pela JEnius em logística, transportes, stocks, layouts, dados e inovação." },
      { property: "og:title", content: "Projetos — JEnius Logística" },
      { property: "og:description", content: "Casos de estudo e projetos com impacto real." },
    ],
  }),
  component: ProjetosPage,
});

const areas = ["Todos", "Logística", "Transportes", "Stocks", "Layouts", "Dados", "Indústria", "Inovação"];

type Project = {
  name: string;
  type: string;
  logo: string;
  status: string;
  areas: string[];
  description: string;
};

const projects: Project[] = [
  {
    name: "Sonae",
    type: "Privado",
    logo: sonaeLogo.url,
    status: "Em progresso",
    areas: ["Indústria", "Inovação"],
    description:
      "A JEnius foi contratada pela Sonae para desenvolver um projeto de otimização de processos. O projeto está neste momento em progresso.",
  },
  {
    name: "OcupaMoz",
    type: "PARCERIA ACADÉMICA REMUNERADA",
    logo: ocupamozLogo.url,
    status: "Em progresso",
    areas: ["Logística", "Transportes"],
    description:
      "A JEnius está neste momento a participar no projeto OcupaMoz, desenvolvendo um programa de formação personalizado para alunos moçambicanos em parceria com o Departamento de Engenharia Mecânica. Os materiais elaborados focam-se em técnicas modernas de gestão de transportes e otimização de processos. Através de workshops interativos e material didático adaptado às necessidades específicas da equipa, contribuímos para melhorar a eficiência operacional, a capacidade de resposta às exigências do mercado local e a compreensão das melhores práticas logísticas.",
  },
  {
    name: "JEnius Case Study - Luís Simões",
    type: "EVENTO",
    logo: luisSimoesLogo.url,
    status: "Concluído",
    areas: ["Logística"],
    description:
      "Data: 24 de abril de 2024.\u00a0\u00a0\nParceiro: Luís Simões.\u00a0\u00a0\nFormato: Competição de case study, visita técnica e formação.\u00a0 \u00a0\n\n\nO JEnius Case Study marcou a realização do primeiro evento da JEnius, representando um momento importante no desenvolvimento da nossa Junior Iniciativa. A iniciativa desafiou jovens estudantes a resolver um problema empresarial real, disponibilizado pela empresa Luís Simões, promovendo a aplicação prática de conhecimentos técnicos, pensamento crítico e criatividade em contexto empresarial.\u00a0 \u00a0Para além da componente competitiva, os participantes tiveram a oportunidade de visitar as instalações da Luís Simões e participar numa formação dinamizada pela empresa, enriquecendo a experiência e reforçando a ligação entre a academia e o tecido empresarial. Este projeto permitiu aproximar estudantes de desafios reais do setor logístico, desenvolver competências práticas e criar um espaço de contacto direto entre jovens talentos e uma empresa de referência na área.\u00a0\u00a0\n\n\n\u00a0A iniciativa contou ainda com o apoio da Queima das Fitas de Coimbra, que contribuiu para os prémios atribuídos aos participantes.",
  },
];

function ProjetosPage() {
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.areas.includes(filter));

  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader eyebrow="Projetos" title="O nosso trabalho em ação" subtitle="Casos de estudo e projetos que demonstram a aplicação prática das nossas soluções." />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {areas.map((a) => (
            <button
              key={a}
              onClick={() => setFilter(a)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === a
                  ? "bg-brand-dark text-primary-foreground"
                  : "bg-secondary text-foreground/70 hover:bg-secondary/70"
              }`}
            >
              {a}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {filtered.map((p) => (
              <article
                key={p.name}
                className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="aspect-[16/9] bg-white grid place-items-center p-8 border-b border-border">
                  <img src={p.logo} alt={`Logo ${p.name}`} className="max-h-full max-w-[70%] object-contain" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand bg-brand/10 rounded-full px-3 py-1">
                      {p.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-accent-orange font-medium mb-3">
                    <Clock size={14} /> {p.status}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.areas.map((a) => (
                      <span key={a} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-foreground/70">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : null}

        <div className="rounded-3xl border border-dashed border-border bg-secondary/30 p-12 md:p-20 text-center">
          <FolderKanban className="mx-auto text-brand" size={48} />
          <h3 className="mt-5 text-2xl font-bold">Em breve, mais casos de estudo</h3>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Estamos a desenvolver projetos com impacto real. Em breve, esta página será atualizada com novos casos de estudo nas áreas de {filter === "Todos" ? "logística, transportes, stocks, layouts, dados, indústria e inovação" : filter.toLowerCase()}.
          </p>
        </div>
      </div>
    </section>
  );
}

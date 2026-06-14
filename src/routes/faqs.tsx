import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Linkedin, Instagram } from "lucide-react";
import cultureCaseStudy from "@/assets/culture-case-study.jpeg.asset.json";
import cultureDirecao from "@/assets/culture-growth-bootcamp.jpeg.asset.json";
import cultureEquipa from "@/assets/culture-equipa.png.asset.json";
import cultureContinente from "@/assets/culture-continente.png.asset.json";
import cultureFeira from "@/assets/culture-feira.png.asset.json";
import cultureStricker from "@/assets/culture-stricker.webp.asset.json";
import cultureRecrutamento from "@/assets/culture-recrutamento.jpg.asset.json";
import cultureTeamBuilding from "@/assets/culture-teambuilding.png.asset.json";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — JEnius Logística" },
      { name: "description", content: "Perguntas frequentes sobre os serviços, recrutamento e funcionamento da JEnius." },
      { property: "og:title", content: "FAQs — JEnius" },
      { property: "og:description", content: "Tudo o que precisa de saber sobre a JEnius." },
    ],
  }),
  component: FaqsPage,
});

const faqs = [
  {
    q: "Quais soluções logísticas a JEnius oferece?",
    a: `A JEnius oferece uma gama completa de soluções de logística. As nossas soluções são projetadas para atender empresas que buscam não apenas eficiência, mas também inovação nas suas operações logísticas. Trabalhamos em colaboração com os nossos clientes para entender seus desafios específicos e fornecer soluções que se alinhem perfeitamente às suas necessidades.

Oficialmente disponibilizamos 6 serviços: Consultoria Geral em Logística, Desenvolvimento de Layouts, Gestão de Redes de Transportes, Gestão de Stocks, Otimização de Processos Logísticos e Formação Personalizada em Logística. Porém, estamos sempre disponíveis para nos adaptarmos consoante as necessidades do cliente. Sugerimos a marcação de uma reunião para perceber melhor essas necessidades!`,
  },
  {
    q: "Existe algum custo para a reunião inicial?",
    a: "Não. A primeira reunião é gratuita e serve para compreender as necessidades da empresa, avaliar oportunidades de melhoria e perceber se faz sentido avançar para um projeto.",
  },
  {
    q: "Como a JEnius pode ajudar na gestão de transportes?",
    a: `A gestão de transportes é uma das especialidades da JEnius, onde aplicamos nossas técnicas e ferramentas para otimizar o fluxo de mercadorias. Através da análise de dados e desenvolvimento de estratégias personalizadas, ajudamos as empresas a reduzir custos de transporte, melhorar prazos de entrega e aumentar a satisfação dos clientes.

O nosso enfoque é garantir que cada etapa do processo de transporte seja eficiente e eficaz, permitindo que os nossos clientes se concentrem nas suas atividades principais enquanto nós cuidamos da logística.`,
  },
  {
    q: "O que é a otimização de processos logísticos?",
    a: `A otimização de processos logísticos é uma prática essencial para empresas que desejam aumentar sua eficiência operacional. Na JEnius, utilizamos várias metodologias que identificam ineficiências nos processos logísticos existentes. Após a análise, desenvolvemos soluções que visam simplificar e acelerar os fluxos de trabalho, reduzindo custos e melhorando a produtividade.

O nosso objetivo é transformar a logística em uma vantagem competitiva para os nossos clientes, garantindo que cada operação seja realizada da forma mais eficiente possível.`,
  },
  {
    q: "Como me posso candidatar?",
    a: "Para te candidatares, visita a secção de candidaturas no canto superior direito onde serás direcionado(a) para o formulário de candidatura espontânea. Estamos sempre à procura de pessoas que queiram fazer parte da nossa equipa!",
  },
  {
    q: "Quando abrem as candidaturas?",
    a: "As candidaturas abrem no início de cada semestre, geralmente em fevereiro e setembro. Fica atento às nossas redes sociais e ao site para atualizações específicas. Também temos as nossas candidaturas espontâneas, porém estas têm um processo mais seletivo.",
  },
  {
    q: "Com que clientes JEnius trabalha?",
    a: `Trabalhamos com todos os tipos de organizações: desde PMEs (pequenas e médias empresas) a multinacionais. Desde empreendedores individuais e startups a associações e instituições.

Um dos nossos focos é preparar os nossos membros para problemas do mundo real, por isso à partida aceitamos grande parte dos projetos que nos propõem!`,
  },
  {
    q: "A equipa é apenas composta por estudantes?",
    a: `Sim, somos uma equipa de cerca de 40 jovens, multidisciplinar e altamente motivada, composta por estudantes da Universidade de Coimbra com forte ligação à Engenharia, Gestão, Dados e Tecnologia. Estudantes capacitados, com formação sólida da UC, orientação académica de excelência e forte ligação ao mercado. Como seguidores do Movimento Junior Português, somos caracterizados pela proatividade, empreendedorismo e espírito de equipa. Além disso, tentamos ao máximo que a nossa metodologia seja profissional, estruturada e orientada a resultados reais.`,
  },
  {
    q: "O que nos difere de uma empresa normal de prestação de serviços logísticos ou da equipa interna de uma empresa?",
    a: `A nossa proposta de valor está assente em três aspetos principais:

1) A Inovação e conhecimento académico

2) Excelente relação custo-benefício

3) Perspetiva externa e abordagem ágil

A JEnius combina conhecimento académico atualizado com uma abordagem inovadora, permitindo às organizações que nos contratam explorar novas soluções logísticas desenvolvidas por estudantes da Universidade de Coimbra, nomeadamente da FCTUC.

Já relativamente ao preço, a JEnius oferece serviços de consultoria logística com uma excelente relação custo-benefício, permitindo às organizações melhorar processos e desenvolver soluções eficientes com custos significativamente mais acessíveis do que os praticados por consultoras tradicionais.

Sendo uma organização sem fins lucrativos, o nosso foco está na criação de valor para o cliente e no desenvolvimento das competências dos nossos membros, garantindo um elevado nível de dedicação e qualidade em cada projeto. A proximidade ao meio académico garante contacto constante com novas metodologias, ferramentas e tecnologias, proporcionando às empresas uma perspetiva moderna e diferenciadora na resolução de desafios logísticos. A JEnius proporciona às empresas uma perspetiva externa, independente e orientada para a inovação, analisando processos logísticos com uma abordagem crítica e criativa.

Ao contrário das equipas internas, frequentemente focadas nas operações diárias, a JEnius pode dedicar-se integralmente à análise e otimização de processos, desenvolvendo soluções ágeis, adaptadas e orientadas para resultados concretos.`,
  },
  {
    q: "É obrigatório ser de Engenharia e Gestão Industrial (EGI) ou Engenharia Mecânica (EM) para entrar na JEnius?",
    a: `Não. Com a expansão da JEnius, começaram a surgir necessidades que vão além do que é ensinado no DEM. A JEnius já é uma organização multidisciplinar, aberta a estudantes de diferentes áreas de formação. Embora muitos dos nossos membros tenham background em EGI e EM, valorizamos igualmente competências e perspetivas de outras áreas, como eletrotécnica, informática, dados, economia, marketing, design, matemática, entre outras. Acreditamos que a diversidade de perfis é essencial para desenvolver soluções mais completas e inovadoras no contexto logístico.`,
  },
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

function FaqsPage() {
  return (
    <>
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

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRight, Calendar, Clock, X } from "lucide-react";
import growthBootcamp from "@/assets/jenews-growth-bootcamp.jpeg.asset.json";
import finalista from "@/assets/jenews-finalista.jpeg.asset.json";
import novaImagem from "@/assets/jenews-nova-imagem.png.asset.json";
import padel from "@/assets/jenews-padel.jpeg.asset.json";
import portoFigueira from "@/assets/jenews-porto-figueira.jpg.asset.json";
import recrutamento from "@/assets/jenews-recrutamento.jpg.asset.json";

export const Route = createFileRoute("/jenews")({
  head: () => ({
    meta: [
      { title: "JENews™ — Insights de logística e inovação" },
      { name: "description", content: "Notícias, artigos e insights sobre logística, gestão industrial, inovação e carreiras." },
      { property: "og:title", content: "JENews™ — JEnius" },
      { property: "og:description", content: "A newsletter da JEnius sobre logística e inovação." },
    ],
  }),
  component: JeNewsPage,
});

interface Post {
  tags: string[];
  date: string;
  title: string;
  excerpt: string;
  image: string;
  readTime?: string;
  content: string[];
}

const posts: Post[] = [
  {
    tags: ["Eventos"],
    date: "15 Março 2026",
    title: "JEnius presente no Growth Bootcamp #2 – Capital Takeover",
    excerpt: "A JEnius marcou presença no Growth Bootcamp #2 organizado pela Autónoma Comms na Universidade Autónoma de Lisboa.",
    image: growthBootcamp.url,
    content: [
      "No passado dia 14 de março, a JEnius – Júnior Iniciativa de Logística da Universidade de Coimbra marcou presença no tão aguardado Growth Bootcamp #2 – Capital Takeover, um evento organizado pela Júnior Iniciativa Autónoma Comms na Universidade Autónoma de Lisboa. Este encontro não apenas proporcionou um espaço de aprendizagem, mas também fomentou a troca de experiências e o networking entre membros de várias Júnior Empresas de todo o país. A diversidade e a riqueza dos debatedores e participantes garantiram momentos valiosos de discussão sobre temas relevantes para o desenvolvimento das organizações Júnior em Portugal.",
      "A participação da JEnius no Growth Bootcamp #2 – Capital Takeover reforçou o seu compromisso com a excelência e o desenvolvimento contínuo, além de destacar a importância da colaboração entre as Júnior Empresas. Durante o evento, surgiram oportunidades únicas para o fortalecimento de conexões, partilha de boas práticas e o impulsionamento de um ecossistema empreendedor jovem vibrante. Ao longo das próximas seções, iremos celebrar a presença da JEnius, explorar os valiosos insights adquiridos e analisar o impacto desta iniciativa poderosa na comunidade Júnior.",
    ],
  },
  {
    tags: ["Reconhecimento"],
    date: "10 Fevereiro 2026",
    title: "Finalista do prémio Júnior Iniciativa Revelação — Growth Awards, JE Portugal",
    excerpt: "A JEnius foi selecionada como Finalista do Prémio Júnior Iniciativa Revelação nos Growth Awards da JE Portugal.",
    image: finalista.url,
    content: [
      "É com enorme orgulho que partilhamos que a JEnius – Júnior Iniciativa de Logística foi selecionada como Finalista do Prémio Júnior Iniciativa Revelação, no âmbito dos Growth Awards, promovidos pela Junior Enterprises Portugal.",
      "Ser uma das Júnior Iniciativas finalistas a nível nacional representa um reconhecimento do trabalho desenvolvido ao longo de 2025 e reflete o empenho contínuo na profissionalização da organização, na qual renovámos a nossa identidade e vimos o amadurecimento de uma equipa que, com rigor e compromisso, transformou cada desafio numa oportunidade de crescimento para a nossa Júnior Iniciativa (...)",
    ],
  },
  {
    tags: ["Identidade"],
    date: "2 Fevereiro 2026",
    title: "Nova imagem oficial — “Logística sem fronteiras, soluções sem limites”",
    excerpt: "A JEnius apresenta a sua nova imagem institucional e slogan, refletindo a evolução da organização.",
    image: novaImagem.url,
    content: [
      "A JEnius apresenta a sua nova imagem institucional e slogan, refletindo a evolução da organização e o seu compromisso com inovação, colaboração e impacto na área da logística. Esta renovação reforça a identidade da JEnius e acompanha o lançamento do novo website.",
      "Com esta nova identidade visual, a JEnius procura comunicar de forma mais clara a sua missão enquanto junior iniciativa, destacando o papel dos estudantes na criação de soluções práticas para desafios reais. O novo website permitirá também apresentar de forma mais estruturada os projetos, serviços e iniciativas da organização.",
    ],
  },
  {
    tags: ["Teambuilding"],
    date: "26 Novembro 2025",
    title: "🧡 Teambuilding: Torneio Interdepartamentos",
    excerpt: "Na quarta-feira, 26 de novembro, a JEnius juntou novos trainees e membros num torneio de padel no Star Padel Coimbra.",
    image: padel.url,
    content: [
      "Na quarta-feira, 26 de novembro, a JEnius juntou os novos trainees e membros atuais para mais um teambuilding, organizado pelo nosso departamento de R.H., desta vez de padel no Star Padel Coimbra — com boa disposição, espírito de equipa e alguma competitividade à mistura.",
      "Todos os departamentos marcaram presença, num ambiente ideal para integrar os novos membros e reforçar laços entre toda a equipa. Entre jogos intensos e muitas gargalhadas, o torneio interno foi um verdadeiro sucesso.",
      "E sim… a Direção levou o troféu para casa 🏆 Prova de que liderar também conta dentro de campo 😉",
      "A JEnius agradece à Star Padel Coimbra pelo magnífico recinto! Momentos como este mostram o que é ser JEnius: equipa, união e vontade de crescer juntos.",
    ],
  },
  {
    tags: ["Recrutamento"],
    date: "13 Novembro 2025",
    title: "🚀 Recrutamento JEnius 25/26",
    excerpt: "O recrutamento da JEnius 25/26 chegou ao fim — e foi um verdadeiro sucesso, com um número recorde de entradas!",
    image: recrutamento.url,
    content: [
      "O recrutamento da JEnius 25/26 chegou ao fim — e foi um verdadeiro sucesso! 🚀",
      "Este processo contou com um número recorde de entradas, que se juntam agora à nossa Júnior Iniciativa.",
      "Agradecemos a todos os que participaram no processo e damos as boas-vindas aos novos membros! ✨",
      "Para quem não conseguiu candidatar-se nesta fase, as candidaturas espontâneas continuam sempre abertas. Se queres tentar fazer parte da JEnius, podes preencher o formulário ou contactar-nos nas nossas redes sociais! 💡",
    ],
  },
  {
    tags: ["Artigo", "Case Study", "Logística"],
    date: "16 Outubro 2025",
    readTime: "8 min",
    title: "O Porto da Figueira da Foz e a sua importância logística para a região de Coimbra",
    excerpt: "Uma análise sobre o papel estratégico do Porto da Figueira da Foz para a economia e indústria da região Centro.",
    image: portoFigueira.url,
    content: [
      "O Porto da Figueira da Foz constitui uma das infraestruturas logísticas mais relevantes da Região Centro de Portugal. Localizado na foz do rio Mondego, no distrito de Coimbra, este porto desempenha um papel estratégico no apoio às atividades industriais, comerciais e exportadoras da região, funcionando como uma porta de ligação entre o tecido produtivo do Centro e os mercados internacionais.",
      "O Porto da Figueira da Foz e a sua importância logística para a região de Coimbra e os dados mais importantes",
      "A sua importância é comprovada pelos dados recentes de movimentação de carga. Em 2024, o Porto da Figueira da Foz movimentou 2,079 milhões de toneladas de mercadorias, registando um crescimento de 2,27% face a 2023. Ainda assim, este valor ficou abaixo do máximo histórico recente de 2,2 milhões de toneladas, alcançado em 2022. Estes números mostram que o porto tem uma dimensão relevante no contexto regional, embora continue a operar numa escala inferior à dos grandes portos nacionais, como Sines, Leixões ou Lisboa.",
      "A relevância do porto deve ser analisada não apenas pela sua localização costeira, mas sobretudo pelo seu hinterland, ou seja, a área económica terrestre servida pela infraestrutura. O Porto da Figueira da Foz serve o hinterland económico da Região Centro de Portugal e também de Castela e Leão, em Espanha. Esta área de influência inclui Coimbra, o Baixo Mondego, zonas industriais da Região Centro e territórios interiores que podem utilizar o porto como ponto de entrada e saída de mercadorias.",
      "Para a região de Coimbra, esta proximidade é particularmente importante. A ligação entre Coimbra e a Figueira da Foz permite que empresas industriais e exportadoras tenham acesso a uma infraestrutura portuária próxima, reduzindo tempos de transporte terrestre, custos logísticos e dependência de portos mais distantes. Esta vantagem é especialmente relevante para empresas que movimentam cargas industriais, matérias-primas ou produtos de menor valor unitário, onde o custo de transporte tem grande peso na competitividade final.",
      "Historicamente, o porto desenvolveu-se associado às indústrias regionais, em particular aos setores da madeira, pasta de papel, papel, produtos químicos, sal, vidro, argilas, gesso e produtos siderúrgicos. Esta vocação industrial explica a sua especialização em carga geral e carga fracionada, segmentos em que o porto tem maior relevância. Ao contrário de portos mais focados em contentores ou energia, como Sines, a Figueira da Foz posiciona-se sobretudo como um porto regional de apoio à indústria.",
      "Do ponto de vista das acessibilidades, o porto beneficia da ligação a importantes eixos rodoviários, como a A14, a A17 e a EN109, bem como de ligações ferroviárias relevantes. Estas acessibilidades reforçam a sua capacidade de servir empresas localizadas no eixo Coimbra–Figueira da Foz, mas também em zonas mais alargadas da Região Centro. A existência de ligações rodoferroviárias é importante porque permite maior intermodalidade, isto é, a combinação entre transporte marítimo, rodoviário e ferroviário.",
      "No entanto, a análise do Porto da Figueira da Foz deve considerar também os portos mais próximos. O principal porto comparável é o Porto de Aveiro, que também serve a Região Centro e apresenta uma dimensão superior em termos de movimentação de carga. Aveiro compete diretamente com a Figueira da Foz em alguns segmentos industriais e logísticos, mas os dois portos também podem ser vistos como complementares dentro da estratégia logística regional. Enquanto Aveiro tem maior escala e maior capacidade de diversificação, a Figueira da Foz pode oferecer uma solução mais próxima para empresas localizadas no eixo Coimbra–Figueira.",
      "Face a portos maiores, como Leixões, Lisboa e Sines, a Figueira da Foz apresenta limitações de escala. Uma dessas limitações está relacionada com a dimensão dos navios que pode receber: atualmente, o porto tem condições para navios com calado máximo até 6,5 metros e comprimento até 120 metros. Isto significa que não compete diretamente com os maiores portos nacionais em grandes navios ou grandes fluxos contentorizados, mas pode ser competitivo em cargas industriais regionais, transporte marítimo de curta distância e operações de proximidade.",
      "Para além do hinterland, importa referir o foreland do porto, isto é, os mercados marítimos com que se liga. Através das suas operações, o Porto da Figueira da Foz permite que empresas da Região Centro acedam a mercados internacionais, exportando produtos industriais e importando matérias-primas. Desta forma, o porto atua como ponte entre a economia regional e as cadeias internacionais de abastecimento.",
      "A evolução recente também mostra que o porto enfrenta desafios. Depois de movimentar 2,079 milhões de toneladas em 2024, o movimento terá descido para cerca de 1,9 milhões de toneladas em 2025, uma quebra próxima de 8%. Este dado mostra que a atividade portuária é sensível à conjuntura económica, à procura industrial, à concorrência entre portos e à capacidade de captar novos fluxos de mercadorias.",
      "Em termos estratégicos, o Porto da Figueira da Foz representa uma vantagem para Coimbra e para a Região Centro porque aproxima a atividade industrial do transporte marítimo. Esta proximidade pode reduzir custos logísticos, aumentar a competitividade das empresas exportadoras e tornar a região mais atrativa para investimento industrial. No entanto, para reforçar o seu papel, o porto precisa de continuar a melhorar acessibilidades, eficiência operacional, capacidade de captação de carga e articulação com plataformas logísticas regionais.",
      "Empresas e operadores relevantes no ecossistema logístico do Porto da Figueira da Foz",
      "A relevância económica do Porto da Figueira da Foz torna-se mais clara quando se observa o conjunto de empresas, operadores e setores industriais ligados à sua atividade. Mais do que uma infraestrutura isolada, o porto funciona como uma plataforma de apoio ao tecido empresarial da Região Centro, servindo empresas exportadoras, operadores portuários, indústrias transformadoras e cadeias de abastecimento com forte dependência de matérias-primas e transporte marítimo.",
      "Entre as entidades com ligação mais evidente à atividade do porto destacam-se Celbi / Altri, The Navigator Company, Navigator Paper Figueira, Soporcel Pulp, Operfoz e Yilport. Estas empresas surgem associadas aos setores da pasta de papel, papel, operação portuária e gestão de terminais, áreas historicamente ligadas à atividade do Porto da Figueira da Foz.",
      "Para além destas entidades, o ecossistema industrial e logístico da Figueira da Foz e do seu hinterland inclui empresas com relevância regional ou nacional, cuja atividade se relaciona com setores tradicionalmente servidos pelo porto, como papel, madeira, vidro, agroindústria, produtos industriais, cimento, logística e transporte. Neste contexto, podem ser destacadas empresas como Saint-Gobain / Verallia, Lusiaves, Cimpor, Docapesca, CIE Plasfil, United Resins, Microplásticos, Transportes Mariano & Filhos e Transactor Logística.",
      "Esta identificação é relevante para a JEnius porque permite reconhecer oportunidades de colaboração “perto de casa”, junto de empresas e entidades que fazem parte do ecossistema económico da Região Centro. Ao mapear os principais atores ligados ao Porto da Figueira da Foz e ao seu hinterland, a JEnius consegue compreender melhor quais os setores mais dependentes da logística portuária, que desafios podem existir nas suas cadeias de abastecimento e onde podem surgir projetos com impacto real para empresas da região.",
      "Desta forma, o estudo não se limita a analisar uma infraestrutura portuária, mas permite também aproximar a JEnius da realidade empresarial envolvente. Para uma Junior Iniciativa sediada na Universidade de Coimbra, esta proximidade é particularmente importante, pois permite transformar conhecimento académico em análise aplicada, criando pontes entre os nossos membros, estudantes, empresas industriais, operadores logísticos e entidades regionais.",
      "Relevância do Porto da Figueira da Foz como case study para a JEnius",
      "Enquanto membros da JEnius, consideramos que o Porto da Figueira da Foz constitui um bom case study para compreender, a partir de um exemplo real e próximo da Universidade de Coimbra, o funcionamento do setor logístico e portuário na Região Centro. Ao analisar esta infraestrutura, conseguimos estudar temas fundamentais como hinterland, acessibilidades, intermodalidade, movimentação de carga, ligação à indústria e competitividade territorial.",
      "Este caso é particularmente relevante porque o porto não deve ser visto apenas como uma infraestrutura marítima, mas como parte de um ecossistema logístico mais amplo. A sua ligação à região de Coimbra permite perceber de que forma as empresas industriais dependem de soluções eficientes de transporte para exportar produtos, importar matérias-primas e reduzir custos operacionais. Assim, o Porto da Figueira da Foz oferece-nos uma oportunidade para estudar a logística não de forma abstrata, mas aplicada a empresas, fluxos de mercadorias e desafios concretos da Região Centro.",
      "Para a JEnius, este estudo pode ainda servir como ponto de partida para identificar oportunidades de intervenção junto de empresas e entidades regionais. Por exemplo, a análise do porto pode ajudar-nos a perceber que setores usam mais esta infraestrutura, que empresas poderiam beneficiar de uma melhor ligação logística, que limitações existem nas acessibilidades e que oportunidades há para aumentar a eficiência das cadeias de abastecimento. Desta forma, o estudo pode transformar-se numa ferramenta útil para aproximar os nossos membros do tecido empresarial da região.",
      "Além disso, o Porto da Figueira da Foz permite à JEnius cruzar várias áreas do seu posicionamento: logística, gestão industrial, inovação e ligação à academia. A análise pode envolver recolha e tratamento de dados, estudo de fluxos de carga, comparação com portos próximos como Aveiro, Leixões, Lisboa e Sines, identificação de tendências setoriais e avaliação do impacto económico na região de Coimbra. Isto torna o caso especialmente interessante para uma Junior Iniciativa que procura desenvolver competências práticas nos seus membros através de problemas reais.",
      "Este case study pode também funcionar como uma primeira base para futuros relatórios públicos da JEnius sobre logística regional. Ao escolher um tema concreto, próximo e com impacto económico, reforçamos a nossa capacidade de produzir conhecimento útil para empresas, associações e entidades públicas. Um relatório sobre o Porto da Figueira da Foz permite-nos mostrar capacidade analítica, domínio do setor logístico e compreensão das necessidades reais da Região Centro.",
      "Assim, mais do que uma simples infraestrutura portuária, o Porto da Figueira da Foz pode ser entendido como uma porta de entrada para a JEnius estudar o setor logístico regional. Através deste caso, conseguimos compreender melhor o papel dos portos na competitividade das empresas, a importância do hinterland, a relação entre indústria e transporte marítimo e as oportunidades de desenvolvimento logístico na região de Coimbra.",
      "Em suma, o Porto da Figueira da Foz é uma infraestrutura essencial para a logística da Região Centro. Os dados de movimentação de carga demonstram a sua relevância regional, enquanto a análise do hinterland mostra a sua ligação direta à economia de Coimbra e do Centro de Portugal. Apesar da concorrência de Aveiro, Leixões, Lisboa e Sines, a Figueira da Foz mantém um papel próprio enquanto porto regional especializado, particularmente importante para cargas industriais, exportação regional e ligação da economia de Coimbra aos mercados internacionais.",
      "Para a JEnius, este caso representa uma oportunidade clara de aprendizagem e posicionamento. Ao estudar o Porto da Figueira da Foz, conseguimos compreender melhor o funcionamento real do setor logístico, identificar desafios enfrentados por empresas da Região Centro e transformar esse conhecimento em propostas de valor, relatórios, contactos institucionais e potenciais projetos com impacto regional.",
    ],
  },
];

function JeNewsPage() {
  const [active, setActive] = useState<Post | null>(null);

  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader eyebrow="JENews™" title="Insights, notícias e bastidores" subtitle="Logística, gestão industrial, inovação, Junior Movement, carreiras e eventos." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <button
              key={p.title}
              onClick={() => setActive(p)}
              className="group text-left rounded-2xl border border-border bg-card overflow-hidden hover:shadow-[var(--shadow-card)] hover:border-brand/40 transition-all focus:outline-none focus:ring-2 focus:ring-brand"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-secondary">
                <img src={p.image} alt={p.title} className="absolute inset-0 size-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-brand-dark">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar size={12} /> {p.date}
                  {p.readTime && (
                    <>
                      <span>·</span>
                      <Clock size={12} /> {p.readTime}
                    </>
                  )}
                </div>
                <h3 className="mt-3 text-lg font-bold leading-snug group-hover:text-brand transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 transition-all">
                  Ler mais <ArrowRight size={14} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-foreground/60 backdrop-blur-sm grid place-items-center p-4 animate-in fade-in"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-background shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 z-10 size-10 grid place-items-center rounded-full bg-background/90 border border-border hover:bg-secondary"
              aria-label="Fechar"
            >
              <X size={18} />
            </button>
            <div className="aspect-[16/9] bg-secondary overflow-hidden">
              <img src={active.image} alt={active.title} className="size-full object-cover" />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 text-xs flex-wrap">
                {active.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-brand/10 px-3 py-1 font-semibold text-brand-dark">{tag}</span>
                ))}
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Calendar size={12} /> {active.date}
                  {active.readTime && (
                    <>
                      <span className="mx-1">·</span>
                      <Clock size={12} /> {active.readTime}
                    </>
                  )}
                </span>
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold leading-tight">{active.title}</h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                {active.content.map((para, i) => {
                  const isHeading = [
                    "O Porto da Figueira da Foz e a sua importância logística para a região de Coimbra e os dados mais importantes",
                    "Empresas e operadores relevantes no ecossistema logístico do Porto da Figueira da Foz",
                    "Relevância do Porto da Figueira da Foz como case study para a JEnius",
                  ].includes(para);
                  return (
                    <p key={i} className={isHeading ? "font-bold text-foreground" : ""}>
                      {para}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

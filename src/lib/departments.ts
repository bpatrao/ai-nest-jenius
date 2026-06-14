
export type Department = {
  slug: string;
  name: string;
  short: string;
  desc: string;
  color: string;
};

export const departments: Department[] = [
  {
    slug: "ag-cf-alumni",
    name: "Assembleia Geral, Conselho Fiscal e Alumni",
    short: "Órgãos de governação, fiscalização e a rede de antigos membros.",
    desc: "Este núcleo reúne três pilares fundamentais da JEnius:\n\n• Assembleia Geral — órgão deliberativo máximo da JEnius. Reúne todos os membros para aprovar planos de atividades, orçamentos e relatórios, e para eleger os restantes órgãos sociais, garantindo representatividade e transparência.\n\n• Conselho Fiscal — supervisiona a gestão financeira da JEnius, analisa as contas, emite pareceres e assegura o cumprimento dos estatutos e da legislação aplicável, mantendo o rigor e a credibilidade institucional.\n\n• Alumni — a rede de antigos membros da JEnius. Mantém viva a ligação à organização, partilha experiência com as gerações atuais e cria pontes profissionais que reforçam o impacto da JEnius para além do percurso académico.",
    color: "from-brand-dark to-brand",
  },
  {
    slug: "direcao",
    name: "Direção",
    short: "Visão estratégica e coordenação geral.",
    desc: "Equipa pela qual é composta a direção da JEnius, relativa ao mandato 2026/2027. Será um ano de novos desafios, em que continuaremos a apostar no desenvolvimento de competências e na criação de impacto junto da comunidade académica e empresarial.\n\nPara este mandato 25/26 a direção é composta por:\n• Presidente: Jaime Venda\n• Vice-presidente Externa: Ana Simões\n• Vice-presidente Interno: David Fernandes\n• Tesoureiro: Francisco Dias\n• Secretária: Maria Inês\n\nAcreditamos que, com dedicação e espírito de equipa, iremos fortalecer a presença da JEnius e reforçar o nosso compromisso de ligar os estudantes ao mundo da logística e da gestão.\n\nJAJL - JEnius Associação Júnior de Logística",
    color: "from-brand-dark to-accent-orange",
  },
  {
    slug: "projetos",
    name: "Projetos",
    short: "Execução técnica e entrega ao cliente.",
    desc: "O departamento de Projetos é o motor técnico da JEnius. Está em contacto direto com problemas reais de empresas, desenvolvendo soluções estruturadas em logística, gestão industrial, dados e inovação, sempre orientadas a resultados.",
    color: "from-brand to-brand-light",
  },
  {
    slug: "recursos-humanos",
    name: "Recursos Humanos",
    short: "Recrutamento, integração e desenvolvimento dos membros.",
    desc: "O departamento de Recursos Humanos cuida das pessoas. Conduz processos de recrutamento, integra novos membros, promove formação interna e cria iniciativas que reforçam a cultura e o espírito de equipa da JEnius.",
    color: "from-accent-orange to-brand",
  },
  {
    slug: "comercial",
    name: "Comercial",
    short: "Prospeção e novas parcerias com empresas.",
    desc: "O departamento Comercial é a ponte entre a JEnius e o mundo empresarial. Faz prospeção, gere o contacto com potenciais clientes e desenvolve parcerias estratégicas que sustentam os projetos e o crescimento da organização.",
    color: "from-brand-dark to-accent-orange",
  },
  {
    slug: "marketing",
    name: "Marketing",
    short: "Comunicação, imagem e JENews™.",
    desc: "O departamento de Marketing constrói a imagem da JEnius. Gere as redes sociais, produz conteúdo, coordena a JENews™ e garante uma comunicação consistente, profissional e alinhada com os valores da Júnior Iniciativa.",
    color: "from-brand to-brand-dark",
  },
];

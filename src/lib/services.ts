export interface Service {
  slug: string;
  name: string;
  short: string;
  description: string;
  details: string[];
  color: string;
}

export const services: Service[] = [
  {
    slug: "consultoria",
    name: "Consultoria em Logística",
    short: "Diagnóstico e estratégia personalizada para o seu negócio.",
    description:
      "Analisamos os seus processos logísticos de ponta a ponta para identificar oportunidades de melhoria e construir uma estratégia adaptada à realidade da sua empresa.",
    details: [
      "Diagnóstico operacional completo",
      "Mapeamento de processos e fluxos de valor",
      "Plano de ação com KPIs e roadmap",
      "Acompanhamento da implementação",
    ],
    color: "from-emerald-500 to-teal-600",
  },
  {
    slug: "layouts",
    name: "Desenvolvimento de Layouts",
    short: "Otimização de espaços, fluxos e operações físicas.",
    description:
      "Projetamos layouts eficientes para armazéns, centros de distribuição e instalações produtivas, maximizando o uso do espaço e minimizando tempos de movimentação.",
    details: [
      "Simulação de cenários de layout",
      "Cálculo de capacidade e zonas de picking",
      "Fluxogramas de movimentação",
      "Recomendações de equipamentos",
    ],
    color: "from-sky-500 to-blue-600",
  },
  {
    slug: "transportes",
    name: "Gestão de Redes de Transportes",
    short: "Otimização de rotas, custos e prazos de entrega.",
    description:
      "Ajudamos a desenhar e otimizar redes de distribuição, selecionando modais, definindo zonas de entrega e negociando condições com operadores logísticos.",
    details: [
      "Modelação de redes de distribuição",
      "Análise de modais e outsourcing",
      "Otimização de rotas e zonas",
      "Análise de custos por entrega",
    ],
    color: "from-orange-500 to-amber-600",
  },
  {
    slug: "stocks",
    name: "Gestão de Stocks",
    short: "Controlo de inventário, disponibilidade e redução de desperdício.",
    description:
      "Implementamos metodologias de gestão de inventário que equilibram a disponibilidade de produtos com a minimização de capital imobilizado e obsolescência.",
    details: [
      "Classificação ABC/XYZ e curvas de vendas",
      "Cálculo de stocks de segurança e pontos de encomenda",
      "Redução de quebras e overstocks",
      "Integração com sistemas de informação",
    ],
    color: "from-violet-500 to-purple-600",
  },
  {
    slug: "processos",
    name: "Otimização de Processos Logísticos",
    short: "Identificação de ineficiências e aumento da produtividade.",
    description:
      "Mapeamos, medimos e redesenhamos processos logísticos para eliminar desperdício, reduzir tempos de ciclo e aumentar a capacidade operacional.",
    details: [
      "Mapeamento de processos AS-IS / TO-BE",
      "Análise de tempos e movimentos",
      "Aplicação de Lean e Six Sigma",
      "Treino das equipas nos novos processos",
    ],
    color: "from-rose-500 to-pink-600",
  },
];

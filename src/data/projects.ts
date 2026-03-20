export type ProjectCategory = "Destaque" | "Intermediário" | "Ferramenta";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  summary: string;
  objective: string;
  technologies: string[];
  architecture: string[];
  implementation: string[];
  results: string[];
  learnings: string[];
  links: ProjectLink[];
};

const githubProfile = "https://github.com/0xHenrySec";
const mediumProfile = "https://medium.com/@0xHenry";

export const projects: Project[] = [
  {
    slug: "cryptoshield",
    title: "CryptoShield",
    category: "Destaque",
    tagline: "Laboratório defensivo para identificar sinais de ransomware e abuso de criptografia em Linux.",
    summary:
      "O CryptoShield foi pensado para estudar como um ambiente Linux reage a comportamentos típicos de ransomware, com foco em processos suspeitos, escrita em massa, alterações anômalas de arquivos e correlação de eventos em tempo quase real.",
    objective:
      "Criar um fluxo de detecção capaz de antecipar indícios de criptografia maliciosa antes que o host perca disponibilidade, usando visibilidade de processo, filesystem e telemetria centralizada.",
    technologies: ["Linux", "auditd", "Sysmon for Linux", "Sigma", "Python", "Wazuh"],
    architecture: [
      "Coleta de eventos de processo, arquivo e privilégio com auditd e Sysmon for Linux.",
      "Envio e normalização dos logs em uma camada de monitoramento central para correlacionar múltiplos sinais em contexto único.",
      "Regras de detecção adaptadas para cenários de encryptors, exclusão em massa e persistência em laboratório controlado."
    ],
    implementation: [
      "Mapeamento de comportamentos associados a ransomware para orientar quais eventos deveriam ser coletados e priorizados.",
      "Criação de scripts e rotinas em Python para gerar atividade simulada e testar a confiabilidade da telemetria.",
      "Ajuste de alertas para reduzir ruído e destacar apenas o que realmente ajuda na triagem defensiva."
    ],
    results: [
      "Melhor visibilidade sobre padrões de escrita, rename e destruição de arquivos em ambiente Linux.",
      "Base inicial de alertas reutilizáveis para cenários de resposta a incidente e tuning de SIEM.",
      "Documentação prática de um pipeline focado em detecção e evidências, e não apenas em instalação de ferramentas."
    ],
    learnings: [
      "Contexto de processo é decisivo para separar automação legítima de comportamento destrutivo.",
      "Coletar mais logs não basta; o valor está na correlação certa e na capacidade de interpretar o evento."
    ],
    links: [
      { label: "GitHub", href: githubProfile },
      { label: "Medium", href: mediumProfile }
    ]
  },
  {
    slug: "hardening-linux",
    title: "Hardening Linux",
    category: "Destaque",
    tagline: "Baseline prático para reduzir superfície de ataque e elevar a auditabilidade de hosts Linux.",
    summary:
      "Este projeto reúne um conjunto de configurações e revisões voltadas para endurecimento de sistemas Linux, com atenção especial a autenticação, serviços expostos, firewall, trilhas de auditoria e padronização operacional.",
    objective:
      "Consolidar um baseline de hardening repetível, útil tanto para laboratórios quanto para servidores administrativos, priorizando segurança prática e validação técnica.",
    technologies: ["Linux", "SSH", "UFW", "Fail2ban", "Auditd", "Bash"],
    architecture: [
      "Camada de autenticação reforçada com políticas de senha, acesso SSH restritivo e revisão de privilégios.",
      "Camada de exposição reduzida com firewall, desativação de serviços desnecessários e revisão de portas abertas.",
      "Camada de visibilidade com logs, auditoria e checklist de conformidade para comparar estado antes e depois do endurecimento."
    ],
    implementation: [
      "Aplicação de checklist técnico para SSH, sudo, PAM, permissões sensíveis e serviços essenciais.",
      "Automação em shell para acelerar configurações recorrentes e validar o estado final do host.",
      "Testes em máquinas virtuais para medir impacto, consistência e pontos que ainda exigem ajuste manual."
    ],
    results: [
      "Hosts com configuração mais previsível, menos exposição e melhor capacidade de auditoria.",
      "Documentação reaproveitável para replicar o baseline em novos cenários de laboratório.",
      "Maior clareza sobre o que realmente fortalece o sistema versus mudanças cosméticas."
    ],
    learnings: [
      "Hardening eficiente depende de processo e revisão contínua, não de uma execução única.",
      "Pequenos ajustes em autenticação, logging e serviços já entregam ganhos defensivos relevantes."
    ],
    links: [
      { label: "GitHub", href: githubProfile },
      { label: "Medium", href: mediumProfile }
    ]
  },
  {
    slug: "infraestrutura-linux-corporativa-em-laboratorio",
    title: "Infraestrutura Linux Corporativa em Laboratório",
    category: "Destaque",
    tagline: "Ambiente corporativo simulado para estudar administração segura, segmentação e monitoramento.",
    summary:
      "Laboratório criado para reproduzir uma pequena infraestrutura Linux com serviços distintos, políticas de acesso, observabilidade e cenários de troubleshooting. O objetivo é aproximar a prática de um contexto corporativo realista.",
    objective:
      "Centralizar, em um mesmo ambiente, os elementos necessários para exercitar defesa, hardening, organização de serviços e investigação técnica com foco operacional.",
    technologies: ["Linux", "Docker", "Nginx", "SSH", "Wazuh", "Virtualização"],
    architecture: [
      "Topologia com segmentação por função, separando serviços administrativos, aplicação e monitoramento.",
      "Hosts Linux com papéis distintos para representar uma rotina de operação mais próxima do mundo real.",
      "Camada de observabilidade para acompanhar eventos, disponibilidade e mudanças de configuração."
    ],
    implementation: [
      "Provisionamento de VMs e containers para simular serviços internos e dependências entre componentes.",
      "Definição de políticas de acesso, contas administrativas, rotinas de backup e manutenção.",
      "Execução de testes de falha e incidentes simulados para medir recuperação, visibilidade e troubleshooting."
    ],
    results: [
      "Ambiente reutilizável para estudos de Blue Team, administração Linux e exercícios de resposta.",
      "Melhor entendimento das relações entre topologia, telemetria e segurança operacional.",
      "Base consistente para demonstrar capacidade hands-on em cenários mais completos do que labs isolados."
    ],
    learnings: [
      "Laboratórios mais valiosos são os que simulam operação, dependências e manutenção, e não só instalação.",
      "Documentação de topologia e fluxo de logs acelera muito a expansão e a investigação do ambiente."
    ],
    links: [
      { label: "GitHub", href: githubProfile },
      { label: "Medium", href: mediumProfile }
    ]
  },
  {
    slug: "uz-trampa",
    title: "Uz Trampa",
    category: "Intermediário",
    tagline: "Ambiente controlado com iscas e observabilidade para estudar comportamento de invasores.",
    summary:
      "Uz Trampa é um laboratório intermediário voltado à observação de interações suspeitas em serviços isca, permitindo coletar comandos, origens e padrões de comportamento para posterior análise defensiva.",
    objective:
      "Gerar sinais úteis de detecção a partir de um ambiente controlado, onde a atividade observada possa ser estudada sem comprometer a infraestrutura principal.",
    technologies: ["Linux", "Cowrie", "Python", "Syslog", "Docker"],
    architecture: [
      "Serviços isca expostos em ambiente segregado para receber conexões e tentativas de abuso.",
      "Centralização dos eventos em logs próprios para análise de sessões, comandos e origens.",
      "Scripts de apoio para resumir indicadores e tornar a triagem mais prática."
    ],
    implementation: [
      "Configuração de honeypots e rotas de log dedicadas para reduzir interferência no restante do laboratório.",
      "Organização dos dados capturados por sessão, origem e tipo de interação.",
      "Refino do ambiente para reduzir ruído e manter foco no valor analítico dos eventos coletados."
    ],
    results: [
      "Base de eventos reais ou semi-realistas para treino de triagem e correlação.",
      "Visibilidade mais concreta sobre tentativas simples de reconhecimento, acesso e automação maliciosa."
    ],
    learnings: [
      "Nem todo evento capturado é útil; contexto e filtragem são essenciais para gerar valor.",
      "Mesmo ataques simples podem revelar padrões importantes para detecção inicial."
    ],
    links: [
      { label: "GitHub", href: githubProfile },
      { label: "Medium", href: mediumProfile }
    ]
  },
  {
    slug: "hackermindset",
    title: "Hackermindset",
    category: "Intermediário",
    tagline: "Exercícios técnicos para transformar pensamento ofensivo em melhoria defensiva.",
    summary:
      "Hackermindset é um projeto de estudo aplicado para observar como fraquezas de configuração podem ser exploradas e, principalmente, como esses comportamentos podem ser percebidos em logs, monitoramento e controles defensivos.",
    objective:
      "Treinar raciocínio técnico a partir da perspectiva de ataque para fortalecer priorização de controles, hipóteses de detecção e análise de evidências.",
    technologies: ["Linux", "Python", "Bash", "Networking", "Logs"],
    architecture: [
      "Exercícios divididos por reconhecimento, exploração, observação e resposta.",
      "Registro de hipóteses defensivas geradas a partir de cada prática realizada."
    ],
    implementation: [
      "Montagem de cenários controlados com configurações frágeis para estudar abuso de confiança e exposição desnecessária.",
      "Análise de como cada ação pode aparecer em logs, fluxo de rede e trilhas de auditoria.",
      "Tradução do aprendizado ofensivo em backlog defensivo e ajustes de visibilidade."
    ],
    results: [
      "Melhoria do raciocínio sobre cadeia de ataque e superfícies de detecção.",
      "Capacidade maior de conectar estudo ofensivo com melhoria concreta de postura defensiva."
    ],
    learnings: [
      "Pensar como atacante ajuda a priorizar controles realmente úteis.",
      "A melhor utilidade do estudo ofensivo é transformá-lo em prevenção, visibilidade e resposta."
    ],
    links: [
      { label: "GitHub", href: githubProfile },
      { label: "Medium", href: mediumProfile }
    ]
  },
  {
    slug: "password-generator",
    title: "Password Generator",
    category: "Ferramenta",
    tagline: "Utilitário simples para geração de senhas fortes com foco em uso rápido e boas práticas.",
    summary:
      "Ferramenta criada para gerar senhas robustas de forma prática, permitindo controlar tamanho, caracteres e requisitos mínimos para evitar combinações fracas.",
    objective:
      "Disponibilizar um utilitário leve para reforçar boas práticas de autenticação e demonstrar atenção a fundamentos importantes de segurança.",
    technologies: ["Python", "CLI", "Segurança de Senhas"],
    architecture: [
      "Entrada simples de parâmetros e geração local da senha sem dependência externa.",
      "Regras mínimas para elevar entropia e evitar combinações previsíveis."
    ],
    implementation: [
      "Definição dos conjuntos de caracteres e critérios mínimos de geração.",
      "Saída desenhada para uso rápido em terminal e fácil adaptação para outros scripts."
    ],
    results: [
      "Ferramenta pequena, direta e útil para o dia a dia.",
      "Exemplo de como utilitários simples também comunicam preocupação com segurança prática."
    ],
    learnings: [
      "Pequenas ferramentas podem ser extremamente valiosas quando resolvem um problema frequente com clareza."
    ],
    links: [
      { label: "GitHub", href: githubProfile },
      { label: "Medium", href: mediumProfile }
    ]
  },
  {
    slug: "system-check-tool",
    title: "system-check-tool",
    category: "Ferramenta",
    tagline: "Script para revisão rápida de postura, serviços e estado básico de hosts Linux.",
    summary:
      "Ferramenta criada para acelerar uma checagem técnica inicial, reunindo informações de serviços, portas, usuários, atualizações e outros indicadores úteis para auditoria básica e hardening.",
    objective:
      "Reduzir análise manual repetitiva durante revisões iniciais de host, criando um ponto de partida mais consistente para troubleshooting e avaliação defensiva.",
    technologies: ["Bash", "Linux", "Auditoria Básica"],
    architecture: [
      "Coleta modular de informações sobre rede, serviços, usuários e estado geral do sistema.",
      "Saída padronizada para facilitar leitura, comparação entre hosts e documentação técnica."
    ],
    implementation: [
      "Organização das checagens por blocos lógicos para facilitar manutenção e expansão do script.",
      "Padronização da saída para apoiar triagem rápida e uso em laboratório."
    ],
    results: [
      "Economia de tempo em avaliações técnicas iniciais.",
      "Checklist automatizado útil para revisão recorrente de sistemas Linux."
    ],
    learnings: [
      "Padronizar observações facilita comunicação técnica e reduz falhas humanas durante análise inicial."
    ],
    links: [
      { label: "GitHub", href: githubProfile },
      { label: "Medium", href: mediumProfile }
    ]
  }
];

export const featuredProjects = projects.filter((project) => project.category === "Destaque");
export const intermediateProjects = projects.filter((project) => project.category === "Intermediário");
export const toolProjects = projects.filter((project) => project.category === "Ferramenta");

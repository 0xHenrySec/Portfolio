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

export const projects: Project[] = [
  {
    slug: "cryptoshield",
    title: "CryptoShield",
    category: "Destaque",
    tagline: "Laboratório de detecção voltado para ransomware e abuso de criptografia em endpoints Linux.",
    summary:
      "Projeto orientado a visibilidade de processos suspeitos, alterações em massa e padrões anormais de CPU, disco e I/O relacionados a ransomware em ambiente controlado.",
    objective:
      "Construir um fluxo defensivo capaz de identificar comportamentos compatíveis com criptografia maliciosa antes da indisponibilidade total do host.",
    technologies: ["Linux", "auditd", "Sysmon for Linux", "Sigma", "Python", "Wazuh"],
    architecture: [
      "Coleta de eventos com auditd e Sysmon for Linux para mapear execução de processos, alterações de arquivos e privilégios.",
      "Normalização e correlação no Wazuh para unir sinais de filesystem, processos e persistência em um único contexto analítico.",
      "Regras Sigma adaptadas para o laboratório com foco em encryptors, comportamento destrutivo e ações pós-comprometimento."
    ],
    implementation: [
      "Mapeamento de TTPs ligadas a encryptors e scripts de impacto para orientar a criação de telemetria.",
      "Criação de playbooks de triagem para picos de escrita, rename em massa e exclusão de arquivos.",
      "Automação em Python para gerar evidências, validar hipóteses de detecção e repetir cenários de teste."
    ],
    results: [
      "Redução do tempo de identificação de atividade suspeita durante simulações de criptografia maliciosa.",
      "Conjunto inicial de alertas acionáveis para processos anômalos, persistência e destruição de arquivos.",
      "Base reaproveitável para tuning de SIEM, investigação e exercícios de resposta a incidente."
    ],
    learnings: [
      "Correlação por contexto de processo gera menos ruído do que alertas isolados por evento de arquivo.",
      "Ambientes Linux exigem observabilidade detalhada para separar manutenção legítima de comportamento destrutivo."
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Artigo técnico", href: "#" }
    ]
  },
  {
    slug: "hardening-linux",
    title: "Hardening Linux",
    category: "Destaque",
    tagline: "Baseline de segurança para hosts Linux com foco em superfície reduzida e auditabilidade.",
    summary:
      "Coleção de controles de autenticação, serviços, firewall, logging e configuração segura para ambientes administrativos e de laboratório.",
    objective:
      "Criar um baseline reproduzível para endurecimento de sistemas Linux em cenários de servidor e estação administrativa.",
    technologies: ["Linux", "SSH", "UFW", "Fail2ban", "Auditd", "Bash"],
    architecture: [
      "Camada de autenticação endurecida com políticas de senha, SSH restritivo e revisão de privilégios.",
      "Camada de redução de superfície com desativação de serviços e controle de portas expostas.",
      "Camada de visibilidade com logs locais, trilhas de auditoria e checklist técnico padronizado."
    ],
    implementation: [
      "Aplicação de checklists para SSH, sudo, PAM, permissões de arquivos e serviços essenciais.",
      "Automação de firewall, políticas básicas de auditoria e revisão de exposição do host.",
      "Validação em VMs com comparação entre baseline original e estado endurecido."
    ],
    results: [
      "Menor superfície de ataque e configuração operacional mais previsível.",
      "Documentação clara para repetição do hardening em novos laboratórios.",
      "Melhora da capacidade de auditoria em eventos administrativos e alterações sensíveis."
    ],
    learnings: [
      "Hardening efetivo depende de padrão consistente e revisão contínua, não de medidas isoladas.",
      "Pequenas mudanças em autenticação, serviços e logging já elevam bastante a maturidade operacional."
    ],
    links: [
      { label: "Checklist técnico", href: "#" },
      { label: "Notas de laboratório", href: "#" }
    ]
  },
  {
    slug: "infraestrutura-linux-corporativa-em-laboratorio",
    title: "Infraestrutura Linux Corporativa em Laboratório",
    category: "Destaque",
    tagline: "Ambiente corporativo simulado com serviços centrais, segmentação e monitoramento.",
    summary:
      "Laboratório desenhado para reproduzir rotinas de administração, autenticação, observabilidade e testes de segurança em uma topologia controlada.",
    objective:
      "Concentrar em um único ambiente os componentes necessários para praticar defesa, hardening e troubleshooting com foco operacional.",
    technologies: ["Linux", "Docker", "Nginx", "SSH", "Wazuh", "Virtualização"],
    architecture: [
      "Topologia segmentada por serviços administrativos, aplicação e observabilidade.",
      "Hosts Linux com papéis distintos para simular operação corporativa real.",
      "Monitoramento centralizado para eventos, disponibilidade e conformidade de configuração."
    ],
    implementation: [
      "Provisionamento de VMs e containers para representar camadas de uma rede interna.",
      "Definição de políticas de acesso, contas administrativas e rotinas de manutenção.",
      "Testes de falha e cenários de incidente para medir recuperação, visibilidade e troubleshooting."
    ],
    results: [
      "Ambiente reutilizável para estudos de Blue Team, administração segura e investigação.",
      "Melhor entendimento de dependências entre serviços, rede e telemetria.",
      "Base concreta para demonstrar capacidade hands-on em contexto corporativo simulado."
    ],
    learnings: [
      "Laboratórios mais úteis são os que replicam operação real, não apenas instalação de ferramentas.",
      "Documentar topologia, fluxo de logs e papéis do ambiente acelera investigação e expansão."
    ],
    links: [
      { label: "Resumo do laboratório", href: "#" },
      { label: "Arquitetura", href: "#" }
    ]
  },
  {
    slug: "uz-trampa",
    title: "Uz Trampa",
    category: "Intermediário",
    tagline: "Ambiente ofensivo controlado para estudar detecção, iscas e comportamento de invasores.",
    summary:
      "Projeto intermediário que combina telemetria e provocação controlada para observar interações suspeitas em um cenário isolado.",
    objective:
      "Gerar sinais úteis para análise defensiva ao expor serviços e artefatos monitorados em um ambiente segregado.",
    technologies: ["Linux", "Cowrie", "Python", "Syslog", "Docker"],
    architecture: [
      "Serviços isca expostos em ambiente segregado para captar interações suspeitas.",
      "Coleta de eventos em tempo real para análise posterior de padrões, comandos e origens.",
      "Camada de scripts para consolidação de evidências e redução de ruído."
    ],
    implementation: [
      "Configuração de honeypots e rotas de log dedicadas para isolar o tráfego observado.",
      "Organização de indicadores relevantes por sessão, comando e origem.",
      "Ajuste de ruído para manter o laboratório útil para triagem e correlação."
    ],
    results: [
      "Base de eventos para praticar triagem, correlação e storytelling analítico.",
      "Visibilidade sobre técnicas simples de reconhecimento e tentativa de acesso."
    ],
    learnings: [
      "Sinais de baixa complexidade ainda ajudam muito em detecção inicial.",
      "Honeypots exigem contexto para não inflar métricas sem valor analítico."
    ],
    links: [
      { label: "Notas do projeto", href: "#" },
      { label: "Write-up", href: "#" }
    ]
  },
  {
    slug: "hackermindset",
    title: "Hackermindset",
    category: "Intermediário",
    tagline: "Coleção de exercícios para pensar em superfície de ataque, abuso de confiança e detecção.",
    summary:
      "Projeto de estudo estruturado para praticar raciocínio técnico orientado a ataque e traduzir esse raciocínio em controles defensivos.",
    objective:
      "Treinar observação, hipótese e resposta defensiva a partir da perspectiva de como um invasor explora configurações fracas.",
    technologies: ["Linux", "Python", "Bash", "Networking", "Logs"],
    architecture: [
      "Exercícios separados por reconhecimento, exploração e detecção.",
      "Registro de hipóteses defensivas geradas a partir de cada experimento prático."
    ],
    implementation: [
      "Montagem de cenários controlados com configurações intencionalmente frágeis.",
      "Análise de como cada fragilidade aparece em logs, monitoramento e auditoria."
    ],
    results: [
      "Melhoria no raciocínio sobre cadeia de ataque e pontos de visibilidade.",
      "Maior capacidade de transformar estudo ofensivo em backlog defensivo."
    ],
    learnings: [
      "Pensar como atacante melhora a priorização de controles.",
      "A pergunta mais útil depois de cada teste é como isso apareceria no ambiente real."
    ],
    links: [
      { label: "Caderno técnico", href: "#" },
      { label: "Referências", href: "#" }
    ]
  },
  {
    slug: "password-generator",
    title: "Password Generator",
    category: "Ferramenta",
    tagline: "Ferramenta utilitária para geração de senhas fortes com configuração simples.",
    summary:
      "Aplicação de apoio para criar senhas robustas com variações de comprimento, conjuntos de caracteres e políticas mínimas.",
    objective:
      "Disponibilizar uma ferramenta prática e direta para reforçar boas práticas de autenticação no dia a dia.",
    technologies: ["Python", "CLI", "Segurança de Senhas"],
    architecture: [
      "Entrada simples de parâmetros e geração local de senha.",
      "Regras para evitar combinações fracas e baixa entropia."
    ],
    implementation: [
      "Definição de conjuntos de caracteres e validações mínimas.",
      "Saída orientada a uso rápido em ambiente CLI."
    ],
    results: [
      "Ferramenta leve para demonstrar fundamentos de autenticação segura.",
      "Exemplo prático de utilitário com foco em segurança."
    ],
    learnings: [
      "Utilitários pequenos também comunicam maturidade técnica quando resolvem um problema real."
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Documentação", href: "#" }
    ]
  },
  {
    slug: "system-check-tool",
    title: "system-check-tool",
    category: "Ferramenta",
    tagline: "Script de verificação rápida para postura de segurança e estado básico do host.",
    summary:
      "Ferramenta de apoio para coletar informações de configuração, serviços, versões e sinais operacionais relevantes durante auditoria inicial.",
    objective:
      "Agilizar uma checagem técnica inicial de hosts Linux sem depender de análise manual repetitiva.",
    technologies: ["Bash", "Linux", "Auditoria Básica"],
    architecture: [
      "Coleta modular de informações sobre serviços, portas, usuários e atualizações.",
      "Saída padronizada para uso em triagem, hardening e revisão inicial."
    ],
    implementation: [
      "Organização do script por grupos de checagem.",
      "Padronização da saída para leitura rápida e comparação entre hosts."
    ],
    results: [
      "Ganho de tempo em avaliações técnicas iniciais.",
      "Checklist automatizado para tarefas recorrentes de revisão."
    ],
    learnings: [
      "Padronizar observações reduz falhas humanas e facilita comunicação técnica."
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Exemplo de saída", href: "#" }
    ]
  }
];

export const featuredProjects = projects.filter((project) => project.category === "Destaque");
export const intermediateProjects = projects.filter((project) => project.category === "Intermediário");
export const toolProjects = projects.filter((project) => project.category === "Ferramenta");

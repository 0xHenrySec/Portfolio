export type ProjectCategory = "Destaque" | "Intermediario" | "Ferramenta";

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
    tagline: "Laboratorio de deteccao para ransomware e abuso de criptografia em endpoints Linux.",
    summary:
      "Projeto voltado para visibilidade de processos suspeitos, alteracoes em massa e padroes de uso anormal de CPU, disco e I/O relacionados a ransomware.",
    objective:
      "Construir um fluxo de deteccao defensiva capaz de identificar comportamento compativel com criptografia maliciosa antes da indisponibilidade total do host.",
    technologies: ["Linux", "auditd", "Sysmon for Linux", "Sigma", "Python", "Wazuh"],
    architecture: [
      "Coleta de eventos via auditd e Sysmon for Linux.",
      "Normalizacao no Wazuh para correlacionar execucao de binarios, alteracoes de arquivos e escalada de privilegios.",
      "Regras Sigma adaptadas para comportamento de ransomware em laboratorio controlado."
    ],
    implementation: [
      "Mapeamento de TTPs relacionadas a encryptors e scripts de impacto.",
      "Criacao de playbooks para triagem de picos de escrita, rename e exclusao em massa.",
      "Automacao em Python para gerar evidencias e validar o pipeline de deteccao."
    ],
    results: [
      "Reducao do tempo de identificacao de atividades suspeitas em laboratorio.",
      "Conjunto inicial de alertas acionaveis para processos anormais e persistencia.",
      "Base reutilizavel para cenarios de resposta e tuning de SIEM."
    ],
    learnings: [
      "Correlacao por contexto de processo gera menos ruido do que alertas isolados por arquivo.",
      "Ambientes Linux exigem observabilidade detalhada para diferenciar manutencao legitima de impacto malicioso."
    ],
    links: [{ label: "Repositorio em preparacao", href: "#" }]
  },
  {
    slug: "hardening-linux",
    title: "Hardening Linux",
    category: "Destaque",
    tagline: "Baseline de seguranca para hosts Linux com foco em exposicao reduzida e auditabilidade.",
    summary:
      "Colecao de controles para reforco de autenticacao, servicos, firewall, logging e configuracao segura em ambientes de laboratorio.",
    objective:
      "Criar um baseline reproduzivel para endurecimento de sistemas Linux em cenarios de servidor e estacao administrativa.",
    technologies: ["Linux", "SSH", "UFW", "Fail2ban", "Auditd", "Bash"],
    architecture: [
      "Camada de autenticacao endurecida com politicas de senha e SSH restritivo.",
      "Camada de superficie reduzida com desativacao de servicos e controle de portas.",
      "Camada de visibilidade com logs locais e trilhas de auditoria."
    ],
    implementation: [
      "Aplicacao de checklists tecnicos para SSH, sudo, PAM e permissao de arquivos.",
      "Automacao de configuracoes de firewall e rotinas basicas de auditoria.",
      "Validacao em VMs com comparativo antes e depois do baseline."
    ],
    results: [
      "Menor superficie de ataque e configuracao mais previsivel.",
      "Documentacao clara para repeticao do hardening em novos laboratorios.",
      "Melhora da capacidade de auditoria em eventos administrativos."
    ],
    learnings: [
      "Hardening efetivo depende de padrao consistente e revisao continua, nao de medidas isoladas.",
      "Mudancas pequenas em autenticacao e servicos ja elevam bastante a maturidade operacional."
    ],
    links: [{ label: "Checklist tecnico", href: "#" }]
  },
  {
    slug: "infraestrutura-linux-corporativa-em-laboratorio",
    title: "Infraestrutura Linux Corporativa em Laboratorio",
    category: "Destaque",
    tagline: "Ambiente corporativo simulado com servicos centrais, segmentacao e monitoramento.",
    summary:
      "Laboratorio desenhado para reproduzir rotinas de administracao, autenticacao, observabilidade e testes de seguranca em uma topologia interna controlada.",
    objective:
      "Concentrar em um unico ambiente os componentes necessarios para praticar defesa, hardening e troubleshooting com foco operacional.",
    technologies: ["Linux", "Docker", "Nginx", "SSH", "Wazuh", "Virtualizacao"],
    architecture: [
      "Topologia segmentada por servicos administrativos, aplicacao e observabilidade.",
      "Hosts Linux com papeis distintos para simular operacao corporativa.",
      "Monitoramento centralizado para eventos, disponibilidade e configuracao."
    ],
    implementation: [
      "Provisionamento de VMs e containers para representar camadas de uma rede interna.",
      "Definicao de politicas de acesso, contas administrativas e rotinas de manutencao.",
      "Teste de falhas e cenarios de incidente para medir recuperacao e visibilidade."
    ],
    results: [
      "Ambiente reutilizavel para estudos de Blue Team e administracao segura.",
      "Melhor entendimento de dependencias entre servicos e telemetria.",
      "Base concreta para demonstrar capacidade hands-on a recrutadores."
    ],
    learnings: [
      "Laboratorios mais uteis sao os que replicam operacao real, nao apenas instalacao de ferramentas.",
      "Documentar topologia e fluxo de logs acelera tanto investigacao quanto expansao do ambiente."
    ],
    links: [{ label: "Resumo do laboratorio", href: "#" }]
  },
  {
    slug: "uz-trampa",
    title: "Uz Trampa",
    category: "Intermediario",
    tagline: "Ambiente ofensivo-controlado para estudar deteccao, iscas e comportamento de invasores.",
    summary:
      "Projeto intermediario que combina telemetria e provocacao controlada para observar interacoes suspeitas em um cenario de laboratorio.",
    objective:
      "Gerar sinais uteis para analise defensiva ao expor servicos e artefatos monitorados em um ambiente isolado.",
    technologies: ["Linux", "Cowrie", "Python", "Syslog", "Docker"],
    architecture: [
      "Servicos isca expostos em ambiente segregado.",
      "Coleta de eventos em tempo real para posterior analise de padroes.",
      "Camada de scripts para consolidar evidencias."
    ],
    implementation: [
      "Configuracao de honeypots e rotas de log dedicadas.",
      "Organizacao de indicadores relevantes para sessao, comando e origem.",
      "Ajustes de ruido para manter o laboratorio legivel."
    ],
    results: [
      "Base de eventos para praticar triagem e correlacao.",
      "Visibilidade sobre tecnicas simples de reconhecimento e tentativa de acesso."
    ],
    learnings: [
      "Sinais de baixa complexidade ainda ajudam muito em deteccao inicial.",
      "Honeypots exigem contexto para nao inflar metricas sem valor analitico."
    ],
    links: [{ label: "Notas do projeto", href: "#" }]
  },
  {
    slug: "hackermindset",
    title: "Hackermindset",
    category: "Intermediario",
    tagline: "Colecao de exercicios para pensar em superficie de ataque, abuso de confianca e deteccao.",
    summary:
      "Projeto de estudo estruturado para praticar raciocinio tecnico orientado a ataque e traducao desse raciocinio em controles defensivos.",
    objective:
      "Treinar observacao, hipotese e resposta defensiva a partir da perspectiva de como um invasor explora configuracoes fracas.",
    technologies: ["Linux", "Python", "Bash", "Networking", "Logs"],
    architecture: [
      "Exercicios separados por etapa de reconhecimento, exploracao e deteccao.",
      "Registro de hipoteses defensivas geradas a partir de cada experimento."
    ],
    implementation: [
      "Montagem de cenarios controlados com configuracoes intencionalmente fracas.",
      "Analise de como cada fragilidade pode ser percebida via logs e monitoramento."
    ],
    results: [
      "Melhoria no raciocinio sobre cadeia de ataque e pontos de visibilidade.",
      "Maior capacidade de transformar estudo ofensivo em backlog defensivo."
    ],
    learnings: [
      "Pensar como atacante melhora priorizacao de controles.",
      "A melhor pergunta depois de cada teste e como isso apareceria no ambiente real."
    ],
    links: [{ label: "Caderno tecnico", href: "#" }]
  },
  {
    slug: "password-generator",
    title: "Password Generator",
    category: "Ferramenta",
    tagline: "Ferramenta utilitaria para geracao de senhas fortes com configuracao simples.",
    summary:
      "Aplicacao de apoio para criar senhas robustas com variacoes de comprimento, conjuntos de caracteres e politicas minimas.",
    objective:
      "Disponibilizar uma ferramenta pratica e direta para reforcar boas praticas de autenticacao no dia a dia.",
    technologies: ["Python", "CLI", "Seguranca de Senhas"],
    architecture: [
      "Entrada simples de parametros e geracao local da senha.",
      "Regras para evitar combinacoes fracas e baixa entropia."
    ],
    implementation: [
      "Definicao de conjuntos de caracteres e validacoes minimas.",
      "Saida orientada a uso rapido em ambiente CLI."
    ],
    results: [
      "Ferramenta leve para demonstrar fundamentos de autenticacao segura.",
      "Exemplo pratico de utilitario com foco em seguranca."
    ],
    learnings: [
      "Utilitarios pequenos tambem comunicam maturidade tecnica quando resolvem um problema real."
    ],
    links: [{ label: "Repositorio em preparacao", href: "#" }]
  },
  {
    slug: "system-check-tool",
    title: "system-check-tool",
    category: "Ferramenta",
    tagline: "Script de verificacao rapida para posture de seguranca e estado basico do host.",
    summary:
      "Ferramenta de apoio para coletar informacoes de configuracao, servicos, versoes e sinais operacionais relevantes durante auditoria inicial.",
    objective:
      "Agilizar uma checagem tecnica inicial de hosts Linux sem depender de analise manual repetitiva.",
    technologies: ["Bash", "Linux", "Auditoria Basica"],
    architecture: [
      "Coleta modular de informacoes sobre servicos, portas, usuarios e atualizacoes.",
      "Saida padronizada para uso em triagem e hardening."
    ],
    implementation: [
      "Organizacao do script por grupos de checagem.",
      "Padronizacao da saida para leitura rapida e comparacao."
    ],
    results: [
      "Ganho de tempo em avaliacoes tecnicas iniciais.",
      "Checklist automatizado para tarefas recorrentes de revisao."
    ],
    learnings: [
      "Padronizar observacoes reduz falhas humanas e facilita comunicacao tecnica."
    ],
    links: [{ label: "Repositorio em preparacao", href: "#" }]
  }
];

export const featuredProjects = projects.filter((project) => project.category === "Destaque");
export const intermediateProjects = projects.filter((project) => project.category === "Intermediario");
export const toolProjects = projects.filter((project) => project.category === "Ferramenta");

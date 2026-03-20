export type ProjectCategory = "Principal" | "Intermediário" | "Ferramenta";

export type ProjectLinks = {
  demo?: string;
  repo?: string;
  writeup?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  technologies: string[];
  highlights: string[];
  result: string;
  links: ProjectLinks;
};

export const projects: Project[] = [
  {
    slug: "cryptoshield",
    title: "CryptoShield",
    category: "Principal",
    summary: "Detecção de fraudes em transações blockchain em tempo real.",
    description:
      "Projeto desenvolvido no Challenge FIAP x TecBan 2025, focado na análise e correlação de transações em blockchain para identificação de atividades suspeitas.",
    technologies: ["Python", "Alchemy API", "Ethereum Sepolia", "Splunk", "Telegram"],
    highlights: [
      "Análise em tempo real",
      "Detecção heurística",
      "Integração com SIEM (Splunk)",
      "Alertas automatizados",
      "Correlação por comportamento"
    ],
    result: "Top 10 no Challenge FIAP x TecBan 2025.",
    links: {
      repo: "https://github.com/Crypto-Shield256/Projeto"
    }
  },
  {
    slug: "hardening-linux",
    title: "Hardening Linux",
    category: "Principal",
    summary: "Hardening completo de Ubuntu Server com foco em defesa em profundidade.",
    description:
      "Implementação de controles preventivos e detectivos para redução de superfície de ataque e aumento de auditabilidade.",
    technologies: ["Linux", "AppArmor", "auditd", "nftables"],
    highlights: [
      "MAC com AppArmor",
      "Auditoria com auditd",
      "Least privilege com sudo",
      "Firewall deny by default"
    ],
    result: "Ambiente validado com controles ativos e testados.",
    links: {
      demo: "https://my-projects-257891346.github.io/Portfolio/hardening-ubuntu.html"
    }
  },
  {
    slug: "infraestrutura-linux-corporativa",
    title: "Infraestrutura Linux Corporativa",
    category: "Principal",
    summary: "Simulação de ambiente corporativo com serviços e segurança aplicada.",
    description:
      "Infraestrutura Linux com serviços reais (web, DNS, email, arquivos) e controles de segurança e backup.",
    technologies: ["Linux", "Apache", "Samba", "BIND9", "Postfix"],
    highlights: [
      "Ambiente corporativo simulado",
      "Hardening SSH",
      "Fail2Ban",
      "Backup automatizado"
    ],
    result: "Ambiente funcional, seguro e documentado.",
    links: {
      demo: "https://my-projects-257891346.github.io/Portfolio/linux-lab.html"
    }
  },
  {
    slug: "uz-trampa",
    title: "Uz Trampa (La Creatura)",
    category: "Intermediário",
    summary: "Simulação controlada de ataques DDoS para análise de resiliência.",
    description:
      "Projeto desenvolvido no Challenge FIAP 2024 em parceria com a PRIDE Security para testar comportamento de aplicações sob ataque.",
    technologies: ["Python", "C#"],
    highlights: [
      "Simulação DDoS layer 7",
      "Geração de relatórios",
      "Testes controlados",
      "Avaliação de disponibilidade"
    ],
    result: "Top 10 entre 68 equipes no Challenge FIAP x PRIDE Security 2024",
    links: {}
  },
  {
    slug: "hackermindset",
    title: "Hackermindset",
    category: "Intermediário",
    summary: "Exercícios práticos para evolução de mentalidade ofensiva aplicada à defesa.",
    description:
      "Coleção de exercícios e estudos técnicos voltados para entender como pensamento ofensivo, enumeração e exploração controlada podem fortalecer análise defensiva, hardening e observabilidade.",
    technologies: ["Linux", "Python", "Bash"],
    highlights: [
      "Estudo de mentalidade ofensiva com foco defensivo",
      "Exercícios práticos em Linux",
      "Automação com Python e Bash",
      "Aprendizado aplicável a detecção e hardening"
    ],
    result: "Base contínua de estudo para ampliar repertório técnico e visão de ataque aplicada à defesa.",
    links: {
      repo: "https://github.com/0xHenrySec/Hackermindset"
    }
  },
  {
    slug: "password-generator",
    title: "Password Generator",
    category: "Ferramenta",
    summary: "Gerador de senhas seguras com múltiplas versões e personalização.",
    description:
      "Ferramenta para geração de senhas seguras baseada em padrões definidos pelo usuário, permitindo controle sobre tamanho, tipos de caracteres e complexidade. O projeto possui duas versões: uma aplicação desktop e uma versão web.",
    technologies: ["Python", "Tkinter", "ttkbootstrap", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Geração de senhas personalizadas",
      "Controle de complexidade e padrões",
      "Versão desktop (Python + Tkinter + ttkbootstrap)",
      "Versão web (HTML + CSS + JavaScript)",
      "Foco em boas práticas de segurança"
    ],
    result: "Ferramenta funcional para geração de senhas seguras com foco em flexibilidade e usabilidade.",
    links: {
      demo: "https://0xhenrysec.github.io/Password-Gen/",
      repo: "https://github.com/0xHenrySec/Password-Gen"
    }
  },
  {
    slug: "system-check-tool",
    title: "system-check-tool",
    category: "Ferramenta",
    summary: "Script multiplataforma para coleta de informações do sistema.",
    description:
      "Ferramenta leve e multiplataforma desenvolvida em Python para coletar informações essenciais do sistema e do hardware em ambientes Windows e Linux. O script detecta automaticamente o sistema operacional e executa os comandos apropriados para cada ambiente, entregando uma saída estruturada, organizada e codificada em UTF-8.",
    technologies: ["Python", "Windows", "Linux"],
    highlights: [
      "Execução multiplataforma (Windows e Linux)",
      "Detecção automática do sistema operacional",
      "Coleta de informações de hardware e sistema",
      "Saída estruturada e legível",
      "Codificação UTF-8"
    ],
    result: "Script útil para auditoria inicial, inventário rápido e coleta padronizada de informações do sistema.",
    links: {
      repo: "https://github.com/0xHenrySec/system-check-tool"
    }
  }
];

export const featuredProjects = projects.filter((project) => project.category === "Principal");
export const intermediateProjects = projects.filter((project) => project.category === "Intermediário");
export const toolProjects = projects.filter((project) => project.category === "Ferramenta");

// Única fuente de contenido del portfolio.
// Todo lo que aparece aquí procede del CV y de datos facilitados por Ignacio.
// Los campos opcionales (period, email) se ocultan si están vacíos.

export const site = {
  name: "Ignacio Piles Pla",
  shortName: "Ignacio Piles",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "es_ES",
  title: "Ignacio Piles Pla — Desarrollador Python · Aprendizaje Automático",
  description:
    "Portfolio de Ignacio Piles Pla: Técnico Superior en DAM con experiencia en Python, automatización y CI/CD, cursando la especialización en Aprendizaje Automático. Abierto a posiciones junior en IA.",
};

export const links = {
  // URL tal y como figura en el CV. Si activas la personalizada
  // (/in/ignacio-piles-pla/), cámbiala aquí.
  linkedin: "https://www.linkedin.com/in/ignacio-piles-0951a6256",
  github: "https://github.com/nachoGR8",
  // Rellena para mostrar el botón de email en Contacto:
  email: "" as string,
  // Foto en /public (extraída del CV). Vacío = monograma.
  photo: "/ignacio.jpg" as string,
};

export const nav = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#skills", label: "Skills" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#formacion", label: "Formación" },
  { href: "#contacto", label: "Contacto" },
];

export const hero = {
  eyebrow: "Python · Automatización · IA aplicada",
  headline: "Automatizo sistemas. Ahora, aprendo a enseñarles a aprender.",
  intro:
    "Desarrollador Python con experiencia en automatización y CI/CD, cursando la especialización en Aprendizaje Automático. Busco mi primer puesto en inteligencia artificial para aplicar modelos y automatización a problemas reales de empresa.",
  status: "Abierto a posiciones junior en IA",
};

export const about = [
  "Soy Técnico Superior en Desarrollo de Aplicaciones Multiplataforma por Florida Campus Alzira y ahora curso el Curso de Especialización en Aprendizaje Automático (Gestión de Datos y Entrenamiento) en el IES Simarro, en Xàtiva.",
  "En mis prácticas en Geinfor automaticé la importación y exportación de bases de datos MongoDB —de horas a minutos— y construí una aplicación que se conecta a la VPN, extrae sus datos y los publica en un dashboard HTML que consume el equipo informático. De ahí me viene el gusto por lo que se puede medir, automatizar y repetir sin sorpresas.",
  "Fuera de las prácticas pruebo modelos de lenguaje que corren en local —llama-cpp-python detrás de FastAPI— y flujos de n8n. También tengo vocación de montar mi propio negocio: me interesa automatizar procesos de pymes de la Ribera Alta.",
];

export const aboutFacts = [
  { label: "Base", value: "L'Alcúdia, Valencia" },
  { label: "Stack principal", value: "Python · FastAPI · Docker" },
  { label: "Ahora", value: "Cursando Aprendizaje Automático" },
  { label: "Busco", value: "Junior en IA / Python backend" },
  { label: "Idiomas", value: "Español · Valenciano · Inglés" },
];

export type Experience = {
  company: string;
  role: string;
  kind: string;
  location: string;
  period?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Geinfor",
    role: "Prácticas de desarrollo y DevOps",
    kind: "Prácticas",
    location: "Valencia",
    period: "mar 2026 – may 2026",
    points: [
      "Desarrollé en Python una aplicación que automatiza la importación y exportación de bases de datos MongoDB para las instalaciones en equipos de clientes, reduciendo el tiempo de la instalación de horas a minutos respecto al proceso manual.",
      "Construí una aplicación en Python que se conecta automáticamente al servidor VPN, extrae sus datos y genera un dashboard HTML con usuarios conectados, consumo de red y conexiones, utilizado por el equipo informático.",
      "Trabajé con pipelines de GitLab CI/CD, incluidos el frontend Angular de un monorepo y un microservicio Java desplegando en Google Artifact Registry y GCS.",
      "Creé una plantilla de seguridad (DevSecOps) para GitLab: detección de secretos, análisis de dependencias y contenedores, generación de SBOM y pre-commit hooks.",
    ],
  },
  {
    company: "Clásica Urbana",
    role: "Técnico de Microinformática y Redes",
    kind: "Prácticas de FP",
    location: "Alzira",
    period: "mar 2024 – jun 2024",
    points: [
      "Resolví incidencias de hardware y software y presté soporte técnico a usuarios.",
      "Instalé y configuré sistemas operativos Windows y software corporativo.",
      "Diagnostiqué incidencias en redes LAN y gestioné usuarios y permisos en dominios Windows.",
    ],
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Lenguajes",
    items: ["Python", "Java", "SQL", "JavaScript", "Bash", "PowerShell"],
  },
  {
    title: "IA y datos",
    items: [
      "Aprendizaje automático (en formación)",
      "LLMs en local",
      "llama-cpp-python",
      "GPT4All",
      "Prompt engineering",
    ],
  },
  {
    title: "Backend y datos",
    items: ["FastAPI", "APIs REST", "MongoDB", "MySQL"],
  },
  {
    title: "DevOps y automatización",
    items: ["GitLab CI/CD", "Docker", "Linux", "n8n", "DevSecOps", "SoftEther VPN"],
  },
  {
    title: "Herramientas",
    items: ["Git", "HTML", "VS Code", "IntelliJ IDEA", "Windows Server"],
  },
  {
    title: "Redes y sistemas",
    items: ["Redes LAN", "Dominios Windows", "Soporte técnico"],
  },
];

export type Project = {
  name: string;
  context: string;
  description: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    name: "Automatización de bases de datos MongoDB",
    context: "Prácticas · Geinfor",
    description:
      "Aplicación en Python que automatiza la importación y exportación de bases MongoDB en las instalaciones de clientes: de horas a minutos frente al proceso manual.",
    tags: ["Python", "MongoDB", "Automatización"],
  },
  {
    name: "Dashboard de monitorización de VPN",
    context: "Prácticas · Geinfor",
    description:
      "Aplicación que se conecta al servidor VPN, extrae sus datos y genera un dashboard HTML con usuarios conectados, consumo de red y conexiones, usado por el equipo informático.",
    tags: ["Python", "SoftEther VPN", "HTML"],
  },
  {
    name: "Chatbots con LLMs en local",
    context: "Experimento personal",
    description:
      "Pruebas de asistentes conversacionales con modelos que corren en la propia máquina, expuestos mediante un backend FastAPI.",
    tags: ["Python", "FastAPI", "llama-cpp-python", "GPT4All"],
  },
];

export const education = [
  {
    title: "Curso de Especialización en Aprendizaje Automático: Gestión de Datos y Entrenamiento",
    school: "IES Simarro · Xàtiva",
    period: "2026 – actualidad",
    status: "En curso",
  },
  {
    title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
    school: "Florida Campus · Alzira",
    period: "2024 – jun 2026",
    status: "Titulado",
  },
  {
    title: "Técnico en Sistemas Microinformáticos y Redes",
    school: "Florida Campus · Alzira",
    period: "sep 2022 – jul 2024",
    status: "Titulado",
  },
];

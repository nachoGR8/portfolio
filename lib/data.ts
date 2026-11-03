// Única fuente de contenido del portfolio.
// Todo lo que aparece aquí procede de datos facilitados por Ignacio.
// Los campos opcionales (period, email, photo) se ocultan si están vacíos.

export const site = {
  name: "Ignacio Piles Pla",
  shortName: "Ignacio Piles",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "es_ES",
  title: "Ignacio Piles Pla — Python, DevOps e IA aplicada",
  description:
    "Portfolio de Ignacio Piles Pla: Técnico Superior en DAM con base en Python, FastAPI y DevOps, y camino hacia el aprendizaje automático. Abierto a posiciones junior en IA.",
};

export const links = {
  linkedin: "https://www.linkedin.com/in/ignacio-piles-pla/",
  github: "https://github.com/nachoGR8",
  // Rellena para mostrar el botón de email:
  email: "" as string,
  // Ruta en /public, p. ej. "/ignacio.jpg". Vacío = monograma.
  photo: "" as string,
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
  eyebrow: "Python · DevOps · IA aplicada",
  headline: "Automatizo sistemas. Ahora, aprendo a enseñarles a aprender.",
  intro:
    "Técnico Superior en DAM con base en backend y DevOps, y rumbo al aprendizaje automático. Busco mi primer puesto junior en inteligencia artificial.",
  status: "Abierto a posiciones junior en IA",
};

export const about = [
  "Soy Técnico Superior en Desarrollo de Aplicaciones Multiplataforma por Florida Campus Alzira y he sido admitido en el Curso de Especialización en Aprendizaje Automático (Gestión de Datos y Entrenamiento) del IES Simarro, en Xàtiva.",
  "Mis prácticas me metieron de lleno en DevOps: pipelines en GitLab, scripts de automatización en Python y análisis de logs de VPN para encontrar cuellos de botella. De ahí me viene el gusto por lo que se puede medir, automatizar y repetir sin sorpresas.",
  "Fuera de las prácticas pruebo modelos de lenguaje que corren en local —llama-cpp-python detrás de FastAPI— y flujos de n8n. También tengo vocación de montar mi propio negocio: me interesa automatizar procesos de pymes de la Ribera Alta.",
];

export const aboutFacts = [
  { label: "Base", value: "L'Alcúdia, Valencia" },
  { label: "Stack principal", value: "Python · FastAPI · Docker" },
  { label: "Ahora", value: "Camino a Aprendizaje Automático" },
  { label: "Busco", value: "Junior en IA / Python backend" },
];

export type Experience = {
  company: string;
  role: string;
  kind: string;
  period?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Geinfor",
    role: "DevOps",
    kind: "Prácticas",
    points: [
      "Trabajo con pipelines de GitLab CI/CD, incluidos el frontend Angular de un monorepo y un microservicio Java desplegando en Google Artifact Registry y GCS.",
      "Plantilla de seguridad (DevSecOps) para GitLab: detección de secretos, análisis de dependencias y contenedores, generación de SBOM y pre-commit hooks.",
      "Diagnóstico de rendimiento de VPN (SoftEther) mediante análisis de logs, con paneles de analítica.",
      "Scripts de automatización en Python.",
    ],
  },
  {
    company: "Clásica Urbana",
    role: "Microinformática",
    kind: "Prácticas",
    points: ["Prácticas de microinformática."],
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Backend y lenguajes",
    items: ["Python", "FastAPI", "APIs REST"],
  },
  {
    title: "DevOps",
    items: ["Docker", "GitLab CI/CD", "DevSecOps", "SBOM", "Pre-commit hooks"],
  },
  {
    title: "IA y datos",
    items: [
      "LLMs en local",
      "llama-cpp-python",
      "GPT4All",
      "Prompt engineering",
      "Aprendizaje automático (en formación)",
    ],
  },
  {
    title: "Automatización",
    items: ["n8n", "Web scraping", "Automatización de procesos", "Scripting"],
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
    name: "Plantilla DevSecOps para GitLab",
    context: "Prácticas · Geinfor",
    description:
      "Stage de seguridad reutilizable para pipelines de GitLab: detección de secretos, análisis de dependencias y contenedores, SBOM y pre-commit hooks.",
    tags: ["GitLab CI/CD", "DevSecOps", "SBOM"],
  },
  {
    name: "Chatbots con LLMs en local",
    context: "Experimento personal",
    description:
      "Pruebas de asistentes conversacionales con modelos que corren en la propia máquina, expuestos mediante un backend FastAPI.",
    tags: ["Python", "FastAPI", "llama-cpp-python", "GPT4All"],
  },
  {
    name: "Automatizaciones con n8n",
    context: "Experimento personal",
    description:
      "Flujos de scraping, recordatorios de facturas y monitorización de licitaciones públicas, explorando qué procesos de una pyme merece la pena automatizar.",
    tags: ["n8n", "Scraping", "Automatización"],
  },
];

export const education = [
  {
    title: "Curso de Especialización en Aprendizaje Automático: Gestión de Datos y Entrenamiento",
    school: "IES Simarro · Xàtiva",
    status: "Admitido",
  },
  {
    title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
    school: "Florida Campus · Alzira",
    status: "Titulado",
  },
];

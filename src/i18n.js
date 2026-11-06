import { ref, watchEffect } from "vue";

export function detectLocale(languages = []) {
  for (const language of languages) {
    const code = language.toLowerCase().split(/[-_]/)[0];
    if (code === "es" || code === "en") return code;
  }
  return "en";
}
let preference;
try {
  preference = localStorage.getItem("portfolio-language");
} catch {}
export const locale = ref(
  ["es", "en"].includes(preference)
    ? preference
    : detectLocale(navigator.languages || [navigator.language]),
);
export function setLocale(language) {
  if (!["es", "en"].includes(language)) return;
  locale.value = language;
  try {
    localStorage.setItem("portfolio-language", language);
  } catch {}
}
const english = {
  "Saltar al contenido": "Skip to content",
  "Adrian Molano, inicio": "Adrian Molano, home",
  "Navegación principal": "Main navigation",
  Proyectos: "Projects",
  Contacto: "Contact",
  Idioma: "Language",
  "De la idea": "From idea",
  al: "to",
  "código.": "code.",
  "Del código": "From code",
  "al impacto.": "to impact.",
  "Desarrollo aplicaciones web, construyo APIs y automatizo procesos. Conecto cada pieza para convertir problemas complejos en soluciones claras.":
    "I develop web applications, build APIs and automate workflows. I connect the pieces to turn complex problems into clear solutions.",
  "Explorar proyectos": "Explore projects",
  "Sobre mí": "About me",
  "DETRÁS DEL CÓDIGO": "BEHIND THE CODE",
  ENFOQUE: "FOCUS",
  "Backend sólido.": "Solid backends.",
  "Interfaces con intención.": "Purposeful interfaces.",
  "Áreas de trabajo": "Areas of work",
  "DESARROLLO WEB": "WEB DEVELOPMENT",
  "ARQUITECTURA BACKEND": "BACKEND ARCHITECTURE",
  AUTOMATIZACIÓN: "AUTOMATION",
  "03 / SIGUIENTE PASO": "03 / NEXT STEP",
  "¿Construimos": "Let's build",
  "algo juntos?": "something together.",
  "Una idea, un reto técnico o una conversación.":
    "An idea, a technical challenge or a conversation.",
  "El siguiente proyecto empieza con un mensaje.":
    "The next project starts with a message.",
  Hablemos: "Let's talk",
  "Hecho con Vue. Pensado con intención.":
    "Built with Vue. Designed with purpose.",
  "Volver arriba ↑": "Back to top ↑",
  "01 / PROYECTOS SELECCIONADOS": "01 / SELECTED WORK",
  "Ideas que toman": "Ideas taking",
  "forma.": "shape.",
  "Una selección de aplicaciones,": "A selection of applications,",
  "herramientas y experimentos.": "tools and experiments.",
  "Filtrar proyectos": "Filter projects",
  Todos: "All",
  "proyectos visibles": "projects shown",
  "Demo disponible": "Live demo",
  "En desarrollo": "In development",
  Completado: "Completed",
  "POS para restaurantes que conecta salón, cocina y caja, con acceso del equipo mediante PIN. MVP con pagos simulados.":
    "A restaurant POS connecting the floor, kitchen and register, with PIN-based team access. An MVP with simulated payments.",
  "Sitio corporativo bilingüe para servicios de perforación y corte de concreto en Florida. Servicios, proyectos y contacto directo en una experiencia adaptable.":
    "A bilingual corporate website for concrete drilling and sawing services in Florida. Services, projects and direct contact in a responsive experience.",
  "Gestión ganadera para el campo colombiano. Una aplicación SaaS que conecta el trabajo diario con una operación más organizada.":
    "Livestock management for Colombian ranchers. A SaaS application connecting daily work with a more organized operation.",
  "Monitoreo automatizado y seguro de APIs empresariales, desde una plataforma ligera y enfocada.":
    "Automated, secure monitoring for enterprise APIs through a lightweight, focused platform.",
  Restaurantes: "Restaurants",
  "Web corporativa": "Corporate website",
  "TU RESTAURANTE, EN SINTONÍA.": "YOUR RESTAURANT, IN RHYTHM.",
  "PRECISIÓN EN CADA DETALLE.": "PRECISION IN EVERY DETAIL.",
  "TECNOLOGÍA PARA EL CAMPO": "TECHNOLOGY FOR THE FIELD",
  "OBSERVAR. DETECTAR. ACTUAR.": "OBSERVE. DETECT. ACT.",
  "Salón. Cocina. Caja.": "Floor. Kitchen. Register.",
  "Perforación. Corte. Precisión.": "Drilling. Sawing. Precision.",
  Tecnologías: "Technologies",
  "Abrir demo de": "Open demo for",
  "Ver repositorio de": "View repository for",
  "Explorar demo": "Explore live demo",
  "Ver repositorio": "View repository",
  "Repositorio aún no disponible": "Repository not yet available",
  "02 / HERRAMIENTAS & ENFOQUE": "02 / TOOLS & APPROACH",
  "El stack detrás": "The stack behind",
  "de cada": "every",
  "solución.": "solution.",
  "La herramienta correcta.": "The right tools.",
  "Una base bien construida.": "A well-built foundation.",
  "Backend & datos": "Backend & data",
  "Entrega & calidad": "Delivery & quality",
  "Interfaces que conectan con las personas.":
    "Interfaces that connect with people.",
  "La estructura que sostiene cada experiencia.":
    "The structure supporting every experience.",
  "Del entorno local a una entrega confiable.":
    "From local development to reliable delivery.",
};
export function t(text) {
  return locale.value === "en" ? english[text] || text : text;
}
watchEffect(() => {
  document.documentElement.lang = locale.value;
  document.title =
    locale.value === "en"
      ? "Adrian Molano — Software Engineer"
      : "Adrian Molano — Ingeniero de software";
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      locale.value === "en"
        ? "Adrian Molano's portfolio. Full stack development, backend architecture and automation. Explore live projects and get in touch."
        : "Portfolio de Adrian Molano. Desarrollo full stack, arquitectura backend y automatización. Explora proyectos en vivo y ponte en contacto.",
    );
});

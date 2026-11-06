<script setup>
import { t } from "../i18n";
import { computed, ref } from "vue";
const activeFilter = ref("Todos");
const projects = [
  {
    name: "Restiq",
    category: "Web",
    status: "Demo disponible",
    description:
      "POS para restaurantes que conecta salón, cocina y caja, con acceso del equipo mediante PIN. MVP con pagos simulados.",
    technologies: ["POS", "Restaurantes", "Railway"],
    demo: "https://restiq-production.up.railway.app/",
    visual: "restiq",
    mark: "r.",
    label: "TU RESTAURANTE, EN SINTONÍA.",
  },
  {
    name: "Florida Drilling & Concrete",
    category: "Web",
    status: "Demo disponible",
    description:
      "Sitio corporativo bilingüe para servicios de perforación y corte de concreto en Florida. Servicios, proyectos y contacto directo en una experiencia adaptable.",
    technologies: ["Web corporativa", "ES / EN", "Railway"],
    demo: "https://florida-drilling-production.up.railway.app/",
    visual: "florida",
    mark: "FDC",
    label: "PRECISIÓN EN CADA DETALLE.",
  },
  {
    name: "CampoVIVO",
    category: "Web",
    status: "En desarrollo",
    description:
      "Gestión ganadera para el campo colombiano. Una aplicación SaaS que conecta el trabajo diario con una operación más organizada.",
    technologies: ["Vue 3", "Spring Boot", "Express", "PostgreSQL"],
    github: "https://github.com/K1ng0hat/campovivo",
    visual: "campo",
    mark: "Cv",
    label: "TECNOLOGÍA PARA EL CAMPO",
  },
  {
    name: "APIguard",
    category: "API",
    status: "Completado",
    description:
      "Monitoreo automatizado y seguro de APIs empresariales, desde una plataforma ligera y enfocada.",
    technologies: ["JavaScript", "CSS", "HTML", "Docker"],
    github: "https://github.com/K1ng0hat/apiguard",
    visual: "api",
    mark: "{ }",
    label: "OBSERVAR. DETECTAR. ACTUAR.",
  },
];
const filters = [
  "Todos",
  ...new Set(projects.map((project) => project.category)),
];
const filteredProjects = computed(() =>
  activeFilter.value === "Todos"
    ? projects
    : projects.filter((project) => project.category === activeFilter.value),
);
</script>

<template>
  <section
    id="proyectos"
    class="projects-section"
    aria-labelledby="projects-title"
  >
    <div class="section-heading">
      <div>
        <p class="eyebrow">{{ t("01 / PROYECTOS SELECCIONADOS") }}</p>
        <h2 id="projects-title">
          {{ t("Ideas que toman") }} <span>{{ t("forma.") }}</span>
        </h2>
      </div>
      <p>
        {{ t("Una selección de aplicaciones,") }}<br />{{
          t("herramientas y experimentos.")
        }}
      </p>
    </div>
    <div
      class="projects-filter"
      role="group"
      :aria-label="t('Filtrar proyectos')"
    >
      <button
        v-for="filter in filters"
        :key="filter"
        :aria-pressed="activeFilter === filter"
        :class="{ active: activeFilter === filter }"
        @click="activeFilter = filter"
      >
        {{ t(filter)
        }}<span v-if="filter === 'Todos'">
          / {{ projects.length.toString().padStart(2, "0") }}</span
        >
      </button>
    </div>
    <p class="sr-only" role="status">
      {{ filteredProjects.length }} {{ t("proyectos visibles") }}
    </p>
    <div class="projects-grid">
      <article
        v-for="project in filteredProjects"
        :key="project.name"
        class="project-card"
      >
        <div :class="['project-visual', project.visual]" aria-hidden="true">
          <div class="visual-grid"></div>
          <div v-if="project.demo" class="preview-frame">
            <div class="preview-toolbar">
              <span>{{ t("● ● ●") }}</span
              ><span>{{
                project.visual === "restiq" ? "restiq.app" : "florida.drilling"
              }}</span
              ><span>↗</span>
            </div>
            <div class="preview-body">
              <span class="preview-kicker">{{
                project.visual === "restiq"
                  ? "RESTAURANT OPERATIONS"
                  : "DRILLING & CONCRETE"
              }}</span
              ><strong>{{ project.mark }}</strong>
              <div class="preview-rule"></div>
              <span class="preview-detail">{{
                t(
                  project.visual === "restiq"
                    ? "Salón. Cocina. Caja."
                    : "Perforación. Corte. Precisión.",
                )
              }}</span>
            </div>
          </div>
          <span class="visual-category">{{ t(project.category) }}</span
          ><span v-if="!project.demo" class="visual-mark">{{
            project.mark
          }}</span
          ><span class="visual-label">{{ t(project.label) }}</span>
        </div>
        <div class="project-content">
          <div class="project-meta">
            <span>{{ t(project.category) }}</span
            ><span :class="{ complete: project.status !== 'En desarrollo' }"
              >● {{ t(project.status) }}</span
            >
          </div>
          <h3>{{ project.name }}</h3>
          <p>{{ t(project.description) }}</p>
          <ul class="tech-tags" :aria-label="t('Tecnologías')">
            <li v-for="tech in project.technologies" :key="tech">
              {{ t(tech) }}
            </li>
          </ul>
          <a
            v-if="project.demo || project.github"
            class="project-link"
            :href="project.demo || project.github"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${t(project.demo ? 'Abrir demo de' : 'Ver repositorio de')} ${project.name}`"
            >{{ t(project.demo ? "Explorar demo" : "Ver repositorio") }}
            <span aria-hidden="true">↗</span></a
          ><span v-else class="project-pending">{{
            t("Repositorio aún no disponible")
          }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

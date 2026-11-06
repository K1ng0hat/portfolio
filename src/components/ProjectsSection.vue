<script setup>
import { computed, ref } from "vue";
const activeFilter = ref("Todos");
const projects = [
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
  {
    name: "Python Pipeline via SSH",
    category: "Open Source",
    status: "Completado",
    description:
      "Pipeline modular para automatizar tareas DevOps repetibles a través de conexiones SSH.",
    technologies: ["Python", "Paramiko", "Unix"],
    github: "https://github.com/K1ng0hat/pipeline-pythonssh",
    visual: "python",
    mark: ">_",
    label: "MENOS REPETICIÓN. MÁS AUTOMATIZACIÓN.",
  },
  {
    name: "PortfolioBuilder",
    category: "Open Source",
    status: "En desarrollo",
    description:
      "Constructor de portfolios con plantillas personalizables. Un espacio propio para mostrar lo que construyes.",
    technologies: ["Vue.js", "Tailwind CSS", "Firebase"],
    visual: "builder",
    mark: "[p]",
    label: "TU TRABAJO, TU ESPACIO.",
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
        <p class="eyebrow">01 / PROYECTOS SELECCIONADOS</p>
        <h2 id="projects-title">Ideas que toman <span>forma.</span></h2>
      </div>
      <p>Una selección de aplicaciones,<br />herramientas y experimentos.</p>
    </div>
    <div class="projects-filter" role="group" aria-label="Filtrar proyectos">
      <button
        v-for="filter in filters"
        :key="filter"
        :aria-pressed="activeFilter === filter"
        :class="{ active: activeFilter === filter }"
        @click="activeFilter = filter"
      >
        {{ filter
        }}<span v-if="filter === 'Todos'">
          / {{ projects.length.toString().padStart(2, "0") }}</span
        >
      </button>
    </div>
    <p class="sr-only" role="status">
      {{ filteredProjects.length }} proyectos visibles
    </p>
    <div class="projects-grid">
      <article
        v-for="project in filteredProjects"
        :key="project.name"
        class="project-card"
      >
        <div :class="['project-visual', project.visual]" aria-hidden="true">
          <div class="visual-grid"></div>
          <span class="visual-category">{{ project.category }}</span
          ><span class="visual-mark">{{ project.mark }}</span
          ><span class="visual-label">{{ project.label }}</span>
        </div>
        <div class="project-content">
          <div class="project-meta">
            <span>{{ project.category }}</span
            ><span :class="{ complete: project.status === 'Completado' }"
              >● {{ project.status }}</span
            >
          </div>
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <ul class="tech-tags" aria-label="Tecnologías">
            <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
          </ul>
          <a
            v-if="project.github"
            class="project-link"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`Ver ${project.name} en GitHub`"
            >Ver repositorio <span aria-hidden="true">↗</span></a
          ><span v-else class="project-pending"
            >Repositorio aún no disponible</span
          >
        </div>
      </article>
    </div>
  </section>
</template>

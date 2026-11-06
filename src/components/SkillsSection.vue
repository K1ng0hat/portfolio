<script setup>
const groups = [
  {
    number: "01",
    title: "Frontend",
    description: "Interfaces que conectan con las personas.",
    technologies: [
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "Composition API",
      "CSS",
    ],
  },
  {
    number: "02",
    title: "Backend & datos",
    description: "La estructura que sostiene cada experiencia.",
    technologies: [
      "PHP",
      "Laravel",
      "Symfony",
      "Python",
      "Flask",
      "FastAPI",
      "AdonisJS",
      "MySQL",
      "REST APIs",
    ],
  },
  {
    number: "03",
    title: "Entrega & calidad",
    description: "Del entorno local a una entrega confiable.",
    technologies: [
      "Git",
      "GitHub Actions",
      "Azure DevOps",
      "Docker",
      "AWS",
      "PHPUnit",
      "Testing E2E",
      "SOLID",
    ],
  },
];
</script>

<template>
  <section id="stack" class="skills-section" aria-labelledby="stack-title">
    <div class="section-heading">
      <div>
        <p class="eyebrow">02 / HERRAMIENTAS & ENFOQUE</p>
        <h2 id="stack-title">
          El stack detrás<br />de cada <span>solución.</span>
        </h2>
      </div>
      <p>La herramienta correcta.<br />Una base bien construida.</p>
    </div>
    <div class="skill-groups">
      <article v-for="group in groups" :key="group.number" class="skill-group">
        <span class="skill-number">{{ group.number }} /</span>
        <h3>{{ group.title }}</h3>
        <p>{{ group.description }}</p>
        <ul class="tech-tags">
          <li v-for="technology in group.technologies" :key="technology">
            {{ technology }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

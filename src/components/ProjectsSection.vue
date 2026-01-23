<template>
  <section class="projects-section">
    <h2 class="section-title">
      <span class="comment">// Proyectos</span>
    </h2>

    <div class="projects-filter">
      <button 
        v-for="filter in filters" 
        :key="filter"
        :class="['filter-btn', { active: activeFilter === filter }]"
        @click="setFilter(filter)"
      >
        {{ filter }}
      </button>
    </div>

    <div class="projects-grid">
      <div 
        v-for="(project, index) in filteredProjects" 
        :key="project.id"
        class="project-card"
        :style="{ animationDelay: `${index * 0.1}s` }"
        @click="$emit('project-click')"
      >
        <!-- Project Header -->
        <div class="project-header">
          <div class="file-icon">📁</div>
          <div class="project-status" :class="project.status">
            <span class="status-dot"></span>
            {{ project.status }}
          </div>
        </div>

        <!-- Project Title -->
        <h3 class="project-title">
          <span class="bracket">const</span> {{ project.name }} = <span class="bracket">{</span>
        </h3>

        <!-- Project Description -->
        <p class="project-description">
          <span class="property">description:</span> "{{ project.description }}"
        </p>

        <!-- Technologies -->
        <div class="project-tech">
          <span class="property">stack:</span>
          <span class="array-bracket">[</span>
          <div class="tech-tags">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
              '{{ tech }}'
            </span>
          </div>
          <span class="array-bracket">]</span>
        </div>

        <!-- Project Links -->
        <div class="project-links">
          <a 
            v-if="project.github" 
            :href="project.github" 
            class="project-link"
            target="_blank"
            @click.stop
          >
            <span class="link-icon">🔗</span> GitHub
          </a>
          <a 
            v-if="project.demo" 
            :href="project.demo" 
            class="project-link demo"
            target="_blank"
            @click.stop
          >
            <span class="link-icon">🚀</span> Demo
          </a>
        </div>

        <!-- Project Footer -->
        <div class="project-footer">
          <span class="bracket">}</span>
        </div>

        <!-- Hover Effect -->
        <div class="card-glow"></div>
      </div>
    </div>

    <!-- Code snippet decoration -->
    <div class="code-snippet">
      <pre><code><span class="keyword">function</span> <span class="function-name">buildAmazingThings</span>() {
  <span class="keyword">return</span> projects.<span class="method">map</span>(project => {
    <span class="keyword">return</span> project.<span class="method">deploy</span>({
      quality: <span class="string">'excellent'</span>,
      passion: <span class="string">'maximum'</span>
    });
  });
}</code></pre>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

defineEmits(['project-click'])

const activeFilter = ref('All')

const filters = ['All', 'Web', 'Mobile', 'API', 'Open Source']

const projects = ref([
  {
    id: 1,
    name: 'EcommerceApp',
    description: 'Plataforma de e-commerce completa con panel de administración',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web',
    status: 'completed',
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    name: 'TaskManager',
    description: 'Aplicación de gestión de tareas con colaboración en tiempo real',
    technologies: ['Vue 3', 'Socket.io', 'Express', 'PostgreSQL'],
    category: 'Web',
    status: 'in-progress',
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    name: 'WeatherAPI',
    description: 'API REST para consulta de datos meteorológicos',
    technologies: ['Node.js', 'Express', 'Redis', 'Docker'],
    category: 'API',
    status: 'completed',
    github: '#',
    demo: null
  },
  {
    id: 4,
    name: 'PortfolioBuilder',
    description: 'Constructor de portfolios con plantillas personalizables',
    technologies: ['Vue.js', 'TailwindCSS', 'Firebase'],
    category: 'Open Source',
    status: 'completed',
    github: '#',
    demo: '#'
  },
  {
    id: 5,
    name: 'ChatApp',
    description: 'Aplicación de chat en tiempo real con encriptación',
    technologies: ['React Native', 'Node.js', 'WebRTC'],
    category: 'Mobile',
    status: 'in-progress',
    github: '#',
    demo: null
  },
  {
    id: 6,
    name: 'BlogCMS',
    description: 'Sistema de gestión de contenidos para blogs',
    technologies: ['Vue.js', 'Nuxt', 'Markdown', 'Netlify'],
    category: 'Web',
    status: 'completed',
    github: '#',
    demo: '#'
  }
])

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects.value
  }
  return projects.value.filter(p => p.category === activeFilter.value)
})

const setFilter = (filter) => {
  activeFilter.value = filter
}
</script>

<style scoped>
.projects-section {
  margin: 80px 0;
  animation: fadeInUp 1s ease-out 0.4s backwards;
}

.section-title {
  font-size: 32px;
  margin-bottom: 30px;
  text-align: center;
  color: var(--code-yellow);
}

/* Filtros */
.projects-filter {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.filter-btn {
  background: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-gray);
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: var(--code-yellow);
  color: var(--code-yellow);
}

.filter-btn.active {
  background: var(--code-yellow);
  color: var(--bg-black);
  border-color: var(--code-yellow);
  font-weight: bold;
}

/* Grid de proyectos */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.project-card {
  background: rgba(20, 20, 20, 0.9);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  padding: 25px;
  transition: all 0.4s ease;
  animation: fadeInUp 0.6s ease-out backwards;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.project-card:hover {
  border-color: var(--code-yellow);
  transform: translateY(-8px);
  box-shadow: 0 10px 40px rgba(255, 215, 0, 0.3);
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.project-card:hover .card-glow {
  opacity: 1;
}

/* Project Header */
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.file-icon {
  font-size: 24px;
}

.project-status {
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid;
}

.project-status.completed {
  color: var(--terminal-green);
  border-color: var(--terminal-green);
}

.project-status.in-progress {
  color: var(--code-yellow);
  border-color: var(--code-yellow);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Project Content */
.project-title {
  font-size: 20px;
  color: var(--code-yellow);
  margin-bottom: 15px;
  font-weight: bold;
}

.bracket {
  color: var(--terminal-green);
  font-weight: bold;
}

.project-description {
  margin: 15px 0;
  margin-left: 20px;
  line-height: 1.6;
  color: var(--text-gray);
  font-size: 14px;
}

.property {
  color: #7dd3fc;
  margin-right: 8px;
}

.project-tech {
  margin: 15px 0;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.array-bracket {
  color: var(--terminal-green);
  font-weight: bold;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-left: 20px;
}

.tech-tag {
  font-size: 12px;
  color: #fb923c;
  background: rgba(251, 146, 60, 0.1);
  padding: 4px 10px;
  border-radius: 3px;
  border: 1px solid rgba(251, 146, 60, 0.3);
}

/* Project Links */
.project-links {
  display: flex;
  gap: 15px;
  margin: 20px 0;
}

.project-link {
  color: var(--code-yellow);
  text-decoration: none;
  font-size: 14px;
  padding: 8px 16px;
  border: 1px solid var(--code-yellow);
  border-radius: 4px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
}

.project-link:hover {
  background: var(--code-yellow);
  color: var(--bg-black);
  transform: translateX(3px);
}

.link-icon {
  font-size: 16px;
}

.project-footer {
  color: var(--terminal-green);
  font-size: 18px;
  margin-top: 10px;
}

/* Code snippet decoration */
.code-snippet {
  background: rgba(20, 20, 20, 0.9);
  border: 2px solid var(--code-yellow);
  border-radius: 8px;
  padding: 25px;
  margin-top: 40px;
  overflow-x: auto;
}

.code-snippet pre {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
}

.code-snippet code {
  color: var(--text-gray);
}

.keyword {
  color: #c678dd;
}

.function-name {
  color: #61afef;
}

.method {
  color: #61afef;
}

.string {
  color: #98c379;
}

/* Responsive */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-btn {
    font-size: 12px;
    padding: 8px 16px;
  }
}
</style>

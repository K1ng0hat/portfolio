<template>
  <section class="skills-section">
    <h2 class="section-title">
      <span class="comment">// Skills</span>
    </h2>
    
    <div class="skills-container">
      <div 
        v-for="(skill, index) in skills" 
        :key="skill.name"
        class="skill-card"
        :style="{ animationDelay: `${index * 0.1}s` }"
        @mouseenter="$emit('skill-hover')"
        @click="handleSkillClick(index)"
      >
        <div class="skill-header">
          <span class="bracket">&lt;</span>
          <span class="skill-name">{{ skill.name }}</span>
          <span class="bracket">&gt;</span>
        </div>
        
        <div class="skill-level">
          <div class="level-bar">
            <div 
              class="level-fill" 
              :style="{ width: clickedSkills.includes(index) ? `${skill.level}%` : '0%' }"
            ></div>
          </div>
          <span class="level-text">{{ skill.level }}%</span>
        </div>
        
        <div class="skill-tags">
          <span v-for="tag in skill.tags" :key="tag" class="tag">
            #{{ tag }}
          </span>
        </div>
        
        <div class="skill-footer">
          <span class="bracket">&lt;/</span>
          <span class="skill-name">{{ skill.name }}</span>
          <span class="bracket">&gt;</span>
        </div>
      </div>
    </div>

    <!-- Comando interactivo -->
    <div class="interactive-command">
  <p class="command-line">
    <span class="prompt">$</span> ls -la skills/
  </p>

  <div class="skills-list">
    <p
      v-for="skill in skills"
      :key="skill.name"
      class="skill-item"
    >
      <span class="permissions">
        {{ skill.tags.includes('frontend') ? 'drwxr-xr-x' : 'drwxr-x---' }}
      </span>

      <span class="owner">
        {{ skill.tags.includes('frontend')
          ? 'frontend'
          : skill.tags.includes('backend')
          ? 'backend'
          : 'devops'
        }}
      </span>

      <span class="date">Jan 22 2026</span>

      <span class="filename">
        {{ skill.name.toLowerCase().replace(/\s+/g, '_') }}
      </span>
    </p>
  </div>
</div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

defineEmits(['skill-hover', 'skill-click'])

const clickedSkills = ref([])

const skills = ref([
  
  {
    name: 'PHP',
    level: 95,
    tags: ['laravel', 'symfony', 'rest-api']
  },
  {
    name: 'Vue.js',
    level: 90,
    tags: ['vue3', 'composition-api', 'component-architecture', 'spa']
  },
  {
    name: 'Python',
    level: 88,
    tags: ['flask', 'task-automation', 'fast-api', 'performance']
  },
  {
    name: 'JavaScript',
    level: 88,
    tags: ['es6+', 'async-await', 'functional', 'clean-code']
  },
  {
    name: 'TypeScript',
    level: 85,
    tags: ['backend', 'adonisjs', 'oop', 'interfaces']
  },
  {
    name: 'Backend Architecture',
    level: 90,
    tags: ['mvc', 'repository-pattern', 'solid', 'microservices']
  },
  {
    name: 'Databases (MySQL)',
    level: 88,
    tags: ['query-optimization', 'schema-design', 'transactions', 'orm']
  },
  {
    name: 'Testing',
    level: 85,
    tags: ['phpunit', 'e2e', 'integration-testing']
  },
  {
    name: 'Git & CI/CD',
    level: 92,
    tags: ['github-actions', 'azure-devops', 'code-review', 'branching']
  },
  {
    name: 'Docker',
    level: 75,
    tags: ['containers', 'local-dev', 'deployment']
  },
  {
    name: 'Cloud & DevOps',
    level: 78,
    tags: ['aws', 'ec2', 's3', 'rds', 'pipelines']
  }
])

const handleSkillClick = (index) => {
  if (!clickedSkills.value.includes(index)) {
    clickedSkills.value.push(index)
  }
}
</script>

<style scoped>
.skills-section {
  margin: 80px 0;
  animation: fadeInUp 1s ease-out 0.3s backwards;
}

.section-title {
  font-size: 32px;
  margin-bottom: 40px;
  text-align: center;
  color: var(--code-yellow);
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 60px;
}

.skill-card {
  background: rgba(20, 20, 20, 0.8);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease;
  animation: slideInLeft 0.6s ease-out backwards;
  cursor: pointer;
}

.skill-card:hover {
  border-color: var(--code-yellow);
  transform: translateY(-5px);
  box-shadow: 0 5px 25px rgba(255, 215, 0, 0.3);
}

.skill-header,
.skill-footer {
  font-size: 14px;
  margin: 10px 0;
}

.skill-name {
  color: var(--code-yellow);
  font-weight: bold;
  margin: 0 5px;
}

.bracket {
  color: var(--terminal-green);
  font-weight: bold;
}

.skill-level {
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 15px;
}

.level-bar {
  flex: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.level-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--terminal-green), var(--code-yellow));
  transition: width 1.5s ease-out;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.level-text {
  color: var(--code-yellow);
  font-size: 14px;
  font-weight: bold;
  min-width: 50px;
  text-align: right;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 15px 0;
}

.tag {
  font-size: 12px;
  color: var(--text-gray);
  background: rgba(255, 215, 0, 0.1);
  padding: 4px 10px;
  border-radius: 3px;
  border: 1px solid rgba(255, 215, 0, 0.3);
}

/* Comando interactivo */
.interactive-command {
  background: rgba(20, 20, 20, 0.9);
  border: 2px solid var(--code-yellow);
  border-radius: 8px;
  padding: 25px;
  margin-top: 40px;
  font-size: 14px;
}

.command-line {
  color: var(--code-yellow);
  margin-bottom: 15px;
}

.prompt {
  color: var(--terminal-green);
  margin-right: 10px;
  font-weight: bold;
}

.skills-list {
  font-family: 'Fira Code', monospace;
}

.skill-item {
  margin: 5px 0;
  display: flex;
  gap: 10px;
  color: var(--text-gray);
  font-size: 13px;
}

.permissions {
  color: var(--terminal-green);
}

.owner {
  color: var(--code-yellow);
  min-width: 60px;
}

.date {
  min-width: 100px;
}

.filename {
  color: var(--code-yellow);
  font-weight: bold;
}

/* Responsive */
@media (max-width: 768px) {
  .skills-container {
    grid-template-columns: 1fr;
  }
  
  .skill-item {
    flex-direction: column;
    gap: 3px;
  }
}
</style>

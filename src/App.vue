<template>
  <div class="app-container">
    <!-- Efecto de lluvia de código en el fondo -->
    <div class="code-rain">
      <div v-for="i in 20" :key="i" class="rain-column" :style="{ left: `${i * 5}%`, animationDelay: `${i * 0.1}s` }">
        <span v-for="char in codeChars" :key="char">{{ char }}</span>
      </div>
    </div>

    <!-- Contenido principal -->
    <div class="content">
      <!-- Header/Hero Section -->
      <header class="hero">
        <div class="terminal-window">
          <div class="terminal-header">
            <span class="terminal-dot red"></span>
            <span class="terminal-dot yellow"></span>
            <span class="terminal-dot green"></span>
          </div>
          <div class="terminal-body">
            <p class="terminal-line">
              <span class="prompt">$</span> whoami
            </p>
            <p class="terminal-line typing-effect">
              <span ref="nameTyping">{{ displayedName }}</span>
              <span class="cursor" v-if="isTyping"></span>
            </p>
            <p class="terminal-line">
              <span class="prompt">$</span> cat role.txt
            </p>
            <p class="terminal-line">
              <span class="role-text">{{ role }}</span>
            </p>
          </div>
        </div>
      </header>

      <!-- Skills Section -->
      <SkillsSection @skill-hover="playSound('hover')" @skill-click="playSound('click')" />

      <!-- Projects Section -->
      <ProjectsSection @project-click="playSound('select')" />

      <!-- Contact Section -->
      <section class="contact-section">
        <h2 class="section-title">
          <span class="comment">// Contacto</span>
        </h2>
        <div class="contact-links">
          <a href="#" class="contact-link" @click="playSound('click')">
            <span class="bracket">[</span> GitHub <span class="bracket">]</span>
          </a>
          <a href="#" class="contact-link" @click="playSound('click')">
            <span class="bracket">[</span> LinkedIn <span class="bracket">]</span>
          </a>
          <a href="#" class="contact-link" @click="playSound('click')">
            <span class="bracket">[</span> Email <span class="bracket">]</span>
          </a>
        </div>
      </section>
    </div>

    <!-- Audio elements (puedes agregar tus propios archivos de audio) -->
    <audio ref="hoverSound" src="/sounds/hover.mp3" preload="auto"></audio>
    <audio ref="clickSound" src="/sounds/click.mp3" preload="auto"></audio>
    <audio ref="selectSound" src="/sounds/select.mp3" preload="auto"></audio>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import { useSoundEffects } from './composables/useSoundEffects'

const codeChars = ['0', '1', '{', '}', '<', '>', '/', '*', '+', '-', '=', ';', '(', ')', '[', ']']
const fullName = 'Tu Nombre Aquí'
const role = 'Full Stack Developer | Vue.js Expert'

const displayedName = ref('')
const isTyping = ref(true)

const { playSound } = useSoundEffects()

// Efecto de escritura para el nombre
onMounted(() => {
  let index = 0
  const typingInterval = setInterval(() => {
    if (index < fullName.length) {
      displayedName.value += fullName[index]
      index++
    } else {
      isTyping.value = false
      clearInterval(typingInterval)
    }
  }, 100)
})
</script>

<style scoped>
.app-container {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

/* Lluvia de código de fondo */
.code-rain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  z-index: 0;
  pointer-events: none;
}

.rain-column {
  position: absolute;
  top: -100%;
  font-size: 14px;
  color: var(--code-yellow);
  animation: rain 10s linear infinite;
  display: flex;
  flex-direction: column;
}

.rain-column span {
  display: block;
  line-height: 1.2;
}

/* Contenido principal */
.content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* Hero Section */
.hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
}

.terminal-window {
  width: 100%;
  max-width: 700px;
  background: rgba(20, 20, 20, 0.9);
  border: 2px solid var(--code-yellow);
  border-radius: 8px;
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
  animation: fadeInUp 1s ease-out;
}

.terminal-header {
  background: rgba(40, 40, 40, 0.8);
  padding: 10px;
  border-bottom: 1px solid var(--code-yellow);
  display: flex;
  gap: 8px;
}

.terminal-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal-dot.red { background: #ff5f56; }
.terminal-dot.yellow { background: #ffbd2e; }
.terminal-dot.green { background: #27c93f; }

.terminal-body {
  padding: 30px;
  font-size: 18px;
}

.terminal-line {
  margin: 15px 0;
  line-height: 1.8;
}

.prompt {
  color: var(--terminal-green);
  margin-right: 10px;
  font-weight: bold;
}

.typing-effect {
  font-size: 32px;
  font-weight: bold;
  color: var(--code-yellow);
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.role-text {
  color: var(--text-gray);
  font-size: 16px;
}

/* Contact Section */
.contact-section {
  margin-top: 80px;
  text-align: center;
  padding: 40px 20px;
  animation: fadeInUp 1s ease-out 0.6s backwards;
}

.section-title {
  font-size: 28px;
  margin-bottom: 30px;
  color: var(--code-yellow);
}

.comment {
  color: var(--text-gray);
  font-style: italic;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.contact-link {
  color: var(--code-yellow);
  text-decoration: none;
  font-size: 18px;
  padding: 12px 24px;
  border: 2px solid var(--code-yellow);
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.contact-link:hover {
  background: var(--code-yellow);
  color: var(--bg-black);
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
  transform: translateY(-2px);
}

.bracket {
  font-weight: bold;
  color: var(--terminal-green);
}

/* Responsive */
@media (max-width: 768px) {
  .terminal-body {
    padding: 20px;
    font-size: 14px;
  }
  
  .typing-effect {
    font-size: 24px;
  }
  
  .contact-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>

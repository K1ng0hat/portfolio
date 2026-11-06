<script setup>
import SkillsSection from "./components/SkillsSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
const profileImage = `${import.meta.env.BASE_URL}sounds/profile.jpg`;
</script>

<template>
  <a class="skip-link" href="#main">Saltar al contenido</a>
  <div class="page-shell">
    <header class="site-header">
      <a class="wordmark" href="#" aria-label="Adrian Molano, inicio"
        >am<span>.</span></a
      >
      <nav aria-label="Navegación principal">
        <a href="#proyectos">Proyectos</a><a href="#stack">Stack</a
        ><a href="#contacto">Contacto <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
    <main id="main">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow">
            <span class="live-dot" aria-hidden="true"></span> ADRIAN MOLANO /
            SOFTWARE ENGINEER
          </p>
          <h1 id="hero-title">
            De la idea<br />al <span>código.</span><br />Del código<br />al
            impacto.
          </h1>
          <p class="hero-description">
            Desarrollo aplicaciones web, construyo APIs y automatizo procesos.
            Conecto cada pieza para convertir problemas complejos en soluciones
            claras.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#proyectos"
              >Explorar proyectos <span aria-hidden="true">↘</span></a
            ><a
              class="text-link"
              href="https://github.com/K1ng0hat"
              target="_blank"
              rel="noopener noreferrer"
              >GitHub ↗</a
            >
          </div>
        </div>
        <aside class="identity-card" aria-label="Sobre mí">
          <div class="card-top">
            <span>DETRÁS DEL CÓDIGO</span><span>01 / AM</span>
          </div>
          <div class="portrait-wrap">
            <img
              :src="profileImage"
              alt="Adrian Molano"
              width="480"
              height="540"
              fetchpriority="high"
            /><span class="portrait-label">&lt;developer /&gt;</span>
          </div>
          <div class="identity-caption">
            <div>
              <h2>Adrian Molano</h2>
              <p>Full Stack Developer</p>
            </div>
            <span class="asterisk" aria-hidden="true">✳</span>
          </div>
          <div class="identity-note">
            <span>ENFOQUE</span>
            <p>Backend sólido.<br />Interfaces con intención.</p>
          </div>
        </aside>
      </section>
      <div class="discipline-strip" aria-label="Áreas de trabajo">
        <span>DESARROLLO WEB</span><i aria-hidden="true">✳</i
        ><span>ARQUITECTURA BACKEND</span><i aria-hidden="true">✳</i
        ><span>AUTOMATIZACIÓN</span><i aria-hidden="true">✳</i>
      </div>
      <ProjectsSection />
      <SkillsSection />
      <section
        id="contacto"
        class="contact-section"
        aria-labelledby="contact-title"
      >
        <p class="eyebrow">03 / SIGUIENTE PASO</p>
        <h2 id="contact-title">¿Construimos<br /><span>algo juntos?</span></h2>
        <div class="contact-bottom">
          <p>
            Una idea, un reto técnico o una conversación.<br />El siguiente
            proyecto empieza con un mensaje.
          </p>
          <a class="button primary" href="mailto:adrianmolanonavarro@gmail.com"
            >Hablemos <span aria-hidden="true">↗</span></a
          >
        </div>
        <div class="social-links">
          <a href="mailto:adrianmolanonavarro@gmail.com">Email ↗</a
          ><a
            href="https://www.linkedin.com/in/adrian-molano-6a873a30a/"
            target="_blank"
            rel="noopener noreferrer"
            >LinkedIn ↗</a
          ><a
            href="https://github.com/K1ng0hat"
            target="_blank"
            rel="noopener noreferrer"
            >GitHub ↗</a
          >
        </div>
      </section>
    </main>
    <footer>
      <span>© {{ new Date().getFullYear() }} Adrian Molano</span
      ><span>Hecho con Vue. Pensado con intención.</span
      ><a href="#">Volver arriba ↑</a>
    </footer>
  </div>
</template>

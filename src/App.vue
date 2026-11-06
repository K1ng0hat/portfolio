<script setup>
import { t, locale, setLocale } from "./i18n";
import SkillsSection from "./components/SkillsSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
const profileImage = `${import.meta.env.BASE_URL}sounds/profile.jpg`;
</script>

<template>
  <a class="skip-link" href="#main">{{ t("Saltar al contenido") }}</a>
  <div class="page-shell">
    <header class="site-header">
      <a class="wordmark" href="#" :aria-label="t('Adrian Molano, inicio')"
        >{{ t("am") }}<span>.</span></a
      >
      <nav :aria-label="t('Navegación principal')">
        <a href="#proyectos">{{ t("Proyectos") }}</a
        ><a href="#stack">{{ t("Stack") }}</a
        ><a href="#contacto"
          >{{ t("Contacto") }}<span aria-hidden="true">↗</span></a
        >
      </nav>
      <select
        class="language-select"
        :value="locale"
        :aria-label="t('Idioma')"
        @change="setLocale($event.target.value)"
      >
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
    </header>
    <main id="main">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow">
            <span class="live-dot" aria-hidden="true"></span
            >{{ t("ADRIAN MOLANO / SOFTWARE ENGINEER") }}
          </p>
          <h1 id="hero-title">
            {{ t("De la idea") }}<br />{{ t("al") }}
            <span>{{ t("código.") }}</span
            ><br />{{ t("Del código") }}<br />{{ t("al impacto.") }}
          </h1>
          <p class="hero-description">
            {{
              t(
                "Desarrollo aplicaciones web, construyo APIs y automatizo procesos. Conecto cada pieza para convertir problemas complejos en soluciones claras.",
              )
            }}
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#proyectos"
              >{{ t("Explorar proyectos") }}<span aria-hidden="true">↘</span></a
            ><a
              class="text-link"
              href="https://github.com/K1ng0hat"
              target="_blank"
              rel="noopener noreferrer"
              >{{ t("GitHub ↗") }}</a
            >
          </div>
        </div>
        <aside class="identity-card" :aria-label="t('Sobre mí')">
          <div class="card-top">
            <span>{{ t("DETRÁS DEL CÓDIGO") }}</span
            ><span>01 / AM</span>
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
              <h2>{{ t("Adrian Molano") }}</h2>
              <p>{{ t("Full Stack Developer") }}</p>
            </div>
            <span class="asterisk" aria-hidden="true">✳</span>
          </div>
          <div class="identity-note">
            <span>{{ t("ENFOQUE") }}</span>
            <p>
              {{ t("Backend sólido.") }}<br />{{
                t("Interfaces con intención.")
              }}
            </p>
          </div>
        </aside>
      </section>
      <div class="discipline-strip" :aria-label="t('Áreas de trabajo')">
        <span>{{ t("DESARROLLO WEB") }}</span
        ><i aria-hidden="true">✳</i><span>{{ t("ARQUITECTURA BACKEND") }}</span
        ><i aria-hidden="true">✳</i><span>{{ t("AUTOMATIZACIÓN") }}</span
        ><i aria-hidden="true">✳</i>
      </div>
      <ProjectsSection />
      <SkillsSection />
      <section
        id="contacto"
        class="contact-section"
        aria-labelledby="contact-title"
      >
        <p class="eyebrow">{{ t("03 / SIGUIENTE PASO") }}</p>
        <h2 id="contact-title">
          {{ t("¿Construimos") }}<br /><span>{{ t("algo juntos?") }}</span>
        </h2>
        <div class="contact-bottom">
          <p>
            {{ t("Una idea, un reto técnico o una conversación.") }}<br />{{
              t("El siguiente proyecto empieza con un mensaje.")
            }}
          </p>
          <a class="button primary" href="mailto:adrianmolanonavarro@gmail.com"
            >{{ t("Hablemos") }}<span aria-hidden="true">↗</span></a
          >
        </div>
        <div class="social-links">
          <a href="mailto:adrianmolanonavarro@gmail.com">{{ t("Email ↗") }}</a
          ><a
            href="https://www.linkedin.com/in/adrian-molano-6a873a30a/"
            target="_blank"
            rel="noopener noreferrer"
            >{{ t("LinkedIn ↗") }}</a
          ><a
            href="https://github.com/K1ng0hat"
            target="_blank"
            rel="noopener noreferrer"
            >{{ t("GitHub ↗") }}</a
          >
        </div>
      </section>
    </main>
    <footer>
      <span>© {{ new Date().getFullYear() }} Adrian Molano</span
      ><span>{{ t("Hecho con Vue. Pensado con intención.") }}</span
      ><a href="#">{{ t("Volver arriba ↑") }}</a>
    </footer>
  </div>
</template>

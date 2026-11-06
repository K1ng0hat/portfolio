# Adrian Molano — Portfolio

Portfolio personal construido con Vue y Vite. Diseño editorial oscuro con acentos lima, proyectos filtrables y una presentación del stack por áreas.

## Desarrollo

Requiere Node.js 22.12 o posterior (se recomienda Node.js 24 LTS).

```sh
npm ci
npm run dev
```

## Producción

```sh
npm run build
npm run preview
```

Vite utiliza `/portfolio/` como ruta base para GitHub Pages. Los recursos públicos usan esta misma base.

Para publicar con la configuración existente de la rama `gh-pages`:

```sh
npm run build
npm run deploy
```

En GitHub, configura Pages para publicar desde la raíz de la rama `gh-pages`. El plan de GitHub debe permitir Pages con la visibilidad del repositorio.

## Personalización

- `src/App.vue`: presentación, foto y enlaces de contacto.
- `src/components/ProjectsSection.vue`: proyectos y filtros derivados de sus categorías.
- `src/components/SkillsSection.vue`: tecnologías organizadas por área.
- `src/style.css`: paleta, tipografía y adaptación móvil.
- `public/sounds/profile.jpg`: fotografía personal existente.

La interfaz respeta la preferencia de movimiento reducido, permite navegación por teclado y no reproduce audio.

## Idiomas

El portfolio detecta español o inglés a partir de las preferencias del navegador. Si ninguna coincide, utiliza inglés. El selector ES/EN guarda la elección en este navegador; no utiliza geolocalización ni servicios externos. Textos y metadatos se mantienen en `src/i18n.js`.

Restiq y Florida Drilling & Concrete son los proyectos destacados con enlaces a sus demos en Railway. Las tarjetas incluyen composiciones gráficas inspiradas en su identidad visual.

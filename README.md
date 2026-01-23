# Portfolio Vue.js - Estilo Terminal

Portfolio moderno con diseño inspirado en terminal de programación, fondo negro y tipografía amarilla estilo código.

## 🚀 Características

- ✨ Diseño de terminal/matriz con lluvia de código
- 🎨 Fondo negro con tipografía amarilla estilo código
- ⌨️ Efectos de escritura (typing effect)
- 🎯 Sección de skills con animaciones y barras de progreso
- 📁 Galería de proyectos con filtros
- 🔊 Sistema de sonidos interactivos
- 📱 Diseño responsive

## 🛠️ Tecnologías

- Vue.js 3 (Composition API)
- Vite
- CSS3 con animaciones
- Fira Code (tipografía de programación)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 🎵 Agregar Sonidos

1. Coloca tus archivos de sonido en formato `.mp3` en la carpeta `public/sounds/`
2. Archivos necesarios:
   - `hover.mp3` - Sonido al pasar el mouse
   - `click.mp3` - Sonido al hacer click
   - `select.mp3` - Sonido al seleccionar proyectos

Recursos para sonidos gratuitos:
- [Freesound.org](https://freesound.org)
- [Zapsplat.com](https://www.zapsplat.com)
- [Mixkit.co](https://mixkit.co/free-sound-effects/)

## ✏️ Personalización

### Cambiar tu información:

En [src/App.vue](src/App.vue), líneas 57-58:
```javascript
const fullName = 'Tu Nombre Aquí'
const role = 'Full Stack Developer | Vue.js Expert'
```

### Agregar tus skills:

En [src/components/SkillsSection.vue](src/components/SkillsSection.vue), edita el array `skills` (línea 60).

### Agregar tus proyectos:

En [src/components/ProjectsSection.vue](src/components/ProjectsSection.vue), edita el array `projects` (línea 94).

### Cambiar colores:

En [src/style.css](src/style.css), modifica las variables CSS:
```css
:root {
  --bg-black: #000000;
  --terminal-green: #00ff00;
  --code-yellow: #ffd700;
  --text-gray: #a0a0a0;
  --border-color: #333;
}
```

## 📁 Estructura del Proyecto

```
portfolio/
├── public/
│   └── sounds/          # Archivos de audio
├── src/
│   ├── components/
│   │   ├── SkillsSection.vue
│   │   └── ProjectsSection.vue
│   ├── composables/
│   │   └── useSoundEffects.js
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Efectos Visuales

- **Lluvia de código**: Efecto de caracteres cayendo en el fondo
- **Efecto de escritura**: El nombre se escribe letra por letra
- **Animaciones**: Transiciones suaves en hover y scroll
- **Barras de progreso**: Animadas al hacer click en las skills
- **Glitch effect**: Sombras de texto con efecto glitch

## 🎮 Interactividad

- Click en las skills para ver la barra de progreso animarse
- Hover sobre elementos para efectos visuales y sonoros
- Filtros de proyectos por categoría
- Enlaces a GitHub y demos de proyectos

## 📝 Licencia

Este proyecto es de código abierto y está disponible para ser usado libremente.

---

Desarrollado con ❤️ y ☕

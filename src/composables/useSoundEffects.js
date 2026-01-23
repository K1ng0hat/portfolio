import { ref } from 'vue'

/**
 * Composable para manejar efectos de sonido en el portfolio
 * Los archivos de audio deben estar en la carpeta public/sounds/
 */
export function useSoundEffects() {
  const soundsEnabled = ref(true)
  const soundCache = new Map()

  /**
   * Reproduce un sonido
   * @param {string} soundName - Nombre del sonido a reproducar (hover, click, select, etc.)
   */
  const playSound = (soundName) => {
    if (!soundsEnabled.value) return

    try {
      let audio = soundCache.get(soundName)
      
      if (!audio) {
        audio = new Audio(`/sounds/${soundName}.mp3`)
        audio.volume = 0.3 // Volumen moderado
        soundCache.set(soundName, audio)
      }

      // Reset y reproducir
      audio.currentTime = 0
      audio.play().catch(err => {
        console.warn(`No se pudo reproducir el sonido ${soundName}:`, err)
      })
    } catch (error) {
      console.warn(`Error al cargar el sonido ${soundName}:`, error)
    }
  }

  /**
   * Alternar sonidos on/off
   */
  const toggleSounds = () => {
    soundsEnabled.value = !soundsEnabled.value
  }

  /**
   * Pre-cargar sonidos para mejor rendimiento
   * @param {Array<string>} soundNames - Array de nombres de sonidos a precargar
   */
  const preloadSounds = (soundNames) => {
    soundNames.forEach(soundName => {
      const audio = new Audio(`/sounds/${soundName}.mp3`)
      audio.volume = 0.3
      soundCache.set(soundName, audio)
    })
  }

  return {
    soundsEnabled,
    playSound,
    toggleSounds,
    preloadSounds
  }
}

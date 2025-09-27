import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,ts,vue}',
    './layouts/**/*.{js,ts,vue}',
    './pages/**/*.{js,ts,vue}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.ts' // ✅ mejor quitar el patrón {js,ts} para Nuxt 3
  ],
  theme: {
    extend: {
      colors: {
        headerfooterlight: '#a78fd8'
      },
      spacing: {
        header: '3.5rem'
      }
    }
  },
  plugins: []
}

export default config

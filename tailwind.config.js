import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: false,
  theme: {
    extend: {
      colors: {
        success: '#52c41a',
        warning: '#faad14',
        error: '#f5222d'
      },
    },
  },
  plugins: [],
})

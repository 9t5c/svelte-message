import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import WindiCSS from 'vite-plugin-windicss'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      emitCss: false,
    }),
    WindiCSS()
  ],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: '/src',
      },
    ],
  },
  build: {
    lib: {
      entry: '/src/lib/message/index.ts',
      name: 'SvelteMessage',
      fileName: 'index',
    },
    rollupOptions: {
      plugins: [
        copy({
          targets: [
            {
              src: 'src/index.d.ts',
              dest: 'dist',
            },
          ],
          hook: 'writeBundle',
        }),
      ],
    },
  },
})

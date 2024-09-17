import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { SvelteKitPWA } from '@vite-pwa/sveltekit'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [sveltekit(), SvelteKitPWA({
    strategies: 'injectManifest',
    srcDir: 'src',
    filename: 'service-worker.ts',
    registerType: 'prompt',
    injectRegister: 'auto',
    scope: '/',
    base: '/',
    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'agent-sw',
      short_name: 'agent-sw',
      description: 'agent-sw',
      theme_color: '#ffffff',
    },

    injectManifest: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})
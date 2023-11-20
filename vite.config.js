import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'
import { viteVConsole } from 'vite-plugin-vconsole'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteVConsole({
      entry: path.resolve('src/main.js'),
      localEnabled: true,
      enabled: true,
      config: {
        maxLogNumber: 1000,
        theme:'light'
      }
    })
  ]
});
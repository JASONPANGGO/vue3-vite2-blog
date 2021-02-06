import { defineConfig } from 'vite'
import vitePluginVuedoc, { vueDocFiles } from 'vite-plugin-vuedoc'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePluginVuedoc({}),
    vue({
      include: [...vueDocFiles]
    })]
})

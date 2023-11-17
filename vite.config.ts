import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import { viteExternalsPlugin } from 'vite-plugin-externals'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteExternalsPlugin({
      vue: 'Vue',
      'future-ui': 'futureUI',
      'future-icon': 'futureIcon'
    })
  ]
})

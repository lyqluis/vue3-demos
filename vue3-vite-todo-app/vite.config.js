import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
// export default defineConfig({
export default ({ command, mode }) => {
  return {
    css: {},
    esbuild: {},
    resolve: {
      // 别名
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'components': path.resolve(__dirname, 'src/components'),
        'views': path.resolve(__dirname, 'src/views'),
        'routes': path.resolve(__dirname, 'src/routes'),
        'utils': path.resolve(__dirname, 'src/utils'),
        'styles': path.resolve(__dirname, 'src/styles'),
      }
    },
    plugins: [vue()]
  }
}

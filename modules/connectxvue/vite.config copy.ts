import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/scss/var.scss";' // 加载全局样式，使用scss特性
      }
    },
  },
  // server: {
  //   proxy: {
  //     // 代理模型文件请求
  //     '/model': {
  //       target: 'http://127.0.0.1:5173', // 替换为你的实际开发服务器地址
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/model/, ''),
  //     },
  //   },
  // },
})

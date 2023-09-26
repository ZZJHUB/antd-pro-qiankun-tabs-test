import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy' // need this
import { legacyQiankun } from 'vite-plugin-legacy-qiankun'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    legacy(),
    legacyQiankun({
      name: 'connectxvue',
      devSandbox: true
    })
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

  server: {
    headers:{
      'Access-Control-Allow-Origin': '*',
    },
    // proxy: {
    //   // 代理模型文件请求
    //   '/model': {
    //     target: 'http://127.0.0.1:5173', // 替换为你的实际开发服务器地址
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/model/, ''),
    //   },
    // },

    port: 5173,
    open: true,
    proxy: {
      '^/api': {
        target: '/',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^/api /, ''),
        selfHandleResponse: true,
        configure: (proxy, _options) => {
          proxy.on('proxyRes', (proxyRes, req, res) => {
            res.removeHeader("Access-Control-Allow-Origin")
            res.removeHeader("access-control-allow-origin")
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.setHeader("content-type", "application/json")

            proxyRes.pipe(res)
          });
        }
      },
    },
  }
})

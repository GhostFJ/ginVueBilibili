/*
 * @Author: FunJust
 * @Date: 2022-01-06 00:11:08
 * @Description:
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己增减
  },
  base: './', // 打包路径
  server: {
    port: 4000,
    open: true,
    cors: true,
    proxy: {
      "/api": {
        target: "", // 后台接口
        changeOrigin: true,
        secure: false, // 如果是https接口，需要配置这个参数
        // ws: true, //websocket支持
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: [],
  },
})

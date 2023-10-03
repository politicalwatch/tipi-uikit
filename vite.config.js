import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path'
import { defineConfig } from 'vite';
import vue2 from '@vitejs/plugin-vue2';
import { createSvgPlugin } from "vite-plugin-vue2-svg";

const svgoConfig = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
  ],
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'Tipi-UIKIT',
      fileName: (format) => `tipi-uikit.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue2(),
    createSvgPlugin({
      svgoConfig
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
      },
    },
  },
});

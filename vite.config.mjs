import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import';

export default defineConfig({
  plugins: [
    react,
    createStyleImportPlugin({
      resolves: [AntdResolve()],
    }),
  ],
  esbuild: {
    jsxFactory: '_jsx',
    jsxFragment: '_jsxFragment',
    jsxInject: 'import { createElement as _jsx, Fragment as _jsxFragment } from "react"',
  },
  css: {
    preprocessorOptions: {
      // Antd使用less作为css预编译器
      less: {
        // 只能定制主题，无法动态修改主题
        // modifyVars: {
        //   'primary-color': '#ff0000',
        //   // 'primary-color': 'rgb(var(--color-bg-base))', // 似乎也不支持 CSS Variable
        // },
        javascriptEnabled: true,
      },
      scss: {
        additionalData: `
          @import "src/styles/_variables.scss";
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
});

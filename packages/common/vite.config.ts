import react from '@vitejs/plugin-react'

import { resolve } from 'path'
import depsExternal from 'rollup-plugin-node-externals'
import preserveDirectives from 'rollup-plugin-preserve-directives'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: { entry: resolve(__dirname, 'src/main.ts'), formats: ['es'] },
    rollupOptions: {
      output: {
        // This is needed for tree-shaking in consumers: https://stackoverflow.com/a/75466511/4981456
        preserveModules: true,
      },
    },
    target: 'esnext',
    sourcemap: true,
  },
  resolve: { alias: { '@': resolve(__dirname, 'src') } },
  plugins: [
    dts(),
    preserveDirectives(),
    react(),
    // This needs to be the last one
    { ...depsExternal({}), enforce: 'pre' },
  ],
})

// vite.config.ts
import react from "file:///workspace/node_modules/.pnpm/@vitejs+plugin-react@4.3.1_vite@5.3.1/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import depsExternal from "file:///workspace/node_modules/.pnpm/rollup-plugin-node-externals@7.1.2/node_modules/rollup-plugin-node-externals/dist/index.js";
import preserveDirectives from "file:///workspace/node_modules/.pnpm/rollup-plugin-preserve-directives@0.4.0/node_modules/rollup-plugin-preserve-directives/dist/index.js";
import { defineConfig } from "file:///workspace/node_modules/.pnpm/vite@5.3.1/node_modules/vite/dist/node/index.js";
import dts from "file:///workspace/node_modules/.pnpm/vite-plugin-dts@3.9.1_jp5mp3eegw7ika22x7qp374fhq/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/workspace/packages/common";
var vite_config_default = defineConfig({
  build: {
    lib: { entry: resolve(__vite_injected_original_dirname, "src/main.ts"), formats: ["es"] },
    rollupOptions: {
      output: {
        // This is needed for tree-shaking in consumers: https://stackoverflow.com/a/75466511/4981456
        preserveModules: true
      }
    },
    target: "esnext",
    sourcemap: true
  },
  resolve: { alias: { "@": resolve(__vite_injected_original_dirname, "src") } },
  plugins: [
    dts(),
    preserveDirectives(),
    react(),
    // This needs to be the last one
    { ...depsExternal({}), enforce: "pre" }
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvd29ya3NwYWNlL3BhY2thZ2VzL2NvbW1vblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3dvcmtzcGFjZS9wYWNrYWdlcy9jb21tb24vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3dvcmtzcGFjZS9wYWNrYWdlcy9jb21tb24vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5cbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IGRlcHNFeHRlcm5hbCBmcm9tICdyb2xsdXAtcGx1Z2luLW5vZGUtZXh0ZXJuYWxzJ1xuaW1wb3J0IHByZXNlcnZlRGlyZWN0aXZlcyBmcm9tICdyb2xsdXAtcGx1Z2luLXByZXNlcnZlLWRpcmVjdGl2ZXMnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7IGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9tYWluLnRzJyksIGZvcm1hdHM6IFsnZXMnXSB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICAvLyBUaGlzIGlzIG5lZWRlZCBmb3IgdHJlZS1zaGFraW5nIGluIGNvbnN1bWVyczogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1NDY2NTExLzQ5ODE0NTZcbiAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHRhcmdldDogJ2VzbmV4dCcsXG4gICAgc291cmNlbWFwOiB0cnVlLFxuICB9LFxuICByZXNvbHZlOiB7IGFsaWFzOiB7ICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSB9IH0sXG4gIHBsdWdpbnM6IFtcbiAgICBkdHMoKSxcbiAgICBwcmVzZXJ2ZURpcmVjdGl2ZXMoKSxcbiAgICByZWFjdCgpLFxuICAgIC8vIFRoaXMgbmVlZHMgdG8gYmUgdGhlIGxhc3Qgb25lXG4gICAgeyAuLi5kZXBzRXh0ZXJuYWwoe30pLCBlbmZvcmNlOiAncHJlJyB9LFxuICBdLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1EsT0FBTyxXQUFXO0FBRWxSLFNBQVMsZUFBZTtBQUN4QixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLHdCQUF3QjtBQUMvQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFOaEIsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsS0FBSyxFQUFFLE9BQU8sUUFBUSxrQ0FBVyxhQUFhLEdBQUcsU0FBUyxDQUFDLElBQUksRUFBRTtBQUFBLElBQ2pFLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQTtBQUFBLFFBRU4saUJBQWlCO0FBQUEsTUFDbkI7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsRUFDYjtBQUFBLEVBQ0EsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLFFBQVEsa0NBQVcsS0FBSyxFQUFFLEVBQUU7QUFBQSxFQUNyRCxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixtQkFBbUI7QUFBQSxJQUNuQixNQUFNO0FBQUE7QUFBQSxJQUVOLEVBQUUsR0FBRyxhQUFhLENBQUMsQ0FBQyxHQUFHLFNBQVMsTUFBTTtBQUFBLEVBQ3hDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

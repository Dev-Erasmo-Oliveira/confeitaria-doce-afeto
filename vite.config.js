import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Em hospedagens servidas em subpasta, altere para './' e ajuste os
  // caminhos absolutos de /assets e /fonts nos componentes.
  base: '/',
  build: {
    outDir: 'dist',
    // O bundle fica em /bundle para não misturar com as fotos de /public/assets.
    assetsDir: 'bundle',
    sourcemap: false,
    target: 'es2018',
  },
  server: {
    host: true,
    port: 5173,
  },
});

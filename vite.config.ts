import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(() => {
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify - file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          diverter: resolve(__dirname, 'diverter.html'),
          loop_deck: resolve(__dirname, 'loop_deck.html'),
          pizzeria: resolve(__dirname, 'pizzeria.html'),
          slicing: resolve(__dirname, 'slicing.html'),
          variable_box: resolve(__dirname, 'variable_box.html'),
        },
      },
    },
  };
});

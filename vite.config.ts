// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import checker from 'vite-plugin-checker'

import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  // Project page lives at https://<user>.github.io/mel-talent-calc/
  base: '/mel-talent-calc/',
  server: {
    host: true,
  },
  plugins: [
    react(),
    tailwindcss(),
    checker({ typescript: true }), // run tsc in a worker
    imagetools(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // More aggressive code splitting for better loading
          if (id.includes('node_modules')) {
            // Split vendor libraries into smaller chunks
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            if (id.includes('@vercel')) {
              return 'analytics'
            }
            if (id.includes('clipboard')) {
              return 'clipboard'
            }
            if (id.includes('react-hot-toast')) {
              return 'toast'
            }
            if (id.includes('@floating-ui')) {
              return 'floating-ui'
            }
            return 'vendor'
          }
          
          // Split large components into separate chunks
          if (id.includes('TalentTree')) {
            return 'talent-tree'
          }
          if (id.includes('TalentGrid')) {
            return 'talent-grid'
          }
          if (id.includes('ClassPicker')) {
            return 'class-picker'
          }
        },
      }
    },
    // Optimize build settings
    minify: 'terser',
    chunkSizeWarningLimit: 500,
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
      },
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), 
      '@components': path.resolve(__dirname, 'src/Components'),
      '@img': path.resolve(__dirname, 'src/img'),
      '@Pages': path.resolve(__dirname, 'src/Pages'),
    },
  },
})

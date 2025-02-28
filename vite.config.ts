import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import checker from 'vite-plugin-checker'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import Inspect from 'vite-plugin-inspect'
// https://vite.dev/config/
export default defineConfig({
  base:'/ReactShop/',
  plugins:[
    react(),
    tailwindcss(),
    Inspect(),
		checker({
			typescript: true,
		}),
    ViteImageOptimizer({
			png: {
				
				quality: 100,
			  },
			  jpeg: {
				
				quality: 100,
			  },
			  jpg: {
				
				quality: 80,
			  },
		  }),
  ],
})

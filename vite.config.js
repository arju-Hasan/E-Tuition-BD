import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
})

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         zoom: {
//           '0%, 100%': { transform: 'scale(1)' },
//           '50%': { transform: 'scale(1.1)' },
//         },
//       },
//       animation: {
//         'zoom-in-out': 'zoom 3s ease-in-out infinite',
//       },
//     },
//   },
// };

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

// module.exports = {
//   darkMode: "class", // class-based dark mode
//   plugins: [require("daisyui")],
//   daisyui: {
//     themes: ["light", "dark"], // light & dark theme support
//   },
// };
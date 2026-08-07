/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#050B16",
        navy: {
          deep: "#07182F",
          card: "#0C1F3D",
          border: "#1E3A66",
        },
        urban: {
          blue: "#0A4DFF",
          electric: "#1677FF",
          light: "#3AA8FF",
          glow: "rgba(10, 77, 255, 0.4)",
        },
        ice: "#F6F9FF",
        graphite: "#111827",
        muted: "#8795AA",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Sora', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'radial-gradient(circle at 50% 30%, rgba(10, 77, 255, 0.15) 0%, rgba(7, 24, 47, 0) 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(7, 24, 47, 0.8) 0%, rgba(5, 11, 22, 0.95) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(22, 119, 255, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(22, 119, 255, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}

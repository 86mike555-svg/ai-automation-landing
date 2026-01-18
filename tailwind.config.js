/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(90, 100%, 35%)",
      },
      backgroundImage: {
        "subtle-gradient": "linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)",
        "hero-gradient": "linear-gradient(135deg, hsl(90,100%,35%), #22c55e)",
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.05)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.6 },
        },
      },
    },
  },
  plugins: [],
};


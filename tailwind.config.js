/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0C10",
        panel: "#12151C",
        panel2: "#161A23",
        line: "#232838",
        text: {
          DEFAULT: "#E8EAF0",
          muted: "#8890A4",
          faint: "#565D70"
        },
        retrieve: {
          DEFAULT: "#4CC9C0",
          dim: "#2C7A73"
        },
        generate: {
          DEFAULT: "#E8A649",
          dim: "#8C6528"
        }
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"]
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #1A1E28 1px, transparent 1px), linear-gradient(to bottom, #1A1E28 1px, transparent 1px)"
      },
      backgroundSize: {
        grid: "40px 40px"
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 }
        },
        rise: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        pulseDot: {
          "0%, 100%": { opacity: 0.4, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.4)" }
        }
      },
      animation: {
        blink: "blink 1s step-end infinite",
        rise: "rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        pulseDot: "pulseDot 2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

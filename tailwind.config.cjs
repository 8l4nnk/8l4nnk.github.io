/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono Variable", "JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        accent: {
          DEFAULT: '#FFC1B5',   // 메인 핑크 (배경/뱃지용)
          light: '#FFE4E1',     // 연한 핑크 (서브틀 배경)
          soft: '#FFF0ED',      // 아주 연한 핑크 (호버 배경)
          dim: '#D4756A',       // 진한 핑크 (텍스트용 — 라이트 배경에서 읽기 좋음)
          muted: '#B5615A',     // 더 진한 핑크 (강조 텍스트)
        },
        warm: {
          bg: '#FFFAF8',
          card: '#FFFFFF',
          hover: '#FFF5F2',
          border: '#F0DDD9',
          'border-light': '#F5E8E5',
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

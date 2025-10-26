import type { Config } from 'tailwindcss';
import { colors, white, black, currentColor, transparent } from './src/tokens/colors';

// By using theme colors from the design tokens, we ensure
// only the colors defined in the tokens are used in the project.
export default {
  content: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.mdx'],
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [],
  theme: {
    colors: {
      ...colors,
      white,
      black,
      transparent,
      currentColor,
    },
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans Variable', 'sans-serif'],
      },
    },
  },
} satisfies Config;

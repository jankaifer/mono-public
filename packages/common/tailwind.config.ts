import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  darkMode: ['selector', '[data-mantine-color-scheme="dark"]'],
}
export default config

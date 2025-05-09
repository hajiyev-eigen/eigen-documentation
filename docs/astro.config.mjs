import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';
import dotenv from 'dotenv';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';
const site = isProduction
  ? // @ts-ignore
    process.env.SITE_URL
  : 'http://localhost:4321/';

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    starlight({
      expressiveCode: {
        themes: ['aurora-x', 'github-light'],
        removeUnusedThemes: true,
      },
      title: 'Eigen Documentation',
      routeMiddleware: './src/routeData.ts',
      logo: {
        dark: './src/assets/eigen-dark.svg',
        light: './src/assets/eigen-light.svg',
        replacesTitle: true,
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Documentation',
          autogenerate: { directory: 'docs' },
        },
        {
          label: 'Components',
          autogenerate: { directory: 'components' },
        },
      ],
      plugins: [starlightThemeNova()],
    }),
  ],
  server: {
    allowedHosts: ['localhost', '25fe-46-18-71-114.ngrok-free.app'],
  },
});

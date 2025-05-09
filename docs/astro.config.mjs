// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      expressiveCode: {
        themes: ['aurora-x', 'github-light'],
        removeUnusedThemes: true,
      },
      title: 'Eigen Documentation',
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
});

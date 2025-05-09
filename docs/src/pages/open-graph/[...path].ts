import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';
type OGImageOptions = Awaited<ReturnType<Parameters<typeof OGImageRoute>[0]['getImageOptions']>>;

/** Paths for all of our Markdown content we want to generate OG images for. */
const paths = await getCollection('docs');

/** An object mapping file paths to file metadata. */
const pages = Object.fromEntries(paths.map(({ id, slug, data }) => [id, { data, slug }]));

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'path',
  pages,
  getImageOptions: async (_, { data, slug }: (typeof pages)[string]): Promise<OGImageOptions> => {
    return {
      title: data.title,
      description: data.description,
      logo: {
        path: './src/pages/open-graph/_assets/logo.png',
      },
      border: { width: 32, side: 'inline-start' },
      padding: 80,
      bgImage: {
        path: `./src/pages/open-graph/_assets/background.png`,
      },
      font: {
        title: {
          size: 48,
          lineHeight: 1.2,
          families: ['Obviously', 'Montserrat'],
          weight: 'Bold',
          color: [255, 255, 255],
        },
        description: {
          size: 36,
          lineHeight: 1.2,
          families: ['Montserrat'],
          weight: 'Normal',
          color: [199, 191, 201],
        },
      },
      fonts: [
        './src/pages/open-graph/_assets/Montserrat-Bold.ttf',
        './src/pages/open-graph/_assets/Montserrat-Regular.ttf',
        './src/pages/open-graph/_assets/brand-500-normal.otf',
      ].filter((val): val is string => typeof val === 'string'),
    };
  },
});

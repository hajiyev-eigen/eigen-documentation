# Eigen Documenatations

## 🚀 Project Structure

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧹 Code Formatting

This project uses [Prettier](https://prettier.io/) for code formatting. It supports JavaScript, TypeScript, JSX, MDX, and Astro files via plugins.

### Available Commands

- `npm run format` - Format all files
- `npm run format:check` - Check formatting without writing changes

### VS Code Integration

Install the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and enable `editor.formatOnSave` in your editor settings.

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).

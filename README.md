# G. Gopinath Resume

A modern single-page resume built with [React](https://react.dev/) and [Vite](https://vitejs.dev/). The layout highlights professional experience, skills, and contact details with a responsive, glassmorphism-inspired design.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm 9 or newer

## Getting started

Install dependencies and start a local development server:

```bash
npm install
npm run dev
```

The resume will be available at the URL shown in the terminal (defaults to `http://localhost:5173`).

## Building for production

Create an optimized static build in the `dist` directory:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploying to GitHub Pages

1. Update the `base` path in `vite.config.js` if your repository name is different from `resume`.
2. Commit your changes and push them to GitHub.
3. Deploy the latest build to the `gh-pages` branch:

   ```bash
   npm install
   npm run build
   npm run deploy
   ```

4. In your repository settings, enable GitHub Pages using the `gh-pages` branch.

The `deploy` script uses the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package to publish the `dist` folder so the site can be hosted at `https://<username>.github.io/<repository>/`.

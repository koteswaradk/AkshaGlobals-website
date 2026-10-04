# Aksha Global Website

Aksha Global's responsive website presents the company's mobile apps, software capabilities, training programs, and articles. It also includes contact information, a video studio page, and legal pages.

**Live website:** [https://koteswaradk.github.io/AkshaGlobals-website/](https://koteswaradk.github.io/AkshaGlobals-website/)

## Website sections

- **Home** — company overview, image slider, capabilities, and upcoming products.
- **Products** — product catalog and individual product detail pages.
- **Training** — course catalog and course details, including levels, duration, price, and curriculum.
- **Blog** — article listings and individual posts.
- **Studio** — studio content.
- **Contact** — contact details and an embedded map.
- **Privacy Policy** and **Terms of Service** — legal information.

The site uses hash-based navigation. On the published site, for example, the products page is available at `https://koteswaradk.github.io/AkshaGlobals-website/#/products`.

> **Payment demo:** The enrollment modal validates sample card or UPI fields and displays a success state in the browser. It is a front-end demonstration only; it does not connect to a payment provider, charge a payment method, or complete an enrollment. Do not enter real payment information.

## Technology

- React 18 and TypeScript
- Vite for local development and production builds
- React Router for hash-based client-side routing
- Tailwind CSS for styling
- `react-helmet-async` for page metadata
- `react-hook-form` for form state and validation

## Requirements

- Node.js 20 or later
- npm

## Run locally

From the repository root:

```bash
npm ci
npm run dev
```

Vite prints the local development URL in the terminal. To check a production build locally:

```bash
npm run build
npm run preview
```

The build runs TypeScript's compiler checks before creating the static site in `dist/`.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Type-check the project and build the production site into `dist/`. |
| `npm run preview` | Serve the production build locally. Run `npm run build` first. |
| `npm run lint` | Run ESLint on the TypeScript and TSX files. |

There is currently no test script configured in `package.json`.

## Project structure

```text
.
├── public/                  # Static images, icons, brochures, and metadata files
├── src/
│   ├── components/          # Shared navigation, footer, SEO, slider, and modal
│   ├── context/             # Shared React context, including theme state
│   ├── data/                # Product, course, blog, capability, and video content
│   ├── pages/               # Route-level page components
│   ├── App.tsx               # App layout and route definitions
│   ├── index.css             # Global styles
│   └── main.tsx              # React application entry point
├── .github/workflows/
│   └── deploy.yml            # Build and deploy to GitHub Pages
├── index.html
├── package.json
└── vite.config.ts
```

## Updating website content

- **Products:** Edit the product records in `src/data/products.ts`. Product IDs are used by the product detail route (`/products/:id`).
- **Courses:** Edit the course records in `src/data/courses.ts`. Course IDs are used by the training detail route (`/training/:id`); each course contains its levels and curriculum.
- **Blog posts:** Edit the post records in `src/data/blogPosts.ts`. Post IDs are used by the blog detail route (`/blog/:id`).
- **Capabilities and studio videos:** Update `src/data/capabilities.ts` and `src/data/studioVideos.ts`.
- **Page content and navigation:** Page components live in `src/pages/`; route definitions are in `src/App.tsx`, and shared navigation and footer components are in `src/components/`.
- **Images and other static files:** Add files to `public/` and reference them using `import.meta.env.BASE_URL` so their paths work under the GitHub Pages project URL. Keep paths and filenames consistent with their references in the source.

## Deployment

The GitHub Actions workflow at `.github/workflows/deploy.yml` installs the locked dependencies with `npm ci`, runs `npm run build`, and publishes the `dist/` directory to GitHub Pages. It runs on pushes to the configured branches and can also be started manually with `workflow_dispatch`.

Vite's `base` is set to `/AkshaGlobals-website/` in `vite.config.ts` for this repository's GitHub Pages project site. If the repository is renamed or hosted at a different path, update that setting and any site URLs in `index.html` and `src/components/SEO.tsx`.

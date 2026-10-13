# Hephzibah Ikhioda — portfolio

A responsive Next.js App Router portfolio with TypeScript and Framer Motion. Includes a desktop scroll-driven project stack, mobile project layout, filters, project detail pages, experience expansion, contact links, and resume download.

## Run

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3000.

```sh
npm run typecheck
npm run build
npm start
```

## Update content

- Profile, links, projects, skills and experience: src/data/portfolio.ts
- Homepage and interactions: src/components/Portfolio.tsx
- Project artwork: src/components/ProjectVisual.tsx
- Design and responsive styles: src/app/globals.css
- Photos: public/images/
- Downloadable resume: public/hephzibah-resume.pdf
- Design decisions: design-system/MASTER.md

The two original photos and PDF were copied into public; original Downloads files were not changed. The PDF download makes the entire supplied resume available to visitors, including its contact details.

Project artwork is clearly labeled as an illustrative concept, not a product screenshot. Replace with approved real project screenshots when available. Work contributions come from the supplied resume. StoneCircle's precise role and technologies were not supplied; its detail page only presents it as a featured app.

The Helochan reference informed the presentation direction, but the original live scroll sequence was inaccessible. The implemented stack is an independent scroll treatment and has not been checked against an original recording.

Google Fonts supplies optional DM Sans and Manrope fonts; system fallbacks keep the page usable without network access.

## Local setup note

Package downloads were blocked in the authoring environment. For verification, installed dependencies were copied from an existing local project and their versions pinned. This project has its own node_modules; the other project was not changed. On a new machine, run npm install normally.

This project is local and has not been deployed.

## Verification completed

- Full TypeScript checking passed.
- Next.js production build passed; homepage and all five project pages prerender successfully.
- Local HTTP checks passed for the homepage, five project routes, photos, resume PDF, and expected 404 response.
- Compiled JavaScript/CSS asset delivery and optimized portrait delivery were checked over HTTP.
- A production preview was started at http://127.0.0.1:3010.
- Browser-based visual and interaction QA could not be performed because no browser is connected in this environment. Responsive and reduced-motion behavior is implemented but still needs visual review.

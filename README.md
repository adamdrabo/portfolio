# Adam Drabo · Portfolio

Personal portfolio of Adam Drabo, mobile developer based in Montréal. Bilingual (French / English), responsive, built from a Penpot mockup.

## Stack

- React 19, TypeScript, Vite
- CSS Modules, self-hosted fonts (Fontsource)
- Nginx (unprivileged) in Docker

## Run locally

```bash
npm ci
npm run dev
```

Production build served by Nginx in a container:

```bash
docker compose up --build -d
```

The site is then available at http://localhost:8080.

## Project structure

```
src/
├── components/   UI sections (Navigation, Hero, ProjectSection, About, Contact, Footer)
├── data/         Projects and contact details
├── hooks/        useLanguage, useCarousel
├── i18n/         French and English texts, language context
├── pages/        HomePage
└── types/        Shared TypeScript types
nginx/            Server and security header configuration
```

To add a project, add an object to `src/data/projects.ts`.

## Security

- **Container:** non-root user, pinned base images, read-only filesystem, all Linux capabilities dropped, `no-new-privileges`, CPU and memory limits, `.dockerignore` keeps secrets out of the image.
- **HTTP headers:** Content Security Policy, HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, COOP, CORP. Server version hidden, only GET and HEAD allowed.
- **CI (GitHub Actions):** lint, build, `npm audit`, Docker image scan with Trivy. Actions pinned to commit SHAs, read-only token.
- **Repository:** Dependabot, CodeQL, secret scanning with push protection, automated review by Claude.

## Branch workflow

- `main`: production
- `preprod`: integration branch
- `dev/feature/...`: one branch per feature, created from `preprod`

Every change goes through a pull request into `preprod`, then `preprod` is merged into `main` once validated. Both branches are protected: pull request required, CI checks must pass, no force push or deletion.

## License

© Adam Drabo. All rights reserved.

The source code is public so it can be read and evaluated. The design, logo and content may not be reused without permission.

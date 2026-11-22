# Adam Drabo · Portfolio

Personal portfolio of Adam Drabo, mobile developer based in Montréal. Bilingual (French / English), responsive, built from a Penpot mockup.

**Live:** https://adamdrabo.duckdns.org

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
- **Repository:** Dependabot, CodeQL, secret scanning with push protection.

## Deployment

```
merge into main → build → Trivy scan → push to GHCR → SSH deploy → Oracle Cloud VM
```

- **Hosting:** Oracle Cloud Always Free virtual machine running Ubuntu 24.04 LTS.
- **Image:** built and scanned in GitHub Actions, then published to GitHub Container Registry with the commit SHA as tag. The server never builds code, it only pulls a scanned image.
- **Delivery:** the deploy job runs in a `production` environment that only `main` can use. It connects with a dedicated SSH key that the server restricts (`restrict` + forced command) to a single deploy script. The script only accepts a commit SHA, pulls that exact image, waits for the container health check and rolls back to the previous version if it fails. The server host key is pinned.
- **Reverse proxy:** Nginx on the host terminates TLS (Let's Encrypt, renewed automatically, TLS 1.2 and 1.3 only, HTTP redirected to HTTPS) and forwards to the container, which only listens on `127.0.0.1`. Requests for unknown host names are dropped.
- **Server hardening:** SSH with keys only, no root login and an allow list of users; deny-by-default firewall on two layers (Oracle security list and iptables) with only ports 22, 80 and 443 open; fail2ban; automatic security updates; Docker daemon with log rotation, `no-new-privileges` and inter-container traffic disabled; process limit on the container.
- **Results:** SSL Labs A+, Security Headers A+.

## Branch workflow

- `main`: production
- `preprod`: integration branch
- `dev/feature/...`: one branch per feature, created from `preprod`

Every change goes through a pull request into `preprod`, then `preprod` is merged into `main` once validated. Both branches are protected: pull request required, CI checks must pass, no force push or deletion.

## License

© Adam Drabo. All rights reserved.

The source code is public so it can be read and evaluated. The design, logo and content may not be reused without permission.

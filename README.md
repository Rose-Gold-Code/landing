# Rose Gold Code

Company website for Rose Gold Code LLC.

Run `npm install` and `npm run dev` for development. Validate with `npm run build`, `npm run lint`, and `npx tsc --noEmit`.

App descriptions and release status are maintained in `app/page.tsx`; shared styles are in `app/globals.css`. The contact email is `will@rosegoldcode.com`.

## GitHub Pages

`.github/workflows/pages.yml` builds and deploys the static site whenever `main` changes. Select **GitHub Actions** as the publishing source in the repository's **Settings → Pages**. GitHub Free requires this repository to be public.

The workflow reads the Pages URL's base path automatically: `/landing` for the default project URL, or an empty path for a custom domain. For a local project-URL build, run `PAGES_BASE_PATH=/landing npm run build`.

Configure `rosegoldcode.com` as the custom domain in Settings → Pages, then point the domain's DNS to GitHub Pages. Preserve existing MX/TXT records used by company email. When changing the custom domain, rerun the deployment workflow so asset paths are rebuilt for its URL.

The production deployment uses only the static export in `dist/client`, with no application server. The pinned starter dependency tree has known npm audit advisories; revisit the development toolchain before adding server features. Unused starter components are excluded from the page-code lint command.

Do not store EIN letters, formation documents, credentials, or personal identity documents in this repository.

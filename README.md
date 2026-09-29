# Rose Gold Code

Company website for Rose Gold Code LLC.

Run `npm install` and `npm run dev` for development. Validate with `npm run build`, `npm run lint`, and `npx tsc --noEmit`.

App descriptions and release status are maintained in `app/page.tsx`; shared styles are in `app/globals.css`. The contact email is `will@rosegoldcode.com`.

The Sites project identity is stored in `.openai/hosting.json`. Deployments start private. The company website must be publicly accessible on its company domain before using it for Apple organization enrollment.

The production deployment uses only the static export in `dist/client`, with no application server. The pinned starter dependency tree has known npm audit advisories; revisit the development toolchain before adding server features.

Do not store EIN letters, formation documents, credentials, or personal identity documents in this repository.

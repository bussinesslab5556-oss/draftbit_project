# Jubayer — AI Developer Portfolio

A responsive, futuristic portfolio built with Next.js, React, TypeScript and custom CSS. It uses a dark glassmorphism visual system, animated ambient backgrounds, project cards, skills, experience, services, journal, testimonials placeholder, resume area and contact form.

## Important personalization before publishing

Search `app/page.tsx` and replace these placeholders:

- `GITHUB_URL` with your actual GitHub profile URL.
- `LINKEDIN_URL` with your actual LinkedIn profile URL.
- `CONTACT_EMAIL` with your professional email address.
- Add real repository/demo links when your projects are ready.
- Add verified internship organization, dates, duties and outcomes.
- Add a real resume PDF if you want to offer a download.
- Publish testimonials only with real feedback and permission.

The project descriptions intentionally identify projects as in development. The contact form opens the visitor's email application; it does not send or store submissions on a server.

## Run locally

Install Node.js 20.9+ and npm, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Upload this project to a GitHub repository.
2. Sign in to Vercel and import the repository.
3. Keep the detected Next.js defaults and deploy.
4. After updating the profile constants, redeploy to publish the real links.

## Stack

- Next.js App Router
- React + TypeScript
- Lucide icons
- Responsive custom CSS
- Vercel-ready configuration

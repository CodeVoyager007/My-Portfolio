# Ayesha Mughal | Portfolio

Personal portfolio of Ayesha Mughal, AI agent builder and technical writer based in Karachi, Pakistan.

**Live site:** [ayesha-mughals-portfolio.vercel.app](https://ayesha-mughals-portfolio.vercel.app)

## Features

- Animated SVG mascot in the hero that follows the cursor (GSAP), with reduced-motion and touch fallbacks
- Scroll-driven section animations with GSAP ScrollTrigger and Lenis smooth scrolling
- Projects, career timeline, certifications, and a journey page driven from a single config file
- Blog page synced live from the Medium RSS feed, with most-read articles as a fallback
- Contact form that emails messages through [Resend](https://resend.com), with validation, a spam trap, and rate limiting
- Downloadable resume (PDF)

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) and React 19
- TypeScript
- GSAP and Lenis
- Plain CSS per component
- Deployed on Vercel

## Getting started

Requires Node.js 20.9 or newer.

```bash
git clone https://github.com/CodeVoyager007/My-Portfolio.git
cd My-Portfolio
npm install
cp .env.example .env.local   # then add your Resend API key
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | For the contact form | API key from resend.com |
| `CONTACT_TO_EMAIL` | No | Inbox for contact messages. Defaults to the email in `src/data/config.ts` |
| `CONTACT_FROM_EMAIL` | No | Sender address once a domain is verified in Resend |

## Project structure

```
src/
  app/            Pages (home, work, blog, certifications, journey, contact) and API routes
    api/contact   Sends contact form messages by email
    api/medium    Reads the Medium RSS feed
  components/     Page sections and their styles
    styles/       One CSS file per component
    utils/        GSAP scroll and text-splitting helpers
  context/        Loading screen state
  data/config.ts  All site content: profile, projects, experience, certifications, articles
public/           Images, certificates, and the resume PDF
```

To update content, edit `src/data/config.ts`.

## Contact

- Email: ayeshamughal2162@gmail.com
- LinkedIn: [ayeshaintech](https://www.linkedin.com/in/ayeshaintech/)
- GitHub: [CodeVoyager007](https://github.com/CodeVoyager007)
- Medium: [@ayeshamughal21](https://medium.com/@ayeshamughal21)

## License

[CC BY-NC 4.0](LICENSE). You may share and adapt this work with credit, but not for commercial use.

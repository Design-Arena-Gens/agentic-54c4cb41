# Motion Narration Explainer

Single-page Next.js application that explains the common YouTube editing style where creators narrate while animating still images (often called the Ken Burns or parallax photo effect).

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the page.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── next.config.mjs
├── package.json
└── README.md
```

## Deployment

Use `npm run build` to ensure the project is production-ready. The project is configured for deployment on platforms such as Vercel.

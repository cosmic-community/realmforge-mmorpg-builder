# RealmForge MMORPG Builder Portfolio
![App Preview](https://imgix.cosmicjs.com/4ea16f60-c50f-11f1-9185-df2983a733a2-autopilot-photo-1498050108023-c5249f4df085-1791680495949.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A dark-fantasy MMORPG-themed developer portfolio built with Next.js and Cosmic. Showcases projects, skills, and work experience with glowing gold accents, glassmorphism panels, and an animated particle hero.

## Features

- 🏰 Epic landing page with animated canvas particle background and glowing gold "REALM FORGE" title
- 🚀 Project Codex — grid + detail pages with screenshots, tech stack, live/repo links
- 🛠️ Arsenal of Skills — grouped by category with animated proficiency bars
- 💼 Quest Log — work experience timeline with current-role badges
- 📱 Fully responsive dark MMORPG fantasy design
- ⚡ Server-rendered Cosmic data fetching with strict TypeScript safety

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6acadd5323bfa78d7d9f882a&clone_repository=6acae15323bfa78d7d9f88bb)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> Create content models for a developer portfolio with projects (including screenshots, tech stack, and live URLs), skills, and work experience.
>
> User instructions:
> MMORPG Game Builder Engine — a full-stack browser-based 3D/2.5D world builder and MMORPG platform, built on top of the Three.js Sims house builder architecture (Next.js 15, React 18, Three.js, Tailwind CSS, TypeScript).
>
> ## Core Architecture
>
> ### Stack
> - Next.js 15 App Router + TypeScript (strict)
> - Three.js + @react-three/fiber + @react-three/drei + @react-three/rapier (physics/collision)
> - Tailwind CSS with dark MMORPG fantasy theme (deep purples, dark blues, gold accents, glow effects)
> - Prisma ORM with PostgreSQL (or SQLite for dev) for remote persistence
> - NextAuth.js for authentication
> - JSZip for project export/import
> - Zustand for global state
> - Framer Motion for UI animations
>
> ## Pages & Routes
>
> ### `/` — Epic Landing Page, `/login`, `/register`, `/admin` (admin dashboard with users/worlds/assets), `/player` (player dashboard with worlds grid), `/builder/[worldId]` (the 3D/2.5D MMORPG world builder with terrain/build/objects/paint/test modes, object catalog, inspector panel with collision system and audio triggers, export ZIP system, auto-save persistence, and runtime play mode).
>
> ## API Routes
> Auth, Worlds, Assets, and Admin routes under /api with full CRUD for worlds and users.
>
> ## Database Schema (Prisma)
> User, World, and Asset models with Role enum (PLAYER/ADMIN), full relations.
>
> ## Design System
> Dark Fantasy MMORPG theme with specific hex colors for background, surface, primary purple, gold accent, text, error/success states, and glassmorphism UI components.
>
> ## File Structure
> Full /app, /components, /lib, /prisma, /public directory structure for the builder application.
>
> ## Key UX Principles
> Builder is the centerpiece; one-click collision toggle; automatic save; instant test mode; one-click ZIP export/import.

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "RealmForge MMORPG Builder". The content is managed in Cosmic CMS with the following object types: projects, skills, work-experience. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions:
> MMORPG Game Builder Engine — a full-stack browser-based 3D/2.5D world builder and MMORPG platform, built on top of the Three.js Sims house builder architecture (Next.js 15, React 18, Three.js, Tailwind CSS, TypeScript).
>
> ## Core Architecture
>
> ### Stack
> - Next.js 15 App Router + TypeScript (strict)
> - Three.js + @react-three/fiber + @react-three/drei + @react-three/rapier (physics/collision)
> - Tailwind CSS with dark MMORPG fantasy theme (deep purples, dark blues, gold accents, glow effects)
> - Prisma ORM with PostgreSQL (or SQLite for dev) for remote persistence
> - NextAuth.js for authentication
> - JSZip for project export/import
> - Zustand for global state
> - Framer Motion for UI animations
>
> ## Pages & Routes
> `/` Epic Landing Page with animated Three.js particle background, "REALM FORGE" title, hero CTAs, features section. `/login` and `/register` dark glassmorphism auth pages. `/admin` protected admin dashboard with users/worlds/assets tables. `/player` protected player dashboard with worlds grid and stats. `/builder/[worldId]` the main 3D/2.5D MMORPG world builder with terrain/build/objects/paint/test modes, object catalog sidebar, inspector panel with one-click collision toggle and audio trigger system, ZIP export/import, auto-save persistence to server every 30 seconds, and a runtime/play mode with WASD movement and physics.
>
> ## API Routes
> Auth (register, NextAuth), Worlds (list/create/get/update/delete), Assets (upload/list), Admin (users/worlds management).
>
> ## Database Schema (Prisma)
> User (email, username, password, role), World (name, description, isPublic, data JSON, thumbnail), Asset (name, type, url, size) models with relations.
>
> ## Design System
> Dark Fantasy MMORPG theme: near-black background (#0a0a0f), dark purple surfaces, deep purple primary (#6d28d9) with glow, gold accent (#f59e0b) with glow, light gray text, glassmorphism panels with backdrop-blur, gradient buttons with hover glow, Inter + Cinzel/MedievalSharp fonts.
>
> ## File Structure
> Full /app, /components (auth, landing, admin, player, builder with scene/runtime/systems/inspector subfolders, ui), /lib, /prisma, /public directory structure.
>
> ## Key UX Principles
> Builder is the centerpiece of the application; one-click collision toggle in the inspector; automatic save every 30 seconds with never-lose-work guarantee; instant F5 test/runtime preview; one-click ZIP export and drag-and-drop import.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org) — App Router, Server Components
- [Cosmic](https://www.cosmicjs.com) — Headless CMS for projects, skills, and work experience ([docs](https://www.cosmicjs.com/docs))
- TypeScript (strict mode)
- Tailwind CSS — dark MMORPG fantasy design system
- Canvas 2D particle animation (lightweight, no Three.js dependency required)

## Getting Started

### Prerequisites
- [Bun](https://bun.sh) installed
- A Cosmic account with the `projects`, `skills`, and `work-experience` object types

### Installation

```bash
bun install
bun run dev
```

Visit `http://localhost:3000` to view the app.

### Environment Variables

Create the required environment variables in your hosting platform (Cosmic variables are injected automatically in Cosmic-hosted deployments):

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

```typescript
// Fetch all projects with tech stack and screenshots
const { objects: projects } = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single project by slug
const { object: project } = await cosmic.objects
  .findOne({ type: 'projects', slug: 'my-project' })
  .depth(1)

// Fetch skills grouped by category
const { objects: skills } = await cosmic.objects
  .find({ type: 'skills' })
  .props(['id', 'title', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app reads from three Cosmic object types:
- **projects** — `description`, `content`, `screenshots`, `tech_stack`, `live_url`, `repo_url`, `featured`
- **skills** — `category`, `proficiency`, `icon`
- **work-experience** — `company`, `role`, `location`, `start_date`, `end_date`, `current`, `description`

All data is fetched server-side via `lib/cosmic.ts` — no API keys are ever exposed to the browser.

## Deployment Options

### Vercel
1. Push this repository to GitHub
2. Import the project into [Vercel](https://vercel.com)
3. Add the environment variables listed above
4. Deploy

### Netlify
1. Push this repository to GitHub
2. Import the project into [Netlify](https://netlify.com)
3. Set build command to `bun run build` and publish directory to `.next`
4. Add the environment variables listed above
5. Deploy

<!-- README_END -->
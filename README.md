# BlogClaudeJS - Professional Portfolio

A modern, professional portfolio website built with React and Next.js. Clean dark mode design with responsive layout.

## Quick Start

### 1. Install Dependencies

```bash
cd blogclaudejs
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## How to Interact With This Site

### Working with Components

All components are in `app/components/`:

- **Navbar.tsx** - Navigation header with mobile menu
- **Hero.tsx** - Main intro section with resume card
- **ProjectGrid.tsx** - Grid layout of projects
- **ProjectCard.tsx** - Individual project card component
- **Footer.tsx** - Footer with links and contact info

### Editing Content

#### To update projects:
1. Edit `app/components/ProjectGrid.tsx`
2. Modify the `projects` array
3. Changes appear instantly (Next.js hot reload)

#### To update intro text:
1. Edit `app/components/Hero.tsx`
2. Modify the text in the JSX
3. Refresh browser (or auto-reloads)

#### To update navigation:
1. Edit `app/components/Navbar.tsx`
2. Add/remove links in the NavLink components

### Styling

We use **Tailwind CSS** for styling. All colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  dark: {
    bg: '#1a1a1a',      // Main background
    card: '#2d2d2d',    // Card backgrounds
    border: '#3d3d3d',  // Borders
    text: '#e0e0e0',    // Main text
    accent: '#5da3d5',  // Blue accent
  },
}
```

To change colors globally, update these values in `tailwind.config.ts`.

### Key Features

✅ **100% Dark Mode** - Professional dark theme only
✅ **Fully Responsive** - Works on mobile, tablet, desktop
✅ **Component-Based** - Easy to edit and extend
✅ **Fast** - Built with Next.js for optimal performance
✅ **No External Dependencies** - Just React, Next.js, Tailwind

### File Structure

```
blogclaudejs/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectGrid.tsx
│   │   ├── ProjectCard.tsx
│   │   └── Footer.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Build for Production

```bash
npm run build
npm start
```

This creates an optimized production build.

## What's Different From BlogClaude (Quarto)

- **No Quarto** - Pure React/Next.js, completely transparent rendering
- **Full Control** - Every element is explicit code you can see and modify
- **No HTML Display Issues** - Components render cleanly, no surprise code showing up
- **Better TypeScript** - Full type safety with `.tsx` files
- **Easy Expansion** - Add new pages/sections without fighting a framework

## Adding New Pages

1. Create a new directory in `app/` (e.g., `app/projects/`)
2. Add a `page.tsx` file
3. Next.js automatically routes it (e.g., `/projects`)

Example:
```typescript
// app/projects/page.tsx
export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-[#f0f0f0]">Projects</h1>
      {/* Your content */}
    </div>
  )
}
```

## Deployment

Easy deployment options:
- **Vercel** (recommended for Next.js): `vercel deploy`
- **GitHub Pages**: Export as static site
- **Netlify**: Connect your repository

## Support

All code is written in standard React/TypeScript. If something doesn't work or looks wrong, you can see exactly why by inspecting the JSX.

---

**Built with clarity and transparency in mind.** No mystery rendering, no framework quirks. Just clean React code.

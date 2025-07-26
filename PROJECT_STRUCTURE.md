# Cornerstone Church Website

A clean, scalable Next.js website for Cornerstone Church built with TypeScript and Tailwind CSS.

## Project Structure

```
cornerstone-replica/
├─ pages/               # Next.js pages (each page = a route)
│   ├─ _app.tsx         # App wrapper component
│   ├─ index.tsx        # Home page (/)
│   ├─ about.tsx        # About page (/about)
│   ├─ newhere.tsx      # "Plan a Visit" page (/newhere)
│   ├─ our-team.tsx     # Our Team page (/our-team)
│   ├─ kids.tsx         # Cornerstone Kids page (/kids)
│   ├─ baptism.tsx      # Baptism page (/baptism)
│   ├─ groups.tsx       # Groups page (/groups)
│   ├─ sermons.tsx      # Sermons listing page (/sermons)
│   ├─ blog.tsx         # Blog listing page (/blog)
│   ├─ give.tsx         # Give page (/give)
│   └─ events.tsx       # Events/Calendar page (/events)
├─ components/          # Reusable components
│   ├─ Layout.tsx       # Main layout component (header, footer wrap)
│   ├─ NavBar.tsx       # Navigation header component
│   ├─ Footer.tsx       # Footer component
│   └─ SermonCard.tsx   # Reusable card for sermon items
├─ public/              # Public assets (images, videos, etc.)
│   ├─ README.md        # Asset guidelines
│   └─ ...              # SVG files and future images
├─ styles/              # Global and module CSS files
│   ├─ globals.css      # Global CSS
│   └─ Home.module.css  # Example CSS module for Home page
└─ src/                 # Legacy app router files (can be removed later)
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Features

- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Navigation**: Responsive navigation with mobile hamburger menu
- **Layout System**: Consistent layout with header and footer
- **TypeScript**: Full TypeScript support for type safety
- **Modular Components**: Reusable components for easy maintenance

## Pages Overview

- **Home (/)**: Main landing page
- **About (/about)**: Church information and mission
- **New Here (/newhere)**: Information for first-time visitors
- **Our Team (/our-team)**: Staff and leadership information
- **Kids (/kids)**: Children's ministry information
- **Baptism (/baptism)**: Baptism information and scheduling
- **Groups (/groups)**: Small groups and ministries
- **Sermons (/sermons)**: Sermon library with video/audio
- **Blog (/blog)**: Church blog and updates
- **Give (/give)**: Online giving and donation information
- **Events (/events)**: Church calendar and upcoming events

## Customization

### Adding Content
1. Update the page files in the `pages/` directory
2. Modify the components in `components/` as needed
3. Add images to the `public/` directory
4. Update contact information in `components/Footer.tsx`

### Styling
- Global styles: `styles/globals.css`
- Component-specific styles: Create `.module.css` files in `styles/`
- Tailwind classes can be used throughout components

### Navigation
Update the navigation links in `components/NavBar.tsx` to add, remove, or modify menu items.

## Deployment

This project can be deployed on Vercel, Netlify, or any platform that supports Next.js.

For Vercel deployment:
```bash
npm run build
```

## Technology Stack

- **Framework**: Next.js 15.4.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI**: React 19.1.0

## Next Steps

1. **Content**: Add actual content to each page
2. **Images**: Add church photos and logos to the `public/` directory
3. **Sermons**: Integrate with your sermon hosting platform
4. **Events**: Embed Google Calendar or other calendar solution
5. **Forms**: Add contact forms and baptism request forms
6. **SEO**: Add meta tags and optimize for search engines

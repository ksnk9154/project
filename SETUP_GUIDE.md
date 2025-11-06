# Hindu Digest - Setup Guide

This is a fully offline-capable React + Vite + TypeScript application for the Hindu Digest website.

## Prerequisites

- Node.js 18+ 
- npm or yarn

## Installation & Running

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Required Local Images

Before running the application, you need to add the following images to the `/public/images/` directory:

### Required Images:

1. **`/public/images/background.png`**
   - The golden ornamental background pattern with decorative corners and center mandala
   - This is used as the fixed background across all pages

2. **`/public/images/ganesha.png`**
   - The colorful Lord Ganesha image with bokeh background
   - Displayed on the hero section of the home page (right side)

3. **`/public/images/om-logo.png`**
   - The Om symbol logo for the Hindu Digest branding
   - Appears in the header as the site logo

### Directory Structure:

```
public/
├── images/
│   ├── background.png    (Golden ornamental background)
│   ├── ganesha.png       (Lord Ganesha image)
│   └── om-logo.png       (Om symbol logo)
└── vite.svg
```

## Features

✅ **Fully Offline** - All dependencies bundled, no external CDN calls
✅ **Local Fonts** - Uses @fontsource packages (Noto Sans, Noto Serif, Crimson Text)
✅ **Local Assets** - All images served from /public/images
✅ **Tailwind CSS v4** - Built-in, no external CSS CDN
✅ **Responsive Design** - Mobile and desktop navigation
✅ **Beautiful UI** - Traditional Hindu aesthetic with modern functionality

## Navigation Structure

- **Home** - Hero section with welcome message and Ganesha image
- **Dr. Karanam Aravinda Rao** - Information about the teacher
- **Hindu Digest** (Dropdown)
  - About Hindu Digest
- **News** (Dropdown)
  - Videos
  - Articles
  - Writings by Dr. Aravinda Rao
  - Teachings
  - Community Articles
  - Talks & Interviews
- **Media Clips**
- **Shop** (Dropdown)
  - Books
  - Audio
  - Video
- **Q&A**
- **Contact**

## Build for Production

```bash
npm run build
```

The built files will be in the `/dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Technology Stack

- **React 18** - UI Framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **Radix UI** - Accessible UI components
- **Lucide React** - Icons
- **Motion (Framer Motion)** - Animations
- **@fontsource** - Self-hosted fonts

## Fonts Used

- **Noto Sans** - Body text (400, 500, 700 weights)
- **Noto Serif** - Alternative body text (400, 700 weights)
- **Crimson Text** - Headings (400, 600 weights)

All fonts are self-hosted via @fontsource and will work completely offline.

## Troubleshooting

### Images Not Showing

1. Ensure all three required images are in `/public/images/` directory
2. Check that filenames match exactly (case-sensitive)
3. Clear browser cache and reload

### Fonts Not Loading

1. Run `npm install` to ensure @fontsource packages are installed
2. Check that the CSS imports in `/src/styles/globals.css` are correct

### Port Already in Use

If port 3000 is already in use, Vite will automatically try the next available port. Check the terminal output for the actual port number.

## Support

For issues or questions about the Hindu Digest website, please contact:
- Email: contact@hindudigest.org
- Website: hindudigest.org

---

🕉️ **Dharma • Bhakti • Sanskar** 🕉️

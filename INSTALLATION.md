# Hindu Digest - Complete Installation Guide

This guide will help you set up and run the Hindu Digest website on your local machine.

## System Requirements

- **Node.js**: Version 18.x or higher ([Download Node.js](https://nodejs.org/))
- **npm**: Version 9.x or higher (comes with Node.js)
- **Operating System**: Windows, macOS, or Linux
- **Disk Space**: ~500MB for node_modules and dependencies

## Step-by-Step Installation

### 1. Verify Node.js Installation

Open a terminal/command prompt and run:

```bash
node --version
npm --version
```

You should see version numbers. If not, install Node.js from [nodejs.org](https://nodejs.org/).

### 2. Navigate to Project Directory

```bash
cd /path/to/hindu-digest
```

### 3. Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

This will install:
- React 18 and React DOM
- TypeScript and type definitions
- Vite (build tool)
- Tailwind CSS v4
- Radix UI components
- Lucide React icons
- Motion (Framer Motion) for animations
- @fontsource fonts
- And all other dependencies

**Installation time**: 2-5 minutes depending on your internet connection.

### 4. Add Required Images

Before running the application, you **must** add at least these 3 required images to `/public/images/`:

1. **background.png** - Golden ornamental background
2. **ganesha.png** - Lord Ganesha image
3. **om-logo.png** - Om symbol logo

See `/public/images/README.md` for detailed image specifications and optional images.

### 5. Start Development Server

```bash
npm run dev
```

The application will start and automatically open in your default browser at:
```
http://localhost:3000
```

**Note**: If port 3000 is already in use, Vite will automatically use the next available port. Check the terminal output for the actual URL.

## Available Scripts

### Development

```bash
npm run dev
```
- Starts the development server
- Enables hot module replacement (HMR)
- Opens browser automatically
- Shows detailed error messages

### Build for Production

```bash
npm run build
```
- Compiles TypeScript
- Builds optimized production bundle
- Outputs to `/dist` directory
- Minifies and optimizes all assets

### Preview Production Build

```bash
npm run preview
```
- Serves the production build locally
- Useful for testing before deployment
- Runs on port 4173 by default

### Linting

```bash
npm run lint
```
- Checks code for errors and style issues
- Uses ESLint with React and TypeScript rules

## Project Structure

```
hindu-digest/
├── public/                 # Static assets
│   └── images/            # Required and optional images
│       ├── background.png
│       ├── ganesha.png
│       ├── om-logo.png
│       └── README.md
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── MobileNav.tsx
│   │   ├── ContentSection.tsx
│   │   ├── Footer.tsx
│   │   ├── TraditionalBackground.tsx
│   │   ├── Articles.tsx
│   │   ├── ContactForm.tsx
│   │   └── ui/           # Shadcn UI components
│   ├── styles/
│   │   └── globals.css   # Global styles & Tailwind
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── index.html            # HTML template
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite config
├── postcss.config.js     # PostCSS config
└── README.md             # Quick start guide
```

## Offline Capabilities

✅ This application is **fully offline-capable**:

- All fonts are self-hosted via @fontsource (no Google Fonts CDN)
- All dependencies are bundled in node_modules
- No external CSS CDN required
- All images served from local `/public/images/`
- Tailwind CSS is built-in (no external CDN)

**Exception**: YouTube video embeds require internet connection.

## Fonts

The application uses these self-hosted fonts:

- **Noto Sans** - Primary body text
- **Noto Serif** - Alternative body text  
- **Crimson Text** - Headings

All fonts are loaded from `node_modules/@fontsource/` and work completely offline.

## Troubleshooting

### Images Not Displaying

**Problem**: Images show as broken or missing

**Solution**:
1. Verify images exist in `/public/images/` directory
2. Check filenames match exactly (case-sensitive):
   - `background.png`
   - `ganesha.png`
   - `om-logo.png`
3. Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
4. Restart dev server

### Port Already in Use

**Problem**: Port 3000 is already in use

**Solution**:
- Vite will automatically try the next available port
- Check terminal output for the actual port number
- Or manually specify a port in `vite.config.ts`

### npm install Errors

**Problem**: Errors during `npm install`

**Solution**:
1. Update Node.js to the latest LTS version
2. Clear npm cache: `npm cache clean --force`
3. Delete `node_modules` and `package-lock.json`
4. Run `npm install` again

### Build Errors

**Problem**: TypeScript or build errors

**Solution**:
1. Ensure all required images are in place
2. Run `npm run lint` to check for code issues
3. Check terminal for specific error messages
4. Verify all imports are correct

### Slow Performance

**Problem**: Development server is slow

**Solution**:
1. Close unused browser tabs
2. Disable browser extensions
3. Check system resources (RAM, CPU)
4. Try clearing Vite cache: `rm -rf node_modules/.vite`

### Fonts Not Loading

**Problem**: Text appears in default system fonts

**Solution**:
1. Verify `npm install` completed successfully
2. Check `node_modules/@fontsource/` exists
3. Restart development server
4. Clear browser cache

## Browser Support

The application supports modern browsers:

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+

**Note**: Internet Explorer is not supported.

## Development Tips

### Hot Module Replacement (HMR)

Changes to React components will update instantly without full page reload.

### TypeScript

The project uses TypeScript for type safety. VS Code will show inline errors and provide autocomplete.

### Tailwind CSS

Tailwind classes are available throughout the project. See [tailwindcss.com](https://tailwindcss.com/) for documentation.

### Component Library

The project includes Shadcn UI components in `/src/components/ui/`. These are fully accessible and customizable.

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Add required images to `/public/images/`
3. ✅ Start dev server: `npm run dev`
4. 📝 Customize content in components
5. 🎨 Adjust styles in `globals.css`
6. 🚀 Build for production: `npm run build`

## Getting Help

For issues or questions:

- 📧 Email: contact@hindudigest.org
- 📖 Check `/SETUP_GUIDE.md` for detailed setup info
- 🐛 Review error messages in browser console
- 💡 Check `/public/images/README.md` for image requirements

---

## Quick Reference

```bash
# Install
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check code quality
npm run lint
```

---

🕉️ **Hindu Digest - Dharma • Bhakti • Sanskar** 🕉️

*Spreading the Light of Sanatana Dharma Worldwide*

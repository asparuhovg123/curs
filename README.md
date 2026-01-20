# CloudCommerce Landing Page

A modern, high-converting e-commerce product landing page built with React and Vite. Features a responsive design, smooth animations, and conversion-optimized sections.

## ✨ Features

- **Modern React 18+** with Vite for blazing-fast development
- **Fully Responsive** - Mobile-first design that works on all devices
- **7 Key Sections**: Hero, Social Proof, Features, Pricing, Testimonials, FAQ, and Final CTA
- **Conversion Optimized** - Following landing page best practices
- **CSS Modules** - Scoped styling with zero runtime overhead
- **Smooth Animations** - Hover effects and transitions
- **Accessible** - Keyboard navigation and ARIA labels
- **Performance Optimized** - Fast load times and smooth 60fps animations

## 🚀 Quick Start

### Prerequisites

Make sure you have Node.js installed (version 16 or higher recommended):

```bash
node --version
```

If you don't have Node.js, download it from [nodejs.org](https://nodejs.org/)

### Installation

1. Navigate to the project directory:
```bash
cd "c:\Users\kveli\OneDrive\Работен плот\curs"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

The page will automatically reload when you make changes to the code.

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy.

Preview the production build locally:

```bash
npm run preview
```

## 📂 Project Structure

```
curs/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── layout/      # Header & Footer
│   │   ├── sections/    # Page sections (Hero, Features, etc.)
│   │   └── ui/          # Reusable components (Button, Cards)
│   ├── data/            # Content data (features, pricing, etc.)
│   ├── styles/          # Global styles & design system
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies & scripts
└── vite.config.js       # Vite configuration
```

## 🎨 Customization Guide

### Changing Colors

Edit the CSS custom properties in `src/styles/globals.css`:

```css
:root {
  --color-primary: #2563eb;      /* Main brand color */
  --color-secondary: #7c3aed;    /* Secondary brand color */
  --color-accent: #f59e0b;       /* Accent/highlight color */
  /* ... */
}
```

### Updating Content

All content is stored in data files for easy editing:

- **Features**: `src/data/features.js` - Edit the 6 feature cards
- **Pricing**: `src/data/pricing.js` - Modify pricing tiers and features
- **Testimonials**: `src/data/testimonials.js` - Update customer reviews
- **FAQ**: `src/data/faq.js` - Change frequently asked questions

### Adding Images

Replace the placeholder hero image in `src/components/sections/Hero.jsx`:

```jsx
// Replace this placeholder div:
<div className={styles.placeholder}>
  <span className={styles.placeholderIcon}>🚀</span>
  <span className={styles.placeholderText}>Your Product Hero Image</span>
</div>

// With an actual image:
<img src="/images/hero-product.jpg" alt="Product" />
```

Add your images to the `public/images/` directory.

### Modifying Text

- **Hero Section**: Edit in `src/components/sections/Hero.jsx`
- **Company Name**: Search for "CloudCommerce" and replace globally
- **Logo**: Update in `src/components/layout/Header.jsx` and `Footer.jsx`

## 🎯 Section IDs for Navigation

The navigation smoothly scrolls to these sections:

- `#features` - Features section
- `#pricing` - Pricing section
- `#testimonials` - Testimonials section
- `#faq` - FAQ section

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and import your repository
3. Vercel will auto-detect Vite and deploy

### Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com) and create a new site
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add these scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.js` with your repo name:
```js
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

4. Deploy:
```bash
npm run deploy
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

All components are mobile-first and fully responsive.

## 🧪 Testing

### Manual Testing Checklist

- [ ] Hero section displays correctly
- [ ] Navigation scrolls smoothly to sections
- [ ] Mobile menu opens/closes properly
- [ ] All pricing cards display correctly
- [ ] FAQ accordion expands/collapses
- [ ] Testimonials render with avatars
- [ ] All CTAs are clickable
- [ ] Responsive on mobile, tablet, desktop
- [ ] No console errors

### Performance Testing

Run a Lighthouse audit in Chrome DevTools:

1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Click "Generate report"

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 90+

## 🛠️ Technologies Used

- **React 18.3** - UI library
- **Vite 5.4** - Build tool and dev server
- **React Icons 5.0** - Icon library
- **CSS Modules** - Scoped styling
- **Google Fonts (Inter)** - Typography

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

If you need help or have questions:

1. Check this README for setup instructions
2. Review the code comments in each component
3. Consult the [React documentation](https://react.dev)
4. Check [Vite documentation](https://vitejs.dev)

## 🎉 Credits

Built with love using modern web technologies. Perfect for launching your e-commerce product!

---

**Happy building! 🚀**

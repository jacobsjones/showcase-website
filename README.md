# Showcase Portfolio Website

A stunning, modern portfolio website with jaw-dropping visual effects, built with React, TypeScript, Three.js, and Framer Motion.

## ✨ Features

- **3D Hero Section** - Interactive Three.js scene with floating geometric shapes, particle fields, and animated rings
- **Glassmorphism Design** - Beautiful frosted glass cards with backdrop blur effects
- **3D Tilt Cards** - Interactive cards that respond to mouse movement with realistic 3D perspective
- **Parallax Scrolling** - Smooth parallax effects throughout the page
- **Animated Text Reveals** - GSAP-powered text animations and scroll-triggered effects
- **Dark Theme** - Sleek dark aesthetic with vibrant accent colors (cyan, purple, pink)
- **Responsive Design** - Fully responsive across all device sizes
- **Smooth Animations** - Framer Motion powered page transitions and micro-interactions

## 🛠 Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Three.js** - 3D graphics and WebGL rendering
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **Framer Motion** - Animation library for React
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional-grade animation library
- **Lucide React** - Beautiful icons

## 🎨 Design Highlights

### Color Palette
- **Background**: Deep space black (#0a0a0f)
- **Primary Accent**: Cyan (#00f5ff)
- **Secondary Accent**: Purple (#b829dd)
- **Tertiary Accent**: Pink (#ff2d95)

### Visual Effects
- Animated gradient orbs in background
- Glowing borders and hover effects
- Shimmer animations
- Pulse glow effects
- Gradient text
- Magnetic buttons
- Scroll-triggered reveals

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Animated navigation bar
│   ├── Background.tsx    # Animated background orbs
│   ├── Hero3D.tsx       # Three.js 3D scene
│   └── TiltCard.tsx     # 3D tilt effect wrapper
├── sections/
│   ├── Hero.tsx         # Hero section with 3D
│   ├── Features.tsx     # Services & projects
│   ├── About.tsx        # About with parallax
│   └── Contact.tsx      # Contact form
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles & Tailwind
```

## 🎯 Sections

1. **Hero** - Full-screen 3D experience with animated typography
2. **Features** - Glassmorphism cards with 3D tilt effects
3. **About** - Parallax scrolling with animated skill bars
4. **Contact** - Animated form with gradient button

## 🔧 Customization

### Changing Colors
Edit the color variables in `src/index.css`:

```css
--color-accent-cyan: #00f5ff;
--color-accent-purple: #b829dd;
--color-accent-pink: #ff2d95;
```

### Adding New Projects
Edit the `projects` array in `src/sections/Features.tsx`.

### Modifying 3D Scene
Edit `src/components/Hero3D.tsx` to customize the Three.js scene.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

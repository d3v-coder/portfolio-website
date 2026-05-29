

# Ezra Kipkoech | Personal Portfolio

![Portfolio Preview](https://portfolio-web-cacd.vercel.app/og-image.png) <!-- Add an actual screenshot later -->

A modern, responsive, and elegant personal portfolio website built to showcase my journey as a **Full Stack Developer**.

Live Demo: [https://portfolio-web-cacd.vercel.app](https://portfolio-web-cacd.vercel.app)

## ✨ Features

- **Modern Design** with smooth animations and dark/light mode support
- **Fully Responsive** – optimized for desktop, tablet, and mobile
- **Fast Performance** using Next.js App Router
- **TypeScript** for type safety
- **Beautiful UI** built with Tailwind CSS + shadcn/ui components
- **Project Showcase** with detailed descriptions and tech stacks
- **Skills Visualization** with progress indicators
- **Contact Form** ready for integration
- **SEO Optimized**

## 🛠️ Tech Stack

### Frontend
- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** + Radix UI primitives
- **Framer Motion** (for animations)

### Development Tools
- ESLint & Prettier
- PostCSS
- Vercel Deployment

```markdown
## 📁 Project Structure

```bash
portfolio-web/
├── app/                    # Next.js App Router
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/             # Reusable components
│   ├── ui/                 # shadcn/ui components
│   ├── hero.tsx
│   ├── about.tsx
│   ├── skills.tsx
│   ├── projects.tsx
│   ├── contact.tsx
│   └── header.tsx
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities and configurations
├── public/                 # Static assets (images, icons, etc.)
├── styles/                 # Additional styles
└── components.json         # shadcn/ui configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/TooEzra/portfolio-web.git
cd portfolio-web
```

2. **Install dependencies**
```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

3. **Run the development server**
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 🎨 Customization

### Personal Information
Edit the data in the respective components:
- `components/hero.tsx` – Name, title, and tagline
- `components/about.tsx` – About section content
- `components/skills.tsx` – Skills and proficiency levels
- `components/projects.tsx` – Your projects

### Styling
- Global styles: `app/globals.css`
- Component styles use Tailwind classes
- Theme configuration in `components/theme-provider.tsx`

### Adding New Projects
Add new projects in the `projects` array in `components/projects.tsx`.

## 📸 Screenshots

*(Add screenshots here later)*

### Desktop View
### Mobile View

## 🚀 Deployment

This project is optimized for **Vercel** (recommended):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FTooEzra%2Fportfolio-web)

You can also deploy on Netlify, Cloudflare Pages, or any static hosting platform.

## 📬 Contact

**Ezra Kipkoech**  
Full Stack Developer (MERN)  
📍 Eldoret, Kenya  
📧 ezraktoo09@gmail.com

## ⭐ Show Your Support

If you like this portfolio template, feel free to give it a star ⭐!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by Ezra Kipkoech**
```


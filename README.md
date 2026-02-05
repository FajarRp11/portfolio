# 🚀 Next.js Portfolio

<p align="center">
  A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#project-structure"><strong>Project Structure</strong></a>
</p>

<br/>

## ✨ Features

- **🎨 Modern UI/UX**: Clean and professional design with smooth animations powered by Framer Motion
- **🌓 Dark Mode**: Built-in dark/light theme support with next-themes
- **📱 Fully Responsive**: Optimized for all screen sizes and devices
- **⚡ Performance**: Built with Next.js 15 and React 19 for optimal performance
- **🎯 Sections**:
  - Hero section with introduction
  - Skills showcase
  - Services/offerings
  - Projects portfolio
  - Work experience timeline
  - Education background
- **🔐 Authentication**: Supabase-powered authentication system
- **🎭 Interactive Components**: Built with Radix UI primitives and shadcn/ui
- **🖼️ Type-safe**: Written in TypeScript for better developer experience

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Backend/Auth**: [Supabase](https://supabase.com/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd next-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory and add your Supabase credentials:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
   ```

   You can find these values in your [Supabase project settings](https://supabase.com/dashboard/project/_/settings/api).

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📁 Project Structure

```
next-portfolio/
├── app/
│   ├── (public)/          # Public pages (portfolio)
│   ├── auth/              # Authentication pages
│   ├── protected/         # Protected pages (admin)
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/
│   └── public/            # Public-facing components
│       ├── hero.tsx       # Hero section
│       ├── skills.tsx     # Skills section
│       ├── services.tsx   # Services section
│       ├── projects.tsx   # Projects showcase
│       ├── experience.tsx # Work experience
│       └── education.tsx  # Education background
├── lib/                   # Utility functions and configurations
└── public/                # Static assets
```

## 🎨 Customization

### Update Content

Edit the component files in `components/public/` to update your:

- Personal information
- Skills and expertise
- Services you offer
- Project portfolio
- Work experience
- Educational background

### Styling

The project uses Tailwind CSS for styling. Customize the theme in `tailwind.config.ts` and add global styles in `app/globals.css`.

## 📦 Build for Production

Build the optimized production bundle:

```bash
npm run build
npm start
```

## 🚢 Deployment

Deploy easily to [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or deploy to any platform that supports Next.js applications.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ using Next.js
</p>
